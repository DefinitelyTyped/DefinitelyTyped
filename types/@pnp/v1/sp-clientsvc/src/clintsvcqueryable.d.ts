import { FetchOptions } from "@pnp/common";
import { ICachingOptions, ODataParser, Queryable, RequestContext } from "@pnp/odata";
import { IObjectPathBatch } from "./batch";
import { ObjectPathQueue } from "./objectpath";
import { IMethodParamsBuilder } from "./opbuilders";
export interface IClientSvcQueryable {
    select(...selects: string[]): this;
    usingCaching(options?: ICachingOptions): this;
    inBatch(batch: IObjectPathBatch): this;
}
export interface ClientSvcQueryableConstructor<T> {
    new (baseUrl: string | ClientSvcQueryable, objectPaths?: ObjectPathQueue): T;
}
export declare class ClientSvcQueryable<GetType = any> extends Queryable<GetType> implements IClientSvcQueryable {
    protected _objectPaths: ObjectPathQueue | null;
    /**
     * Collection of select fields
     */
    protected _selects: string[];
    /**
     * Tracks the batch of which this query may be part
     */
    protected _batch: IObjectPathBatch | null;
    /**
     * Allows us to properly block batch execution until everything is loaded
     */
    protected _batchDependency: () => void | null;
    constructor(parent?: ClientSvcQueryable | string, _objectPaths?: ObjectPathQueue | null);
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects: string[]): this;
    /**
     * Adds this query to the supplied batch
     *
     */
    inBatch(batch: IObjectPathBatch): this;
    /**
     * Gets the full url with query information
     *
     */
    toUrlAndQuery(): string;
    protected getSelects(): string[];
    /**
     * Gets a child object based on this instance's paths and the supplied paramters
     *
     * @param factory Instance factory of the child type
     * @param methodName Name of the method used to load the child
     * @param params Parameters required by the method to load the child
     */
    protected getChild<T>(factory: ClientSvcQueryableConstructor<T>, methodName: string, params: IMethodParamsBuilder | null): T;
    /**
     * Gets a property of the current instance
     *
     * @param factory Instance factory of the child type
     * @param propertyName Name of the property to load
     */
    protected getChildProperty<T>(factory: ClientSvcQueryableConstructor<T>, propertyName: string): T;
    /**
     * Sends a request
     *
     * @param op
     * @param options
     * @param parser
     */
    protected send<T = any>(objectPaths: ObjectPathQueue, options?: FetchOptions, parser?: ODataParser<T>): Promise<T>;
    /**
     * Sends the request, merging the result data with a new instance of factory
     */
    protected sendGet<DataType, FactoryType>(factory: ClientSvcQueryableConstructor<FactoryType>): Promise<(DataType & FactoryType)>;
    /**
     * Sends the request, merging the result data array with a new instances of factory
     */
    protected sendGetCollection<DataType, FactoryType>(factory: (d: DataType) => FactoryType): Promise<(DataType & FactoryType)[]>;
    /**
     * Invokes the specified method on the server and returns the result
     *
     * @param methodName Name of the method to invoke
     * @param params Method parameters
     * @param actions Any additional actions to execute in addition to the method invocation (set property for example)
     */
    protected invokeMethod<T>(methodName: string, params?: IMethodParamsBuilder | null, ...actions: string[]): Promise<T>;
    /**
     * Invokes a method action that returns a single result and does not have an associated query (ex: GetDescription on Term)
     *
     * @param methodName Name of the method to invoke
     * @param params Method parameters
     * @param actions Any additional actions to execute in addition to the method invocation (set property for example)
     */
    protected invokeMethodAction<T>(methodName: string, params?: IMethodParamsBuilder | null, ...actions: string[]): Promise<T>;
    /**
     * Invokes the specified non-query method on the server
     *
     * @param methodName Name of the method to invoke
     * @param params Method parameters
     * @param actions Any additional actions to execute in addition to the method invocation (set property for example)
     */
    protected invokeNonQuery(methodName: string, params?: IMethodParamsBuilder | null, ...actions: string[]): Promise<void>;
    /**
     * Invokes the specified method on the server and returns the resulting collection
     *
     * @param methodName Name of the method to invoke
     * @param params Method parameters
     * @param actions Any additional actions to execute in addition to the method invocation (set property for example)
     */
    protected invokeMethodCollection<T>(methodName: string, params?: IMethodParamsBuilder | null, ...actions: string[]): Promise<T>;
    /**
     * Updates this instance, returning a copy merged with the updated data after the update
     *
     * @param properties Plain object of the properties and values to update
     * @param factory Factory method use to create a new instance of FactoryType
     */
    protected invokeUpdate<DataType, FactoryType>(properties: any, factory: ClientSvcQueryableConstructor<FactoryType>): Promise<DataType & FactoryType>;
    /**
     * Converts the current instance to a request context
     *
     * @param verb The request verb
     * @param options The set of supplied request options
     * @param parser The supplied ODataParser instance
     * @param pipeline Optional request processing pipeline
     */
    protected toRequestContext<T>(verb: string, options: FetchOptions, parser: ODataParser<T>, pipeline: Array<(c: RequestContext<T>) => Promise<RequestContext<T>>>): Promise<RequestContext<T>>;
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
    protected readonly batch: IObjectPathBatch;
    /**
     * Executes the actual invoke method call
     *
     * @param methodName Name of the method to invoke
     * @param params Method parameters
     * @param queryAction Specifies the query action to take
     */
    private invokeMethodImpl;
}
