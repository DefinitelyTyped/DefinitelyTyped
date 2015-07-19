// Type definitions for multer
// Project: https://github.com/expressjs/multer
// Definitions by: jt000 <https://github.com/jt000>, vilicvane <https://vilic.github.io/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />


declare module Express {
    export interface Request {
        files: {
            [fieldname: string]: Multer.File
        }
    }

    module Multer {
        export interface File {
            /** Field name specified in the form */
            fieldname: string;
            /** Name of the file on the user's computer */
            originalname: string;
            /** Encoding type of the file */
            encoding: string;
            /** Mime type of the file */
            mimetype: string;
            /** Size of the file in bytes */
            size: number;
            /** The folder to which the file has been saved (DiskStorage) */
            destination: string;
            /** The name of the file within the destination (DiskStorage) */
            filename: string;
            /** Location of the uploaded file (DiskStorage) */
            path: string;
            /** A Buffer of the entire file (MemoryStorage) */
            buffer: Buffer;
        }
    }
}

declare module "multer" {
    import express = require('express');

    function multer(options?: multer.Options): express.RequestHandler;

    module multer {

        type Options = {
            /** The destination directory for the uploaded files. */
            dest?: string;
            /** An object specifying the size limits of the following optional properties. This object is passed to busboy directly, and the details of properties can be found on https://github.com/mscdex/busboy#busboy-methods */
            limits?: {
                /** Max field name size (Default: 100 bytes) */
                fieldNameSize?: number;
                /** Max field value size (Default: 1MB) */
                fieldSize?: number;
                /** Max number of non- file fields (Default: Infinity) */
                fields?: number;
                /** For multipart forms, the max file size (in bytes)(Default: Infinity) */
                fileSize?: number;
                /** For multipart forms, the max number of file fields (Default: Infinity) */
                files?: number;
                /** For multipart forms, the max number of parts (fields + files)(Default: Infinity) */
                parts?: number;
                /** For multipart forms, the max number of header key=> value pairs to parse Default: 2000(same as node's http). */
                headerPairs?: number;
            };
            /** A Boolean value to specify whether empty submitted values should be processed and applied to req.body; defaults to false; */
            includeEmptyFields?: boolean;
            /** If this Boolean value is true, the file.buffer property holds the data in-memory that Multer would have written to disk. The dest option is still populated and the path property contains the proposed path to save the file. Defaults to false. */
            inMemory?: boolean;
            /** Function to rename the uploaded files. Whatever the function returns will become the new name of the uploaded file (extension is not included). The fieldname and filename of the file will be available in this function, use them if you need to. */
            rename?: (fieldname: string, filename: string, req: Express.Request, res: Express.Response) => string;
            /** Function to rename the directory in which to place uploaded files. The dest parameter is the default value originally assigned or passed into multer. The req and res parameters are also passed into the function because they may contain information (eg session data) needed to create the path (eg get userid from the session). */
            changeDest?: (dest: string, req: Express.Request, res: Express.Response) => string;
            /** Event handler triggered when a file starts to be uploaded. A file object, with the following properties, is available to this function: fieldname, originalname, name, encoding, mimetype, path, and extension. */
            onFileUploadStart?: (file: Express.Multer.File, req: Express.Request, res: Express.Response) => void;
            /** Event handler triggered when a chunk of buffer is received. A buffer object along with a file object is available to the function. */
            onFileUploadData?: (file: Express.Multer.File, data: Buffer, req: Express.Request, res: Express.Response) => void;
            /** Event handler trigger when a file is completely uploaded. A file object is available to the function. */
            onFileUploadComplete?: (file: Express.Multer.File, req: Express.Request, res: Express.Response) => void;
            /** Event handler triggered when the form parsing starts. */
            onParseStart?: () => void;
            /** Event handler triggered when the form parsing completes. The request object and the next objects are are passed to the function. */
            onParseEnd?: (req: Express.Request, next: () => void) => void;
            /** Event handler for any errors encountering while processing the form. The error object and the next object is available to the function. If you are handling errors yourself, make sure to terminate the request or call the next() function, else the request will be left hanging. */
            onError?: () => void;
            /** Event handler triggered when a file size exceeds the specification in the limit object. No more files will be parsed after the limit is reached. */
            onFileSizeLimit?: (file: Express.Multer.File) => void;
            /** Event handler triggered when the number of files exceed the specification in the limit object. No more files will be parsed after the limit is reached. */
            onFilesLimit?: () => void;
            /** Event handler triggered when the number of fields exceed the specification in the limit object. No more fields will be parsed after the limit is reached. */
            onFieldsLimit?: () => void;
            /** Event handler triggered when the number of parts exceed the specification in the limit object. No more files or fields will be parsed after the limit is reached. */
            onPartsLimit?: () => void;
        };
    }

    export = multer;
}
