// Type definitions for @hapi/call 9.0
// Project: https://github.com/hapijs/call#readme
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
//                 Sebastian Malton <https://github.com/nokel81>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export type RouteMethod = "get" | "head" | "post" | "put" | "delete" | "connect" | "options" | "trace" | "patch";

export interface RouteDefinition {
    method: RouteMethod | "*";
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
    route(method: RouteMethod, path: string): Route<Handler>;
}
