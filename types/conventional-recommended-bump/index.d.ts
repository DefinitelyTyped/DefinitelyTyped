// Type definitions for conventional-recommended-bump 6.0
// Project: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { Options as CoreOptions } from "conventional-changelog-core";
import { Commit, Options as ParserOptions } from "conventional-commits-parser";
import { Context as WriterContext } from "conventional-changelog-writer";

/**
 * @param options  `options` is an object with the following properties:
 *
 *                 * `ignoreReverted`
 *                 * `preset`
 *                 * `config`
 *                 * `whatBump`
 * @param callback
 */
declare function conventionalRecommendedBump(options: Options, callback: Callback): void;

/**
 *
 * @param options    `options` is an object with the following properties:
 *
 *                   * `ignoreReverted`
 *                   * `preset`
 *                   * `config`
 *                   * `whatBump`
 * @param parserOpts See the [conventional-commits-parser](https://github.com/conventional-changelog/conventional-commits-parser)
 *                   documentation for available options.
 * @param callback
 */
declare function conventionalRecommendedBump(options: Options, parserOpts: ParserOptions, callback: Callback): void;

declare namespace conventionalRecommendedBump {
    /**
     * `recommendation` is an `object` with a single property, `releaseType`.
     *
     * `releaseType` is a `string`: Possible values: `major`, `minor` and `patch`,
     * or `undefined` if `whatBump` does not return a valid `level` property, or
     * the `level` property is not set by `whatBump`.
     */
    interface Callback {
        /**
         * @param error
         * @param recommendation `recommendation` is an `object` with a single property,
         *                       `releaseType`.
         */
        (error: any, recommendation: Callback.Recommendation): void;
    }

    namespace Callback {
        /**
         * `recommendation` is an `object` with a single property, `releaseType`.
         *
         * `releaseType` is a `string`: Possible values: `major`, `minor` and `patch`,
         * or `undefined` if `whatBump` does not return a valid `level` property, or
         * the `level` property is not set by `whatBump`.
         */
        interface Recommendation extends Options.WhatBump.Result {
            /**
             * `releaseType` is a `string`: Possible values: `major`, `minor` and `patch`,
             * or `undefined` if `whatBump` does not return a valid `level` property, or
             * the `level` property is not set by `whatBump`.
             */
            releaseType?: Recommendation.ReleaseType;
        }

        namespace Recommendation {
            type ReleaseType = "major" | "minor" | "patch";
        }
    }

    /**
     * `options` is an object with the following properties:
     * * `ignoreReverted`
     * * `preset`
     * * `config`
     * * `whatBump`
     */
    interface Options {
        /**
         * If `true`, reverted commits will be ignored.
         *
         * @default
         * true
         */
        ignoreReverted?: boolean;

        /**
         * It's recommended to use a preset so you don't have to define everything
         * yourself.
         *
         * The value is passed to [`conventional-changelog-preset-loader`](https://www.npmjs.com/package/conventional-changelog-preset-loader).
         */
        preset?: string;

        /**
         * This should serve as default values for other arguments of
         * `conventional-recommended-bump` so you don't need to rewrite the same or
         * similar config across your projects.
         *
         * @remarks
         * `config` option will be overwritten by the value loaded by
         * `conventional-changelog-preset-loader` if the `preset` options is set.
         */
        config?: CoreOptions.Config<Commit, WriterContext>;

        /**
         * A function that takes parsed commits as an argument.
         *
         * ```
         * whatBump(commits) {};
         * ```
         *
         * `commits` is an array of all commits from last semver tag to `HEAD` as parsed
         * by `conventional-commits-parser`.
         *
         * This should return an object including but not limited to `level` and `reason`.
         * `level` is a `number` indicating what bump it should be and `reason` is the
         * reason of such release.
         */
        whatBump?: Options.WhatBump;

        /**
         * Specify a prefix for the git tag that will be taken into account during the
         * comparison.
         *
         * For instance if your version tag is prefixed by `version/` instead of `v` you
         * would specifying `--tagPrefix=version/` using the CLI, or `version/` as the
         * value of the `tagPrefix` option.
         */
        tagPrefix?: string;

        /**
         * Specify the name of a package in a [Lerna](https://lernajs.io/)-managed
         * repository. The package name will be used when fetching all changes to a
         * package since the last time that package was released.
         *
         * For instance if your project contained a package named
         * `conventional-changelog`, you could have only commits that have happened
         * since the last release of `conventional-changelog` was tagged by
         * specifying `--lernaPackage=conventional-changelog` using the CLI, or
         * `conventional-changelog` as the value of the `lernaPackage` option.
         */
        lernaPackage?: string;
    }

    namespace Options {
        type WhatBump = (commits: Commit[]) => WhatBump.Result;

        namespace WhatBump {
            interface Result {
                level?: number;
                reason?: string;
            }
        }
    }
}

type Callback = conventionalRecommendedBump.Callback;
type Options = conventionalRecommendedBump.Options;

export = conventionalRecommendedBump;
