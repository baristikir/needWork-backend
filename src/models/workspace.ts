import { Document, Schema, Types, model } from 'mongoose';

export interface IWorkspace extends Document {
  id: string;
  owner: object;
  name: string;
  category: string;
  address: string;
  city: string;
  openingHours: number[];
  lastChanged: Date;
}

const WorkspaceSchema: Schema<IWorkspace> = new Schema<IWorkspace>(
  {
    owner: {
      type: Types.ObjectId,
      required: true,
      ref: 'BusinessUser',
    },

    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },

    category: {
      type: String,
      required: [true, 'Please enter a category based on your workspace'],
    },

    address: {
      type: String,
      required: [true, 'Please enter a address of your location'],
    },

    city: {
      type: String,
      required: [true, 'Please select your location'],
    },

    openingHours: {
      type: [Number],
    },

    lastChanged: {
      type: Date,
      required: true,
      deefault: Date.now,
    },
  },
  { timestamps: true },
);

WorkspaceSchema.index(
  { name: 'text' },
  {
    name: 'WorkspaceTextIndices',
    default_language: 'german',
  },
);

WorkspaceSchema.methods.toJSON = function (): any {
  const workspaceObject = this.toObject();
  workspaceObject.id = workspaceObject._id;
  delete workspaceObject['__v'];
  return workspaceObject;
};

export default model<IWorkspace>('Workspace', WorkspaceSchema);
