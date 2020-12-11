import { _GraphQueryableCollection, _GraphQueryableInstance } from "../graphqueryable";
import { DirectoryObject as IDirectoryObjectType } from "@microsoft/microsoft-graph-types";
import { IGetById, IDeleteable } from "../decorators";
/**
 * Represents a Directory Object entity
 */
export declare class _DirectoryObject<GetType = IDirectoryObjectType> extends _GraphQueryableInstance<GetType> {
    /**
     * Returns all the groups and directory roles that the specified Directory Object is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    getMemberObjects(securityEnabledOnly?: boolean): Promise<string[]>;
    /**
     * Returns all the groups that the specified Directory Object is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    getMemberGroups(securityEnabledOnly?: boolean): Promise<string[]>;
    /**
     * Check for membership in a specified list of groups, and returns from that list those groups of which the specified user, group, or directory object is a member.
     * This function is transitive.
     * @param groupIds A collection that contains the object IDs of the groups in which to check membership. Up to 20 groups may be specified.
     */
    checkMemberGroups(groupIds: String[]): Promise<string[]>;
}
export interface IDirectoryObject<GetType = IDirectoryObjectType> extends _DirectoryObject, IDeleteable {
}
export declare const DirectoryObject: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDirectoryObject<IDirectoryObjectType>;
/**
 * Describes a collection of Directory Objects
 *
 */
export declare class _DirectoryObjects<GetType = IDirectoryObjectType[]> extends _GraphQueryableCollection<GetType> {
    /**
    * Returns the directory objects specified in a list of ids. NOTE: The directory objects returned are the full objects containing all their properties.
    * The $select query option is not available for this operation.
    *
    * @param ids A collection of ids for which to return objects. You can specify up to 1000 ids.
    * @param type A collection of resource types that specifies the set of resource collections to search. Default is directoryObject.
    */
    getByIds(ids: string[], type?: DirectoryObjectTypes): Promise<IDirectoryObjectType[]>;
}
export interface IDirectoryObjects extends _DirectoryObjects, IGetById<IDirectoryObjectType> {
}
export declare const DirectoryObjects: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDirectoryObjects;
/**
 * DirectoryObjectTypes
 */
export declare enum DirectoryObjectTypes {
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
//# sourceMappingURL=types.d.ts.map