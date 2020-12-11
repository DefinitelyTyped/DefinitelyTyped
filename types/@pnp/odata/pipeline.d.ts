import { IRequestClient } from "@pnp/common";
import { IQueryableData } from "./queryable";
/**
 * Defines the context for a given request to be processed in the pipeline
 */
export interface IRequestContext<ReturnType> extends IQueryableData<ReturnType> {
    result?: ReturnType;
    clientFactory: () => IRequestClient;
    hasResult: boolean;
    isBatched: boolean;
    requestId: string;
    method: string;
}
export declare type PipelineMethod<ReturnType> = (c: IRequestContext<ReturnType>) => Promise<IRequestContext<ReturnType>>;
/**
 * Sets the result on the context
 */
export declare function setResult<T = any>(context: IRequestContext<T>, value: any): Promise<IRequestContext<T>>;
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
export declare function pipe<T = any>(context: IRequestContext<T>): Promise<T>;
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
export declare function requestPipelineMethod(alwaysRun?: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
/**
 * Contains the methods used within the request pipeline
 */
export declare class PipelineMethods {
    /**
     * Logs the start of the request
     */
    static logStart<T = any>(context: IRequestContext<T>): Promise<IRequestContext<T>>;
    /**
     * Handles caching of the request
     */
    static caching<T = any>(context: IRequestContext<T>): Promise<IRequestContext<T>>;
    /**
     * Sends the request
     */
    static send<T = any>(context: IRequestContext<T>): Promise<IRequestContext<T>>;
    /**
     * Logs the end of the request
     */
    static logEnd<T = any>(context: IRequestContext<T>): Promise<IRequestContext<T>>;
}
export declare function getDefaultPipeline(): (typeof PipelineMethods.logStart)[];
//# sourceMappingURL=pipeline.d.ts.map