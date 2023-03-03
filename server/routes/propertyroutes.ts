import {
  getPropertyDetails,
  getAllProperties,
  createProperty,
  deleteProperty,
  updateProperty,
} from "../controller/property.controller";

import { Router } from "express";

const router = Router();

router.route("/").get(getAllProperties);
router.route("/:id").get(getPropertyDetails);
router.route("/").post(createProperty);
router.route("/").patch(updateProperty);
router.route("/").delete(deleteProperty);

export default router;
