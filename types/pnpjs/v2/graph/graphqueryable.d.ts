import { IFetchOptions } from "@pnp/common";
import { Queryable, IInvokable, IQueryable } from "@pnp/odata";
export interface IGraphQueryableConstructor<T> {
    new (baseUrl: string | IGraphQueryable, path?: string): T;
}
export declare const graphInvokableFactory: <R>(f: any) => (baseUrl: string | IGraphQueryable<any>, path?: string) => R;
/**
 * Queryable Base Class
 *
 */
export declare class _GraphQueryable<GetType = any> extends Queryable<GetType> implements IGraphQueryable<GetType> {
    /**
     * Creates a new instance of the Queryable class
     *
     * @constructor
     * @param baseUrl A string or Queryable that should form the base part of the url
     *
     */
    constructor(baseUrl: string | IGraphQueryable, path?: string);
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
    defaultAction(options?: IFetchOptions): Promise<GetType>;
    get<T = GetType>(options?: IFetchOptions): Promise<T>;
    /**
     * Gets the full url with query information
     *
     */
    toUrlAndQuery(): string;
    setEndpoint(endpoint: "beta" | "v1.0"): this;
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    protected getParent<T extends _GraphQueryable>(factory: IGraphQueryableConstructor<T>, baseUrl?: string | IGraphQueryable, path?: string): T;
    /**
     * Clones this queryable into a new queryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     * @param includeQuery If true all of the query values will be copied to the cloned instance
     */
    protected clone<T extends IGraphQueryable>(factory: (...args: any[]) => T, additionalPath?: string, includeBatch?: boolean, includeQuery?: boolean): T;
}
export interface IGraphQueryable<GetType = any> extends IInvokable, IQueryable<GetType> {
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
     *
     * @param options
     */
    defaultAction(options?: IFetchOptions): Promise<GetType>;
    /**
     * Allows you to set the graph endpoint version string
     *
     * @param endpoint The string either beta of v1.0
     */
    setEndpoint(endpoint: "beta" | "v1.0"): this;
    /**
     * Gets the full url with query information
     *
     */
    toUrlAndQuery(): string;
}
export interface _GraphQueryable extends IInvokable {
}
export declare const GraphQueryable: (baseUrl: string | IGraphQueryable<any>, path?: string) => IGraphQueryable<any>;
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
export declare class _GraphQueryableCollection<GetType = any[]> extends _GraphQueryable<GetType> implements IGraphQueryableCollection<GetType> {
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
export interface IGraphQueryableCollection<GetType = any[]> extends IInvokable, IGraphQueryable<GetType> {
    /**
     * 	Retrieves the total count of matching resources
     */
    count: this;
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
}
export interface _GraphQueryableCollection extends IInvokable {
}
export declare const GraphQueryableCollection: (baseUrl: string | IGraphQueryable<any>, path?: string) => IGraphQueryableCollection<any[]>;
export declare class _GraphQueryableSearchableCollection extends _GraphQueryableCollection implements IGraphQueryableSearchableCollection {
    /**
     * 	To request second and subsequent pages of Graph data
     */
    search(query: string): this;
}
export interface IGraphQueryableSearchableCollection<GetType = any> extends IInvokable, IGraphQueryable<GetType> {
    search(query: string): this;
}
export interface _GraphQueryableSearchableCollection extends IInvokable {
}
export declare const GraphQueryableSearchableCollection: (baseUrl: string | IGraphQueryable<any>, path?: string) => IGraphQueryableSearchableCollection<any>;
/**
 * Represents an instance that can be selected
 *
 */
export declare class _GraphQueryableInstance<GetType = any> extends _GraphQueryable<GetType> {
}
export interface IGraphQueryableInstance<GetType = any> extends IInvokable, IGraphQueryable<GetType> {
}
export interface _GraphQueryableInstance extends IInvokable {
}
export declare const GraphQueryableInstance: (baseUrl: string | IGraphQueryable<any>, path?: string) => IGraphQueryableInstance<any>;
//# sourceMappingURL=graphqueryable.d.ts.map