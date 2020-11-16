import { CloudFrontEvent, CloudFrontRequest, CloudFrontResultResponse } from "../common/cloudfront";
import { Handler, Callback } from "../handler";

export type CloudFrontRequestHandler = Handler<CloudFrontRequestEvent, CloudFrontRequestResult>;
export type CloudFrontRequestCallback = Callback<CloudFrontRequestResult>;

/**
 * CloudFront viewer request or origin request event
 *
 * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html#lambda-event-structure-request
 */
export interface CloudFrontRequestEvent {
    Records: Array<{
        cf: CloudFrontEvent & {
            request: CloudFrontRequest;
        };
    }>;
}

export type CloudFrontRequestResult = undefined | null | CloudFrontResultResponse | CloudFrontRequest;
