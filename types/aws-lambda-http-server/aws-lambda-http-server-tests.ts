import awsLambdaHttpServer = require("aws-lambda-http-server");
import express from "express";
export const proxy = awsLambdaHttpServer;
const app = express();
