import response = require('cfn-response-promise');
import { CloudFormationCustomResourceEvent, Context } from 'aws-lambda';

declare const event: CloudFormationCustomResourceEvent;
declare const context: Context;

// $ExpectType Promise<void>
response.send(event, context, response.SUCCESS, { sample: 123 }, 'abc', true);
// $ExpectType Promise<void>
response.send(event, context, 'FAILED');
// @ts-expect-error
response.send(event, context, '');
