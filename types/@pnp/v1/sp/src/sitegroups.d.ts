import { SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
import { SiteUsers } from "./siteusers";
import { TypedHash } from "@pnp/common";
/**
 * Principal Type enum
 *
 */
export declare enum PrincipalType {
    None = 0,
    User = 1,
    DistributionList = 2,
    SecurityGroup = 4,
    SharePointGroup = 8,
    All = 15
}
/**
 * Results from updating a group
 *
 */
export interface GroupUpdateResult {
    group: SiteGroup;
    data: any;
}
/**
 * Results from adding a group
 *
 */
export interface GroupAddResult {
    group: SiteGroup;
    data: any;
}
/**
 * Describes a collection of site groups
 *
 */
export declare class SiteGroups extends SharePointQueryableCollection {
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    getById(id: number): SiteGroup;
    /**
     * Adds a new group to the site collection
     *
     * @param props The group properties object of property names and values to be set for the group
     */
    add(properties: TypedHash<any>): Promise<GroupAddResult>;
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    getByName(groupName: string): SiteGroup;
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    removeById(id: number): Promise<void>;
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    removeByLoginName(loginName: string): Promise<any>;
}
/**
 * Describes a single group
 *
 */
export declare class SiteGroup extends SharePointQueryableInstance {
    /**
     * Gets the users for this group
     *
     */
    readonly users: SiteUsers;
    update: (props: TypedHash<any>) => Promise<GroupUpdateResult>;
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    setUserAsOwner(userId: number): Promise<any>;
}
export interface SiteGroupAddResult {
    group: SiteGroup;
    data: any;
}
