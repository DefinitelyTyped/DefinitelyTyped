import { Options as CoreOptions } from "conventional-changelog-core";
import { Context as WriterContext } from "conventional-changelog-writer";
import { Commit, Options as ParserOptions } from "conventional-commits-parser";

/**
 * @param options  `options` is an object with the following properties:
 *                 * `ignoreReverted`
 *                 * `preset`
 *                 * `config`
 *                 * `whatBump`
 *                 * `tagPrefix`
 *                 * `skipUnstable`
 *                 * `lernaPackage`
 *                 * `path`
 * @param parserOpts See the [conventional-commits-parser](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser)
 *                   documentation for available options.
 */
declare function conventionalRecommendedBump(options: Options, parserOpts?: ParserOptions): Promise<Recommendation>;

declare namespace conventionalRecommendedBump {
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
        releaseType?: Recommendation.ReleaseType | undefined;
    }

    namespace Recommendation {
        type ReleaseType = "major" | "minor" | "patch";
    }

    /**
     * `options` is an object with the following properties:
     * * `ignoreReverted`
     * * `preset`
     * * `config`
     * * `whatBump`
     * * `tagPrefix`
     * * `skipUnstable`
     * * `lernaPackage`
     * * `path`
     */
    interface Options {
        /**
         * If `true`, reverted commits will be ignored.
         *
         * @default
         * true
         */
        ignoreReverted?: boolean | undefined;

        /**
         * It's recommended to use a preset so you don't have to define everything
         * yourself.
         *
         * The value is passed to [`conventional-changelog-preset-loader`](https://www.npmjs.com/package/conventional-changelog-preset-loader).
         */
        preset?: string | undefined;

        /**
         * This should serve as default values for other arguments of
         * `conventional-recommended-bump` so you don't need to rewrite the same or
         * similar config across your projects.
         *
         * @remarks
         * `config` option will be overwritten by the value loaded by
         * `conventional-changelog-preset-loader` if the `preset` options is set.
         */
        config?: CoreOptions.Config<Commit, WriterContext> | undefined;

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
        whatBump?: Options.WhatBump | undefined;

        /**
         * Specify a prefix for the git tag that will be taken into account during the
         * comparison.
         *
         * For instance if your version tag is prefixed by `version/` instead of `v` you
         * would specifying `--tagPrefix=version/` using the CLI, or `version/` as the
         * value of the `tagPrefix` option.
         */
        tagPrefix?: string | undefined;

        /**
         * If given, unstable tags (e.g. `x.x.x-alpha.1`, `x.x.x-rc.2`) will be skipped.
         */
        skipUnstable?: boolean | undefined;

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
        lernaPackage?: string | undefined;

        /**
         * Specify the path to only calculate with git commits related to the path.
         * If you want to calculate recommended bumps of packages in a Lerna-managed
         * repository, path should be use along with lernaPackage for each of the package.
         */
        path?: string | undefined;
    }

    namespace Options {
        type WhatBump = (commits: Commit[]) => WhatBump.Result;

        namespace WhatBump {
            interface Result {
                level?: number | undefined;
                reason?: string | undefined;
            }
        }
    }
}

type Recommendation = conventionalRecommendedBump.Recommendation;
type Options = conventionalRecommendedBump.Options;

export = conventionalRecommendedBump;
