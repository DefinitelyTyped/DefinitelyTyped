// Type definitions for file-type 5.2
// Project: https://github.com/sindresorhus/file-type
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <https://github.com/tcaesvk>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = FileType;

declare function FileType(buf: Buffer | Uint8Array): FileType.FileTypeResult;

declare namespace FileType {
    interface FileTypeResult {
        ext: string;
        mime: string;
    }
}
