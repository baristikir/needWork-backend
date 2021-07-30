import { Schema, Document, Types, model } from 'mongoose';

export interface IBusinessUser extends Document {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  prefix: string;
}

const BusinessUserSchema: Schema<IBusinessUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      index: true,
      required: function (this: any) {
        return this.provider === 'email' ? true : false;
      },
    },

    phoneNumber: {
      type: String,
    },

    prefix: {
      type: String,
    },

    provider: {
      type: String,
      requried: true,
      default: 'email',
    },
  },
  { timestamps: true },
);

BusinessUserSchema.methods.toJSON = function (): any {
  const businessUserObject = this.toObject();
  businessUserObject.id = businessUserObject._id;
  delete businessUserObject['__v'];
  return businessUserObject;
};

export default model<IBusinessUser>('BusinessUser', BusinessUserSchema);
