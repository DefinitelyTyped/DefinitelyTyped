import { CloudFormationCustomResourceEvent, Context } from "aws-lambda";

export const SUCCESS: "SUCCESS";
export const FAILED: "FAILED";
export type ResponseStatus = typeof SUCCESS | typeof FAILED;

export function send(
    event: CloudFormationCustomResourceEvent,
    context: Context,
    responseStatus: ResponseStatus,
    responseData?: object,
    physicalResourceId?: string,
    noEcho?: boolean,
): void;
