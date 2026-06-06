import { CloudFormationCustomResourceEvent, Context } from "aws-lambda";

/**
 * Response status indicating the custom resource operation succeeded.
 */
export const SUCCESS: "SUCCESS";

/**
 * Response status indicating the custom resource operation failed.
 * CloudFormation will roll back the stack if FAILED is returned during create or update.
 */
export const FAILED: "FAILED";

/**
 * Sends a response to the CloudFormation pre-signed S3 URL to signal the result
 * of a custom resource operation. Must be called in every code path of a Lambda-backed
 * custom resource — if not called, the CloudFormation stack will hang until it times out.
 *
 * @param event - The CloudFormation custom resource event containing the ResponseURL,
 *   StackId, RequestId, and LogicalResourceId.
 * @param context - The Lambda context object, used for the log stream name and signaling completion.
 * @param responseStatus - Whether the operation succeeded or failed. Use `SUCCESS` or `FAILED`.
 * @param responseData - Optional key-value data to return to CloudFormation,
 *   accessible via `Fn::GetAtt` in the template.
 * @param physicalResourceId - The unique identifier of the custom resource.
 *   Defaults to the Lambda log stream name if not provided.
 *   WARNING: changing this value on an update will cause CloudFormation to delete the old resource.
 * @param noEcho - If `true`, masks the response data from being displayed in CloudFormation outputs.
 *   Defaults to `false`.
 */
export function send(
    event: CloudFormationCustomResourceEvent,
    context: Context,
    responseStatus: "SUCCESS" | "FAILED",
    responseData?: Record<string, unknown>,
    physicalResourceId?: string,
    noEcho?: boolean,
): Promise<void>;
