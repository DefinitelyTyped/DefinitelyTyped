// Type definitions for express-formidable 1.2
// Project: https://github.com/noraesae/express-formidable
// Definitions by: Torkild Dyvik Olsen <https://github.com/tdolsen>, Evan Shortiss <https://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";
import { Fields, Files, EventNames } from "formidable";

// Extend the express request object with attached formidable files and fields
declare global {
  namespace Express {
    interface Request {
      fields?: Fields | undefined;
      files?: Files | undefined;
    }
  }
}

interface ExpressFormidableOptions {
    encoding?: string | undefined;
    uploadDir?: string | undefined;
    keepExtensions?: boolean | undefined;
    type?: "multipart" | "urlencoded" | undefined;
    maxFileSize?: number | undefined;
    maxFieldsSize?: number | undefined;
    maxFields?: number | undefined;
    hash?: boolean | "sha1" | "md5" | undefined;
    multiples?: boolean | undefined;
}

interface ExpressFormidableEvents {
  event: EventNames;
  action: (req: express.Request, res: express.Response, next: express.NextFunction, ...formidableParameters: any[]) => void
}

declare function ExpressFormidable(options?: ExpressFormidableOptions, events?: ExpressFormidableEvents[]): express.RequestHandler;

declare namespace ExpressFormidable {}

export = ExpressFormidable;
