import { RoleAssignments } from "./roles";
import { BasePermissions, PermissionKind } from "./types";
import { SharePointQueryableInstance } from "./sharepointqueryable";
export declare class SharePointQueryableSecurable extends SharePointQueryableInstance {
    /**
     * Gets the set of role assignments for this item
     *
     */
    readonly roleAssignments: RoleAssignments;
    /**
     * Gets the closest securable up the security hierarchy whose permissions are applied to this list item
     *
     */
    readonly firstUniqueAncestorSecurableObject: SharePointQueryableInstance;
    /**
     * Gets the effective permissions for the user supplied
     *
     * @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
     */
    getUserEffectivePermissions(loginName: string): Promise<BasePermissions>;
    /**
     * Gets the effective permissions for the current user
     */
    getCurrentUserEffectivePermissions(): Promise<BasePermissions>;
    /**
     * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
     *
     * @param copyRoleAssignments If true the permissions are copied from the current parent scope
     * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
     */
    breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): Promise<any>;
    /**
     * Removes the local role assignments so that it re-inherit role assignments from the parent object.
     *
     */
    resetRoleInheritance(): Promise<any>;
    /**
     * Determines if a given user has the appropriate permissions
     *
     * @param loginName The user to check
     * @param permission The permission being checked
     */
    userHasPermissions(loginName: string, permission: PermissionKind): Promise<boolean>;
    /**
     * Determines if the current user has the requested permissions
     *
     * @param permission The permission we wish to check
     */
    currentUserHasPermissions(permission: PermissionKind): Promise<boolean>;
    /**
     * Taken from sp.js, checks the supplied permissions against the mask
     *
     * @param value The security principal's permissions on the given object
     * @param perm The permission checked against the value
     */
    hasPermissions(value: BasePermissions, perm: PermissionKind): boolean;
}
