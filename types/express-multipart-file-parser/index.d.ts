/// <reference types="node" />

import type { BusboyConfig as BusboyOptions } from "busboy";
import type { Options as RawBodyOptions } from "raw-body";

interface UploadedFile {
    /** Field name specified in the form */
    fieldname: string;

    /** Name of the file on the user's computer */
    originalname: string;

    /** Encoding type of the file */
    encoding: string;

    /** Mime type of the file */
    mimetype: string;

    /** Contents of the file */
    buffer: Buffer;
}

interface FileParserOptions {
    /**
     * Options passed to the raw-body library
     * @see https://www.npmjs.com/package/raw-body#user-content-api
     */
    rawBodyOptions?: RawBodyOptions;
    /**
     * Options passed to the busboy library
     * @see https://github.com/mscdex/busboy/tree/v1.5.0#readme
     */
    busboyOptions?: BusboyOptions;
}

declare module "express-serve-static-core" {
    interface Request {
        files?: UploadedFile[];
    }
}

type RequestHandler = (req: any, res: any, next: any) => void;

type FileParserFactory = (options?: FileParserOptions) => RequestHandler[];

type FileParser = RequestHandler[] & { fileParser: FileParserFactory };

declare const fileParser: FileParser;

export = fileParser;
