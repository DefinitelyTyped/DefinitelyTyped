import { NextFunction } from "connect";
import { ErrorRequestHandler, Request, RequestHandler, Response } from "express-serve-static-core";

declare function asyncWrap(
    handler: (req: Request, res: Response, next: NextFunction) => Promise<void>,
): RequestHandler;

declare function asyncWrap(
    handler: (err: any, req: Request, res: Response, next: NextFunction) => Promise<void>,
): ErrorRequestHandler;

export default asyncWrap;
