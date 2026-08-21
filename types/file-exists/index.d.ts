/// <reference types="node" />

export = fileExists;

type FilePathType = string | Buffer | URL;

interface FalsyRoot {
    root?: "";
    [otherKey: string]: any;
}

// Promise APIs
declare function fileExists(filepath: FilePathType, options?: FalsyRoot): Promise<boolean>;
declare function fileExists(filepath: string, options: fileExists.Options): Promise<boolean>;

// Callback APIs
declare function fileExists(filepath: FilePathType, callback: (err: Error | null, exists: boolean) => void): void;
declare function fileExists(
    filepath: FilePathType,
    options: FalsyRoot,
    callback: (err: Error | null, exists: boolean) => void,
): void;
declare function fileExists(
    filepath: string,
    options: fileExists.Options,
    callback: (err: Error | null, exists: boolean) => void,
): void;

declare namespace fileExists {
    function sync(filepath: FilePathType, options?: Options): boolean;

    interface Options {
        root?: string;
        [ignoredValues: string]: any;
    }
}
