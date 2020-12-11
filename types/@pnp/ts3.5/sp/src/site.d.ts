import { SharePointQueryableInstance } from "./sharepointqueryable";
import { Web } from "./webs";
import { UserCustomActions } from "./usercustomactions";
import { ContextInfo, DocumentLibraryInformation, ChangeQuery } from "./types";
import { SPBatch } from "./batch";
import { Features } from "./features";
/**
 * Describes a site collection
 *
 */
export declare class Site extends SharePointQueryableInstance {
    /**
     * Gets the root web of the site collection
     *
     */
    readonly rootWeb: Web;
    /**
     * Gets the active features for this site collection
     *
     */
    readonly features: Features;
    /**
     * Gets all custom actions for this site collection
     *
     */
    readonly userCustomActions: UserCustomActions;
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    getRootWeb(): Promise<Web>;
    /**
     * Gets the context information for this site collection
     */
    getContextInfo(): Promise<ContextInfo>;
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    getDocumentLibraries(absoluteWebUrl: string): Promise<DocumentLibraryInformation[]>;
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    getWebUrlFromPageUrl(absolutePageUrl: string): Promise<string>;
    /**
     * Returns the collection of changes from the change log that have occurred within the site, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query: ChangeQuery): Promise<any>;
    /**
     * Deletes the current site
     *
     */
    delete(): Promise<void>;
    /**
     * Creates a new batch for requests within the context of this site collection
     *
     */
    createBatch(): SPBatch;
    /**
     * Opens a web by id (using POST)
     *
     * @param webId The GUID id of the web to open
     */
    openWebById(webId: string): Promise<OpenWebByIdResult>;
    /**
     * Associates a site collection to a hub site.
     *
     * @param siteId Id of the hub site collection you want to join.
     * If you want to disassociate the site collection from hub site, then
     * pass the siteId as 00000000-0000-0000-0000-000000000000
     */
    joinHubSite(siteId: string): Promise<void>;
    /**
     * Registers the current site collection as hub site collection
     */
    registerHubSite(): Promise<void>;
    /**
     * Unregisters the current site collection as hub site collection.
     */
    unRegisterHubSite(): Promise<void>;
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
     * @param hubSiteId The Guid of the already existing Hub site
     * @param owner Required when creating the site using app-only context
     */
    createCommunicationSite(title: string, lcid: number, shareByEmailEnabled: boolean, url: string, description?: string, classification?: string, siteDesignId?: string, hubSiteId?: string, owner?: string): Promise<ISPSiteCreationResponse>;
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
     * @param siteDesignId The ID of the site design to apply to the new site
     */
    createModernTeamSite(displayName: string, alias: string, isPublic?: boolean, lcid?: number, description?: string, classification?: string, owners?: string[], hubSiteId?: string, siteDesignId?: string): Promise<void>;
}
/**
 * The result of opening a web by id: contains the data returned as well as a chainable web instance
 */
export interface OpenWebByIdResult {
    data: any;
    web: Web;
}
/**
 * The result of creating a site collection
 */
export interface ISPSiteCreationResponse {
    SiteId: string;
    SiteStatus: number;
    SiteUrl: string;
}
