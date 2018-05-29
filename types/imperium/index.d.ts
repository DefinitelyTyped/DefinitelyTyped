// Type definitions for imperium v2.0.2
// Project: https://www.npmjs.org/package/imperium
// Definitions by: Gaetan SENN <https://github.com/gaetansenn>
// Definitions: https://github.com/psnider/DefinitelyTyped/imperium
// TypeScript Version: 2.7

/// <reference types="node" />
/// <reference types="express" />

declare module 'imperium' {
    import express = require('express')

    type Middleware = (req: express.Request, res: express.Response, next: Function) => Promise<void>
    type GetAcl = (req: express.Request) => Promise<Boolean> | Promise<Object>
    type Actions = Array<String> | String
    type Context = Array<'params' | 'query' | 'headers' | 'body'>
    // Can contain when key that is evaluated during route action
    type RoleParams = { [key: string]: String }

    export class Imperium {
        constructor()

        context: Array<String>
        roles: Roles

        // Add new role with specific ImperiumGetAcl
        role(roleName: String, getAcl: GetAcl): Role

        // Return specific imperium role instance
        role(roleName: String): Role

        // Check if user has role
        is(roleName: String): Middleware

        // Check if user has on of listed roles act like an OR
        is(roleNames: Array<String>): Middleware

        // Check if current user can do action
        can(action: String): Middleware

        can(actions: Array<String>): Middleware

        can(action: Action): Middleware

        can(actions: Array<Action>): Middleware

        private addRole(roleName: String, getAcl: GetAcl): void

        private evaluateRouteActions(req: express.Request, action: Array<Action>, context: Context): Actions

        private evaluateRouteAction(req: express.Request, expr: String, key: String, context: Context): String

        private evaluateUserActions(req: express.Request, roles: Array<Role>): Promise<Array<Action>>

        private evaluateUserAction(action: RoleParams, context: { [key: string]: Array<String> }): { [key: string]: Array<String> }
    }

    interface Roles {
        [key: string]: RoleActions
    }

    interface RoleActions {
        actions: Array<Action>
        getAcl?: GetAcl
    }

    interface Action {
        action: String
        [key: string]: String
    }

    export class Role {
        constructor(imperium: Imperium, roleName: String)

        // Imperium instance to retreive child role
        imperium: Imperium
        // Role name
        roleName: String
        // Contain all the actions for this specific role
        role: RoleActions

        /* Add action with specific params */
        can(action: String, params: RoleParams): Role

        /* Get actions of childRoleName and replace params */
        is(childRoleName: String, params: RoleParams): Role
    }

    export class UnauthorizedError extends Error {
        constructor(message: String, status: number, context: any)
    }

    const out: Imperium
    export default out
}
