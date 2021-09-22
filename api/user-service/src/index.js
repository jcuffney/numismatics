// core
const { readFileSync } = require('fs');
const { join } = require('path');

// modules
const { ApolloServer, gql } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/federation');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// local
const SCHEMA_PATH = join(__dirname, './schema.graphql')
const schema = readFileSync(SCHEMA_PATH).toString();
const resolvers = require('./resolvers');

const { PORT = 4001 } = process.env;

const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs: gql(schema), resolvers }]),
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground,
  ],
});

server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});