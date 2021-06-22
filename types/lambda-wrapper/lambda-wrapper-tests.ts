// Official exampeles, lightly adapted
import lambdaWrapper = require('lambda-wrapper');
import { Handler } from 'aws-lambda';

declare const handler: Handler<{ key1: string; key2: string }, { resultProp: any }>;
let lambda = lambdaWrapper.wrap({ handler });

lambda = lambdaWrapper.wrap({
    region: 'eu-west-1',
    lambdaFunction: 'myFunctionName',
});

const event = { key1: 'val1', key2: 'val2' };
lambda.run(event, (err, data) => {
    if (err) {
        // ... handle error
    }
    data && data.resultProp;
});

lambda.runHandler(event, { memoryLimitInMB: '1000' }, (err, data) => {
    if (err) {
        // ... handle error
    }
    // ... process data returned by the Lambda function
    data && data.resultProp;
});

// Other tests

lambda = lambdaWrapper.wrap({ fooHandler: handler }, { handler: 'fooHandler' });
lambda.run(event).then(data => data.resultProp);
