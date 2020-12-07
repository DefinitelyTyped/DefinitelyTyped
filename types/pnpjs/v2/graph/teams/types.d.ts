import { _GraphQueryableInstance, _GraphQueryableCollection } from "../graphqueryable";
import { IUpdateable, IGetById, IDeleteable } from "../decorators";
/**
 * Represents a Microsoft Team
 */
export declare class _Team extends _GraphQueryableInstance<ITeamProperties> {
    get channels(): IChannels;
    /**
     * Archives this Team
     *
     * @param shouldSetSpoSiteReadOnlyForMembers Should members have Read-only in associated Team Site
     */
    archive(shouldSetSpoSiteReadOnlyForMembers?: boolean): Promise<void>;
    /**
    * Unarchives this Team
    */
    unarchive(): Promise<void>;
    /**
     * Clones this Team
     * @param name The name of the new Group
     * @param description Optional description of the group
     * @param partsToClone Parts to clone ex: apps,tabs,settings,channels,members
     * @param visibility Set visibility to public or private
     */
    cloneTeam(name: string, description?: string, partsToClone?: string, visibility?: "public" | "private"): Promise<void>;
}
export interface ITeam extends _Team, IUpdateable<ITeamProperties> {
}
export declare const Team: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITeam;
/**
 * Teams
 */
export declare class _Teams extends _GraphQueryableCollection<ITeamProperties[]> {
}
export interface ITeams extends _Teams, IGetById<ITeam> {
}
export declare const Teams: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITeams;
/**
 * Channel
 */
export declare class _Channel extends _GraphQueryableInstance {
    get tabs(): ITabs;
}
export interface IChannel extends _Channel {
}
export declare const Channel: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IChannel;
/**
 * Channels
 */
export declare class _Channels extends _GraphQueryableCollection {
    /**
     * Creates a new Channel in the Team
     * @param displayName The display name of the new channel
     * @param description Optional description of the channel
     *
     */
    add(displayName: string, description?: string): Promise<IChannelCreateResult>;
}
export interface IChannels extends _Channels, IGetById<IChannel> {
}
export declare const Channels: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IChannels;
/**
 * Tab
 */
export declare class _Tab extends _GraphQueryableInstance {
}
export interface ITab extends _Tab, IUpdateable, IDeleteable {
}
export declare const Tab: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITab;
/**
 * Tabs
 */
export declare class _Tabs extends _GraphQueryableCollection {
    /**
     * Adds a tab to the cahnnel
     * @param name The name of the new Tab
     * @param appUrl The url to an app ex: https://graph.microsoft.com/beta/appCatalogs/teamsApps/12345678-9abc-def0-123456789a
     * @param tabsConfiguration visit https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/teamstab_add for reference
     */
    add(name: string, appUrl: string, properties: ITabsConfiguration): Promise<ITabCreateResult>;
}
export interface ITabs extends _Tabs, IGetById<ITab> {
}
export declare const Tabs: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => ITabs;
export interface ITeamUpdateResult {
    data: any;
    team: ITeam;
}
export interface IChannelCreateResult {
    data: any;
    channel: IChannel;
}
export interface ITabCreateResult {
    data: any;
    tab: ITab;
}
export interface ITabUpdateResult {
    data: any;
    tab: ITab;
}
/**
 * Defines the properties for a Team
 *
 * TODO:: remove this once typings are present in graph types package
 */
export interface ITeamProperties {
    memberSettings?: {
        "allowCreateUpdateChannels"?: boolean;
        "allowDeleteChannels"?: boolean;
        "allowAddRemoveApps"?: boolean;
        "allowCreateUpdateRemoveTabs"?: boolean;
        "allowCreateUpdateRemoveConnectors"?: boolean;
    };
    guestSettings?: {
        "allowCreateUpdateChannels"?: boolean;
        "allowDeleteChannels"?: boolean;
    };
    messagingSettings?: {
        "allowUserEditMessages"?: boolean;
        "allowUserDeleteMessages"?: boolean;
        "allowOwnerDeleteMessages"?: boolean;
        "allowTeamMentions"?: boolean;
        "allowChannelMentions"?: boolean;
    };
    funSettings?: {
        "allowGiphy"?: boolean;
        "giphyContentRating"?: "strict" | string;
        "allowStickersAndMemes"?: boolean;
        "allowCustomMemes"?: boolean;
    };
}
export interface ITabsConfiguration {
    configuration: {
        "entityId": string;
        "contentUrl": string;
        "websiteUrl": string;
        "removeUrl": string;
    };
}
export interface ITeamCreateResult {
    data: any;
    team: ITeam;
}
//# sourceMappingURL=types.d.ts.map