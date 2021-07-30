import { Application, Request, Response } from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';

export const apolloServer = (app: Application) => {
  app.use(graphqlUploadExpress({ maxFiles: 1, maxFileSize: 1000000 }));

  const resolvers = {
    Query: {
      hello: () => 'Hello World',
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: {},
  });
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });
};
