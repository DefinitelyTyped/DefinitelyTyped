import { Handler } from "../handler";

// Note, responses are *not* lambda results, they are sent to the event ResponseURL.
export type CloudFormationCustomResourceHandler<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties
> = Handler<CloudFormationCustomResourceEvent<Properties>, void>;

export type CloudFormationCustomResourceEvent<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties
> =
    | CloudFormationCustomResourceCreateEvent<Properties>
    | CloudFormationCustomResourceUpdateEvent<Properties>
    | CloudFormationCustomResourceDeleteEvent<Properties>;

export type CloudFormationCustomResourceResponse<Data extends Record<string, any> | undefined = Record<string, any> | undefined> =
    | CloudFormationCustomResourceSuccessResponse<Data>
    | CloudFormationCustomResourceFailedResponse<Data>;

export type CloudFormationCustomResourceProperties = Record<string, any>;

/**
 * CloudFormation Custom Resource event and response
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref.html
 */
export interface CloudFormationCustomResourceEventCommon<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties
> {
    ServiceToken: string;
    ResponseURL: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    ResourceType: string;
    ResourceProperties: Properties & {
        ServiceToken: string;
    };
}

export interface CloudFormationCustomResourceCreateEvent<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties
> extends CloudFormationCustomResourceEventCommon<Properties> {
    RequestType: 'Create';
}

export interface CloudFormationCustomResourceUpdateEvent<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties
> extends CloudFormationCustomResourceEventCommon<Properties> {
    RequestType: 'Update';
    PhysicalResourceId: string;
    OldResourceProperties: CloudFormationCustomResourceProperties;
}

export interface CloudFormationCustomResourceDeleteEvent<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties
> extends CloudFormationCustomResourceEventCommon<Properties> {
    RequestType: 'Delete';
    PhysicalResourceId: string;
}

export type CloudFormationCustomResourceResponseCommon<Data extends Record<string, any> | undefined = Record<string, any> | undefined> = {
    PhysicalResourceId: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    NoEcho?: boolean | undefined;
} & (Data extends undefined ? { Data?: Data } : { Data: Data });

export type CloudFormationCustomResourceSuccessResponse<Data extends Record<string, any> | undefined = Record<string, any> | undefined> = CloudFormationCustomResourceResponseCommon<Data> & {
    Status: 'SUCCESS';
    Reason?: string | undefined;
};

export type CloudFormationCustomResourceFailedResponse<Data extends Record<string, any> | undefined = Record<string, any> | undefined> = CloudFormationCustomResourceResponseCommon<Data> & {
    Status: 'FAILED';
    Reason: string;
};
