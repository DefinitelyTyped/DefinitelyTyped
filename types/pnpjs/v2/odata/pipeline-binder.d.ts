import { IODataParser } from "./parsers";
import { IFetchOptions, IRequestClient } from "@pnp/common";
import { IQueryableData } from "./queryable";
import { PipelineMethod } from "./pipeline";
export interface IRequestOptions<T> extends IFetchOptions {
    parser: IODataParser<T>;
}
export interface IClientFactoryBinder {
    (clientFactory: () => IRequestClient): IMethodBinder;
}
export interface IPipelineBinder {
    (pipeline: PipelineMethod<any>[]): IClientFactoryBinder;
}
export interface IMethodBinder {
    (method: string): IOperation;
}
export interface IOperation {
    <ReturnType>(o: Partial<IQueryableData<ReturnType>>): Promise<ReturnType>;
}
export declare function pipelineBinder(pipes: PipelineMethod<any>[]): IClientFactoryBinder;
export declare const defaultPipelineBinder: IClientFactoryBinder;
//# sourceMappingURL=pipeline-binder.d.ts.map