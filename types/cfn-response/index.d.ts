// Type definitions for cfn-response 1.0
// Project: https://github.com/LukeMizuhashi/cfn-response
// Definitions by: Artur Androsovych <https://github.com/arturovt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { CloudFormationCustomResourceEvent, Context } from 'aws-lambda';

export const SUCCESS: 'SUCCESS';
export const FAILED: 'FAILED';
export type ResponseStatus = typeof SUCCESS | typeof FAILED;

export function send(
    event: CloudFormationCustomResourceEvent,
    context: Context,
    responseStatus: ResponseStatus,
    responseData?: object,
    physicalResourceId?: string,
    noEcho?: boolean,
): void;
