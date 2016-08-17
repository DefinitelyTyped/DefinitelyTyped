// Type definitions for multer-s3
// Project: https://github.com/badunk/multer-s3
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <http://github.com/tcaesvk/>
// Definitions: https://github.com/DefinitelyType/DefinitelyTyped

/// <reference path="../aws-sdk/aws-sdk.d.ts" />
/// <reference path="../multer/multer.d.ts" />

declare module "multer-s3" {
    import * as awssdk from "aws-sdk"
    import * as multer from "multer"

    interface Options {
        s3: awssdk.S3,
        bucket: GetString | string
        key?: GetString
        acl?: GetString | string
        contentType?: GetStringWithStream
        metadata?: GetString
        cacheControl?: GetString | string
    }

    interface GetString {
        (req: Express.Request, file: Express.Multer.File, callback: (error?: any, s?: string) => void): void
    }

    interface GetStringWithStream {
        (req: Express.Request, file: Express.Multer.File, callback: (error?: any, s?: string, stream?: NodeJS.ReadableStream) => void): void
    }

    interface S3 {
        (options?: Options): multer.StorageEngine

        AUTO_CONTENT_TYPE: GetStringWithStream
        DEFAULT_CONTENT_TYPE: GetString
    }

    let s3: S3

    export = s3
}
