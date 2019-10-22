// Type definitions for multer-s3 2.7
// Project: https://github.com/badunk/multer-s3
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <https://github.com/tcaesvk>
//                 Gal Talmor <https://github.com/galtalmor>
//                 Matt Terski <https://github.com/terski>
//                 Agata Belkius <https://github.com/abelkius>
// Definitions: https://github.com/DefinitelyType/DefinitelyTyped
// TypeScript Version: 2.6

import * as AWS from "aws-sdk";


declare namespace MulterS3 {
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

    export interface Options<R> {
        s3: AWS.S3;
        bucket: ((req: R, file: File, callback: (error: any, bucket?: string) => void) => void) | string;
        key?(req: R, file: File, callback: (error: any, key?: string) => void): void;
        acl?: ((req: R, file: File, callback: (error: any, acl?: string) => void) => void) | string;
        contentType?(req: R, file: File, callback: (error: any, mime?: string, stream?: NodeJS.ReadableStream) => void): void;
        metadata?(req: R, file: File, callback: (error: any, metadata?: any) => void): void;
        cacheControl?: ((req: R, file: File, callback: (error: any, cacheControl?: string) => void) => void) | string;
        serverSideEncryption?: ((req: R, file: File, callback: (error: any, serverSideEncryption?: string) => void) => void) | string;
    }

    export interface S3Storage {
        <E,R>(options?: Options<R>): E;

        AUTO_CONTENT_TYPE<R>(
            req: R,
            file: File,
            callback: (error: any, mime?: string, stream?: NodeJS.ReadableStream) => void): void;
        DEFAULT_CONTENT_TYPE<R>(
            req: R,
            file: File,
            callback: (error: any, mime?: string) => void): void;
    }
}

declare const s3Storage: MulterS3.S3Storage;
export = s3Storage;
