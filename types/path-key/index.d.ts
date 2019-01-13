// Type definitions for path-key 2.0
// Project: https://github.com/sindresorhus/path-key#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = pathKey;

declare function pathKey(options?: pathKey.Options): string;

declare namespace pathKey {
    interface Options {
        env?: { [key: string]: any };
        platform?: NodeJS.Platform;
    }
}
