import { _SharePointQueryableInstance, ISharePointQueryableInstance, _SharePointQueryableCollection, ISharePointQueryable, IDeleteableWithETag } from "../sharepointqueryable";
import { ITypedHash } from "@pnp/common";
import { IListItemFormUpdateValue } from "../lists/types";
import { IList } from "../lists";
/**
 * Describes a collection of Item objects
 *
 */
export declare class _Items extends _SharePointQueryableCollection {
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    getById(id: number): IItem;
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId: string): IItem;
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    skip(skip: number, reverse?: boolean): this;
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    getPaged<T = any[]>(): Promise<PagedItemCollection<T>>;
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     *  @param acceptHeader Allows for setting the value of the Accept header for SP 2013 support
     */
    getAll(requestSize?: number, acceptHeader?: string): Promise<any[]>;
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    add(properties?: ITypedHash<any>, listItemEntityTypeFullName?: string): Promise<IItemAddResult>;
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    private ensureListItemEntityTypeName;
}
export interface IItems extends _Items {
}
export declare const Items: import("../sharepointqueryable").ISPInvokableFactory<IItems>;
/**
 * Descrines a single Item instance
 *
 */
export declare class _Item extends _SharePointQueryableInstance {
    delete: (this: ISharePointQueryable<any>, eTag?: string) => Promise<void>;
    /**
     * Gets the effective base permissions for the item
     *
     */
    readonly effectiveBasePermissions: ISharePointQueryable;
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    readonly effectiveBasePermissionsForUI: ISharePointQueryable;
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    readonly fieldValuesAsHTML: ISharePointQueryableInstance;
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    readonly fieldValuesAsText: ISharePointQueryableInstance;
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    readonly fieldValuesForEdit: ISharePointQueryableInstance;
    /**
     * Gets the collection of versions associated with this item
     */
    readonly versions: IItemVersions;
    readonly list: IList;
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    update(properties: ITypedHash<any>, eTag?: string, listItemEntityTypeFullName?: string): Promise<IItemUpdateResult>;
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): Promise<string>;
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    getWopiFrameUrl(action?: number): Promise<string>;
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues: IListItemFormUpdateValue[], bNewDocumentUpdate?: boolean): Promise<IListItemFormUpdateValue[]>;
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    private ensureListItemEntityTypeName;
}
export interface IItem extends _Item, IDeleteableWithETag {
}
export declare const Item: import("../sharepointqueryable").ISPInvokableFactory<IItem>;
/**
 * Describes a collection of Version objects
 *
 */
export declare class _ItemVersions extends _SharePointQueryableCollection {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId: number): IItemVersion;
}
export interface IItemVersions extends _ItemVersions {
}
export declare const ItemVersions: import("../sharepointqueryable").ISPInvokableFactory<IItemVersions>;
/**
 * Describes a single Version instance
 *
 */
export declare class _ItemVersion extends _SharePointQueryableInstance {
    delete: (this: ISharePointQueryable<any>, eTag?: string) => Promise<void>;
}
export interface IItemVersion extends _ItemVersion, IDeleteableWithETag {
}
export declare const ItemVersion: import("../sharepointqueryable").ISPInvokableFactory<IItemVersion>;
/**
 * Provides paging functionality for list items
 */
export declare class PagedItemCollection<T> {
    private parent;
    private nextUrl;
    results: T;
    constructor(parent: _Items, nextUrl: string, results: T);
    /**
     * If true there are more results available in the set, otherwise there are not
     */
    readonly hasNext: boolean;
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    getNext(): Promise<PagedItemCollection<T>>;
}
export interface IItemAddResult {
    item: IItem;
    data: any;
}
export interface IItemUpdateResult {
    item: IItem;
    data: IItemUpdateResultData;
}
export interface IItemUpdateResultData {
    "odata.etag": string;
}
//# sourceMappingURL=types.d.ts.map