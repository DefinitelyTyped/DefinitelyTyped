import { Callback, Handler } from "../handler";
import {
    CloudFormationCustomResourceEvent,
    CloudFormationCustomResourceResourcePropertiesCommon,
} from "./cloudformation-custom-resource";

// The CDK docs only specify 'important' properties, but in reality the incoming event
// to the Lambda matches that of a traditional custom resource.
// This includes the ResponseURL property which should not be used as the framework
// itself will deal with delivering responses.
export type CdkCustomResourceEvent<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TOldResourceProperties = TResourceProperties,
> =
    & CloudFormationCustomResourceEvent<TResourceProperties, TOldResourceProperties>
    & {
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
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TData extends Record<string, any> = Record<string, any>,
    TOldResourceProperties = TResourceProperties,
> = Handler<CdkCustomResourceEvent<TResourceProperties, TOldResourceProperties>, CdkCustomResourceResponse<TData>>;
export type CdkCustomResourceCallback<TData extends Record<string, any>> = Callback<CdkCustomResourceResponse<TData>>;

export interface CdkCustomResourceResponse<TData extends Record<string, any> = Record<string, any>> {
    PhysicalResourceId?: string;
    Data?: TData;
    NoEcho?: boolean;
    // Any extra properties will be provided to the isComplete handler for asynchronous resources.
    [Key: string]: any;
}

// IsComplete events will contain all normal request fields, as well as those returned from
// the initial onEvent handler.
export type CdkCustomResourceIsCompleteEvent<
    TResourceProperties = CloudFormationCustomResourceResourcePropertiesCommon,
    TData extends Record<string, any> = Record<string, any>,
    TOldResourceProperties = TResourceProperties,
> = CdkCustomResourceEvent<TResourceProperties, TOldResourceProperties> & CdkCustomResourceResponse<TData>;

export type CdkCustomResourceIsCompleteResponse<TData extends Record<string, any> = Record<string, any>> =
    | CdkCustomResourceIsCompleteResponseSuccess<TData>
    | CdkCustomResourceIsCompleteResponseWaiting;

export interface CdkCustomResourceIsCompleteResponseSuccess<TData extends Record<string, any> = Record<string, any>> {
    IsComplete: true;
    /**
     * This will be merged with the `Data` property of the onEvent handler's response.
     */
    Data?: TData;
}

export interface CdkCustomResourceIsCompleteResponseWaiting {
    IsComplete: false;
}

/**
 * An asynchronous custom resource handler.
 * @link https://docs.aws.amazon.com/cdk/api/latest/docs/custom-resources-readme.html#asynchronous-providers-iscomplete
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
export type CdkCustomResourceIsCompleteCallback<TData extends Record<string, any> = Record<string, any>> = Callback<
    CdkCustomResourceIsCompleteResponse<TData>
>;
