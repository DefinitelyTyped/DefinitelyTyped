import { _SharePointQueryableInstance, _SharePointQueryableCollection } from "../sharepointqueryable";
import { ISerializableNavigationNode } from "../navigation/types";
import { ISite } from "../sites/types";
export declare class _HubSites extends _SharePointQueryableCollection<IHubSiteInfo[]> {
    /**
     * Gets a Hub Site from the collection by id
     *
     * @param id The Id of the Hub Site
     */
    getById(id: string): IHubSite;
}
export interface IHubSites extends _HubSites {
}
export declare const HubSites: import("../sharepointqueryable").ISPInvokableFactory<IHubSites>;
export declare class _HubSite extends _SharePointQueryableInstance<IHubSiteInfo> {
    /**
     * Gets the ISite instance associated with this hubsite
     */
    getSite(): Promise<ISite>;
}
export interface IHubSite extends _HubSite {
}
export declare const HubSite: import("../sharepointqueryable").ISPInvokableFactory<IHubSite>;
export interface IHubSiteInfo {
    ID: string;
    Title: string;
    SiteId: string;
    TenantInstanceId: string;
    SiteUrl: string;
    LogoUrl: string;
    Description: string;
    Targets: string;
    SiteDesignId: string;
    RequiresJoinApproval: boolean;
    RelatedHubSiteIds: string[];
    ParentHubSiteId: string;
    HideNameInNavigation: boolean;
    EnablePermissionsSync: boolean;
}
export interface IHubSiteWebData {
    headerEmphasis: string | null;
    themeKey: string | null;
    name: string | null;
    url: string;
    logoUrl: string | null;
    usesMetadataNavigation: boolean;
    megaMenuEnabled: boolean;
    navigation: ISerializableNavigationNode[];
    isNavAudienceTargeted: boolean;
    siteDesignId: string;
    requiresJoinApproval: boolean;
    hideNameInNavigation: boolean;
    parentHubSiteId: string;
    relatedHubSiteIds: string | null;
}
//# sourceMappingURL=types.d.ts.map