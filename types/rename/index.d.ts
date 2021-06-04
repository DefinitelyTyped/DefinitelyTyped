// Type definitions for rename 1.0
// Project: https://github.com/popomore/rename
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = rename;

declare function rename(filepath: string | rename.FileObject, transformer: rename.Transformer): rename.FilePath;

declare namespace rename {
    interface FileObject {
        // using package's terminology
        dirname?: string;
        basename?: string;
        extname?: string;
        path?: string;
        hash?: string; // not populated by package
        origin?: string;
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

    interface ParsedFileObject {
        dirname: string;
        extname: string;
        basename: string;
        origin: string;
    }

    function parse(filename: string | Partial<ParsedFileObject>): ParsedFileObject;

    function stringify(obj: FileObject): string;
}
