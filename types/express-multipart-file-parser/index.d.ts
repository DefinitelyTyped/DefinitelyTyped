// Type definitions for express-multipart-file-parser 0.1.2
// Project: https://github.com/cristovao-trevisan/express-multipart-file-parser#readme
// Definitions by: Chen Asraf <https://github.com/chenasraf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { RequestHandler } from 'express';
import type { BusboyConfig as BusboyOptions } from 'busboy';
import type { Options as RawBodyOptions } from 'raw-body';

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
    rawBodyOptions?: RawBodyOptions;
    busboyOptions?: BusboyOptions;
}

declare module 'express-serve-static-core' {
    interface Request {
        files?: UploadedFile[];
    }
}

type FileParserFactory = (options?: FileParserOptions) => RequestHandler;

type FileParser = RequestHandler & { fileParser: FileParserFactory };

declare const fileParser: FileParser;

export = fileParser;
