import mongoose from 'mongoose';
import { IBusinessUser } from '../interfaces/IBusinessUser';

const BusinessUser = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },

    phoneNumber: {
      type: String,
    },

    prefix: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IBusinessUser & mongoose.Document>('BusinessUser', BusinessUser);
