// Type definitions for express-fileupload 1.4
// Project: https://github.com/richardgirges/express-fileupload#readme
// Definitions by: Sefa Ilkimen <https://github.com/silkimen>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Mark Oude Elberink <https://github.com/markxoe>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { RequestHandler } from 'express';
import type { BusboyConfig } from 'busboy';

declare global {
    namespace Express {
        interface Request {
            files?: fileUpload.FileArray | null | undefined;
        }
    }
}

declare function fileUpload(options?: fileUpload.Options): RequestHandler;

declare namespace fileUpload {
    interface FileArray {
        [formField: string]: UploadedFile | UploadedFile[];
    }

    interface UploadedFile {
        /** file name */
        name: string;
        /** A function to move the file elsewhere on your server */
        mv(path: string, callback: (err: any) => void): void;
        mv(path: string): Promise<void>;
        /** Encoding type of the file */
        encoding: string;
        /** The mimetype of your file */
        mimetype: string;
        /** A buffer representation of your file, returns empty buffer in case useTempFiles option was set to true. */
        data: Buffer;
        /** A path to the temporary file in case useTempFiles option was set to true. */
        tempFilePath: string;
        /** A boolean that represents if the file is over the size limit */
        truncated: boolean;
        /** Uploaded size in bytes */
        size: number;
        /** MD5 checksum of the uploaded file */
        md5: string;
    }

    /**
     * @see {@link https://github.com/richardgirges/express-fileupload#available-options}
     */
    // TODO: we need the `Partial<...>` part here because BusboyConfig properties used to be not optional
    // in @types/busboy@0, users upgrading this type with a lockfile won't receive the update to
    // newer busboy types this package actually requires
    interface Options extends Partial<BusboyConfig> {
        /**
         * Automatically creates the directory path specified in `.mv(filePathName)`
         * @default false
         */
        createParentPath?: boolean | undefined;
        /**
         * Applies uri decoding to file names if set `true`.
         * @default false
         */
        uriDecodeFileNames?: boolean | undefined;
        /**
         * Strips characters from the upload's filename.
         * You can use custom regex to determine what to strip.
         * If set to `true`, non-alphanumeric characters _except_ dashes and underscores will be stripped.
         * This option is off by default.
         * @default false
         *
         * @example
         * // strip slashes from file names
         * app.use(fileUpload({ safeFileNames: /\\/g }))
         *
         * @example
         * app.use(fileUpload({ safeFileNames: true }))
         */
        safeFileNames?: boolean | RegExp | undefined;
        /**
         * Preserves filename extension when using `safeFileNames` option.
         * If set to `true`, will default to an extension length of `3`.
         * If set to `number`, this will be the max allowable extension length.
         * If an extension is smaller than the extension length, it remains untouched. If the extension is longer,
         * it is shifted.
         * @default false
         *
         * @example
         * // true
         * app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));
         * // myFileName.ext --> myFileName.ext
         *
         * @example
         * // max extension length 2, extension shifted
         * app.use(fileUpload({ safeFileNames: true, preserveExtension: 2 }));
         * // myFileName.ext --> myFileNamee.xt
         */
        preserveExtension?: boolean | number | undefined;
        /**
         * Returns a HTTP 413 when the file is bigger than the size limit if `true`.
         * Otherwise, it will add a `truncated = true` to the resulting file structure.
         * @default false
         */
        abortOnLimit?: boolean | undefined;
        /**
         * Response which will be send to client if file size limit exceeded when `abortOnLimit` set to `true`.
         * @default 'File size limit has been reached'
         */
        responseOnLimit?: string | undefined;
        /**
         * User defined limit handler which will be invoked if the file is bigger than configured limits.
         * @default false
         */
        limitHandler?: boolean | RequestHandler | undefined;
        /**
         * By default this module uploads files into RAM.
         * Setting this option to `true` turns on using temporary files instead of utilising RAM.
         * This avoids memory overflow issues when uploading large files or in case of uploading
         * lots of files at same time.
         * @default false
         */
        useTempFiles?: boolean | undefined;
        /**
         * Path to store temporary files.
         * Used along with the `useTempFiles` option. By default this module uses `'tmp'` folder
         * in the current working directory.
         * You can use trailing slash, but it is not necessary.
         * @default './tmp'
         */
        tempFileDir?: string | undefined;
        /**
         * By default, `req.body` and `req.files` are flattened like this:
         * `{'name': 'John', 'hobbies[0]': 'Cinema', 'hobbies[1]': 'Bike'}
         *
         * When this option is enabled they are parsed in order to be nested like this:
         * `{'name': 'John', 'hobbies': ['Cinema', 'Bike']}`
         * @default false
         */
        parseNested?: boolean | undefined;
        /**
         * Turn on/off upload process logging. Can be useful for troubleshooting.
         * @default false
         */
        debug?: boolean | undefined;
        /**
         * This defines how long to wait for data before aborting. Set to `0` if you want to turn off timeout checks.
         * @default 60_000
         */
        uploadTimeout?: number | undefined;
    }
}

export = fileUpload;
