import dotenv from "dotenv";
import cloud, { v2 } from "cloudinary";

dotenv.config();

const cloudinary: typeof v2 = cloud.v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
