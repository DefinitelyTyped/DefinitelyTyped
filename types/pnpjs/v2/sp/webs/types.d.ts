import { ITypedHash } from "../../common";
import { _SharePointQueryableInstance, _SharePointQueryableCollection, ISharePointQueryableCollection, ISharePointQueryableInstance, IDeleteable } from "../sharepointqueryable";
import { IChangeQuery } from "../types";
import { SPBatch } from "../batch";
import { IOpenWebByIdResult } from "../sites";
export declare class _Webs extends _SharePointQueryableCollection<IWebInfo[]> {
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    add(title: string, url: string, description?: string, template?: string, language?: number, inheritPermissions?: boolean): Promise<IWebAddResult>;
}
export interface IWebs extends _Webs {
}
export declare const Webs: import("../sharepointqueryable").ISPInvokableFactory<IWebs>;
/**
 * Describes a web
 *
 */
export declare class _Web extends _SharePointQueryableInstance<IWebInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    /**
     * Gets this web's subwebs
     *
     */
    get webs(): IWebs;
    /**
     * Gets this web's parent web and data
     *
     */
    getParentWeb(): Promise<IOpenWebByIdResult>;
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter?: number, nConfigurationFilter?: number): IWebs;
    /**
     * Allows access to the web's all properties collection
     */
    get allProperties(): ISharePointQueryableInstance;
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    get webinfos(): ISharePointQueryableCollection<IWebInfosData[]>;
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    createBatch(): SPBatch;
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    update(properties: ITypedHash<any>): Promise<IWebUpdateResult>;
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl: string, fontSchemeUrl: string, backgroundImageUrl: string, shareGenerated: boolean): Promise<void>;
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template: string): Promise<void>;
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language?: number, includeCrossLanugage?: boolean): ISharePointQueryableCollection;
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query: IChangeQuery): Promise<any>;
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename: string, size?: number, progId?: string): Promise<string>;
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    getStorageEntity(key: string): Promise<IStorageEntity>;
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    setStorageEntity(key: string, value: string, description?: string, comments?: string): Promise<void>;
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    removeStorageEntity(key: string): Promise<void>;
}
export interface IWeb extends _Web, IDeleteable {
}
export declare const Web: import("../sharepointqueryable").ISPInvokableFactory<IWeb>;
/**
 * Result from adding a web
 *
 */
export interface IWebAddResult {
    data: IWebInfo;
    web: IWeb;
}
/**
 * Result from updating a web
 *
 */
export interface IWebUpdateResult {
    data: any;
    web: IWeb;
}
export interface IWebInfosData {
    Configuration: number;
    Created: string;
    Description: string;
    Id: string;
    Language: number;
    LastItemModifiedDate: string;
    LastItemUserModifiedDate: string;
    ServerRelativeUrl: string;
    Title: string;
    WebTemplate: string;
    WebTemplateId: number;
}
export interface IStorageEntity {
    Value: string | null;
    Comment: string | null;
    Description: string | null;
}
export interface IWebInfo {
    AlternateCssUrl: string;
    AppInstanceId: string;
    ClassicWelcomePage: string | null;
    Configuration: number;
    Created: string;
    CurrentChangeToken: {
        StringValue: string;
    };
    CustomMasterUrl: string;
    Description: string;
    DesignPackageId: string;
    DocumentLibraryCalloutOfficeWebAppPreviewersDisabled: boolean;
    EnableMinimalDownload: boolean;
    FooterEmphasis: number;
    FooterEnabled: boolean;
    FooterLayout: number;
    HeaderEmphasis: number;
    HeaderLayout: number;
    HorizontalQuickLaunch: boolean;
    Id: string;
    IsHomepageModernized: boolean;
    IsMultilingual: boolean;
    IsRevertHomepageLinkHidden: boolean;
    Language: number;
    LastItemModifiedDate: string;
    LastItemUserModifiedDate: string;
    MasterUrl: string;
    MegaMenuEnabled: boolean;
    NavAudienceTargetingEnabled: boolean;
    NoCrawl: boolean;
    ObjectCacheEnabled: boolean;
    OverwriteTranslationsOnChange: boolean;
    QuickLaunchEnabled: boolean;
    RecycleBinEnabled: boolean;
    ResourcePath: {
        DecodedUrl: string;
    };
    SearchScope: number;
    ServerRelativeUrl: string;
    SiteLogoUrl: string | null;
    SyndicationEnabled: boolean;
    TenantAdminMembersCanShare: number;
    Title: string;
    TreeViewEnabled: boolean;
    UIVersion: number;
    UIVersionConfigurationEnabled: boolean;
    Url: string;
    WebTemplate: string;
    WelcomePage: string;
}
//# sourceMappingURL=types.d.ts.map