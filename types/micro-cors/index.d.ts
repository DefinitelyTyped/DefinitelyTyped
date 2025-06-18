import { RequestHandler } from "micro";

interface Options {
    maxAge?: number | undefined;
    origin?: string | undefined;
    allowHeaders?: string[] | undefined;
    allowMethods?: string[] | undefined;
    exposeHeaders?: string[] | undefined;
    allowCredentials?: boolean | undefined;
}

declare function micro_cors(options?: Options): (handler: RequestHandler) => RequestHandler;

export = micro_cors;
