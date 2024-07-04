import { Callback, Handler } from "../handler";
import { CloudFormationCustomResourceEvent, ResourcePropertiesCommon } from "./cloudformation-custom-resource";

// The CDK docs only specify 'important' properties, but in reality the incoming event
// to the Lambda matches that of a traditional custom resource.
// This includes the ResponseURL property which should not be used as the framework
// itself will deal with delivering responses.
export type CdkCustomResourceEvent<TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon> =
    & CloudFormationCustomResourceEvent<TResourceProperties>
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
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
    TData extends Record<string, any> = Record<string, any>,
> = Handler<CdkCustomResourceEvent<TResourceProperties>, CdkCustomResourceResponse<TData>>;
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
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
    TData extends Record<string, any> = Record<string, any>,
> = CdkCustomResourceEvent<TResourceProperties> & CdkCustomResourceResponse<TData>;

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
    TResourceProperties extends ResourcePropertiesCommon = ResourcePropertiesCommon,
    TOnEventData extends Record<string, any> = Record<string, any>,
    TIsCompleteData extends Record<string, any> = Record<string, any>,
> = Handler<
    CdkCustomResourceIsCompleteEvent<TResourceProperties, TOnEventData>,
    CdkCustomResourceIsCompleteResponse<TIsCompleteData>
>;
export type CdkCustomResourceIsCompleteCallback<TData extends Record<string, any> = Record<string, any>> = Callback<
    CdkCustomResourceIsCompleteResponse<TData>
>;
