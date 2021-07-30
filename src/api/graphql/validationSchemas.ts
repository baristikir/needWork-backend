import { Joi } from 'celebrate';

export const createWorkspaceSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  openingHours: Joi.array(),
});
