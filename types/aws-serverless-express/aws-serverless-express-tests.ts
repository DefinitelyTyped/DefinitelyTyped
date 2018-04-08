import * as awsServerlessExpress from 'aws-serverless-express';
import express = require('express');
import { eventContext } from 'aws-serverless-express/middleware';

const app = express();
app.use(eventContext());

const server = awsServerlessExpress.createServer(app, () => {}, []);

const mockEvent = {
    key: 'value'
};

const mockContext = {
    callbackWaitsForEmptyEventLoop: true,
    functionName: 'testFunction',
    functionVersion: '1',
    invokedFunctionArn: 'arn',
    memoryLimitInMB: 128,
    awsRequestId: 'id',
    logGroupName: 'group',
    logStreamName: 'stream',
    getRemainingTimeInMillis: () => 2000,
    done: () => false,
    fail: (error: any) => false,
    succeed: (message: string) => false
};

awsServerlessExpress.proxy(server, mockEvent, mockContext);
