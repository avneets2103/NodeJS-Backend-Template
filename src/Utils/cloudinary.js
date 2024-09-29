import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY, 
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        // upload file on cloudinary
        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        console.log("File uploaded successfully on cloudinary", res.url);
        fs.unlinkSync(localFilePath);
        return res;
    }
    catch (err){
        fs.unlinkSync(localFilePath); // remove locally saved temprory file
        console.log("Cloudinary upload failed" + err.message);
        return null;
    }
}

export {uploadOnCloudinary};