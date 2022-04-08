// Type definitions for imperium 2.0
// Project: https://github.com/terrajs/imperium
// Definitions by: Gaetan SENN <https://github.com/gaetansenn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

import express = require('express');

export type GetAcl = (req: express.Request) => Promise<boolean> | Promise<object>;
export type Actions = string[] | string;
export type Context = Array<'params' | 'query' | 'headers' | 'body'>;
// Can contain when key that is evaluated during route action
export interface RoleParams {
    [key: string]: string;
}

export const context: string[];
export const roles: Roles;

// Add new role with specific ImperiumGetAcl
export function role(roleName: string, getAcl?: GetAcl): Role;

// Check if user has role(s) act like as an OR
export function is(roleNames: string | string[]): Promise<express.RequestHandler>;

// Check if current user can do action(s)
export function can(actionS: string | string[] | Action | Action[]): Promise<express.RequestHandler>;

export function evaluateRouteActions(req: express.Request, action: Action[], context: Context): Actions;

export function evaluateRouteAction(req: express.Request, expr: string, key: string, context: Context): string;

export function evaluateUserActions(req: express.Request, roles: Role[]): Promise<Action[]>;

export function evaluateUserAction(action: RoleParams, context: { [key: string]: string[] }): { [key: string]: string[] };

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

    evaluateRouteActions(req: express.Request, action: Action[], context: Context): Actions;

    evaluateRouteAction(req: express.Request, expr: string, key: string, context: Context): string;

    evaluateUserActions(req: express.Request, roles: Role[]): Promise<Action[]>;

    evaluateUserAction(action: RoleParams, context: { [key: string]: string[] }): { [key: string]: string[] };
}

export interface Roles {
    [key: string]: RoleActions;
}

export interface RoleActions {
    actions: Action[];
    getAcl?: GetAcl;
}

export interface Action {
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
