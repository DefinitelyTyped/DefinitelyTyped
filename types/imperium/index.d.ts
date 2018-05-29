// Type definitions for imperium 2.0
// Project: https://www.npmjs.org/package/imperium
// Definitions by: Gaetan SENN <https://github.com/gaetansenn>
// Definitions: https://github.com/psnider/DefinitelyTyped/imperium
// TypeScript Version: 2.7

/// <reference types="node" />

import express = require('express');

type GetAcl = (req: express.Request) => Promise<boolean> | Promise<object>;
type Actions = string[] | string;
type Context = Array<'params' | 'query' | 'headers' | 'body'>;
// Can contain when key that is evaluated during route action
interface RoleParams {
    [key: string]: string;
}

export class Imperium {
    constructor()

    context: string[];
    roles: Roles;

    // Add new role with specific ImperiumGetAcl
    role(roleName: string, getAcl?: GetAcl): Role;

    // Check if user has role(s) act like as an OR
    is(roleNames: string | string[]): Promise<express.RequestHandler>;

    // Check if current user can do action(s)
    can(actionS: string | string[] | Action | Action[]): Promise<express.RequestHandler>;

    private addRole(roleName: string, getAcl: GetAcl): void;

    private evaluateRouteActions(req: express.Request, action: Action[], context: Context): Actions;

    private evaluateRouteAction(req: express.Request, expr: string, key: string, context: Context): string;

    private evaluateUserActions(req: express.Request, roles: Role[]): Promise<Action[]>;

    private evaluateUserAction(action: RoleParams, context: { [key: string]: string[] }): { [key: string]: string[] };
}

interface Roles {
    [key: string]: RoleActions;
}

interface RoleActions {
    actions: Action[];
    getAcl?: GetAcl;
}

interface Action {
    action: string;
    [key: string]: string;
}

export class Role {
    constructor(imperium: Imperium, roleName: string)

    // Imperium instance to retreive child role
    imperium: Imperium;
    // Role name
    roleName: string;
    // Contain all the actions for this specific role
    role: RoleActions;

    /* Add action with specific params */
    can(action: string, params: RoleParams): Role;

    /* Get actions of childRoleName and replace params */
    is(childRoleName: string, params: RoleParams): Role;
}

export class UnauthorizedError extends Error {
    constructor(message: string, status: number, context: any)
}

declare const init: Imperium;
export default init;
