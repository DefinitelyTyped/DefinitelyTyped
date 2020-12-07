import { Group } from "./groups";
import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { TeamProperties, TabsConfiguration } from "./types";
import { ODataParser } from "@pnp/odata";
import { FetchOptions, TypedHash } from "@pnp/common";
export declare class Teams extends GraphQueryableCollection {
    /**
     * Creates a new team and associated Group with the given information
     * @param name The name of the new Group
     * @param mailNickname The email alias for the group
     * @param description Optional description of the group
     * @param ownerId Add an owner with a user id from the graph
     */
    create(name: string, mailNickname: string, description: string, ownerId: string, teamProperties?: TeamProperties): Promise<TeamCreateResult>;
    getById(id: string): Team;
}
/**
 * Represents a Microsoft Team
 */
export declare class Team extends GraphQueryableInstance<TeamProperties> {
    readonly channels: Channels;
    readonly installedApps: Apps;
    /**
     * Updates this team instance's properties
     *
     * @param properties The set of properties to update
     */
    update(properties: TeamProperties): Promise<TeamUpdateResult>;
    /**
     * Archives this Team
     *
     * @param shouldSetSpoSiteReadOnlyForMembers Should members have Read-only in associated Team Site
     */
    archive(shouldSetSpoSiteReadOnlyForMembers?: boolean): Promise<TeamUpdateResult>;
    /**
    * Unarchives this Team
    *
    */
    unarchive(): Promise<TeamUpdateResult>;
    /**
     * Clones this Team
     * @param name The name of the new Group
     * @param mailNickname The email alias for the group
     * @param description Optional description of the group
     * @param partsToClone Parts to clone ex: apps,tabs,settings,channels,members
     * @param visibility Set visibility to public or private
     */
    cloneTeam(name: string, mailNickname: string, description: string, partsToClone: string, visibility: string): Promise<TeamUpdateResult>;
    /**
     * Executes the currently built request
     *
     * @param parser Allows you to specify a parser to handle the result
     * @param getOptions The options used for this request
     */
    get<T = TeamProperties>(parser?: ODataParser<T>, options?: FetchOptions): Promise<T>;
}
export declare class Channels extends GraphQueryableCollection {
    /**
     * Creates a new Channel in the Team
     * @param name The display name of the new channel
     * @param description Optional description of the channel
     *
     */
    create(name: string, description?: string): Promise<ChannelCreateResult>;
    getById(id: string): Channel;
}
export declare class Channel extends GraphQueryableInstance {
    readonly tabs: Tabs;
}
export declare class Apps extends GraphQueryableCollection {
    /**
     * Creates a new App in the Team
     * @param appUrl The url to an app ex: https://graph.microsoft.com/beta/appCatalogs/teamsApps/12345678-9abc-def0-123456789a
     *
     */
    add(appUrl: string): Promise<any>;
    /**
     * Deletes this app
     */
    remove(): Promise<void>;
}
export declare class Tabs extends GraphQueryableCollection {
    /**
     * Adds a tab to the cahnnel
     * @param name The name of the new Tab
     * @param appUrl The url to an app ex: https://graph.microsoft.com/beta/appCatalogs/teamsApps/12345678-9abc-def0-123456789a
     * @param tabsConfiguration visit https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/teamstab_add for reference
     */
    add(name: string, appUrl: string, properties: TabsConfiguration): Promise<TabCreateResult>;
    getById(id: string): Tab;
}
/**
 * Represents a Microsoft Team
 */
export declare class Tab extends GraphQueryableInstance<TeamProperties> {
    /**
     * Updates this tab
     *
     * @param properties The set of properties to update
     */
    update(properties: TypedHash<string | number | boolean | string[]>): Promise<TabUpdateResult>;
    /**
     * Deletes this tab
     */
    remove(): Promise<void>;
}
export interface TeamUpdateResult {
    data: any;
    team: Team;
}
export interface TeamCreateResult {
    data: any;
    group: Group;
    team: Team;
}
export interface ChannelCreateResult {
    data: any;
    channel: Channel;
}
export interface TabCreateResult {
    data: any;
    tab: Tab;
}
export interface TabUpdateResult {
    data: any;
    tab: Tab;
}
