import { SearchResults, SearchQueryInit } from "./search";
import { SearchSuggestQuery, SearchSuggestResult } from "./searchsuggest";
import { Site } from "./site";
import { Web } from "./webs";
import { ConfigOptions } from "@pnp/common";
import { UserProfileQuery } from "./userprofiles";
import { INavigationService } from "./navigation";
import { SPBatch } from "./batch";
import { SocialMethods } from "./social";
import { SiteScriptUtilityMethods } from "./sitescripts";
import { SiteDesignsUtilityMethods } from "./sitedesigns";
import { UtilityMethods } from "./utilities";
import { SPConfiguration } from "./config/splibconfig";
import { ICachingOptions } from "@pnp/odata";
import { HubSites } from "./hubsites";
/**
 * Root of the SharePoint REST module
 */
export declare class SPRest {
    protected _options: ConfigOptions;
    protected _baseUrl: string;
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(_options?: ConfigOptions, _baseUrl?: string);
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    configure(options: ConfigOptions, baseUrl?: string): SPRest;
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    setup(config: SPConfiguration): void;
    /**
     * Executes a search against this web context
     *
     * @param query The SearchQuery definition
     */
    searchSuggest(query: string | SearchSuggestQuery): Promise<SearchSuggestResult>;
    /**
     * Executes a search against this web context
     *
     * @param query The SearchQuery definition
     */
    search(query: SearchQueryInit): Promise<SearchResults>;
    /**
     * Executes the provided search query, caching the results
     *
     * @param query The SearchQuery definition
     * @param options The set of caching options used to store the results
     */
    searchWithCaching(query: SearchQueryInit, options?: ICachingOptions): Promise<SearchResults>;
    /**
     * Begins a site collection scoped REST request
     *
     */
    readonly site: Site;
    /**
     * Begins a web scoped REST request
     *
     */
    readonly web: Web;
    /**
     * Access to user profile methods
     *
     */
    readonly profiles: UserProfileQuery;
    /**
     * Access to social methods
     */
    readonly social: SocialMethods;
    /**
     * Access to the site collection level navigation service
     */
    readonly navigation: INavigationService;
    /**
     * Creates a new batch object for use with the SharePointQueryable.addToBatch method
     *
     */
    createBatch(): SPBatch;
    /**
     * Static utilities methods from SP.Utilities.Utility
     */
    readonly utility: UtilityMethods;
    /**
     * Access to sitescripts methods
     */
    readonly siteScripts: SiteScriptUtilityMethods;
    /**
     * Access to sitedesigns methods
     */
    readonly siteDesigns: SiteDesignsUtilityMethods;
    /**
     * Access to Hub Site methods
     */
    readonly hubSites: HubSites;
    /**
     * Gets the Web instance representing the tenant app catalog web
     */
    getTenantAppCatalogWeb(): Promise<Web>;
    /**
     * Handles creating and configuring the objects returned from this class
     *
     * @param fm The factory method used to create the instance
     * @param path Optional additional path information to pass to the factory method
     */
    private create;
}
export declare const sp: SPRest;
