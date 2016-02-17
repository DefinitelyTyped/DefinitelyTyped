// Type definitions for path-exists 1.0.0
// Project: https://github.com/sindresorhus/path-exists
// Definitions by: Shogo Iwano <https://github.com/shiwano>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "path-exists" {
    interface PathExists {
        (path: string, callback: (error: Error, exists: boolean) => void): void;
        sync(path: string): boolean;
    }

    var pathExists: PathExists;
    export = pathExists;
}
