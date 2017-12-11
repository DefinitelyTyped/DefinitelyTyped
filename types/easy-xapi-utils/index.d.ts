// Type definitions for easy-xapi-utils
// Project: https://github.com/DeadAlready/easy-xapi-utils
// Definitions by: Karl Düüna <https://github.com/DeadAlready>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="easy-jsend" />
/// <reference types="easy-x-headers" />


import express = require('express');

export declare function isLoggedIn(role?: string): express.RequestHandler;
export declare function isLoggedOut(): express.RequestHandler;
export declare function hasRole(role: string): express.RequestHandler;
