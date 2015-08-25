// Type definitions for easy-xapi-utils
// Project: https://github.com/DeadAlready/easy-xapi-utils
// Definitions by: Karl Düüna <https://github.com/DeadAlready/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../easy-jsend/easy-jsend.d.ts" />
/// <reference path="../easy-x-headers/easy-x-headers.d.ts" />

declare module "easy-xapi-utils" {
    import express = require('express');

    export function isLoggedIn(role?: string | string[], reverse?: boolean): express.RequestHandler;
    export function isLoggedOut(): express.RequestHandler;
    export function hasRole(role: string | string[], reverse?: boolean): express.RequestHandler;
}
