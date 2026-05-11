import errorHandler = require("agnostic-http-error-handler");
import { Request, Response } from "express";

/* $ExpectType {
  express: (err: Error, req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: any) => void;
  restana: (err: Error, req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
  native: (err: Error, req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
} */
errorHandler(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (err: Error, _responsePayload, req: Request, _res: Response) => {},
);
