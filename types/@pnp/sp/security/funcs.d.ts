import { SecurableQueryable, IBasePermissions, PermissionKind } from "./types";
/**
* Gets the effective permissions for the user supplied
*
* @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
*/
export declare function getUserEffectivePermissions(this: SecurableQueryable, loginName: string): Promise<IBasePermissions>;
/**
 * Gets the effective permissions for the current user
 */
export declare function getCurrentUserEffectivePermissions(this: SecurableQueryable): Promise<IBasePermissions>;
/**
 * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
 *
 * @param copyRoleAssignments If true the permissions are copied from the current parent scope
 * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
 */
export declare function breakRoleInheritance(this: SecurableQueryable, copyRoleAssignments?: boolean, clearSubscopes?: boolean): Promise<void>;
/**
 * Removes the local role assignments so that it re-inherit role assignments from the parent object.
 *
 */
export declare function resetRoleInheritance(this: SecurableQueryable): Promise<void>;
/**
 * Determines if a given user has the appropriate permissions
 *
 * @param loginName The user to check
 * @param permission The permission being checked
 */
export declare function userHasPermissions(this: SecurableQueryable, loginName: string, permission: PermissionKind): Promise<boolean>;
/**
 * Determines if the current user has the requested permissions
 *
 * @param permission The permission we wish to check
 */
export declare function currentUserHasPermissions(this: SecurableQueryable, permission: PermissionKind): Promise<boolean>;
/**
 * Taken from sp.js, checks the supplied permissions against the mask
 *
 * @param value The security principal's permissions on the given object
 * @param perm The permission checked against the value
 */
export declare function hasPermissions(value: IBasePermissions, perm: PermissionKind): boolean;
//# sourceMappingURL=funcs.d.ts.map