// Type definitions for keycloak-connect-roles 1.0
// Project: https://github.com/osvaldo2627/keycloak-connect-roles#readme
// Definitions by: Arian Meidow <https://github.com/sPaCeMoNk3yIam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.7

import { RequestHandler } from "express";

declare enum ROLES {
    SYS_ADMIN = "sys-admin",
    USER = "user",
}

declare class Auth<T> {
    token: T;

    constructor(token: T);

    getPayload(): T;

    is(client: string, role: string): boolean;

    isOneOf(client: string, roles: string[]): boolean;

    isSysAdmin(): boolean;
}

interface KConnect {
    middleware: RequestHandler;
    protect: (roles: [string], client: string) => RequestHandler;
    RESOURCE_ACCESS_KEY: string;
    CLIENT_ID: string;
    ROLES: ROLES;
    Auth: Auth<any>;
}

declare function init<T>(config?: T): KConnect & T;

export { Auth, init, ROLES };
