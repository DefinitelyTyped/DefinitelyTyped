/**
 * @file
 * These definitions are based on the type definitions for multer - https://github.com/expressjs/multer - found on DefinitelyTyped.
 *
 * Note that it is necessary to explicitly cast the `Context.req` object to type `multer.MulterIncomingMessage`
 * to get the correct type for the patched `Context.req` object, as in the following example.
 * ```ts
 * import * as Koa from 'koa';
 * import * as Router from '@koa/router';
 * import * as multer from '@koa/multer';
 *
 * async function uploadFile(ctx: Koa.Context){
 *     let multerReq = <multer.MulterIncomingMessage>ctx.req;
 *     let files = multerReq.files;
 *
 *     // You can also directly access the files property from the context object or request object:
 *     files = ctx.files;
 *     files = ctx.request.files;
 *
 *     let baseFilePath: string = ctx.params.path || '';
 *     //...
 * }
 *
 * let router = new Router();
 * router.put('/uploads/:path?', upload.array('files'), uploadFile);
 * ```
 * The type cast is necessary since the type definitions for Koa do not allow for the `Context.req` property to be extended.
 */

import { IncomingMessage } from "http";
import * as Koa from "koa";

declare module "koa" {
    interface DefaultContext {
        file: multer.File;
        files: { [fieldname: string]: multer.File[] } | multer.File[] | undefined;
    }

    interface Request {
        file: multer.File;
        files: { [fieldname: string]: multer.File[] } | multer.File[] | undefined;
    }
}

declare namespace multer {
    interface File {
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

    interface MulterIncomingMessage extends IncomingMessage {
        body: any;
        file: File;
        files: {
            [fieldname: string]: File[];
        } | File[];
    }

    interface Field {
        /** The field name. */
        name: string;
        /** Optional maximum number of files per field to accept. */
        maxCount?: number | undefined;
    }

    interface Options {
        /** The destination directory for the uploaded files. */
        dest?: string | undefined;
        /** The storage engine to use for uploaded files. */
        storage?: StorageEngine | undefined;
        /**
         * An object specifying the size limits of the following optional properties. This object is passed to busboy
         * directly, and the details of properties can be found on https://github.com/mscdex/busboy#busboy-methods
         */
        limits?: {
            /** Max field name size (Default: 100 bytes) */
            fieldNameSize?: number | undefined;
            /** Max field value size (Default: 1MB) */
            fieldSize?: number | undefined;
            /** Max number of non- file fields (Default: Infinity) */
            fields?: number | undefined;
            /** For multipart forms, the max file size (in bytes)(Default: Infinity) */
            fileSize?: number | undefined;
            /** For multipart forms, the max number of file fields (Default: Infinity) */
            files?: number | undefined;
            /** For multipart forms, the max number of parts (fields + files)(Default: Infinity) */
            parts?: number | undefined;
            /** For multipart forms, the max number of header key=> value pairs to parse Default: 2000(same as node's http). */
            headerPairs?: number | undefined;
            /** Keep the full path of files instead of just the base name (Default: false) */
            preservePath?: boolean | undefined;
        } | undefined;
        /** A function to control which files to upload and which to skip. */
        fileFilter?(
            req: IncomingMessage,
            file: File,
            callback: (error: Error | null, acceptFile: boolean) => void,
        ): void;
    }

    interface StorageEngine {
        _handleFile(req: IncomingMessage, file: File, callback: (error?: any, info?: File) => void): void;
        _removeFile(req: IncomingMessage, file: File, callback: (error: Error) => void): void;
    }

    interface DiskStorageOptions {
        /** A function used to determine within which folder the uploaded files should be stored. Defaults to the system's default temporary directory. */
        destination?:
            | string
            | ((req: IncomingMessage, file: File, callback: (error: Error | null, destination: string) => void) => void)
            | undefined;
        /** A function used to determine what the file should be named inside the folder. Defaults to a random name with no file extension. */
        filename?(req: IncomingMessage, file: File, callback: (error: Error | null, filename: string) => void): void;
    }

    interface Instance {
        /** In case you need to handle a text-only multipart form, you can use any of the multer methods (.single(), .array(), fields()), req.body contains the text fields */
        /** Accept a single file with the name fieldName. The single file will be stored in req.file. */
        single(fieldName?: string): Koa.Middleware;
        /** Accept an array of files, all with the name fieldName. Optionally error out if more than maxCount files are uploaded. The array of files will be stored in req.files. */
        array(fieldName: string, maxCount?: number): Koa.Middleware;
        /** Accept a mix of files, specified by fields. An object with arrays of files will be stored in req.files. */
        fields(fields: Field[]): Koa.Middleware;
        /** Accepts all files that comes over the wire. An array of files will be stored in req.files. */
        any(): Koa.Middleware;
    }

    /* The disk storage engine gives you full control on storing files to disk. */
    function diskStorage(options: DiskStorageOptions): StorageEngine;
    /* The memory storage engine stores the files in memory as Buffer objects. */
    function memoryStorage(): StorageEngine;
}

declare function multer(options?: multer.Options): multer.Instance;

export = multer;
