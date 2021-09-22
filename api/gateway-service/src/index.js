// core
const { readFileSync } = require('fs');
const { join } = require('path');

// modules
const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// local
const SUPERGRAPH_PATH = join(__dirname, './supergraph.graphql')
const supergraphSdl = readFileSync(SUPERGRAPH_PATH).toString();

const { PORT = 4000 } = process.env;

// Initialize an ApolloGateway instance and pass it
// the supergraph schema
const gateway = new ApolloGateway({
  supergraphSdl,
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground,
  ],
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
