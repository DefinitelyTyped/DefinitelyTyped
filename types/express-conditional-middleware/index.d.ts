import * as E from "express";

declare function conditional(
    condition: boolean | ((req: E.Request, res: E.Response, next: E.NextFunction) => boolean | undefined),
    success: E.RequestHandler,
    fail?: E.RequestHandler,
): E.RequestHandler;

export = conditional;
