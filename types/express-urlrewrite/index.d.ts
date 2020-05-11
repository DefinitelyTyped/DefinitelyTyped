// Type definitions for express-urlrewrite 1.2
// Project: https://github.com/kapouer/express-urlrewrite
// Definitions by: Melvin Groenhoff <https://github.com/mgroenhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";

declare function rewrite(s: string): express.Handler;
declare function rewrite(s: string | RegExp, t: string): express.Handler;

export = rewrite;
