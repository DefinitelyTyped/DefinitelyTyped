import { Items } from "./items";
import { Views, View } from "./views";
import { ContentTypes } from "./contenttypes";
import { Fields } from "./fields";
import { Forms } from "./forms";
import { Subscriptions } from "./subscriptions";
import { SharePointQueryable, SharePointQueryableCollection } from "./sharepointqueryable";
import { SharePointQueryableSecurable } from "./sharepointqueryablesecurable";
import { TypedHash } from "@pnp/common";
import { ControlMode, RenderListData, ChangeQuery, CamlQuery, ChangeLogitemQuery, ListFormData, RenderListDataParameters, ListItemFormUpdateValue } from "./types";
import { UserCustomActions } from "./usercustomactions";
import { Folder } from "./folders";
/**
 * Describes a collection of List objects
 *
 */
export declare class Lists extends SharePointQueryableCollection {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id: string): List;
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title: string): List;
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    add(title: string, description?: string, template?: number, enableContentTypes?: boolean, additionalSettings?: TypedHash<string | number | boolean>): Promise<ListAddResult>;
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    ensure(title: string, description?: string, template?: number, enableContentTypes?: boolean, additionalSettings?: TypedHash<string | number | boolean>): Promise<ListEnsureResult>;
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary(): Promise<List>;
    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary(): Promise<List>;
}
/**
 * Describes a single List instance
 *
 */
export declare class List extends SharePointQueryableSecurable {
    /**
     * Gets the content types in this list
     *
     */
    readonly contentTypes: ContentTypes;
    /**
     * Gets the items in this list
     *
     */
    readonly items: Items;
    /**
     * Gets the views in this list
     *
     */
    readonly views: Views;
    /**
     * Gets the fields in this list
     *
     */
    readonly fields: Fields;
    /**
     * Gets the forms in this list
     *
     */
    readonly forms: Forms;
    /**
     * Gets the default view of this list
     *
     */
    readonly defaultView: View;
    /**
     * Get all custom actions on a site collection
     *
     */
    readonly userCustomActions: UserCustomActions;
    /**
     * Gets the effective base permissions of this list
     *
     */
    readonly effectiveBasePermissions: SharePointQueryable;
    /**
     * Gets the event receivers attached to this list
     *
     */
    readonly eventReceivers: SharePointQueryableCollection;
    /**
     * Gets the related fields of this list
     *
     */
    readonly relatedFields: SharePointQueryable;
    /**
     * Gets the IRM settings for this list
     *
     */
    readonly informationRightsManagementSettings: SharePointQueryable;
    /**
     * Gets the webhook subscriptions of this list
     *
     */
    readonly subscriptions: Subscriptions;
    /**
     * The root folder of the list
     */
    readonly rootFolder: Folder;
    /**
     * Gets a view by view guid id
     *
     */
    getView(viewId: string): View;
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    update(properties: TypedHash<string | number | boolean>, eTag?: string): Promise<ListUpdateResult>;
    /**
     * Delete this list
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    delete(eTag?: string): Promise<void>;
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     */
    getChanges(query: ChangeQuery): Promise<any>;
    /**
     * Returns a collection of items from the list based on the specified query.
     *
     * @param CamlQuery The Query schema of Collaborative Application Markup
     * Language (CAML) is used in various ways within the context of Microsoft SharePoint Foundation
     * to define queries against list data.
     * see:
     *
     * https://msdn.microsoft.com/en-us/library/office/ms467521.aspx
     *
     * @param expands A URI with a $expand System Query Option indicates that Entries associated with
     * the Entry or Collection of Entries identified by the Resource Path
     * section of the URI must be represented inline (i.e. eagerly loaded).
     * see:
     *
     * https://msdn.microsoft.com/en-us/library/office/fp142385.aspx
     *
     * http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#ExpandSystemQueryOption
     */
    getItemsByCAMLQuery(query: CamlQuery, ...expands: string[]): Promise<any>;
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     */
    getListItemChangesSinceToken(query: ChangeLogitemQuery): Promise<string>;
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): Promise<string>;
    /**
     * Renders list data based on the view xml provided
     */
    renderListData(viewXml: string): Promise<RenderListData>;
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParameters The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param queryParams Allows setting of query parameters
     */
    renderListDataAsStream(parameters: RenderListDataParameters, overrideParameters?: any, queryParams?: Map<string, string>): Promise<any>;
    /**
     * Gets the field values and field schema attributes for a list item.
     */
    renderListFormData(itemId: number, formId: string, mode: ControlMode): Promise<ListFormData>;
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    reserveListItemId(): Promise<number>;
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     *
     */
    getListItemEntityTypeFullName(): Promise<string>;
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     */
    addValidateUpdateItemUsingPath(formValues: ListItemFormUpdateValue[], decodedUrl: string, bNewDocumentUpdate?: boolean, checkInComment?: string): Promise<ListItemFormUpdateValue[]>;
    /**
    * Gets the site script syntax (JSON) for the current list
    */
    getSiteScript(): Promise<string>;
}
export interface ListAddResult {
    list: List;
    data: any;
}
export interface ListUpdateResult {
    list: List;
    data: any;
}
export interface ListEnsureResult {
    list: List;
    created: boolean;
    data: any;
}
