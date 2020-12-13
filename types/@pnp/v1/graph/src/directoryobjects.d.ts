import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { DirectoryObject as IDirectoryObject } from "@microsoft/microsoft-graph-types";
export declare enum DirectoryObjectType {
    /**
     * Directory Objects
     */
    directoryObject = 0,
    /**
     * User
     */
    user = 1,
    /**
     * Group
     */
    group = 2,
    /**
     * Device
     */
    device = 3
}
/**
 * Describes a collection of Directory Objects
 *
 */
export declare class DirectoryObjects extends GraphQueryableCollection<IDirectoryObject[]> {
    /**
     * Gets a directoryObject from the collection using the specified id
     *
     * @param id Id of the Directory Object to get from this collection
     */
    getById(id: string): DirectoryObject;
    /**
    * Returns the directory objects specified in a list of ids. NOTE: The directory objects returned are the full objects containing all their properties.
    * The $select query option is not available for this operation.
    *
    * @param ids A collection of ids for which to return objects. You can specify up to 1000 ids.
    * @param type A collection of resource types that specifies the set of resource collections to search. Default is directoryObject.
    */
    getByIds(ids: string[], type?: DirectoryObjectType): Promise<DirectoryObject[]>;
}
/**
 * Represents a Directory Object entity
 */
export declare class DirectoryObject extends GraphQueryableInstance<IDirectoryObject> {
    /**
     * Deletes this group
     */
    delete(): Promise<void>;
    /**
     * Returns all the groups and directory roles that the specified Directory Object is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    getMemberObjects(securityEnabledOnly?: boolean): Promise<{
        value: string[];
    }>;
    /**
     * Returns all the groups that the specified Directory Object is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    getMemberGroups(securityEnabledOnly?: boolean): Promise<{
        value: string[];
    }>;
    /**
     * Check for membership in a specified list of groups, and returns from that list those groups of which the specified user, group, or directory object is a member.
     * This function is transitive.
     * @param groupIds A collection that contains the object IDs of the groups in which to check membership. Up to 20 groups may be specified.
     */
    checkMemberGroups(groupIds: String[]): Promise<{
        value: string[];
    }>;
}
