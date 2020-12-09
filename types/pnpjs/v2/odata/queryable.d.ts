import { IFetchOptions, IConfigOptions, IRequestClient } from "@pnp/common";
import { ICachingOptions } from "./caching";
import { Batch } from "./batch";
import { PipelineMethod } from "./pipeline";
import { IODataParser } from "./parsers";
export declare function cloneQueryableData(source: Partial<IQueryableData>): Partial<IQueryableData>;
export interface IQueryableData<DefaultActionType = any> {
    batch: Batch | null;
    batchIndex: number;
    batchDependency: () => void | null;
    cachingOptions: ICachingOptions | null;
    cloneParentCacheOptions: ICachingOptions | null;
    cloneParentWasCaching: boolean;
    query: Map<string, string>;
    options: IFetchOptions | null;
    url: string;
    parentUrl: string;
    useCaching: boolean;
    pipes?: PipelineMethod<DefaultActionType>[];
    parser?: IODataParser<DefaultActionType>;
    clientFactory?: () => IRequestClient;
    method?: string;
}
export interface IQueryable<DefaultActionType> {
    data: Partial<IQueryableData<DefaultActionType>>;
    query: Map<string, string>;
    append(pathPart: string): void;
    inBatch(batch: Batch): this;
    addBatchDependency(): () => void;
    toUrlAndQuery(): string;
    toUrl(): string;
    concat(pathPart: string): this;
    configure(options: IConfigOptions): this;
    configureFrom(o: IQueryable<DefaultActionType>): this;
    usingCaching(options?: ICachingOptions): this;
    usingParser(parser: IODataParser<any>): this;
    withPipeline(pipeline: PipelineMethod<DefaultActionType>[]): this;
    defaultAction(options?: IFetchOptions): Promise<DefaultActionType>;
}
export declare abstract class Queryable<DefaultActionType = any> implements IQueryable<DefaultActionType> {
    private _data;
    constructor(dataSeed?: Partial<IQueryableData<DefaultActionType>>);
    data: Partial<IQueryableData<DefaultActionType>>;
    /**
     * Gets the full url with query information
     *
     */
    abstract toUrlAndQuery(): string;
    /**
     * The default action for this
     */
    abstract defaultAction(options?: IFetchOptions): Promise<DefaultActionType>;
    /**
    * Gets the current url
    *
    */
    toUrl(): string;
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart: string): this;
    /**
     * Provides access to the query builder for this url
     *
     */
    readonly query: Map<string, string>;
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    configure(options: IConfigOptions): this;
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    configureFrom(o: IQueryable<any>): this;
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    usingCaching(options?: ICachingOptions): this;
    usingParser(parser: IODataParser<any>): this;
    /**
     * Allows you to set a request specific processing pipeline
     *
     * @param pipeline The set of methods, in order, to execute a given request
     */
    withPipeline(pipeline: PipelineMethod<DefaultActionType>[]): this;
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    append(pathPart: string): void;
    /**
     * Adds this query to the supplied batch
     *
     * @example
     * ```
     *
     * let b = pnp.sp.createBatch();
     * pnp.sp.web.inBatch(b).get().then(...);
     * b.execute().then(...)
     * ```
     */
    inBatch(batch: Batch): this;
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    addBatchDependency(): () => void;
    /**
     * Indicates if the current query has a batch associated
     *
     */
    protected readonly hasBatch: boolean;
    /**
     * The batch currently associated with this query or null
     *
     */
    protected readonly batch: Batch | null;
    /**
     * Gets the parent url used when creating this instance
     *
     */
    protected readonly parentUrl: string;
    /**
     * Clones this instance's data to target
     *
     * @param target Instance to which data is written
     * @param settings [Optional] Settings controlling how clone is applied
     */
    protected cloneTo<T extends IQueryable<any>>(target: T, settings?: {
        includeBatch?: boolean;
        includeQuery?: boolean;
    }): T;
}
//# sourceMappingURL=queryable.d.ts.map