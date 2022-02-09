// Type definitions for cfn-response-promise 1.1
// Project: https://github.com/ispyinternet/cfn-response-promise
// Definitions by: Artur Androsovych <https://github.com/arturovt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { CloudFormationCustomResourceEvent, Context } from 'aws-lambda';

export const SUCCESS: 'SUCCESS';
export const FAILED: 'FAILED';

export function send(
  event: CloudFormationCustomResourceEvent,
  context: Context,
  responseStatus: 'SUCCESS' | 'FAILED',
  responseData?: object,
  physicalResourceId?: string,
  noEcho?: boolean
): Promise<void>;
