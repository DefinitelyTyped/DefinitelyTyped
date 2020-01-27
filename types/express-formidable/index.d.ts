// Type definitions for express-formidable 1.0
// Project: https://github.com/noraesae/express-formidable
// Definitions by: Torkild Dyvik Olsen <https://github.com/tdolsen>, Evan Shortiss <https://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";
import { Fields, Files } from "formidable";

// Extend the express request object with attached formidable files and fields
declare global {
  namespace Express {
    interface Request {
      fields?: Fields;
      files?: Files;
    }
  }
}

interface ExpressFormidableOptions {
    encoding?: string;
    uploadDir?: string;
    keepExtensions?: boolean;
    type?: "multipart" | "urlencoded";
    maxFileSize?: number;
    maxFieldsSize?: number;
    maxFields?: number;
    hash?: boolean | "sha1" | "md5";
    multiples?: boolean;
}

declare function ExpressFormidable(options?: ExpressFormidableOptions): express.RequestHandler;

declare namespace ExpressFormidable {}

export = ExpressFormidable;
