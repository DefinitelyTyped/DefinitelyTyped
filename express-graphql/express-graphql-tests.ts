/// <reference path="./express-graphql.d.ts" />


var express = require("../express");
var graphqlHTTP = require("express-graphql");
var app = express();

var schema = {};

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));
