import mongoose from "mongoose";

interface propertyData {
  title: string;
  description: string;
  propertyType: string;
  location: string;
  price: number;
  photo: string;
  creator: [];
}

interface ipropertyData extends propertyData, mongoose.Document {}

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  propertyType: {
    type: String,
  },
  location: {
    type: String,
  },
  price: {
    type: Number,
  },
  photo: {
    type: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "property",
  },
});

const propertyModel = mongoose.model<ipropertyData>("property", propertySchema);

export default propertyModel;
