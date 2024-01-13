import { NextFunction, Request, Response } from "express";
import { ProcessRequestFunction, ProcessRequestOptions } from "./processRequest.mjs";

// We are keeping this type just to avoid breaking changes, but it should be removed on the next major release.
export type UploadOptions = ProcessRequestOptions;

export default function graphqlUploadExpress(
    { processRequest, ...processRequestOptions }?: ProcessRequestOptions & {
        processRequest?: ProcessRequestFunction;
    },
): (
    request: Request,
    response: Response,
    next: NextFunction,
) => void;
