/* @flow */
import restify from 'restify';
import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify';
import { makeExecutableSchema } from 'graphql-tools';
import types from './src/schemas';
import resolvers from './src/resolvers';

const PORT = 3001;

const server = restify.createServer({
  title: 'One task',
});
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
const graphQLOptions = {
  schema: makeExecutableSchema({
    typeDefs: types,
    resolvers,
  }),
};
server.post('/api', graphqlRestify(graphQLOptions));
server.get('/api', graphqlRestify(graphQLOptions));
server.get('/graph', graphiqlRestify({
  endpointURL: '/api',
}));
server.listen(process.env.PORT || 3001, () => console.log(`Listening on ${PORT}`));
