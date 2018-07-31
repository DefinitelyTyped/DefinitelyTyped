// Type definitions for rename 1.0
// Project: https://github.com/popomore/rename
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = Rename;

declare function Rename(filepath: string | Rename.FileObject, transformer: Rename.Transformer): Rename.FilePath;

declare namespace Rename {
    interface FileObject { // using package's terminology
        dirname?: string;
        basename?: string;
        extname?: string;
        path?: string;
        hash?: string;          // not populated by package
    }

    interface Specification {
        dirname?: string;
        prefix?: string;
        basename?: string;
        suffix?: string;
        extname?: string;
    }

    type FilePath = string
        | Specification;

    type Transformer = ((spec: FileObject) => FilePath)
        | FilePath;

    function parse(filename: string): FileObject;

    function stringify(obj: FileObject): string;
}
