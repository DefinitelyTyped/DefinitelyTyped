// Type definitions for file-exists 4.0
// Project: https://github.com/scottcorgan/file-exists
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = fileExists;

declare function fileExists(filepath: string, callback?: (err: Error | null, exists: boolean) => void): void;
declare function fileExists(filepath: string, options?: fileExists.Options, callback?: (err: Error | null, exists: boolean) => void): void;

declare namespace fileExists {
    function sync(filepath: string, options?: Options): boolean;

    interface Options {
        root?: string;
    }
}
