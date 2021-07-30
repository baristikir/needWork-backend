import { makeRemoteExecutableSchema } from 'apollo-server-express';
import typeDefs from '../generated/typeDefs';

export const getSchema = () => {
  return makeRemoteExecutableSchema({
    typeDefs,
  });
};
