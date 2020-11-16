// Type definitions for @hapi/call 8.0
// Project: https://github.com/hapijs/call#readme
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface RouteDefinition {
    method: string;
    path: string;
}

export interface RouterOptions {
    isCaseSensitive: boolean;
}

export interface Match<P = any, D = any> {
    params: P;
    paramsArray: string[];
    route: D;
}

export type Route<P = any, D = any> = Match<P, D> | Error;

export class Router {
    constructor(routerOptions?: RouterOptions)
    add(definition: RouteDefinition, data?: any): void;
    route(method: string, path: string): Route;
}
