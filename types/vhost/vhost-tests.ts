import connect, { NextFunction } from "connect";
import express from "express";
import { ServerResponse } from "http";
import vhost, { Request } from "vhost";

// $ExpectType Express
const expressServer = express();

// $ExpectType Server
const connectServer = connect();

// $ExpectType NextHandleFunction
const handle = vhost("hostname", (_req: Request, _res: ServerResponse, _next: NextFunction) => {
    // check if vhost property exists on _req
    if (!_req.vhost) throw new Error("missing vhost property in request argument");
});

// $ExpectType Express
expressServer.use(handle);

// $ExpectType Server
connectServer.use(handle);
