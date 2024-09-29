import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password required']
        },
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true }
)

userSchema.pre("save", async function (next){
    if (this.password && this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    if (!this.password) {
        throw new Error("Password not set for this user.");
    }
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    const token = jwt.sign(
        {
            _id: this._id,
            email: this.email,
            isDoctor: this.isDoctor
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
    return token;
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            isDoctor: this.isDoctor
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema)


