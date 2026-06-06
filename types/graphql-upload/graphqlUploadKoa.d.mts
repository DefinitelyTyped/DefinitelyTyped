import type { Next, ParameterizedContext } from "koa";
import type { ProcessRequestFunction, ProcessRequestOptions } from "./processRequest.mjs";

export default function graphqlUploadKoa(
    { processRequest, ...processRequestOptions }?: ProcessRequestOptions & {
        processRequest?: ProcessRequestFunction;
    },
): (ctx: ParameterizedContext, next: Next) => Promise<void>;
