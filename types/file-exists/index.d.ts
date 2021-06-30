// Type definitions for file-exists 4.0
// Project: https://github.com/scottcorgan/file-exists
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = fileExists;

type FilePathType = string | Buffer | URL;

// Promise APIs
declare function fileExists(filepath: FilePathType, options?: fileExists.Options): Promise<boolean>;

// Callback APIs
declare function fileExists(filepath: FilePathType, callback: (err: Error | null, exists: boolean) => void): void;
declare function fileExists(
    filepath: FilePathType,
    options: fileExists.Options,
    callback: (err: Error | null, exists: boolean) => void,
): void;

declare namespace fileExists {
    function sync(filepath: FilePathType, options?: Options): boolean;

    interface Options {
        root?: string;
    }
}
