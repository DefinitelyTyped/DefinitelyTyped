import { _SharePointQueryableInstance } from "../sharepointqueryable";
import { IWeb } from "../webs/types";
import { SPBatch } from "../batch";
import { IChangeQuery } from "../types";
export declare class _Site extends _SharePointQueryableInstance {
    /**
    * Gets the root web of the site collection
    *
    */
    get rootWeb(): IWeb;
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    getRootWeb(): Promise<IWeb>;
    /**
    * Gets the context information for this site collection
    */
    getContextInfo(): Promise<IContextInfo>;
    createBatch(): SPBatch;
    /**
    * Deletes the current site
    *
    */
    delete(): Promise<void>;
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    getDocumentLibraries(absoluteWebUrl: string): Promise<IDocumentLibraryInformation[]>;
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    getWebUrlFromPageUrl(absolutePageUrl: string): Promise<string>;
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query: IChangeQuery): Promise<any>;
    /**
    * Opens a web by id (using POST)
    *
    * @param webId The GUID id of the web to open
    */
    openWebById(webId: string): Promise<IOpenWebByIdResult>;
    /**
     * Creates a Modern communication site.
     *
     * @param title The title of the site to create
     * @param lcid The language to use for the site. If not specified will default to 1033 (English).
     * @param shareByEmailEnabled If set to true, it will enable sharing files via Email. By default it is set to false
     * @param url The fully qualified URL (e.g. https://yourtenant.sharepoint.com/sites/mysitecollection) of the site.
     * @param description The description of the communication site.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param siteDesignId The Guid of the site design to be used.
     *                     You can use the below default OOTB GUIDs:
     *                     Topic: 00000000-0000-0000-0000-000000000000
     *                     Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
     *                     Blank: f6cc5403-0d63-442e-96c0-285923709ffc
     * @param hubSiteId The id of the hub site to which the new site should be associated
     * @param owner Optional owner value, required if executing the method in app only mode
     */
    createCommunicationSite(title: string, lcid: number, shareByEmailEnabled: boolean, url: string, description?: string, classification?: string, siteDesignId?: string, hubSiteId?: string, owner?: string): Promise<ISiteCreationResponse>;
    createCommunicationSiteFromProps(props: ICreateCommSiteProps): Promise<ISiteCreationResponse>;
    /**
     *
     * @param url Site Url that you want to check if exists
     */
    exists(url: string): Promise<boolean>;
    /**
    * Creates a Modern team site backed by Office 365 group. For use in SP Online only. This will not work with App-only tokens
    *
    * @param displayName The title or display name of the Modern team site to be created
    * @param alias Alias of the underlying Office 365 Group
    * @param isPublic Defines whether the Office 365 Group will be public (default), or private.
    * @param lcid The language to use for the site. If not specified will default to English (1033).
    * @param description The description of the site to be created.
    * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
    * @param owners The Owners of the site to be created
    */
    createModernTeamSite(displayName: string, alias: string, isPublic?: boolean, lcid?: number, description?: string, classification?: string, owners?: string[], hubSiteId?: string, siteDesignId?: string): Promise<ISiteCreationResponse>;
    createModernTeamSiteFromProps(props: ICreateTeamSiteProps): Promise<ISiteCreationResponse>;
}
export interface ISite extends _Site {
}
export declare const Site: import("../sharepointqueryable").ISPInvokableFactory<ISite>;
/**
 * The result of opening a web by id: contains the data returned as well as a chainable web instance
 */
export interface IOpenWebByIdResult {
    data: any;
    web: IWeb;
}
/**
 * This is the interface to expose data i.e. context information of a site
 */
export interface IContextInfo {
    FormDigestTimeoutSeconds?: number;
    FormDigestValue?: number;
    LibraryVersion?: string;
    SiteFullUrl?: string;
    SupportedSchemaVersions?: string[];
    WebFullUrl?: string;
}
/**
 * This is the interface to expose data for Document Library
 */
export interface IDocumentLibraryInformation {
    AbsoluteUrl?: string;
    Modified?: Date;
    ModifiedFriendlyDisplay?: string;
    ServerRelativeUrl?: string;
    Title?: string;
}
export interface ICreateCommSiteProps {
    Classification?: string;
    Description?: string;
    HubSiteId?: string;
    Lcid?: number;
    Owner?: string;
    ShareByEmailEnabled?: boolean;
    SiteDesignId?: string;
    Title: string;
    Url: string;
    WebTemplate?: "SITEPAGEPUBLISHING#0" | "STS#3";
    WebTemplateExtensionId?: string;
}
export interface ICreateTeamSiteProps {
    displayName: string;
    alias: string;
    isPublic?: boolean;
    lcid?: number;
    description?: string;
    classification?: string;
    owners?: string[];
    hubSiteId?: string;
    siteDesignId?: string;
}
export interface ISiteCreationResponse {
    "SiteId": string;
    "SiteStatus": 0 | 1 | 2 | 3;
    "SiteUrl": string;
}
//# sourceMappingURL=types.d.ts.map