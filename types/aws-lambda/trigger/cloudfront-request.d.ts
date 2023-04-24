import type { CloudFrontEvent, CloudFrontRequest, CloudFrontResultResponse } from "../common/cloudfront";
import type { Handler, Callback } from "../handler";

export type CloudFrontRequestHandler = Handler<CloudFrontRequestEvent, CloudFrontRequestResult>;
export type CloudFrontRequestCallback = Callback<CloudFrontRequestResult>;

export interface CloudFrontRequestEventRecord {
    cf: CloudFrontEvent & {
        request: CloudFrontRequest;
    };
}

/**
 * CloudFront viewer request or origin request event
 *
 * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-request
 */
export interface CloudFrontRequestEvent {
    Records: CloudFrontRequestEventRecord[];
}

export type CloudFrontRequestResult = undefined | null | CloudFrontResultResponse | CloudFrontRequest;
