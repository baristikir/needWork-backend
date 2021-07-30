import { Document, Model } from 'mongoose';
import { IBusinessUser } from '../../interfaces/IBusinessUser';
import { IUser } from '../../interfaces/IUser';

type ReadStream = import('fs').ReadStream;
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

type ResolverTypeWrapper<T> = Promise<T> | T;

interface GraphQLFileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream(option?: { encoding?: string; highWaterMark?: string }): ReadStream;
}
