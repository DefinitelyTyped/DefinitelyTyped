import { CloudFormationCustomResourceEvent, Context } from "aws-lambda";

export const SUCCESS: "SUCCESS";
export const FAILED: "FAILED";

export function send(
    event: CloudFormationCustomResourceEvent,
    context: Context,
    responseStatus: "SUCCESS" | "FAILED",
    responseData?: object,
    physicalResourceId?: string,
    noEcho?: boolean,
): Promise<void>;
