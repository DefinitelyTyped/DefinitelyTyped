// Type definitions for express-conditional-middleware 2.1
// Project: https://github.com/elliotttf/express-conditional-middleware#readme
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as E from 'express';

declare function conditional(
    condition: boolean | ((req: E.Request, res: E.Response, next: E.NextFunction) => boolean | undefined),
    success: E.RequestHandler,
    fail?: E.RequestHandler
): E.RequestHandler;

export = conditional;
