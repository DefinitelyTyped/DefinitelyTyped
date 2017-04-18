// Type definitions for multer-s3 2.7
// Project: https://github.com/badunk/multer-s3
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <http://github.com/tcaesvk/>
// Definitions: https://github.com/DefinitelyType/DefinitelyTyped

import * as AWS from "aws-sdk";
import { StorageEngine } from "multer";

interface Options {
    s3: AWS.S3;
    bucket: ((req: Express.Request, file: Express.Multer.File, callback: (error: any, bucket?: string) => void) => void) | string;
    key?(req: Express.Request, file: Express.Multer.File, callback: (error: any, key?: string) => void): void;
    acl?: ((req: Express.Request, file: Express.Multer.File, callback: (error: any, acl?: string) => void) => void) | string;
    contentType?(req: Express.Request, file: Express.Multer.File, callback: (error: any, mime?: string, stream?: NodeJS.ReadableStream) => void): void;
    metadata?(req: Express.Request, file: Express.Multer.File, callback: (error: any, metadata?: string) => void): void;
    cacheControl?: ((req: Express.Request, file: Express.Multer.File, callback: (error: any, cacheControl?: string) => void) => void) | string;
}

interface S3Storage {
    (options?: Options): StorageEngine;

    AUTO_CONTENT_TYPE(
        req: Express.Request,
        file: Express.Multer.File,
        callback: (error: any, mime?: string, stream?: NodeJS.ReadableStream) => void): void;
    DEFAULT_CONTENT_TYPE(
        req: Express.Request,
        file: Express.Multer.File,
        callback: (error: any, mime?: string) => void): void;
}

declare const s3Storage: S3Storage;
export = s3Storage;
