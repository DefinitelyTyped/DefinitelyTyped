import { Handler } from "../handler";

// Note, responses are *not* lambda results, they are sent to the event ResponseURL.
export type CloudFormationCustomResourceHandler = Handler<CloudFormationCustomResourceEvent, void>;

export type CloudFormationCustomResourceEvent =
    | CloudFormationCustomResourceCreateEvent
    | CloudFormationCustomResourceUpdateEvent
    | CloudFormationCustomResourceDeleteEvent;

export type CloudFormationCustomResourceResponse =
    | CloudFormationCustomResourceSuccessResponse
    | CloudFormationCustomResourceFailedResponse;

/**
 * CloudFormation Custom Resource event and response
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/crpg-ref.html
 */
export interface CloudFormationCustomResourceEventCommon {
    ServiceToken: string;
    ResponseURL: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    ResourceType: string;
    ResourceProperties: {
        ServiceToken: string;
        [Key: string]: any;
    };
}

export interface CloudFormationCustomResourceCreateEvent extends CloudFormationCustomResourceEventCommon {
    RequestType: "Create";
}

export interface CloudFormationCustomResourceUpdateEvent extends CloudFormationCustomResourceEventCommon {
    RequestType: "Update";
    PhysicalResourceId: string;
    OldResourceProperties: {
        [Key: string]: any;
    };
}

export interface CloudFormationCustomResourceDeleteEvent extends CloudFormationCustomResourceEventCommon {
    RequestType: "Delete";
    PhysicalResourceId: string;
}

export interface CloudFormationCustomResourceResponseCommon {
    PhysicalResourceId: string;
    StackId: string;
    RequestId: string;
    LogicalResourceId: string;
    Data?:
        | {
            [Key: string]: any;
        }
        | undefined;
    NoEcho?: boolean | undefined;
}

export interface CloudFormationCustomResourceSuccessResponse extends CloudFormationCustomResourceResponseCommon {
    Status: "SUCCESS";
    Reason?: string | undefined;
}

export interface CloudFormationCustomResourceFailedResponse extends CloudFormationCustomResourceResponseCommon {
    Status: "FAILED";
    Reason: string;
}
