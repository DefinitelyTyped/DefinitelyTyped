import { CloudFormationCustomResourceEvent } from './cloudformation-custom-resource';
import { Handler, Callback } from '../handler';

// The CDK docs only specify 'important' properties, but in reality the incoming event
// to the Lambda matches that of a traditional custom resource.
// This includes the ResponseURL property which should not be used as the framework
// itself will deal with delivering responses.
export type CdkCustomResourceEvent = CloudFormationCustomResourceEvent & {
    /**
     * **This URL should not be used.** The CDK Provider Framework will call this URL
     * automatically based on the response produced by the Lambda handler.
     */
    ResponseURL: string;
};

/**
 * A custom resource based on the AWS CDK custom resource Provider Framework.
 * This is not to be confused with traditional CloudFormation custom resources.
 * @link https://docs.aws.amazon.com/cdk/api/latest/docs/custom-resources-readme.html#handling-lifecycle-events-onevent
 */
export type CdkCustomResourceHandler = Handler<CdkCustomResourceEvent, CdkCustomResourceResponse>;
export type CdkCustomResourceCallback = Callback<CdkCustomResourceResponse>;

export interface CdkCustomResourceResponse {
    PhysicalResourceId?: string;
    Data?:
        | {
              [Key: string]: any;
          }
        | undefined;
    // Any extra properties will be provided to the isComplete handler for asynchronous resources.
    [Key: string]: any;
}

// IsComplete events will contain all normal request fields, as well as those returned from
// the initial onEvent handler.
export type CdkCustomResourceIsCompleteEvent = CdkCustomResourceEvent & CdkCustomResourceResponse;

export type CdkCustomResourceIsCompleteResponse =
    | CdkCustomResourceIsCompleteResponseSuccess
    | CdkCustomResourceIsCompleteResponseWaiting;

export interface CdkCustomResourceIsCompleteResponseSuccess {
    IsComplete: true;
    /**
     * This will be merged with the `Data` property of the onEvent handler's response.
     */
    Data?:
        | {
              [Key: string]: any;
          }
        | undefined;
}

export interface CdkCustomResourceIsCompleteResponseWaiting {
    IsComplete: false;
}

/**
 * An asynchronous custom resource handler.
 * @link https://docs.aws.amazon.com/cdk/api/latest/docs/custom-resources-readme.html#asynchronous-providers-iscomplete
 */
export type CdkCustomResourceIsCompleteHandler = Handler<
    CdkCustomResourceIsCompleteEvent,
    CdkCustomResourceIsCompleteResponse
>;
export type CdkCustomResourceIsCompleteCallback = Callback<CdkCustomResourceIsCompleteResponse>;
