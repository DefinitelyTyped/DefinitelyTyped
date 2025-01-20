import { Handler } from "../handler";

/**
 * Named service-defined resource properties
 * Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref-requests.html#crpg-ref-request-properties
 */
export interface CloudFormationCustomResourceResourcePropertiesCommon extends Record<string, any> {
    /**
     * The service token, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same Region as the stack.
     */
    ServiceToken: string;

    /**
     * The maximum time, in seconds, that can elapse before a custom resource operation times out.
     * The value must be an integer from 1 to 3600. The default value is 3600 seconds (1 hour).
     */
    ServiceTimeout?: string;
}

/**
 * Lambda handler function for a Lambda-backed CloudFormation Custom Resource
 *
 * NOTE: responses are *not* returned from the Lambda handler but rather they are sent to the event ResponseURL.
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 * @template TOldResourceProperties User-defined input properties passed to the Custom Resource as part of an `Update` invocation
 */
export type CloudFormationCustomResourceHandler<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TOldResourceProperties = TResourceProperties,
> = Handler<CloudFormationCustomResourceEvent<TResourceProperties, TOldResourceProperties>, void>;

/**
 * Request event sent to the Lambda handler for a Lambda-backed CloudFormation Custom Resource
 * Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref-requests.html#crpg-ref-request-fields
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 * @template TOldResourceProperties User-defined input properties passed to the Custom Resource as part of an `Update` invocation
 */
export type CloudFormationCustomResourceEvent<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TOldResourceProperties = TResourceProperties,
> =
    | CloudFormationCustomResourceCreateEvent<TResourceProperties>
    | CloudFormationCustomResourceUpdateEvent<TResourceProperties, TOldResourceProperties>
    | CloudFormationCustomResourceDeleteEvent<TResourceProperties>;

/**
 * Response from a Lambda handler for a Lambda-backed CloudFormation Custom Resource
 * Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref-responses.html
 *
 * NOTE: responses are *not* returned from the Lambda handler but rather they are sent to the event ResponseURL.
 * @template TData User-defined output properties that are retuned from any invocation
 */
export type CloudFormationCustomResourceResponse<TData extends Record<string, any> = Record<string, any>> =
    | CloudFormationCustomResourceSuccessResponse<TData>
    | CloudFormationCustomResourceFailedResponse<TData>;

/**
 * Request properties that are common to all invocations of a Lambda-backed CloudFormation Custom Resource
 * Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref-requests.html#crpg-ref-request-fields
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 */
export interface CloudFormationCustomResourceEventCommon<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
> {
    /**
     * The service token, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same Region as the stack.
     */
    ServiceToken: string;

    /**
     * The response URL identifies a presigned S3 bucket that receives responses from the custom resource provider to AWS CloudFormation.
     */
    ResponseURL: string;

    /**
     * The Amazon Resource Name (ARN) that identifies the stack that contains the custom resource.
     * Combining the `StackId` with the `RequestId` forms a value that you can use to uniquely identify a request on a particular custom resource.
     */
    StackId: string;

    /**
     * A unique ID for the request.
     * Combining the `StackId` with the `RequestId` forms a value that you can use to uniquely identify a request on a particular custom resource.
     */
    RequestId: string;

    /**
     * The template developer-chosen name (logical ID) of the custom resource in the AWS CloudFormation template. This is provided to facilitate communication between the custom resource provider and the template developer.
     */
    LogicalResourceId: string;

    /**
     * The template developer-chosen resource type of the custom resource in the CloudFormation template. Custom resource type names can be up to 60 characters long and can include alphanumeric and the following characters: `_@-`.
     */
    ResourceType: string;

    /**
     * This field contains the contents of the `Properties` object sent by the template developer. Its contents are defined by the custom resource provider.
     */
    ResourceProperties: TResourceProperties & CloudFormationCustomResourceResourcePropertiesCommon;
}

/**
 * Request properties specifically for the `Create` invocation of a Lambda-backed CloudFormation Custom Resource
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 */
export interface CloudFormationCustomResourceCreateEvent<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
> extends CloudFormationCustomResourceEventCommon<TResourceProperties> {
    /**
     * The request type is set by the CloudFormation stack operation (create-stack, update-stack, or delete-stack) that was initiated by the template developer for the stack that contains the custom resource.
     */
    RequestType: "Create";
}

/**
 * Request properties specifically for the `Update` invocation of a Lambda-backed CloudFormation Custom Resource
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 * @template TOldResourceProperties User-defined input properties passed to the Custom Resource as part of an `Update` invocation
 */
export interface CloudFormationCustomResourceUpdateEvent<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TOldResourceProperties = TResourceProperties,
> extends CloudFormationCustomResourceEventCommon<TResourceProperties> {
    /**
     * The request type is set by the CloudFormation stack operation (create-stack, update-stack, or delete-stack) that was initiated by the template developer for the stack that contains the custom resource.
     */
    RequestType: "Update";

    /**
     * A required custom resource provider-defined physical ID that is unique for that provider.
     * The value returned for a `PhysicalResourceId` can change custom resource update operations. If the value returned is the same, it is considered a normal update. If the value returned is different, AWS CloudFormation recognizes the update as a replacement and sends a delete request to the old resource.
     */
    PhysicalResourceId: string;

    /**
     * Used only for `Update` requests. Contains the resource properties that were declared previous to the update request.
     */
    OldResourceProperties: TOldResourceProperties;
}

/**
 * Request properties specifically for the `Delete` invocation of a Lambda-backed CloudFormation Custom Resource
 * @template TResourceProperties User-defined input properties passed to the Custom Resource as part of any invocation
 */
export interface CloudFormationCustomResourceDeleteEvent<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
> extends CloudFormationCustomResourceEventCommon<TResourceProperties> {
    /**
     * The request type is set by the CloudFormation stack operation (create-stack, update-stack, or delete-stack) that was initiated by the template developer for the stack that contains the custom resource.
     */
    RequestType: "Delete";

    /**
     * A required custom resource provider-defined physical ID that is unique for that provider.
     * The value returned for a `PhysicalResourceId` can change custom resource update operations. If the value returned is the same, it is considered a normal update. If the value returned is different, AWS CloudFormation recognizes the update as a replacement and sends a delete request to the old resource.
     */
    PhysicalResourceId: string;
}

/**
 * Response properties that are common to all invocations of a Lambda-backed CloudFormation Custom Resource
 * Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref-responses.html
 * @template TData User-defined output properties that are retuned from any invocation
 */
export interface CloudFormationCustomResourceResponseCommon<TData extends Record<string, any> = Record<string, any>> {
    /**
     * This value should be an identifier unique to the custom resource vendor, and can be up to 1 KB in size. The value must be a non-empty string and must be identical for all responses for the same resource.
     * The value returned for a `PhysicalResourceId` can change custom resource update operations. If the value returned is the same, it is considered a normal update. If the value returned is different, AWS CloudFormation recognizes the update as a replacement and sends a delete request to the old resource.
     */
    PhysicalResourceId: string;

    /**
     * The Amazon Resource Name (ARN) that identifies the stack that contains the custom resource. This response value should be copied verbatim from the request.
     */
    StackId: string;

    /**
     * A unique ID for the request. This response value should be copied verbatim from the request.
     */
    RequestId: string;

    /**
     * The template developer-chosen name (logical ID) of the custom resource in the AWS CloudFormation template. This response value should be copied verbatim from the request.
     */
    LogicalResourceId: string;

    /**
     * The custom resource provider-defined name-value pairs to send with the response. You can access the values provided here by name in the template with `Fn::GetAtt`.
     * NOTE: If the name-value pairs contain sensitive information, you should use the `NoEcho` field to mask the output of the custom resource. Otherwise, the values are visible through APIs that surface property values (such as `DescribeStackEvents`).
     */
    Data?: TData | undefined;

    /**
     * Indicates whether to mask the output of the custom resource when retrieved by using the `Fn::GetAtt` function. If set to `true`, all returned values are masked with asterisks (*****), __except for those stored in the `Metadata` section of the template__. AWS CloudFormation does not transform, modify, or redact any information you include in the `Metadata` section. The default value is `false`.
     */
    NoEcho?: boolean | undefined;
}

/**
 * Response properties that are specifically for a response indicating succesful invocation of a Lambda-backed CloudFormation Custom Resource
 * Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref-responses.html
 * @template TData User-defined output properties that are retuned from any invocation
 */
export interface CloudFormationCustomResourceSuccessResponse<TData extends Record<string, any> = Record<string, any>>
    extends CloudFormationCustomResourceResponseCommon<TData>
{
    /**
     * The status value sent by the custom resource provider in response to an AWS CloudFormation-generated request.
     */
    Status: "SUCCESS";

    /**
     * Describes the reason for a failure response.
     */
    Reason?: string | undefined;
}

/**
 * Response properties that are specifically for a response indicating failed invocation of a Lambda-backed CloudFormation Custom Resource
 * Reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref-responses.html
 * @template TData User-defined output properties that are retuned from any invocation
 */
export interface CloudFormationCustomResourceFailedResponse<TData extends Record<string, any> = Record<string, any>>
    extends CloudFormationCustomResourceResponseCommon<TData>
{
    /**
     * The status value sent by the custom resource provider in response to an AWS CloudFormation-generated request.
     */
    Status: "FAILED";

    /**
     * Describes the reason for a failure response.
     */
    Reason: string;
}
