import * as express from "express";

declare namespace hpp {
    interface Options {
        checkBody?: boolean | undefined;
        checkBodyOnlyForContentType?: string | undefined;
        checkQuery?: boolean | undefined;
        whitelist?: string | string[] | undefined;
    }
}

declare function hpp(options?: hpp.Options): express.RequestHandler;

export = hpp;
