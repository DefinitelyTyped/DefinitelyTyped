import { CloudFrontEvent, CloudFrontRequest, CloudFrontResponse, CloudFrontResultResponse } from "../common/cloudfront";
import { AsyncHandler, Callback, Handler } from "../handler";

/**
 * {@link CloudFrontResponseAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type CloudFrontResponseHandler = Handler<CloudFrontResponseEvent, CloudFrontResponseResult>;
export type CloudFrontResponseAsyncHandler = AsyncHandler<CloudFrontResponseEvent, CloudFrontResponseResult>;
export type CloudFrontResponseCallback = Callback<CloudFrontResponseResult>;

export interface CloudFrontResponseEventRecord {
    cf: CloudFrontEvent & {
        readonly request: Pick<CloudFrontRequest, Exclude<keyof CloudFrontRequest, "body">>;
        response: CloudFrontResponse;
    };
}

/**
 * CloudFront viewer response or origin response event
 *
 * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-response
 */
export interface CloudFrontResponseEvent {
    Records: CloudFrontResponseEventRecord[];
}

export type CloudFrontResponseResult = undefined | null | CloudFrontResultResponse;
