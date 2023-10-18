export = rename;

declare function rename(filepath: string | rename.FileObject, transformer: rename.Transformer): rename.FilePath;

declare namespace rename {
    interface FileObject {
        // using package's terminology
        dirname?: string | undefined;
        basename?: string | undefined;
        extname?: string | undefined;
        path?: string | undefined;
        hash?: string | undefined; // not populated by package
        origin?: string | undefined;
    }

    interface Specification {
        dirname?: string | undefined;
        prefix?: string | undefined;
        basename?: string | undefined;
        suffix?: string | undefined;
        extname?: string | undefined;
    }

    type FilePath =
        | string
        | Specification;

    type Transformer =
        | ((spec: FileObject) => FilePath)
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
