// Type definitions for express-fileupload 0.1
// Project: https://github.com/richardgirges/express-fileupload#readme
// Definitions by: Gintautas Miselis <https://github.com/Naktibalda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

declare global {
    namespace Express {
        interface Request {
            files?: fileUpload.FileArray;
        }
    }
}

export = fileUpload;

declare function fileUpload(options?: fileUpload.Options): express.RequestHandler;

declare namespace fileUpload {
    class FileArray {
        [index: string]: UploadedFile | UploadedFile[]
    }

    interface UploadedFile {
        name: string;
        encoding: string;
        mimetype: string;
        data: Buffer;
        mv(path: string, callback: (err: any) => void): void;
    }

    interface Options {
        debug?: boolean;
        safeFileNames?: boolean;
        preserveExtension?: boolean | string | number;
        [property: string]: any;
    }
}
