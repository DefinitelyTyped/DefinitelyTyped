import { ParameterizedContext } from "koa";
import { ProcessRequestFunction, ProcessRequestOptions } from "./processRequest.mjs";

// We are keeping this type just to avoid breaking changes, but it should be removed on the next major release.
export type UploadOptions = ProcessRequestOptions;

export default function graphqlUploadKoa(
    { processRequest, ...processRequestOptions }?: ProcessRequestOptions & {
        processRequest?: ProcessRequestFunction;
    },
): (ctx: ParameterizedContext, next: () => Promise<unknown>) => Promise<unknown>;
