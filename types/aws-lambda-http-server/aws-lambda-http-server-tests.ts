import awsLambdaHttpServer = require('aws-lambda-http-server');
import * as express from 'express';
export const proxy = awsLambdaHttpServer;
const app = express();
