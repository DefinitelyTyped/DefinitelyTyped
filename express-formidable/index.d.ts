// Type definitions for express-formidable 1.0.0
// Project: https://github.com/noraesae/express-formidable
// Definitions by: Torkild Dyvik Olsen <https://github.com/tdolsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestHandler } from "express";

interface ExpressFormidableOptions {
    encoding?: string;
    uploadDir?: string;
    keepExtensions?: boolean;
    type?: "multipart" | "urlencoded";
    maxFieldsSize?: number;
    maxFields?: number;
    hash?: boolean | "sha1" | "md5";
    multiples?: boolean;
}

declare function ExpressFormidable(options?: ExpressFormidableOptions): RequestHandler;

export = ExpressFormidable;
