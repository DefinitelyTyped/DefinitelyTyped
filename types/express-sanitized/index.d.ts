// Type definitions for express-sanitized 0.5
// Project: https://github.com/askhogan/express-sanitized
// Definitions by: Chris Barth <https://github.com/cjbarth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";

type e = () => (req: express.Request, res: express.Response, next: express.NextFunction) => void;

declare const expressSanitized: e;
export = expressSanitized;
