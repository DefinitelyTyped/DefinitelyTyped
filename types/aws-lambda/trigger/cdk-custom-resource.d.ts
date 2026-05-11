import { Callback, Handler } from "../handler";
import {
    CloudFormationCustomResourceEvent,
    CloudFormationCustomResourceResourcePropertiesCommon,
} from "./cloudformation-custom-resource";

/**
 * Request event sent to the Lambda `OnEvent` handler for a CDK Custom Resource
 * Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources-readme.html#handling-lifecycle-events-onevent
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 * @template TOldResourceProperties User-defined input properties passed to the Custom Resource as part of an `Update` invocation
 */
export type CdkCustomResourceEvent<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TOldResourceProperties = TResourceProperties,
> =
    & CloudFormationCustomResourceEvent<TResourceProperties, TOldResourceProperties>
    & {
        /**
         * The response URL identifies a presigned S3 bucket that receives responses from the custom resource provider to AWS CloudFormation.
         *
         * **This URL should not be used.**
         * The CDK Provider Framework will call this URL automatically based on the response produced by the Lambda handler.
         */
        ResponseURL: string;
    };

/**
 * Lambda handler function for the `OnEvent` CDK Custom Resource
 * Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources-readme.html#handling-lifecycle-events-onevent
 *
 * NOTE: this is not to be confused with traditional CloudFormation custom resources.
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 * @template TData User-defined output properties that are retuned from any invocation
 * @template TOldResourceProperties User-defined input properties passed to the Custom Resource as part of an `Update` invocation
 */
export type CdkCustomResourceHandler<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TData extends Record<string, any> = Record<string, any>,
    TOldResourceProperties = TResourceProperties,
> = Handler<CdkCustomResourceEvent<TResourceProperties, TOldResourceProperties>, CdkCustomResourceResponse<TData>>;

/**
 * Lambda `OnEvent` callback function for a CDK Custom Resource
 * @template TData User-defined output properties that are retuned from any invocation
 */
export type CdkCustomResourceCallback<TData extends Record<string, any>> = Callback<CdkCustomResourceResponse<TData>>;

/**
 * Response from the `OnEvent` Lambda handler for a CDK Custom Resource
 * Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources-readme.html#handling-lifecycle-events-onevent
 * @template TData User-defined output properties that are retuned from any invocation
 */
export interface CdkCustomResourceResponse<TData extends Record<string, any> = Record<string, any>> {
    /**
     * This value should be an identifier unique to the custom resource vendor, and can be up to 1 KB in size. The value must be a non-empty string and must be identical for all responses for the same resource.
     * The value returned for a `PhysicalResourceId` can change custom resource update operations. If the value returned is the same, it is considered a normal update. If the value returned is different, AWS CloudFormation recognizes the update as a replacement and sends a delete request to the old resource.
     *
     * If omitted for `Create` events, the event's `RequestId` will be used.
     * For `Update`, the current physical ID will be used. If a different value is returned, CloudFormation will follow with a subsequent `Delete` for the previous ID (resource replacement).
     * For `Delete`, it will always return the current physical resource ID, and if the user returns a different one, an error will occur.
     */
    PhysicalResourceId?: string;

    /**
     * The custom resource provider-defined name-value pairs to send with the response. You can access the values provided here by name in the template with `Fn::GetAtt`.
     * NOTE: If the name-value pairs contain sensitive information, you should use the `NoEcho` field to mask the output of the custom resource. Otherwise, the values are visible through APIs that surface property values (such as `DescribeStackEvents`).
     */
    Data?: TData;

    /**
     * Indicates whether to mask the output of the custom resource when retrieved by using the `Fn::GetAtt` function. If set to `true`, all returned values are masked with asterisks (*****), __except for those stored in the `Metadata` section of the template__. AWS CloudFormation does not transform, modify, or redact any information you include in the `Metadata` section. The default value is `false`.
     */
    NoEcho?: boolean;

    /**
     * Any other field included in the response will be passed through to `isComplete`. This can sometimes be useful to pass state between the handlers.
     */
    [Key: string]: any;
}

/**
 * Request event sent to the Lambda `IsComplete` handler for an asynchronous CDK Custom Resource
 * The input event to isComplete includes all request fields, combined with all fields returned from onEvent. If PhysicalResourceId has not been explicitly returned from onEvent, it's value will be calculated based on heuristics.
 * Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources-readme.html#asynchronous-providers-iscomplete
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 * @template TData User-defined output properties that are retuned from any invocation
 * @template TOldResourceProperties User-defined input properties passed to the Custom Resource as part of an `Update` invocation
 */
export type CdkCustomResourceIsCompleteEvent<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TData extends Record<string, any> = Record<string, any>,
    TOldResourceProperties = TResourceProperties,
> = CdkCustomResourceEvent<TResourceProperties, TOldResourceProperties> & CdkCustomResourceResponse<TData>;

/**
 * Common response properties from the `IsComplete` Lambda handler for a CDK Custom Resource
 * Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources-readme.html#asynchronous-providers-iscomplete
 * @template TData User-defined output properties that are retuned from any invocation
 */
export type CdkCustomResourceIsCompleteResponse<TData extends Record<string, any> = Record<string, any>> =
    | CdkCustomResourceIsCompleteResponseSuccess<TData>
    | CdkCustomResourceIsCompleteResponseWaiting;

/**
 * Response properties that are specifically for a successful `IsComplete` response for a CDK Custom Resource
 * Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources-readme.html#asynchronous-providers-iscomplete
 * @template TData User-defined output properties that are retuned from any invocation
 */
export interface CdkCustomResourceIsCompleteResponseSuccess<TData extends Record<string, any> = Record<string, any>> {
    /**
     * Indicates the operation has finished.
     */
    IsComplete: true;

    /**
     * The custom resource provider-defined name-value pairs to send with the response. You can access the values provided here by name in the template with `Fn::GetAtt`.
     * These attributes will be **merged** with the ones returned from `onEvent`.
     */
    Data?: TData;
}

/**
 * Response properties that are specifically for a still waiting `IsComplete` response for a CDK Custom Resource
 * Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources-readme.html#asynchronous-providers-iscomplete
 */
export interface CdkCustomResourceIsCompleteResponseWaiting {
    /**
     * Indicates the operation has not finished.
     */
    IsComplete: false;
}

/**
 * Lambda `IsComplete` handler function for asynchronous CDK Custom Resources
 * Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.custom_resources-readme.html#asynchronous-providers-iscomplete
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 * @template TOnEventData User-defined output properties that are retuned from any invocation of the `OnEvent` function
 * @template TOldResourceProperties User-defined input properties passed to the Custom Resource as part of an `Update` invocation
 * @template TIsCompleteData User-defined output properties that are retuned from any invocation of the `IsComplete` function
 */
export type CdkCustomResourceIsCompleteHandler<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TOnEventData extends Record<string, any> = Record<string, any>,
    TOldResourceProperties = TResourceProperties,
    TIsCompleteData extends Record<string, any> = TOnEventData,
> = Handler<
    CdkCustomResourceIsCompleteEvent<TResourceProperties, TOnEventData, TOldResourceProperties>,
    CdkCustomResourceIsCompleteResponse<TIsCompleteData>
>;

/**
 * Lambda `IsComplete` callback function for a CDK Custom Resource
 * @template TData User-defined output properties that are retuned from any invocation
 */
export type CdkCustomResourceIsCompleteCallback<TData extends Record<string, any> = Record<string, any>> = Callback<
    CdkCustomResourceIsCompleteResponse<TData>
>;
