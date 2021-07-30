import { Container } from 'typedi';
import WorkspaceService from '../../../../services/workspace';
import { MutationResolvers } from '../../generated/types';
import { createWorkspaceSchema } from '../../validationSchemas';
import validate from '../validate';

export const createWorkspace: MutationResolvers['createWorkspace'] = async (
  parent,
  { name, category, address, city, openingHours, creator },
) => {
  await validate(createWorkspaceSchema, { name, category, address, city, openingHours, creator });

  const workspaceInstance = Container.get(WorkspaceService);
  const workspaceRecord = await workspaceInstance.createWorkspace({
    name,
    category,
    address,
    city,
    openingHours,
  });

  return workspaceRecord;
};
