// Type definitions for path-exists 1.0
// Project: https://github.com/sindresorhus/path-exists
// Definitions by: Shogo Iwano <https://github.com/shiwano>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PathExists {
    (path: string, callback: (error: Error, exists: boolean) => void): void;
    sync(path: string): boolean;
}

declare const pathExists: PathExists;
export = pathExists;
