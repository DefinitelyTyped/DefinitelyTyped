import { SharePointQueryable, SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
import { SiteGroups } from "./sitegroups";
import { TypedHash } from "@pnp/common";
/**
 * Properties that provide both a getter, and a setter.
 *
 */
export interface UserUpdateResult {
    user: SiteUser;
    data: any;
}
/**
 * Describes a collection of all site collection users
 *
 */
export declare class SiteUsers extends SharePointQueryableCollection {
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    getById(id: number): SiteUser;
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    getByEmail(email: string): SiteUser;
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    getByLoginName(loginName: string): SiteUser;
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    removeById(id: number | SharePointQueryable): Promise<any>;
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    removeByLoginName(loginName: string): Promise<any>;
    /**
     * Adds a user to a group
     *
     * @param loginName The login name of the user to add to the group
     *
     */
    add(loginName: string): Promise<SiteUser>;
}
/**
 * Base class for a user
 *
 */
export declare class UserBase extends SharePointQueryableInstance {
    /**
     * Gets the groups for this user
     *
     */
    readonly groups: SiteGroups;
}
/**
 * Describes a single user
 *
 */
export declare class SiteUser extends UserBase {
    /**
    * Updates this user instance with the supplied properties
    *
    * @param properties A plain object of property names and values to update for the user
    */
    update: (props: TypedHash<any>) => Promise<UserUpdateResult>;
    /**
     * Delete this user
     *
     */
    delete: () => Promise<void>;
}
/**
 * Represents the current user
 */
export declare class CurrentUser extends UserBase {
}
export interface SiteUserProps {
    Email: string;
    Id: number;
    IsHiddenInUI: boolean;
    IsShareByEmailGuestUser: boolean;
    IsSiteAdmin: boolean;
    LoginName: string;
    PrincipalType: number;
    Title: string;
}
