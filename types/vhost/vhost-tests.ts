import { NextFunction, Response } from "express";
import vhost, { Request } from "vhost";

// $ExpectType Handler
vhost("hostname", (_req: Request, _res: Response, _next: NextFunction) => {
    // check if vhost property exists on _req
    if (!_req.vhost) throw new Error("missing vhost property in request argument");
});
