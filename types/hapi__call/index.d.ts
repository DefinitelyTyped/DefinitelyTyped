// Type definitions for @hapi/call 9.0
// Project: https://github.com/hapijs/call#readme
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
//                 Sebastian Malton <https://github.com/nokel81>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface RouteDefinition {
    /**
     * Generally this is an HTTP method or "*" to mean any.
     * This field is case insensitive.
     *
     * - "get"
     * - "head"
     * - "post"
     * - "put"
     * - "delete"
     * - "connect"
     * - "options"
     * - "trace"
     * - "patch"
     */
    method: string;
    path: string;
}

export interface RouterOptions {
    isCaseSensitive: boolean;
}

export interface Match<Handler> {
    params: Partial<Record<string, string>>;
    paramsArray: string[];
    route: Handler;
}

export type Route<Handler> = Match<Handler> | Error;

export class Router<Handler> {
    constructor(routerOptions?: RouterOptions)
    add(definition: RouteDefinition, route?: Handler): void;
    route(method: string, path: string): Route<Handler>;
}
