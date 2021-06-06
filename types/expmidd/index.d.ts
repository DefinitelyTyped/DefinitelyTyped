import { Request, Response } from 'express';

// Type definitions for expmidd 0.5
// Project: https://github.com/hebertcisco/expmidd#readme
// Definitions by: hebertcisco <https://github.com/hebertcisco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import express = require("express");
    var app = express();

 =============================================== */

/// <reference types="express" />

export as namespace expmidd;

declare const runMiddleware: (req: Request, res: Response, fn: any) => Promise<unknown>;

export default runMiddleware;

export interface IHTTP_METHODS {
    get?: string | string[];
    head?: string | string[];
    post?: string | string[];
    put?: string | string[];
    delete?: string | string[];
    connect?: string | string[];
    options?: string | string[];
    trace?: string | string[];
    patch?: string | string[];
}
export interface ICors {
    get: Function;
    head: Function;
    post: Function;
    put: Function;
    delete: Function;
    connect: Function;
    options: Function;
    trace: Function;
    patch: Function;
}
declare const expmidd: Function;
declare const cors: ICors;
export { expmidd, cors };
