// Type definitions for is-file-esm 1.0
// Project: https://github.com/davidmarkclements/is-file-esm
// Definitions by: Leon Si <https://github.com/leonzalion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Result {
    esm: boolean;
    type: 'module' | 'commonjs' | undefined;
    extType: 'c' | 'm' | 'j';
    path: string;
    pkgPath: string;
}

declare const isFileEsm: {
    constants: {
        ERR_PATH_MUST_BE_STRING: string;
        ERR_PATH_MUST_BE_ABSOLUTE: string;
        ERR_PATH_MUST_EXIST: string;
        ERR_PATH_MUST_HAVE_VALID_EXT: string;
    };

    (path: string, callback: (error: Error | null, result?: Result) => void): void;
    (path: string): Promise<Result>;
    sync(path: string): Result;
};

export = isFileEsm;
