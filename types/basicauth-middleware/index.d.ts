// Type definitions for basicauth-middleware 3.1
// Project: https://github.com/nchaulet/basicauth-middleware
// Definitions by: My Self <https://github.com/nchaulet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { RequestHandler } from "express";
type checkFunctionSync = (username: string, password: string) => boolean;
type checkFunctionCallback = (username: string, password: string, callback: (err: Error|null, authorized: boolean) => void) => void;
type checkFunctionPromise = (username: string, password: string) => PromiseLike<boolean>;
type CheckFunction = checkFunctionSync | checkFunctionPromise | checkFunctionCallback;

declare function basicAuth(checkFnOrUsers: Array<[string, string]>|CheckFunction, realm?: string): RequestHandler;
declare function basicAuth(username: string, password: string, realm?: string): RequestHandler;

export = basicAuth;
