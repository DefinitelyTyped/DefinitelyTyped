// Type definitions for latest-version 4.0
// Project: https://github.com/sindresorhus/latest-version#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = latestVersion;

declare function latestVersion(name: string, options?: latestVersion.Options): Promise<string>;

declare namespace latestVersion {
    interface Options {
        version?: string;
    }
}
