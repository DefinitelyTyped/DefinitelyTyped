import { FetchOptions, ConfigOptions } from "@pnp/common";
import { ODataParser } from "./parsers";
import { ICachingOptions } from "./caching";
import { ODataBatch } from "./odatabatch";
import { RequestContext, PipelineMethod } from "./pipeline";
export declare abstract class Queryable<GetType> {
    /**
     * Additional options to be set before sending actual http request
     */
    protected _options: ConfigOptions;
    /**
     * Tracks the query parts of the url
     */
    protected _query: Map<string, string>;
    /**
     * Tracks the url as it is built
     */
    protected _url: string;
    /**
     * Stores the parent url used to create this instance, for recursing back up the tree if needed
     */
    protected _parentUrl: string;
    /**
     * Explicitly tracks if we are using caching for this request
     */
    protected _useCaching: boolean;
    /**
     * Any options that were supplied when caching was enabled
     */
    protected _cachingOptions: ICachingOptions | null;
    /**
     * Flag used to indicate if the object from which this was cloned's _usingCaching flag was true
     */
    protected _cloneParentWasCaching: boolean;
    /**
     * The cache options from the clone parent if it was caching
     */
    protected _cloneParentCacheOptions: ICachingOptions | null;
    /**
     * If a specific request pipeline is set, it will be used
     */
    protected _requestPipeline: PipelineMethod<any>[] | null;
    constructor();
    /**
     * Gets the full url with query information
     *
     */
    abstract toUrlAndQuery(): string;
    /**
    * Gets the currentl url
    *
    */
    toUrl(): string;
    /**
     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatonate to the url
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
    configure(options: ConfigOptions): this;
    /**
     * Configures this instance from the configure options of the supplied instance
     *
     * @param o Instance from which options should be taken
     */
    configureFrom(o: Queryable<any>): this;
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    usingCaching(options?: ICachingOptions): this;
    /**
     * Allows you to set a request specific processing pipeline
     *
     * @param pipeline The set of methods, in order, to execute a given request
     */
    withPipeline(pipeline: PipelineMethod<any>[]): this;
    protected getCore<T = GetType>(parser?: ODataParser<T>, options?: FetchOptions): Promise<T>;
    protected postCore<T = any>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected patchCore<T = any>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected deleteCore<T = any>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected putCore<T = any>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected reqImpl<T>(method: string, options: FetchOptions, parser: ODataParser<T>): Promise<T>;
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    protected append(pathPart: string): void;
    /**
     * Gets the parent url used when creating this instance
     *
     */
    protected readonly parentUrl: string;
    /**
     * Extends this queryable from the provided parent
     *
     * @param parent Parent queryable from which we will derive a base url
     * @param path Additional path
     */
    protected extend(parent: Queryable<any>, path?: string): void;
    /**
     * Configures a cloned object from this instance
     *
     * @param clone
     */
    protected _clone(clone: Queryable<any>, _0: any): any;
    /**
     * Handles getting the request pipeline to run for a given request
     */
    protected getRequestPipeline<T>(method: string, options: FetchOptions, parser: ODataParser<T>): Promise<PipelineMethod<T>[]>;
    /**
     * Converts the current instance to a request context
     *
     * @param verb The request verb
     * @param options The set of supplied request options
     * @param parser The supplied ODataParser instance
     * @param pipeline Optional request processing pipeline
     */
    protected abstract toRequestContext<T>(verb: string, options: FetchOptions, parser: ODataParser<T>, pipeline: Array<(c: RequestContext<T>) => Promise<RequestContext<T>>>): Promise<RequestContext<T>>;
}
export declare abstract class ODataQueryable<BatchType extends ODataBatch, GetType = any> extends Queryable<GetType> {
    /**
     * Tracks the batch of which this query may be part
     */
    protected _batch: BatchType | null;
    /**
     * Allows us to properly block batch execution until everything is loaded
     */
    protected _batchDependency: () => void | null;
    constructor();
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
    inBatch(batch: BatchType): this;
    /**
     * Gets the currentl url
     *
     */
    toUrl(): string;
    /**
     * Executes the currently built request
     *
     * @param parser Allows you to specify a parser to handle the result
     * @param getOptions The options used for this request
     */
    get<T = GetType>(parser?: ODataParser<T>, options?: FetchOptions): Promise<T>;
    protected getCore<T = GetType>(parser?: ODataParser<T>, options?: FetchOptions): Promise<T>;
    protected postCore<T = any>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected patchCore<T = any>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected deleteCore<T = any>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected putCore<T = any>(options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    protected reqImpl<T>(method: string, options: FetchOptions, parser: ODataParser<T>): Promise<T>;
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
    */
    protected addBatchDependency(): () => void;
    /**
     * Indicates if the current query has a batch associated
     *
     */
    protected readonly hasBatch: boolean;
    /**
     * The batch currently associated with this query or null
     *
     */
    protected readonly batch: BatchType | null;
    /**
     * Configures a cloned object from this instance
     *
     * @param clone
     */
    protected _clone(clone: ODataQueryable<any, any>, cloneSettings: {
        includeBatch: boolean;
    }): any;
}
