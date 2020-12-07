import { FetchOptions } from "@pnp/common";
import { ODataParser, ODataQueryable, RequestContext } from "@pnp/odata";
import { GraphBatch } from "./batch";
export interface GraphQueryableConstructor<T> {
    new (baseUrl: string | GraphQueryable, path?: string): T;
}
/**
 * Queryable Base Class
 *
 */
export declare class GraphQueryable<GetType = any> extends ODataQueryable<GraphBatch, GetType> {
    /**
     * Creates a new instance of the Queryable class
     *
     * @constructor
     * @param baseUrl A string or Queryable that should form the base part of the url
     *
     */
    constructor(baseUrl: string | GraphQueryable, path?: string);
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
     * Creates a new instance of the supplied factory and extends this into that new instance
     *
     * @param factory constructor for the new queryable
     */
    as<T>(factory: GraphQueryableConstructor<T>): T;
    /**
     * Gets the full url with query information
     *
     */
    toUrlAndQuery(): string;
    /**
     * Allows setting the endpoint (v1.0, beta)
     *
     * @param endpoint
     */
    setEndpoint(endpoint: "beta" | "v1.0"): this;
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    protected getParent<T extends GraphQueryable>(factory: GraphQueryableConstructor<T>, baseUrl?: string | GraphQueryable, path?: string): T;
    /**
     * Clones this queryable into a new queryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    protected clone<T extends GraphQueryable>(factory: GraphQueryableConstructor<T>, additionalPath?: string, includeBatch?: boolean): T;
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
export declare class GraphQueryableCollection<GetType = any[]> extends GraphQueryable<GetType> {
    /**
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
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top: number): this;
    /**
     * Skips a set number of items in the return set
     *
     * @param num Number of items to skip
     */
    skip(num: number): this;
    /**
     * 	To request second and subsequent pages of Graph data
     */
    skipToken(token: string): this;
    /**
     * 	Retrieves the total count of matching resources
     */
    readonly count: this;
}
export declare class GraphQueryableSearchableCollection extends GraphQueryableCollection {
    /**
     * 	To request second and subsequent pages of Graph data
     */
    search(query: string): this;
}
/**
 * Represents an instance that can be selected
 *
 */
export declare class GraphQueryableInstance<GetType = any> extends GraphQueryable<GetType> {
}
/**
 * Decorator used to specify the default path for Queryable objects
 *
 * @param path
 */
export declare function defaultPath(path: string): <T extends new (...args: any[]) => {}>(target: T) => {
    new (...args: any[]): {};
} & T;
