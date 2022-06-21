import { CloudFormationCustomResourceEvent, CloudFormationCustomResourceProperties } from './cloudformation-custom-resource';
import { Handler, Callback } from '../handler';

// The CDK docs only specify 'important' properties, but in reality the incoming event
// to the Lambda matches that of a traditional custom resource.
// This includes the ResponseURL property which should not be used as the framework
// itself will deal with delivering responses.
export type CdkCustomResourceEvent<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties
> = CloudFormationCustomResourceEvent<Properties> & {
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
export type CdkCustomResourceHandler<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties,
    Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData
> = Handler<CdkCustomResourceEvent<Properties>, CdkCustomResourceResponse<Data>>;
export type CdkCustomResourceCallback<
    Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData
> = Callback<CdkCustomResourceResponse<Data>>;

export type CdkCustomResourceResponseData =  Record<string, any> | undefined;

export type CdkCustomResourceResponse<Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData> = CdkCustomResourceResponseDataObject<Data> & {
    PhysicalResourceId?: string;
    // Any extra properties will be provided to the isComplete handler for asynchronous resources.
    [Key: string]: any;
};

// IsComplete events will contain all normal request fields, as well as those returned from
// the initial onEvent handler.
export type CdkCustomResourceIsCompleteEvent<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties,
    Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData
> = CdkCustomResourceEvent<Properties> & CdkCustomResourceResponse<Data>;

export type CdkCustomResourceIsCompleteResponse<Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData> =
    | CdkCustomResourceIsCompleteResponseSuccess<Data>
    | CdkCustomResourceIsCompleteResponseWaiting;

/**
 * The `Data` property will be merged with the `Data` property of the onEvent handler's response.
 */
export type CdkCustomResourceIsCompleteResponseSuccess<Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData> = CdkCustomResourceResponseDataObject<Data> & {
    IsComplete: true;
};

export interface CdkCustomResourceIsCompleteResponseWaiting {
    IsComplete: false;
}

export type CdkCustomResourceResponseDataObject<Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData> =
    Data extends undefined ? {
        Data?: Data
    } : {
        Data: Data
    };

/**
 * An asynchronous custom resource handler.
 * @link https://docs.aws.amazon.com/cdk/api/latest/docs/custom-resources-readme.html#asynchronous-providers-iscomplete
 */
export type CdkCustomResourceIsCompleteHandler<
    Properties extends CloudFormationCustomResourceProperties = CloudFormationCustomResourceProperties,
    Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData
> = Handler<
    CdkCustomResourceIsCompleteEvent<Properties, Data>,
    CdkCustomResourceIsCompleteResponse<Data>
>;
export type CdkCustomResourceIsCompleteCallback<Data extends CdkCustomResourceResponseData = CdkCustomResourceResponseData> = Callback<CdkCustomResourceIsCompleteResponse<Data>>;
