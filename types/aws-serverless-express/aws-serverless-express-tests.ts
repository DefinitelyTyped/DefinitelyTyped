import * as awsServerlessExpress from 'aws-serverless-express';
import express = require('express');
import { eventContext } from 'aws-serverless-express/middleware';

declare let mockEvent: AWSLambda.APIGatewayEvent;

const mockContext = {
    callbackWaitsForEmptyEventLoop: true,
    functionName: 'testFunction',
    functionVersion: '1',
    invokedFunctionArn: 'arn',
    memoryLimitInMB: '128',
    awsRequestId: 'id',
    logGroupName: 'group',
    logStreamName: 'stream',
    getRemainingTimeInMillis: () => 2000,
    done: () => false,
    fail: (error: any) => false,
    succeed: (message: string) => false
};

const app = express();
app.use(eventContext());
app.get('/', (req, res) => {
  if (req.apiGateway) {
    req.apiGateway.event;
    req.apiGateway.context;
  }
});

const server = awsServerlessExpress.createServer(app, () => {}, []);

awsServerlessExpress.proxy(server, mockEvent, mockContext);
awsServerlessExpress.proxy(server, mockEvent, mockContext, 'CALLBACK', () => {});
awsServerlessExpress.proxy(server, mockEvent, mockContext, 'CONTEXT_SUCCEED');
awsServerlessExpress.proxy(server, mockEvent, mockContext, 'PROMISE').promise.then((response: awsServerlessExpress.Response) => {}).catch(err => {});
