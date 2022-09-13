import { CloudFrontEvent, CloudFrontRequest, CloudFrontResponse, CloudFrontResultResponse } from "../common/cloudfront";
import { Callback, Handler } from "../handler";

export type CloudFrontResponseHandler = Handler<CloudFrontResponseEvent, CloudFrontResponseResult>;
export type CloudFrontResponseCallback = Callback<CloudFrontResponseResult>;

/**
 * CloudFront viewer response or origin response event
 *
 * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-response
 */
export interface CloudFrontResponseEvent {
    Records: Array<{
        cf: CloudFrontEvent & {
            readonly request: Pick<CloudFrontRequest, Exclude<keyof CloudFrontRequest, 'body'>>;
            response: CloudFrontResponse;
        };
    }>;
}

export type CloudFrontResponseResult = undefined | null | CloudFrontResultResponse;
