// Requires
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { mongoose } = require('./db')
const pkg = require('./package.json')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

// Definition use
app.get("/", (req, res) => res.json({author: pkg.author, project: pkg.name, version: pkg.version, description: pkg.description}));

// Definicion del servidor
async function startApp() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });
    app.use("*", (req, res) => res.status(404).send("Not Found"));

    app.listen(port, () => {
        console.log(`Server on port ${port}`);
    });
}

startApp();