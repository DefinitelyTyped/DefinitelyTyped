import { ISharePointQueryableCollection, _SharePointQueryableInstance, _SharePointQueryableCollection, ISharePointQueryable, IDeleteableWithETag } from "../sharepointqueryable";
import { IChangeQuery } from "../types";
import { IBasePermissions } from "../security/types";
import { IFieldInfo } from "../fields/types";
import { IFormInfo } from "../forms/types";
import { IFolderInfo } from "../folders/types";
import { IViewInfo } from "../views/types";
import { IUserCustomActionInfo } from "../user-custom-actions/types";
import { IResourcePath } from "../utils/toResourcePath";
export declare class _Lists extends _SharePointQueryableCollection<IListInfo[]> {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id: string): IList;
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title: string): IList;
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    add(title: string, desc?: string, template?: number, enableContentTypes?: boolean, additionalSettings?: Partial<IListInfo>): Promise<IListAddResult>;
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    ensure(title: string, desc?: string, template?: number, enableContentTypes?: boolean, additionalSettings?: Partial<IListInfo>): Promise<IListEnsureResult>;
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary(): Promise<IList>;
    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary(): Promise<IList>;
}
export interface ILists extends _Lists {
}
export declare const Lists: import("../sharepointqueryable").ISPInvokableFactory<ILists>;
export declare class _List extends _SharePointQueryableInstance<IListInfo> {
    delete: (this: ISharePointQueryable<any>, eTag?: string) => Promise<void>;
    /**
     * Gets the effective base permissions of this list
     *
     */
    get effectiveBasePermissions(): ISharePointQueryable;
    /**
     * Gets the event receivers attached to this list
     *
     */
    get eventReceivers(): ISharePointQueryableCollection;
    /**
     * Gets the related fields of this list
     *
     */
    get relatedFields(): ISharePointQueryable;
    /**
     * Gets the IRM settings for this list
     *
     */
    get informationRightsManagementSettings(): ISharePointQueryable;
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    update(properties: Partial<IListInfo>, eTag?: string): Promise<IListUpdateResult>;
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    getChanges(query: IChangeQuery): Promise<any>;
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    getItemsByCAMLQuery(query: ICamlQuery, ...expands: string[]): Promise<any>;
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    getListItemChangesSinceToken(query: IChangeLogItemQuery): Promise<string>;
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): Promise<string>;
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    renderListData(viewXml: string): Promise<IRenderListData>;
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    renderListDataAsStream(parameters: IRenderListDataParameters, overrideParams?: any, query?: Map<string, string>): Promise<IRenderListDataAsStreamResult>;
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    renderListFormData(itemId: number, formId: string, mode: ControlMode): Promise<IListFormData>;
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    reserveListItemId(): Promise<number>;
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     */
    getListItemEntityTypeFullName(): Promise<string>;
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    addValidateUpdateItemUsingPath(formValues: IListItemFormUpdateValue[], decodedUrl: string, bNewDocumentUpdate?: boolean, checkInComment?: string, additionalProps?: {
        /**
         * If creating a document or folder, the name
         */
        leafName?: string;
        /**
         * 0: File, 1: Folder, 2: Web
         */
        objectType?: 0 | 1 | 2;
    }): Promise<IListItemFormUpdateValue[]>;
    /**
     * Gets the parent information for this item's list and web
     */
    getParentInfos(): Promise<IListParentInfos>;
}
export interface IList extends _List, IDeleteableWithETag {
}
export declare const List: import("../sharepointqueryable").ISPInvokableFactory<IList>;
/**
 * Represents the output of the add method
 */
export interface IListAddResult {
    list: IList;
    data: any;
}
/**
 * Represents the output of the update method
 */
export interface IListUpdateResult {
    list: IList;
    data: any;
}
/**
 * Represents the output of the ensure method
 */
export interface IListEnsureResult {
    list: IList;
    created: boolean;
    data: any;
}
/**
 * Specifies a Collaborative Application Markup Language (CAML) query on a list or joined lists.
 */
export interface ICamlQuery {
    /**
     * Gets or sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format.
     */
    DatesInUtc?: boolean;
    /**
     * Gets or sets a value that specifies the server relative URL of a list folder from which results will be returned.
     */
    FolderServerRelativeUrl?: string;
    /**
     * Gets or sets a value that specifies the information required to get the next page of data for the list view.
     */
    ListItemCollectionPosition?: IListItemCollectionPosition;
    /**
     * Gets or sets value that specifies the XML schema that defines the list view.
     */
    ViewXml?: string;
}
/**
 * Specifies the information required to get the next page of data for a list view.
 */
export interface IListItemCollectionPosition {
    /**
     * Gets or sets a value that specifies information, as name-value pairs, required to get the next page of data for a list view.
     */
    PagingInfo: string;
}
/**
 * Represents the input parameter of the GetListItemChangesSinceToken method.
 */
export interface IChangeLogItemQuery {
    /**
     * The change token for the request.
     */
    ChangeToken?: string;
    /**
     * The XML element that defines custom filtering for the query.
     */
    Contains?: string;
    /**
     * The records from the list to return and their return order.
     */
    Query?: string;
    /**
     * The options for modifying the query.
     */
    QueryOptions?: string;
    /**
     * RowLimit
     */
    RowLimit?: string;
    /**
     * The names of the fields to include in the query result.
     */
    ViewFields?: string;
    /**
     * The GUID of the view.
     */
    ViewName?: string;
}
/**
 * Represents the output parameter of the renderListFormData method.
 */
export interface IListFormData {
    ContentType?: string;
    Title?: string;
    Author?: string;
    Editor?: string;
    Created?: Date;
    Modified: Date;
    Attachments?: any;
    ListSchema?: any;
    FormControlMode?: number;
    FieldControlModes?: {
        Title?: number;
        Author?: number;
        Editor?: number;
        Created?: number;
        Modified?: number;
        Attachments?: number;
    };
    WebAttributes?: {
        WebUrl?: string;
        EffectivePresenceEnabled?: boolean;
        AllowScriptableWebParts?: boolean;
        PermissionCustomizePages?: boolean;
        LCID?: number;
        CurrentUserId?: number;
    };
    ItemAttributes?: {
        Id?: number;
        FsObjType?: number;
        ExternalListItem?: boolean;
        Url?: string;
        EffectiveBasePermissionsLow?: number;
        EffectiveBasePermissionsHigh?: number;
    };
    ListAttributes?: {
        Id?: string;
        BaseType?: number;
        Direction?: string;
        ListTemplateType?: number;
        DefaultItemOpen?: number;
        EnableVersioning?: boolean;
    };
    CSRCustomLayout?: boolean;
    PostBackRequired?: boolean;
    PreviousPostBackHandled?: boolean;
    UploadMode?: boolean;
    SubmitButtonID?: string;
    ItemContentTypeName?: string;
    ItemContentTypeId?: string;
    JSLinks?: string;
}
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
export declare enum RenderListDataOptions {
    None = 0,
    ContextInfo = 1,
    ListData = 2,
    ListSchema = 4,
    MenuView = 8,
    ListContentType = 16,
    FileSystemItemId = 32,
    ClientFormSchema = 64,
    QuickLaunch = 128,
    Spotlight = 256,
    Visualization = 512,
    ViewMetadata = 1024,
    DisableAutoHyperlink = 2048,
    EnableMediaTAUrls = 4096,
    ParentInfo = 8192,
    PageContextInfo = 16384,
    ClientSideComponentManifest = 32768
}
/**
 * Represents the parameters to be used to render list data as JSON string in the RenderListDataAsStream method of IList.
 */
export interface IRenderListDataParameters {
    AddRequiredFields?: boolean;
    AllowMultipleValueFilterForTaxonomyFields?: boolean;
    AudienceTarget?: boolean;
    DatesInUtc?: boolean;
    DeferredRender?: boolean;
    ExpandGroups?: boolean;
    FirstGroupOnly?: boolean;
    FolderServerRelativeUrl?: string;
    ImageFieldsToTryRewriteToCdnUrls?: string;
    MergeDefaultView?: boolean;
    OriginalDate?: boolean;
    OverrideViewXml?: string;
    Paging?: string;
    ReplaceGroup?: boolean;
    RenderOptions?: RenderListDataOptions[] | number;
    ViewXml?: string;
}
/**
 * Represents properties of a list item field and its value.
 */
export interface IListItemFormUpdateValue {
    /**
     * The error message result after validating the value for the field.
     */
    ErrorMessage?: string;
    /**
     * The internal name of the field.
     */
    FieldName?: string;
    /**
     * The value of the field, in string format.
     */
    FieldValue?: string;
    /**
     * Indicates whether there was an error result after validating the value for the field.
     */
    HasException?: boolean;
}
/**
 * Represents the output parameter of the renderListData method.
 */
export interface IRenderListData {
    Row: any[];
    FirstRow: number;
    FolderPermissions: string;
    LastRow: number;
    FilterLink: string;
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;
}
/**
 * Determines the display mode of the given control or view
 */
export declare enum ControlMode {
    Display = 1,
    Edit = 2,
    New = 3
}
export interface IListInfo {
    AllowContentTypes: boolean;
    AllowDeletion: boolean;
    BaseTemplate: number;
    BaseType: any;
    BrowserFileHandling: any;
    ContentTypes: any[];
    ContentTypesEnabled: boolean;
    CrawlNonDefaultViews: boolean;
    CreatablesInfo: any;
    Created: string;
    CurrentChangeToken: any;
    CustomActionElements: any[];
    DataSource: any;
    DefaultContentApprovalWorkflowId: string;
    DefaultDisplayFormUrl: string;
    DefaultEditFormUrl: string;
    DefaultNewFormUrl: string;
    DefaultView: any;
    DefaultViewPath: any;
    DefaultViewUrl: string;
    Description: string;
    DescriptionResource: any;
    Direction: string;
    DocumentTemplateUrl: string;
    DraftVersionVisibility: any;
    EffectiveBasePermissions: IBasePermissions;
    EffectiveBasePermissionsForUI: IBasePermissions;
    EnableAssignToEmail: boolean;
    EnableAttachments: boolean;
    EnableFolderCreation: boolean;
    EnableMinorVersions: boolean;
    EnableModeration: boolean;
    EnableRequestSignOff: boolean;
    EnableVersioning: boolean;
    EntityTypeName: string;
    EventReceivers: any[];
    ExcludeFromOfflineClient: boolean;
    ExemptFromBlockDownloadOfNonViewableFiles: boolean;
    Fields: Partial<IFieldInfo>[];
    FileSavePostProcessingEnabled: boolean;
    ForceCheckout: boolean;
    Forms: IFormInfo[];
    HasExternalDataSource: boolean;
    Hidden: boolean;
    Id: string;
    ImagePath: {
        DecodedUrl: string;
    };
    ImageUrl: string;
    InformationRightsManagementSettings: any[];
    IrmEnabled: boolean;
    IrmExpire: boolean;
    IrmReject: boolean;
    IsApplicationList: boolean;
    IsCatalog: boolean;
    IsPrivate: boolean;
    IsSiteAssetsLibrary: boolean;
    IsSystemList: boolean;
    ItemCount: number;
    LastItemDeletedDate: string;
    LastItemModifiedDate: string;
    LastItemUserModifiedDate: string;
    ListExperienceOptions: number;
    ListItemEntityTypeFullName: string;
    MajorVersionLimit: number;
    MajorWithMinorVersionsLimit: number;
    MultipleDataList: boolean;
    NoCrawl: boolean;
    OnQuickLaunch: boolean;
    ParentWebPath: {
        DecodedUrl: string;
    };
    ParentWebUrl: string;
    ParserDisabled: boolean;
    ReadSecurity: number;
    RootFolder: IFolderInfo;
    SchemaXml: string;
    ServerTemplateCanCreateFolders: boolean;
    TemplateFeatureId: string;
    Title: string;
    UserCustomActions: IUserCustomActionInfo[];
    ValidationFormula: string;
    ValidationMessage: string;
    Views: IViewInfo[];
    WorkflowAssociations: any[];
    WriteSecurity: number;
}
export interface IRenderListDataAsStreamResult {
    CurrentFolderSpItemUrl: string;
    FilterLink: string;
    FirstRow: number;
    FolderPermissions: string;
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;
    LastRow: number;
    Row: any[];
    RowLimit: number;
}
export interface IListParentInfos {
    List: {
        Id: string;
        RootFolderServerRelativePath: IResourcePath;
        RootFolderServerRelativeUrl: string;
        RootFolderUniqueId: string;
    };
    ParentWeb: {
        Id: string;
        ServerRelativePath: IResourcePath;
        ServerRelativeUrl: string;
        Url: string;
    };
}
//# sourceMappingURL=types.d.ts.map