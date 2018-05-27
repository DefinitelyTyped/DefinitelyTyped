// Type definitions for imperium v2.0.2
// Project: https://www.npmjs.org/package/mono-js/imperium
// Definitions by: Gaetan SENN <https://github.com/gaetansenn>
// Definitions: https://github.com/psnider/DefinitelyTyped/imperium
// TypeScript Version: 2.7

/// <reference types="node" />
/// <reference types="express" />

declare module 'imperium' {
    type ImperiumMiddleware = (req: Express.Request, res: Express.Response, next: Function) => Promise<void>
    type ImperiumGetAcl = (req: Express.Request) => Promise<Boolean> | Promise<Object>
    type ImperiumActions = Array<String> | String
    type ImperiumContext = Array<'params' | 'query' | 'headers' | 'body'>
    // Can contain when key that is evaluated during route action
    type ImperiumRoleParams = { [key: string]: String }

    export class Imperium {
        constructor()

        context: Array<String>
        roles: Roles

        // Add new role with specific ImperiumGetAcl
        role(roleName: String, getAcl: ImperiumGetAcl): ImperiumRole

        // Return specific imperium role instance
        role(roleName: String): ImperiumRole

        // Check if user has role
        is(roleName: String): ImperiumMiddleware

        // Check if user has on of listed roles act like an OR
        is(roleNames: Array<String>): ImperiumMiddleware

        // Check if current user can do action
        can(action: String): ImperiumMiddleware

        can(actions: Array<String>): ImperiumMiddleware

        can(action: Action): ImperiumMiddleware

        can(actions: Array<Action>): ImperiumMiddleware

        private addRole(roleName: String, getAcl: ImperiumGetAcl): void

        private evaluateRouteActions(req: Express.Request, action: Array<Action>, context: ImperiumContext): ImperiumActions

        private evaluateRouteAction(req: Express.Request, expr: String, key: String, context: ImperiumContext): String

        private evaluateUserActions(req: Express.Request, roles: Array<ImperiumRole>): Promise<Array<Action>>

        private evaluateUserAction(action: ImperiumRoleParams, context: { [key: string]: Array<String> }): { [key: string]: Array<String> }
    }

    interface Roles {
        [key: string]: Role
    }

    interface Role {
        actions: Array<Action>
        getAcl?: ImperiumGetAcl
    }

    interface Action {
        action: String
        [key: string]: String
    }

    export class ImperiumRole {
        constructor(imperium: Imperium, roleName: String)

        // Imperium instance to retreive child role
        imperium: Imperium
        // Role name
        roleName: String
        // Contain all the actions for this specific role
        role: Role

        /* Add action with specific params */
        can(action: String, params: ImperiumRoleParams): ImperiumRole

        /* Get actions of childRoleName and replace params */
        is(childRoleName: String, params: ImperiumRoleParams): ImperiumRole
    }

    export class ImperiumUnauthorizedError extends Error {
        constructor(message: String, status: number, context: any)
    }

    const out: Imperium
    export default out
}
