// Type definitions for file-type
// Project: https://github.com/sindresorhus/file-type
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <http://github.com/tcaesvk/>
// Definitions: https://github.com/DefinitelyType/DefinitelyTyped

/// <reference types="node" />

interface FileTypeResult {
    ext: string
    mime: string
}

declare function FileType(buf: Buffer): FileTypeResult

export = FileType
