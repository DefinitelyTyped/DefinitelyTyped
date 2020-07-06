import * as AWS from 'aws-sdk';
import { FailClosed, FailOpen } from 'dynamodb-lock-client';

const failClosedLock = new FailClosed(); // $ExpectError
const failOpenLock = new FailOpen(); // $ExpectError

// $ExpectType FailClosed
new FailClosed({
    dynamodb: new AWS.DynamoDB.DocumentClient(),
    lockTable: 'test',
    partitionKey: 'test',
    acquirePeriodMs: 100,
});

// $ExpectType FailOpen
new FailOpen({
    dynamodb: new AWS.DynamoDB.DocumentClient(),
    lockTable: 'test',
    partitionKey: 'test',
    leaseDurationMs: 100,
});
