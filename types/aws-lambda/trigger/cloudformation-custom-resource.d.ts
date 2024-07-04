import { Handler } from "../handler";

export interface ResourcePropertiesCommon extends Record<string, any> {
    ServiceToken: string;
    ServiceTimeout?: string;
}

// Note, responses are *not* lambda results, they are sent to the event ResponseURL.
export type CloudFormationCustomResourceHandler<
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
> = Handler<CloudFormationCustomResourceEvent<TResourceProperties>, void>;

export type CloudFormationCustomResourceEvent<
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
> =
    | CloudFormationCustomResourceCreateEvent<TResourceProperties>
    | CloudFormationCustomResourceUpdateEvent<TResourceProperties>
    | CloudFormationCustomResourceDeleteEvent<TResourceProperties>;

export type CloudFormationCustomResourceResponse<TData extends Record<string, any> = Record<string, any>> =
    | CloudFormationCustomResourceSuccessResponse<TData>
    | CloudFormationCustomResourceFailedResponse<TData>;

/**
 * CloudFormation Custom Resource event and response
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref.html
 */
export interface CloudFormationCustomResourceEventCommon<
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
> {
    ResponseURL: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    ResourceType: string;
    ResourceProperties: TResourceProperties;
}

export interface CloudFormationCustomResourceCreateEvent<
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
> extends CloudFormationCustomResourceEventCommon<TResourceProperties> {
    RequestType: "Create";
}

export interface CloudFormationCustomResourceUpdateEvent<
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
> extends CloudFormationCustomResourceEventCommon<TResourceProperties> {
    RequestType: "Update";
    PhysicalResourceId: string;
    OldResourceProperties: {
        [Key: string]: any;
    };
}

export interface CloudFormationCustomResourceDeleteEvent<
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
> extends CloudFormationCustomResourceEventCommon<TResourceProperties> {
    RequestType: "Delete";
    PhysicalResourceId: string;
}

export interface CloudFormationCustomResourceResponseCommon<TData extends Record<string, any> = Record<string, any>> {
    PhysicalResourceId: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    Data?: TData | undefined;
    NoEcho?: boolean | undefined;
}

export interface CloudFormationCustomResourceSuccessResponse<TData extends Record<string, any> = Record<string, any>>
    extends CloudFormationCustomResourceResponseCommon<TData>
{
    Status: "SUCCESS";
    Reason?: string | undefined;
}

export interface CloudFormationCustomResourceFailedResponse<TData extends Record<string, any> = Record<string, any>>
    extends CloudFormationCustomResourceResponseCommon<TData>
{
    Status: "FAILED";
    Reason: string;
}
