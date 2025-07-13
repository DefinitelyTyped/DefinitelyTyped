import type { RequestHandler } from "express";

declare namespace expressPartialResponse {
    interface Options {
        /**
         * The query parameter name to use for the fields mask
         * @default "fields"
         */
        query?: string | undefined;
    }
}

/**
 * Creates a middleware that enables partial responses using JSON Mask
 *
 * @param options Configuration options for the middleware
 * @returns Express middleware function
 */
declare function expressPartialResponse(options?: expressPartialResponse.Options): RequestHandler;

export = expressPartialResponse;
