import { Document, Model } from 'mongoose';
import { IBusinessUser } from '../../interfaces/IBusinessUser';
import { IUser } from '../../interfaces/IUser';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type BusinessUserModel = Model<IBusinessUser & Document>;
  }
}
