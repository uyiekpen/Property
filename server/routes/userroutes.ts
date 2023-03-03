import {
  getUser,
  getUserInfoByID,
  CreateUser,
} from "../controller/usercontroller";

import { Router } from "express";

const router = Router();

router.route("/").get(getUser);
router.route("/:id").get(getUserInfoByID);
router.route("/").post(CreateUser);

export default router;
