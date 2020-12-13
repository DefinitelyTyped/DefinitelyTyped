import { FetchOptions } from "@pnp/common";
import { ODataParser, ODataQueryable, RequestContext } from "@pnp/odata";
import { SPBatch } from "./batch";
export interface SharePointQueryableConstructor<T> {
    new (baseUrl: string | SharePointQueryable, path?: string): T;
}
/**
 * SharePointQueryable Base Class
 *
 */
export declare class SharePointQueryable<GetType = any> extends ODataQueryable<SPBatch, GetType> {
    protected _forceCaching: boolean;
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Creates a new instance of the supplied factory and extends this into that new instance
     *
     * @param factory constructor for the new SharePointQueryable
     */
    as<T>(factory: SharePointQueryableConstructor<T>): T;
    /**
     * Gets the full url with query information
     *
     */
    toUrlAndQuery(): string;
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects: string[]): this;
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands: string[]): this;
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    protected getParent<T extends SharePointQueryable>(factory: SharePointQueryableConstructor<T>, baseUrl?: string | SharePointQueryable, path?: string, batch?: SPBatch): T;
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    protected clone<T extends SharePointQueryable>(factory: SharePointQueryableConstructor<T>, additionalPath?: string, includeBatch?: boolean): T;
    /**
     * Converts the current instance to a request context
     *
     * @param verb The request verb
     * @param options The set of supplied request options
     * @param parser The supplied ODataParser instance
     * @param pipeline Optional request processing pipeline
     */
    protected toRequestContext<T>(verb: string, options: FetchOptions, parser: ODataParser<T>, pipeline: Array<(c: RequestContext<T>) => Promise<RequestContext<T>>>): Promise<RequestContext<T>>;
}
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
export declare class SharePointQueryableCollection<GetType = any[]> extends SharePointQueryable<GetType> {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter: string): this;
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy: string, ascending?: boolean): this;
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip: number): this;
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top: number): this;
}
/**
 * Represents an instance that can be selected
 *
 */
export declare class SharePointQueryableInstance<GetType = any> extends SharePointQueryable<GetType> {
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    protected _update<Return, Props = any, Data = any>(type: string, mapper: (data: Data, props: Props) => Return): (props: Props) => Promise<Return>;
    /**
    * Deletes this instance
    *
    */
    protected _delete(): Promise<void>;
    /**
     * Deletes this instance with an etag value in the headers
     *
     * @param eTag eTag to delete
     */
    protected _deleteWithETag(eTag?: string): Promise<void>;
}
/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
export declare function defaultPath(path: string): <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {};
} & T;
