// Type definitions for rbac-a 0.2
// Project: https://github.com/yanickrochon/rbac-a#readme
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>

import {
    EventEmitter,
} from "events";

export interface Roles {
    [_: string]: number | Roles;
}

export class Provider {
    /**
     * Return all the roles available for the given user. The return value
     * must be an object, recursively defining the associated roles for the
     * specified user. Return an empty object if user has no roles.
     * Ex: {
     *       "role1": {
     *         "role1.1": null,
     *         "role1.2": { ... },
     *         ...
     *       },
     *       "secondary": ...,
     *       ...
     *     }
     * The method mey return a promise resolving with the
     * expected return value.
     */
    getRoles(user: any): Roles | Promise<Roles>;
    /**
     * Return all permissions for the specified role. The return value
     * must be an array. Return an empty array if role is missing or
     * no permission for the specified role.
     * Ex: ['permission1', 'permission2', ... ]
     * The method mey return a promise resolving with the
     * expected return value.
     */
    getPermission(role: string): string[] | Promise<string[]>;
    /**
     * Return all attributes for the specified role. The return value must
     * be an array. Return an empty array if role is missing or if no
     * attributes for the specified role.
     * Ex: ['attribute1', 'attribute2', ... ]
     * The method mey return a promise resolving with the
     * expected return value.
     */
    getAttributes(role: string): string[] | Promise<string[]>;
}

export type AttributeFunction = (user: any, role: string, params: object) => any;

/**
 * Attributes Manager
 * This class encapsulate attributes definition and validation.
 * Usage
 *   var roleValid = attributesManager.validate(attribute, user, role, params);
 */
export class AttributesManager {
    protected _attributes: { [_: string]: AttributeFunction };
    /** Define an attribute. The returned value is self for chaining. */
    set(attribute: AttributeFunction): this;
    /**
     * Undefine an attribute, by name or function and return removed
     * attribute function if one was found.
     */
    remove(attribute: string | AttributeFunction): AttributeFunction;
    /**
     * Validate the attribute with the specified user, role and parameters.
     * The method will return a truthy value if the attribute valid, or a
     * falsy otherwise.
     * The method may also return a promise resolivng to the expected returne
     * value, or reject. A rejected promise should be considered falsy.
     * If the specified attribute does not exist, false is returned.
     */
    validate(attribute: string, user: any, role: string, params: object): any;
}

export class RBAC<P extends Provider, AM extends AttributesManager = AttributesManager> extends EventEmitter {
    readonly provider: P;
    readonly attributes: AM;
    constructor(opts: { provider: P, attributes?: AM });
    /**
     * Check the user for the given permissions. The method will return
     * a Promise resolving with a number. If the user has sufficient
     * access to the specified permissions, the promise should resolve
     * with a positive, non-zero value, or with NaN otherwise. If the
     * Promise is rejected, it should be considered as if the user has
     * insufficient access to the specified ressources.
     */
    check(user: any, permission: string | string[], params?: object): Promise<number>;
}

export const Providers: {
    /** Basic JSON permissions provider */
    JsonProvider: { new(roles: object): Provider };
};
