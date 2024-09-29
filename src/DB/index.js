import mongoose from "mongoose"
import { DBName } from "../constants.js"

const connectDB = async () => {
    try {
        const connInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`);
        console.log(connInstance.connection.host);
    } catch (error) {
        console.log("ERROR:", error);
        throw error;
    }
}

export {connectDB}