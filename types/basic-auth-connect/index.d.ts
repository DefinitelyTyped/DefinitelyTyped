// Type definitions for basic-auth-connect 1.0
// Project: https://github.com/expressjs/basic-auth-connect
// Definitions by: Rauli Laine <https://github.com/RauliL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { RequestHandler } from "express-serve-static-core";

type BasicAuthCallback = (username: string, password: string) => boolean;

declare function BasicAuthMiddleware(callback: BasicAuthCallback, realm?: string): RequestHandler;
declare function BasicAuthMiddleware(username: string, password: string, realm?: string): RequestHandler;

export default BasicAuthMiddleware;
