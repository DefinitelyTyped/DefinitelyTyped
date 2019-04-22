// Type definitions for to-semver 1.1
// Project: https://github.com/sindresorhus/to-semver#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = toSemver;

/**
 * Get an array of valid, sorted, and cleaned [semver](http://semver.org/) versions from an array of strings.
 */
declare function toSemver(versions: string[], options?: toSemver.Options): string[];

declare namespace toSemver {
    interface Options {
        /**
         * Include prereleases, like `1.2.3-alpha.3`.
         * @default true
         */
        includePrereleases?: boolean;
        /**
         * Clean versions. For example `v1.3.0` → `1.3.0`.
         * @default true
         */
        clean?: boolean;
    }
}
