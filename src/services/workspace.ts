import { Model } from 'mongoose';
import { Service, Inject } from 'typedi';
import { IWorkspace, IWorkspaceInputDTO } from '../interfaces/IWorkspace';
import CustomError from '../utils/error';

@Service()
export default class WorkspaceService {
  constructor(@Inject('workspaceModel') private workspaceModel: Model<IWorkspace>) {}

  async createWorkspace({ name, category, address, city, openingHours }: IWorkspaceInputDTO) {
    const workspace = await this.workspaceModel.create({
      name: name,
      category: category,
      address: address,
      city: city,
      openingHours: openingHours,
    });

    return workspace;
  }

  async updateWorkspace({ name, category, address, city, openingHours }: IWorkspaceInputDTO, id: string) {
    const workspaceRecord = await this.workspaceModel.findById(id);

    if (!workspaceRecord) {
      throw new CustomError('No Workspace with that ID', 404);
    }

    workspaceRecord.name = name;
    workspaceRecord.category = category;
    workspaceRecord.address = address;
    workspaceRecord.city = city;
    workspaceRecord.openingHours = openingHours;
    workspaceRecord.save();

    return workspaceRecord;
  }
}
