# Numismatics API

> supporting web and mobile clients as well as admin operations

## Development

Most local development can be done via each subgraph or service. However there are also times you need / want to test out functionality of the graph in it's entirety. In order to to test the whole graph locally it is possible to run all services via docker.

To run entire graph:

```
cd ./gateway-service
# compose the supergraph
npm run compose
cd ..
# start all the subgraphs; then the gateway 
docker-compose up
```

To run a subgraph by itself:

```
cd ./user-service/
npm run dev
```