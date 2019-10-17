// Type definitions for qs-middleware 1.0
// Project: https://github.com/springernature/qs-middleware
// Definitions by: Dave Cardwell <https://github.com/davecardwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require("express");
import qs = require("qs");

declare function qsMiddleware(
    options?: qs.IParseOptions
): express.RequestHandler;

export = qsMiddleware;
