import { Router } from 'express';
import auth from './rest/routes/auth';
import user from './rest/routes/user';
import agendash from './rest/routes/agendash';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  user(app);
  agendash(app);

  return app;
};
