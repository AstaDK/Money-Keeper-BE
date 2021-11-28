import { UserI } from "interfaces/user.interface";
import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema<UserI>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
const UserModel = mongoose.model<UserI & mongoose.Document>('User', UserSchema);
export default UserModel;