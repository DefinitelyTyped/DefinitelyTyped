import { lambdaWrapper, getWrapper } from 'serverless-jest-plugin';

let lambda = lambdaWrapper.wrap({
    region: 'eu-west-1',
    lambdaFunction: 'myFunctionName',
});

lambda = getWrapper('foo', 'foo/bar.js', 'fooHandler');
