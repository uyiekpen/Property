/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import { Request, Response } from "express";
import userModel from "../data/Models/user";

interface userData {
  name: string;
  email: string;
  avatar: string;
  allproperties: [];
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const getdata = await userModel.find({});
    return res.status(200).json({
      message: "user record found",
      data: getdata,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const { name, email, avatar } = req.body;

    const getdata: userData = await userModel.create({
      name,
      email,
      avatar,
    });

    const userExist = await userModel.findOne({ email });
    if (userExist)
      return res.status(200).json({
        measage: "user exist",
        data: userExist,
      });
    return res.status(200).json({
      message: "user record found",
      data: getdata,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const getUserInfoByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const getdata = await userModel
      .findOne({ _id: id })
      .populate("allproperties");
    if (getdata) {
      return res.status(200).json({
        message: "user record found",
        data: getdata,
      });
    } else {
      return res.status(404).json("user not found");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};
