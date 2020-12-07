import { SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
import { SiteGroups } from "./sitegroups";
import { BasePermissions } from "./types";
import { TypedHash } from "@pnp/common";
/**
 * Describes a set of role assignments for the current scope
 *
 */
export declare class RoleAssignments extends SharePointQueryableCollection {
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    getById(id: number): RoleAssignment;
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    add(principalId: number, roleDefId: number): Promise<void>;
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    remove(principalId: number, roleDefId: number): Promise<void>;
}
/**
 * Describes a role assignment
 *
 */
export declare class RoleAssignment extends SharePointQueryableInstance {
    /**
     * Gets the groups that directly belong to the access control list (ACL) for this securable object
     *
     */
    readonly groups: SiteGroups;
    /**
     * Gets the role definition bindings for this role assignment
     *
     */
    readonly bindings: RoleDefinitionBindings;
    /**
     * Deletes this role assignment
     *
     */
    delete: () => Promise<void>;
}
/**
 * Describes a collection of role definitions
 *
 */
export declare class RoleDefinitions extends SharePointQueryableCollection {
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    getById(id: number): RoleDefinition;
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    getByName(name: string): RoleDefinition;
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    getByType(roleTypeKind: number): RoleDefinition;
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition
     *
     */
    add(name: string, description: string, order: number, basePermissions: BasePermissions): Promise<RoleDefinitionAddResult>;
}
/**
 * Describes a role definition
 *
 */
export declare class RoleDefinition extends SharePointQueryableInstance {
    /**
     * Deletes this role definition
     *
     */
    delete: () => Promise<void>;
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    update(properties: TypedHash<any>): Promise<RoleDefinitionUpdateResult>;
}
/**
 * Result from updating a role definition
 *
 */
export interface RoleDefinitionUpdateResult {
    definition: RoleDefinition;
    data: any;
}
/**
 * Result from adding a role definition
 *
 */
export interface RoleDefinitionAddResult {
    definition: RoleDefinition;
    data: any;
}
/**
 * Describes the role definitons bound to a role assignment object
 *
 */
export declare class RoleDefinitionBindings extends SharePointQueryableCollection {
}
