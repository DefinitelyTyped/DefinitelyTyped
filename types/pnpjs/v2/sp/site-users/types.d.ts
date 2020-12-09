import { _SharePointQueryableInstance, _SharePointQueryableCollection, IDeleteable } from "../sharepointqueryable";
import { ISiteGroups } from "../site-groups/types";
import { ITypedHash } from "@pnp/common";
import { PrincipalType } from "../types";
export declare class _SiteUsers extends _SharePointQueryableCollection<ISiteUserInfo[]> {
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    getById(id: number): ISiteUser;
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    getByEmail(email: string): ISiteUser;
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    getByLoginName(loginName: string): ISiteUser;
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    removeById(id: number): Promise<any>;
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    removeByLoginName(loginName: string): Promise<any>;
    /**
     * Adds a user to a site collection
     *
     * @param loginName The login name of the user to add  to a site collection
     *
     */
    add(loginName: string): Promise<ISiteUser>;
}
export interface ISiteUsers extends _SiteUsers {
}
export declare const SiteUsers: import("../sharepointqueryable").ISPInvokableFactory<ISiteUsers>;
/**
 * Describes a single user
 *
 */
export declare class _SiteUser extends _SharePointQueryableInstance<ISiteUserInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    /**
     * Gets the groups for this user
     *
     */
    readonly groups: ISiteGroups;
    /**
    * Updates this user instance with the supplied properties
    *
    * @param properties A plain object of property names and values to update for the user
    */
    update: (props: ITypedHash<any>) => Promise<IUserUpdateResult>;
}
export interface ISiteUser extends _SiteUser, IDeleteable {
}
export declare const SiteUser: import("../sharepointqueryable").ISPInvokableFactory<ISiteUser>;
export interface ISiteUserInfo extends ISiteUserProps {
    Expiration: string;
    IsEmailAuthenticationGuestUser: boolean;
    UserId: {
        NameId: string;
        NameIdIssuer: string;
    };
    UserPrincipalName: string | null;
}
/**
 * Describes a single user properties
 *
 */
export interface ISiteUserProps {
    /**
     * Contains Site user email
     *
     */
    Email: string;
    /**
     * Contains Site user Id
     *
     */
    Id: number;
    /**
     * Site user IsHiddenInUI
     *
     */
    IsHiddenInUI: boolean;
    /**
     * Site user IsShareByEmailGuestUser
     *
     */
    IsShareByEmailGuestUser: boolean;
    /**
     * Describes if Site user Is Site Admin
     *
     */
    IsSiteAdmin: boolean;
    /**
     * Site user LoginName
     *
     */
    LoginName: string;
    /**
     * Site user Principal type
     *
     */
    PrincipalType: number | PrincipalType;
    /**
     * Site user Title
     *
     */
    Title: string;
}
/**
 * Properties that provide both a getter, and a setter.
 *
 */
export interface IUserUpdateResult {
    user: ISiteUser;
    data: any;
}
/**
 * Result from ensuring a user
 *
 */
export interface IWebEnsureUserResult {
    data: ISiteUserProps;
    user: ISiteUser;
}
//# sourceMappingURL=types.d.ts.map