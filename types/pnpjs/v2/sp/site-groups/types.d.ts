import { _SharePointQueryableInstance, _SharePointQueryableCollection } from "../sharepointqueryable";
import { ISiteUsers } from "../site-users/types";
import { ITypedHash } from "@pnp/common";
export declare class _SiteGroups extends _SharePointQueryableCollection<ISiteGroupInfo[]> {
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    getById(id: number): ISiteGroup;
    /**
     * Adds a new group to the site collection
     *
     * @param properties The group properties object of property names and values to be set for the group
     */
    add(properties: ITypedHash<any>): Promise<IGroupAddResult>;
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    getByName(groupName: string): ISiteGroup;
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
export interface ISiteGroups extends _SiteGroups {
}
export declare const SiteGroups: import("../sharepointqueryable").ISPInvokableFactory<ISiteGroups>;
export declare class _SiteGroup extends _SharePointQueryableInstance<ISiteGroupInfo> {
    /**
     * Gets the users for this group
     *
     */
    readonly users: ISiteUsers;
    /**
     * Updates the group with the given property values
     *
     * @param props The group properties object of property names and values to be set for the group
     */
    update: (props: ITypedHash<any>) => Promise<IGroupUpdateResult>;
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    setUserAsOwner(userId: number): Promise<any>;
}
export interface ISiteGroup extends _SiteGroup {
}
export declare const SiteGroup: import("../sharepointqueryable").ISPInvokableFactory<ISiteGroup>;
/**
 * Result from updating a group
 *
 */
export interface IGroupUpdateResult {
    group: ISiteGroup;
    data: any;
}
/**
 * Results from adding a group
 *
 */
export interface IGroupAddResult {
    group: ISiteGroup;
    data: any;
}
export interface ISiteGroupInfo {
    AllowMembersEditMembership: boolean;
    AllowRequestToJoinLeave: boolean;
    AutoAcceptRequestToJoinLeave: boolean;
    Description: string;
    Id: number;
    IsHiddenInUI: boolean;
    LoginName: string;
    OnlyAllowMembersViewMembership: boolean;
    OwnerTitle: string;
    PrincipalType: number;
    RequestToJoinLeaveEmailSetting: string | null;
    Title: string;
}
//# sourceMappingURL=types.d.ts.map