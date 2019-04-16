// Type definitions for bin-version 3.0
// Project: https://github.com/sindresorhus/bin-version#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = binVersion;

declare function binVersion(binary: string, options?: binVersion.Options): Promise<string>;

declare namespace binVersion {
    interface Options {
        args?: string[];
    }
}
