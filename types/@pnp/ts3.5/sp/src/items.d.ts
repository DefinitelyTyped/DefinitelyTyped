import { SharePointQueryable, SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
import { SharePointQueryableShareableItem } from "./sharepointqueryableshareable";
import { Folder } from "./folders";
import { File } from "./files";
import { ContentType } from "./contenttypes";
import { TypedHash } from "@pnp/common";
import { ListItemFormUpdateValue, LikeData } from "./types";
import { ODataParser } from "@pnp/odata";
import { AttachmentFiles } from "./attachmentfiles";
import { List } from "./lists";
import { Comments } from "./comments";
/**
 * Describes a collection of Item objects
 *
 */
export declare class Items extends SharePointQueryableCollection {
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    getById(id: number): Item;
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId: string): Item;
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
    getPaged<T = any[]>(parser?: ODataParser<any>): Promise<PagedItemCollection<T>>;
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
    add(properties?: TypedHash<any>, listItemEntityTypeFullName?: string): Promise<ItemAddResult>;
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    private ensureListItemEntityTypeName;
}
/**
 * Descrines a single Item instance
 *
 */
export declare class Item extends SharePointQueryableShareableItem {
    /**
     * Delete this item
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    delete: (eTag?: string) => Promise<void>;
    /**
     * Gets the set of attachments for this item
     *
     */
    readonly attachmentFiles: AttachmentFiles;
    /**
     * Gets the content type for this item
     *
     */
    readonly contentType: ContentType;
    /**
     * Gets the collection of comments associated with this list item
     */
    readonly comments: Comments;
    /**
     * Gets the effective base permissions for the item
     *
     */
    readonly effectiveBasePermissions: SharePointQueryable;
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    readonly effectiveBasePermissionsForUI: SharePointQueryable;
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    readonly fieldValuesAsHTML: SharePointQueryableInstance;
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    readonly fieldValuesAsText: SharePointQueryableInstance;
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    readonly fieldValuesForEdit: SharePointQueryableInstance;
    /**
     * Gets the folder associated with this list item (if this item represents a folder)
     *
     */
    readonly folder: Folder;
    /**
     * Gets the folder associated with this list item (if this item represents a folder)
     *
     */
    readonly file: File;
    /**
     * Gets the collection of versions associated with this item
     */
    readonly versions: ItemVersions;
    readonly list: List;
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    update(properties: TypedHash<any>, eTag?: string, listItemEntityTypeFullName?: string): Promise<ItemUpdateResult>;
    /**
     * Gets the collection of people who have liked this item
     */
    getLikedBy(): Promise<LikeData[]>;
    /**
     * Likes this item as the current user
     */
    like(): Promise<void>;
    /**
     * Unlikes this item as the current user
     */
    unlike(): Promise<void>;
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
     * @param newDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues: ListItemFormUpdateValue[], newDocumentUpdate?: boolean): Promise<ListItemFormUpdateValue[]>;
    /**
     * Get the like by information for a modern site page
     */
    getLikedByInformation(): Promise<void>;
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    private ensureListItemEntityTypeName;
}
export interface ItemAddResult {
    item: Item;
    data: any;
}
export interface ItemUpdateResult {
    item: Item;
    data: ItemUpdateResultData;
}
export interface ItemUpdateResultData {
    "odata.etag": string;
}
/**
 * Describes a collection of Version objects
 *
 */
export declare class ItemVersions extends SharePointQueryableCollection {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId: number): ItemVersion;
}
/**
 * Describes a single Version instance
 *
 */
export declare class ItemVersion extends SharePointQueryableInstance {
    /**
    * Delete a specific version of a file.
    *
    * @param eTag Value used in the IF-Match header, by default "*"
    */
    delete: (eTag?: string) => Promise<void>;
}
/**
 * Provides paging functionality for list items
 */
export declare class PagedItemCollection<T> {
    private parent;
    private nextUrl;
    results: T;
    private innerParser;
    constructor(parent: Items, nextUrl: string, results: T, innerParser: ODataParser<T>);
    /**
     * If true there are more results available in the set, otherwise there are not
     */
    readonly hasNext: boolean;
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    getNext(): Promise<PagedItemCollection<T>>;
}
