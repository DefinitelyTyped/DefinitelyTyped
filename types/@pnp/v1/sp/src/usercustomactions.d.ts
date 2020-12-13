import { SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
import { TypedHash } from "@pnp/common";
/**
 * Describes a collection of user custom actions
 *
 */
export declare class UserCustomActions extends SharePointQueryableCollection {
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    getById(id: string): UserCustomAction;
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     *
     */
    add(properties: TypedHash<any>): Promise<UserCustomActionAddResult>;
    /**
     * Deletes all user custom actions in the collection
     *
     */
    clear(): Promise<void>;
}
/**
 * Describes a single user custom action
 *
 */
export declare class UserCustomAction extends SharePointQueryableInstance {
    /**
    * Updates this user custom action with the supplied properties
    *
    * @param properties An information object of property names and values to update for this user custom action
    */
    update: (props: TypedHash<any>) => Promise<UserCustomActionUpdateResult>;
    /**
    * Removes this user custom action
    *
    */
    delete(): Promise<void>;
}
/**
 * Result from adding a user custom action
 *
 */
export interface UserCustomActionAddResult {
    data: any;
    action: UserCustomAction;
}
/**
 * Result from udating a user custom action
 *
 */
export interface UserCustomActionUpdateResult {
    data: any;
    action: UserCustomAction;
}
