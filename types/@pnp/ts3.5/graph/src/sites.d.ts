import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { TypedHash } from "@pnp/common";
import { Site as ISite, List as IList, ListItem as IListItem, ListItemVersion as IListItemVersion, ContentType as IContentType, ColumnDefinition as IColumnDefinition, ListInfo as IListInfo, ColumnLink as IColumnLink } from "@microsoft/microsoft-graph-types";
import { Drive, Drives, DriveItem } from "./onedrive";
export interface ISitesMethods {
    root: GraphSite;
    getById(baseUrl: string, relativeUrl?: string): GraphSite;
}
/**
 * Represents a Sites entity
 */
export declare class Sites extends GraphQueryableInstance<ISite> implements ISitesMethods {
    /**
     * Gets the root site collection of the tenant
     */
    readonly root: GraphSite;
    /**
     * Gets a Site instance by id
     *
     * @param baseUrl Base url ex: contoso.sharepoint.com
     * @param relativeUrl Optional relative url ex: /sites/site
     */
    getById(baseUrl: string, relativeUrl?: string): GraphSite;
    /**
     * Method to make sure the url is encoded as it should with :
     *
     */
    private _urlCombine;
}
/**
 * Describes a Site object
 *
 */
export declare class GraphSite extends GraphQueryableInstance<ISite> {
    readonly columns: GraphColumns;
    readonly contentTypes: GraphContentTypes;
    readonly drive: Drive;
    readonly drives: Drives;
    readonly lists: GraphLists;
    readonly sites: Sites;
}
/**
* Describes a collection of Content Type objects
*
*/
export declare class GraphContentTypes extends GraphQueryableCollection<IContentType[]> {
    /**
     * Gets a Content Type instance by id
     *
     * @param id Content Type id
     */
    getById(id: string): GraphContentType;
}
/**
 * Describes a Content Type object
 *
 */
export declare class GraphContentType extends GraphQueryableInstance<IContentType> {
}
/**
 * Describes a collection of Column Definition objects
 *
 */
export declare class GraphColumns extends GraphQueryableCollection<IColumnDefinition[]> {
    /**
     * Gets a Column instance by id
     *
     * @param id Column id
     */
    getById(id: string): GraphColumn;
}
/**
 * Describes a Column Definition object
 *
 */
export declare class GraphColumn extends GraphQueryableInstance<IColumnDefinition> {
    readonly columnLinks: GraphColumnLinks;
}
/**
 * Describes a collection of Column Link objects
 *
 */
export declare class GraphColumnLinks extends GraphQueryableCollection<IColumnLink[]> {
    /**
     * Gets a Column Link instance by id
     *
     * @param id Column link id
     */
    getById(id: string): GraphColumnLink;
}
/**
 * Describes a Column Link object
 *
 */
export declare class GraphColumnLink extends GraphQueryableInstance<IColumnLink> {
}
/**
* Describes a collection of Column definitions objects
*/
export declare class GraphLists extends GraphQueryableCollection<IList[]> {
    /**
     * Gets a List instance by id
     *
     * @param id List id
     */
    getById(id: string): GraphList;
    /**
    * Create a new List
    * @param displayName The display name of the List
    * @param list List information. Which template, if hidden, and contentTypesEnabled.
    * @param additionalProperties A plain object collection of additional properties you want to set in list
    *
    * */
    create(displayName: string, list: IListInfo, additionalProperties?: TypedHash<any>): Promise<IListCreationResult>;
}
/**
 * Describes a List object
 *
 */
export declare class GraphList extends GraphQueryableInstance<IList> {
    readonly columns: GraphColumns;
    readonly contentTypes: GraphContentTypes;
    readonly drive: Drive;
    readonly items: GraphItems;
}
/**
* Describes a collection of Item objects
*/
export declare class GraphItems extends GraphQueryableCollection<IListItem[]> {
    /**
     * Gets a List Item instance by id
     *
     * @param id List item id
     */
    getById(id: string): GraphItem;
    /**
    * Create a new Item
    * @param displayName The display name of the List
    * @param list List information. Which template, if hidden, and contentTypesEnabled.
    * @param additionalProperties A plain object collection of additional properties you want to set in list
    *
    * */
    create(fields: TypedHash<any>): Promise<IItemCreationResult>;
}
/**
 * Describes an Item object
 *
 */
export declare class GraphItem extends GraphQueryableInstance<IListItem> {
    readonly driveItem: DriveItem;
    readonly fields: GraphFields;
    readonly versions: GraphVersions;
    /**
     * Deletes this item
     */
    delete(): Promise<void>;
    /**
     * Update the properties of a item object
     *
     * @param properties Set of properties of this item to update
     */
    update(properties: IListItem): Promise<void>;
}
/**
 * Describes a collection of Field objects
 *
 */
export declare class GraphFields extends GraphQueryableCollection<any[]> {
}
/**
 * Describes a collection of Version objects
 *
 */
export declare class GraphVersions extends GraphQueryableCollection<IListItemVersion[]> {
    /**
    * Gets a Version instance by id
    *
    * @param id Version id
    */
    getById(id: string): Version;
}
/**
 * Describes a Version object
 *
 */
export declare class Version extends GraphQueryableInstance<IListItemVersion> {
}
export interface IListCreationResult {
    data: IList;
    list: GraphList;
}
export interface IItemCreationResult {
    data: IListItem;
    item: GraphItem;
}
