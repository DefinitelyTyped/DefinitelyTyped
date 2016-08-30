// Type definitions for file-type
// Project: https://github.com/sindresorhus/file-type
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <http://github.com/tcaesvk/>
// Definitions: https://github.com/DefinitelyType/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "file-type" {
    interface FileTypeResult {
        ext: string
        mime: string
    }

    function FileType(buf: Buffer): FileTypeResult

    export = FileType
}
