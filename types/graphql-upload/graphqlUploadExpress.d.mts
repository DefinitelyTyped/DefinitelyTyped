import type { NextFunction, Request, Response } from "express";
import type { ProcessRequestFunction, ProcessRequestOptions } from "./processRequest.mjs";

export default function graphqlUploadExpress(
    { processRequest, ...processRequestOptions }?: ProcessRequestOptions & {
        processRequest?: ProcessRequestFunction;
    },
): (
    request: Request,
    response: Response,
    next: NextFunction,
) => void;
