import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env.S3_CLIENT_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

const getObjectURL = async (key) => {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key, // File key (path to the file in the bucket)
  });
  try {
    const url = await getSignedUrl(s3Client, command);
    return url;
  } catch (err) {
    console.error("Error generating signed URL:", err);
    throw err;
  }
};

const putObjectURL = async (fileName, fileType, expiryTime) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: fileName, // File name provided by user
    ContentType: fileType, // Content-Type (e.g., 'image/jpeg', 'application/pdf')
    ACL: "private",
  };

  try {
    const command = new PutObjectCommand(params);
    const uploadUrl = await getSignedUrl(s3Client, command, {
      expiresIn: expiryTime,
    });

    return uploadUrl;
  } catch (err) {
    console.error("Error generating presigned URL:", err);
    return null;
  }
};

export { 
    getObjectURL,
    putObjectURL,
};
