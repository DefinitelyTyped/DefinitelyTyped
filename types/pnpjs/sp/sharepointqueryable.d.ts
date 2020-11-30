import { IFetchOptions } from "../common";
import { Queryable, IInvokable } from "../odata";
import { SPBatch } from "./batch";
export interface ISharePointQueryableConstructor<T extends ISharePointQueryable = ISharePointQueryable> {
    new(baseUrl: string | ISharePointQueryable, path?: string): T;
}
export declare type ISPInvokableFactory<R = any> = (baseUrl: string | ISharePointQueryable, path?: string) => R;
export declare const spInvokableFactory: <R>(f: any) => ISPInvokableFactory<R>;
/**
 * SharePointQueryable Base Class
 *
 */
export declare class _SharePointQueryable<GetType = any> extends Queryable<GetType> {
    protected _forceCaching: boolean;
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(baseUrl: string | ISharePointQueryable, path?: string);
    /**
     * Gets the full url with query information
     */
    toUrlAndQuery(): string;
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects: string[]): this;
    get<T = GetType>(options?: IFetchOptions): Promise<T>;
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands: string[]): this;
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     * @param includeQuery If true all of the query values will be copied to the cloned instance
     */
    clone<T extends ISharePointQueryable>(factory: (...args: any[]) => T, additionalPath?: string, includeBatch?: boolean, includeQuery?: boolean): T;
    /**
     * The default action for this object (unless overridden spGet)
     *
     * @param options optional request options
     */
    defaultAction(options?: IFetchOptions): Promise<GetType>;
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    protected getParent<T extends ISharePointQueryable>(factory: ISPInvokableFactory<any>, baseUrl?: string | ISharePointQueryable, path?: string, batch?: SPBatch): T;
}
export interface ISharePointQueryable<GetType = any> extends _SharePointQueryable<GetType>, IInvokable<GetType> {
}
export interface _SharePointQueryable<GetType = any> extends IInvokable<GetType> {
}
export declare const SharePointQueryable: ISPInvokableFactory<ISharePointQueryable<any>>;
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
export declare class _SharePointQueryableCollection<GetType = any[]> extends _SharePointQueryable<GetType> {
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
export interface _SharePointQueryableCollection<GetType = any[]> extends IInvokable<GetType> {
}
export interface ISharePointQueryableCollection<GetType = any[]> extends _SharePointQueryableCollection<GetType>, IInvokable<GetType> {
}
export declare const SharePointQueryableCollection: ISPInvokableFactory<ISharePointQueryableCollection<any[]>>;
/**
 * Represents an instance that can be selected
 *
 */
export declare class _SharePointQueryableInstance<GetType = any> extends _SharePointQueryable<GetType> {
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    protected _update<Return, Props = any>(type: string, mapper: (data: any, props: Props) => Return): (props: Props) => Promise<Return>;
}
export interface ISharePointQueryableInstance<GetType = any> extends _SharePointQueryableInstance<GetType>, IInvokable<GetType> {
}
export interface _SharePointQueryableInstance<GetType = any> extends IInvokable<GetType> {
}
export declare const SharePointQueryableInstance: ISPInvokableFactory<ISharePointQueryableInstance<any>>;
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
export declare function deleteable(t: string): (this: ISharePointQueryable) => Promise<void>;
export interface IDeleteable {
    /**
     * Delete this instance
     */
    delete(): Promise<void>;
}
export declare function deleteableWithETag(t: string): (this: ISharePointQueryable, eTag?: string) => Promise<void>;
export interface IDeleteableWithETag {
    /**
     * Delete this instance
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    delete(eTag?: string): Promise<void>;
}
//# sourceMappingURL=sharepointqueryable.d.ts.map