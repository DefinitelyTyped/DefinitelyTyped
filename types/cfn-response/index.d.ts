// Type definitions for cfn-response 1.0
// Project: https://github.com/LukeMizuhashi/cfn-response
// Definitions by: Ivo Murrell <https://github.com/ivoisbelongtous>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { CloudFormationCustomResourceEvent, Context } from "aws-lambda";

export type ResponseStatus = "SUCCESS" | "FAILED";
export const SUCCESS: ResponseStatus;
export const FAILED: ResponseStatus;

export function send(
    event: CloudFormationCustomResourceEvent,
    context: Context,
    responseStatus: ResponseStatus,
    responseData?: object,
    physicalResourceId?: string
): void;
