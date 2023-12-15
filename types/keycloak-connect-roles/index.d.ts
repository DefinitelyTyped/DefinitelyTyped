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
