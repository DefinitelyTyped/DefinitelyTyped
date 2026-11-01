import type { CloudFrontEvent, CloudFrontRequest, CloudFrontResultResponse } from "../common/cloudfront";
import type { AsyncHandler, Callback, Handler } from "../handler";

/**
 * {@link CloudFrontRequestAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type CloudFrontRequestHandler = Handler<CloudFrontRequestEvent, CloudFrontRequestResult>;
export type CloudFrontRequestAsyncHandler = AsyncHandler<CloudFrontRequestEvent, CloudFrontRequestResult>;
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
