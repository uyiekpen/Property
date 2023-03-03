import mongoose from "mongoose";

interface userData {
  name: string;
  email: string;
  avatar: string;
  allproperties: [];
}

interface iuserdata extends userData, mongoose.Document {}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  avatar: {
    type: String,
  },
  allproperties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "property",
    },
  ],
});

const userModel = mongoose.model<iuserdata>("user", userSchema);

export default userModel;
