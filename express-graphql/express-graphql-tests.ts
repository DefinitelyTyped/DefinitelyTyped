/// <reference path="./express-graphql.d.ts" />
/// <reference path="../express/express.d.ts" />

var express = require("express");
var graphqlHTTP = require("express-graphql");
var app = express();

var schema = {};

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));
