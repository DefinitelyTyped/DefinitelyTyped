import { _SharePointQueryableInstance, _SharePointQueryableCollection, IDeleteable } from "../sharepointqueryable";
import { ITypedHash } from "@pnp/common";
import { IBasePermissions } from "../security";
export declare class _UserCustomActions extends _SharePointQueryableCollection<IUserCustomActionInfo[]> {
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    getById(id: string): IUserCustomAction;
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     */
    add(properties: ITypedHash<any>): Promise<IUserCustomActionAddResult>;
    /**
     * Deletes all user custom actions in the collection
     */
    clear(): Promise<void>;
}
export interface IUserCustomActions extends _UserCustomActions {
}
export declare const UserCustomActions: import("../sharepointqueryable").ISPInvokableFactory<IUserCustomActions>;
export declare class _UserCustomAction extends _SharePointQueryableInstance<IUserCustomActionInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    /**
    * Updates this user custom action with the supplied properties
    *
    * @param properties An information object of property names and values to update for this user custom action
    */
    update: any;
}
export interface IUserCustomAction extends _UserCustomAction, IDeleteable {
}
export declare const UserCustomAction: import("../sharepointqueryable").ISPInvokableFactory<IUserCustomAction>;
/**
 * Result from adding a user custom action
 */
export interface IUserCustomActionAddResult {
    data: any;
    action: IUserCustomAction;
}
/**
 * Result from udating a user custom action
 */
export interface IUserCustomActionUpdateResult {
    data: any;
    action: IUserCustomAction;
}
export declare enum UserCustomActionRegistrationType {
    None = 0,
    List = 1,
    ContentType = 2,
    ProgId = 3,
    FileType = 4
}
export declare enum UserCustomActionScope {
    Unknown = 0,
    Site = 2,
    Web = 3,
    List = 4
}
export interface IUserCustomActionInfo {
    CommandUIExtension: string;
    Description: string;
    Group: string;
    Id: string;
    ImageUrl: string;
    Location: string;
    Name: string;
    RegistrationId: string;
    RegistrationType: UserCustomActionRegistrationType;
    Rights: IBasePermissions;
    Scope: UserCustomActionScope;
    ScriptBlock: string;
    ScriptSrc: string;
    Sequence: number;
    Title: string;
    Url: string;
    VersionOfUserCustomAction: string;
}
//# sourceMappingURL=types.d.ts.map