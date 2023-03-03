import { Response, Request } from "express";
import mongoose from "mongoose";
import propertyModel from "../data/Models/property";
import userModel from "../data/Models/user";
import cloudinary from "../utils/cloudinary";
require("../utils/cloudinary");

interface propertyData {
  title: string;
  description: string;
  propertyType: string;
  location: string;
  price: number;
  photo: string;
  creator: {};
  _id: string;
}

export const getAllProperties = async (req: Request, res: Response) => {};

export const createProperty = async (req: Request, res: Response) => {
  const { title, description, propertyType, location, price, photo, email } =
    req.body;

  //start a new session
  const session = await mongoose.startSession();
  session.startTransaction();

  const user = await userModel.findOne({ email }).session(session);

  if (!user) throw new Error("User not found");

  const photoUrl = await cloudinary.uploader.upload(photo);
  try {
    const newProperty: propertyData = await propertyModel.create({
      title,
      description,
      propertyType,
      location,
      price,
      photo: photoUrl.url,
      creator: user.id,
    });

    user?.allproperties?.push(new mongoose.Types(newProperty?._id));

    user.save();
  } catch (error) {}
};

export const getPropertyDetails = async (req: Request, res: Response) => {};

export const updateProperty = async (req: Request, res: Response) => {};

export const deleteProperty = async (req: Request, res: Response) => {};
