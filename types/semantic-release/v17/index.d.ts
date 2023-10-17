/// <reference types="node" />

declare namespace SemanticRelease {
    /**
     * A semver release type.
     * See https://github.com/semantic-release/commit-analyzer/blob/master/lib/default-release-types.js
     */
    type ReleaseType = "prerelease" | "prepatch" | "patch" | "preminor" | "minor" | "premajor" | "major";

    type LoggerFunction = (...message: any[]) => void;

    /**
     * semantic-release options.
     *
     * Can be used to set any core option or plugin options.
     * Each option will take precedence over options configured in the
     * configuration file and shareable configurations.
     */
    interface Options {
        /**
         * List of modules or file paths containing a
         * [shareable configuration](https://semantic-release.gitbook.io/semantic-release/usage/shareable-configurations).
         * If multiple shareable configurations are set, they will be imported
         * in the order defined with each configuration option taking
         * precedence over the options defined in a previous shareable
         * configuration.
         *
         * **Note**: Options defined via CLI arguments or in the configuration
         * file will take precedence over the ones defined in any shareable
         * configuration.
         */
        extends?: ReadonlyArray<string> | string | undefined;

        /**
         * The branches on which releases should happen. By default
         * **semantic-release** will release:
         *
         *  * regular releases to the default distribution channel from the
         *    branch `master`
         *  * regular releases to a distribution channel matching the branch
         *    name from any existing branch with a name matching a maintenance
         *    release range (`N.N.x` or `N.x.x` or `N.x` with `N` being a
         *    number)
         *  * regular releases to the `next` distribution channel from the
         *    branch `next` if it exists
         *  * regular releases to the `next-major` distribution channel from
         *    the branch `next-major` if it exists.
         *  * prereleases to the `beta` distribution channel from the branch
         *    `beta` if it exists
         *  * prereleases to the `alpha` distribution channel from the branch
         *    `alpha` if it exists
         *
         * **Note**: If your repository does not have a release branch, then
         * **semantic-release** will fail with an `ERELEASEBRANCHES` error
         * message. If you are using the default configuration, you can fix
         * this error by pushing a `master` branch.
         *
         * **Note**: Once **semantic-release** is configured, any user with the
         * permission to push commits on one of those branches will be able to
         * publish a release. It is recommended to protect those branches, for
         * example with [GitHub protected branches](https://help.github.com/articles/about-protected-branches).
         *
         * See [Workflow configuration](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#workflow-configuration)
         * for more details.
         */
        branches?: ReadonlyArray<BranchSpec> | BranchSpec | undefined;

        /**
         * The git repository URL.
         *
         * Any valid git url format is supported (see
         * [git protocols](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols))
         *
         * Default: `repository` property in `package.json`, or git origin url.
         */
        repositoryUrl?: string | undefined;

        /**
         * The git tag format used by **semantic-release** to identify
         * releases. The tag name is generated with [Lodash template](https://lodash.com/docs#template)
         * and will be compiled with the `version` variable.
         *
         * **Note**: The `tagFormat` must contain the `version` variable
         * exactly once and compile to a
         * [valid git reference](https://git-scm.com/docs/git-check-ref-format#_description).
         */
        tagFormat?: string | undefined;

        /**
         * Define the list of plugins to use. Plugins will run in series, in
         * the order defined, for each [step](https://semantic-release.gitbook.io/semantic-release/#release-steps)
         * if they implement it.
         *
         * Plugins configuration can be defined by wrapping the name and an
         * options object in an array.
         *
         * See [Plugins configuration](https://semantic-release.gitbook.io/semantic-release/usage/plugins#plugins)
         * for more details.
         *
         * Default: `[
         *     "@semantic-release/commit-analyzer",
         *     "@semantic-release/release-notes-generator",
         *     "@semantic-release/npm",
         *     "@semantic-release/github"
         * ]`
         */
        plugins?: ReadonlyArray<PluginSpec> | undefined;

        /**
         * Dry-run mode, skip publishing, print next version and release notes.
         */
        dryRun?: boolean | undefined;

        /**
         * Set to false to skip Continuous Integration environment verifications.
         * This allows for making releases from a local machine.
         */
        ci?: boolean | undefined;

        /**
         * Any other options supported by plugins.
         */
        [name: string]: any;
    }

    /**
     * semantic-release options, after normalization and defaults have been
     * applied.
     */
    interface GlobalConfig extends Options {
        /**
         * The branches on which releases should happen. By default
         * **semantic-release** will release:
         *
         *  * regular releases to the default distribution channel from the
         *    branch `master`
         *  * regular releases to a distribution channel matching the branch
         *    name from any existing branch with a name matching a maintenance
         *    release range (`N.N.x` or `N.x.x` or `N.x` with `N` being a
         *    number)
         *  * regular releases to the `next` distribution channel from the
         *    branch `next` if it exists
         *  * regular releases to the `next-major` distribution channel from
         *    the branch `next-major` if it exists.
         *  * prereleases to the `beta` distribution channel from the branch
         *    `beta` if it exists
         *  * prereleases to the `alpha` distribution channel from the branch
         *    `alpha` if it exists
         *
         * **Note**: If your repository does not have a release branch, then
         * **semantic-release** will fail with an `ERELEASEBRANCHES` error
         * message. If you are using the default configuration, you can fix
         * this error by pushing a `master` branch.
         *
         * **Note**: Once **semantic-release** is configured, any user with the
         * permission to push commits on one of those branches will be able to
         * publish a release. It is recommended to protect those branches, for
         * example with [GitHub protected branches](https://help.github.com/articles/about-protected-branches).
         *
         * See [Workflow configuration](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#workflow-configuration)
         * for more details.
         */
        branches: ReadonlyArray<BranchSpec> | BranchSpec;

        /**
         * The git repository URL.
         *
         * Any valid git url format is supported (see
         * [git protocols](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols))
         *
         * Default: `repository` property in `package.json`, or git origin url.
         */
        repositoryUrl: string;

        /**
         * The git tag format used by **semantic-release** to identify
         * releases. The tag name is generated with [Lodash template](https://lodash.com/docs#template)
         * and will be compiled with the `version` variable.
         *
         * **Note**: The `tagFormat` must contain the `version` variable
         * exactly once and compile to a
         * [valid git reference](https://git-scm.com/docs/git-check-ref-format#_description).
         */
        tagFormat: string;

        /**
         * Define the list of plugins to use. Plugins will run in series, in
         * the order defined, for each [step](https://semantic-release.gitbook.io/semantic-release/#release-steps)
         * if they implement it.
         *
         * Plugins configuration can be defined by wrapping the name and an
         * options object in an array.
         *
         * See [Plugins configuration](https://semantic-release.gitbook.io/semantic-release/usage/plugins#plugins)
         * for more details.
         *
         * Default: `[
         *     "@semantic-release/commit-analyzer",
         *     "@semantic-release/release-notes-generator",
         *     "@semantic-release/npm",
         *     "@semantic-release/github"
         * ]`
         */
        plugins: ReadonlyArray<PluginSpec>;
    }

    interface BranchObject {
        /**
         * The name of git branch.
         *
         * A `name` is required for all types of branch. It can be defined as a
         * [glob](https://github.com/micromatch/micromatch#matching-features)
         * in which case the definition will be expanded to one per matching
         * branch existing in the repository.
         *
         * If `name` doesn't match any branch existing in the repository, the
         * definition will be ignored. For example, the default configuration
         * includes the definition `next` and `next-major` which will become
         * active only  when the branches `next` and/or `next-major` are
         * created in the repository.
         */
        name: string;

        /**
         * The distribution channel on which to publish releases from this
         * branch.
         *
         * If this field is set to `false`, then the branch will be released
         * on the default distribution channel (for example the `@latest`
         * [dist-tag](https://docs.npmjs.com/cli/dist-tag) for npm). This is
         * also the default behavior for the first
         * [release branch](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#release-branches)
         * if the channel property is not set.
         *
         * For all other branches, if the channel property is not set, then the
         * channel name will be the same as the branch name.
         *
         * The value of `channel`, if defined as a string, is generated with
         * [Lodash template](https://lodash.com/docs#template) with the
         * variable `name` set to the branch name.
         *
         * For example `{name: 'next', channel: 'channel-${name}'}` will be
         * expanded to `{name: 'next', channel: 'channel-next'}`.
         */
        channel?: string | false | undefined;

        /**
         * The range of [semantic versions](https://semver.org/) to support on
         * this branch.
         *
         * A `range` only applies to maintenance branches and must be formatted
         * like `N.N.x` or `N.x` (`N` is a number). If no range is specified
         * but the `name` is formatted as a range, then the branch will be
         * considered a maintenance branch and the `name` value will be used
         * for the `range`.
         *
         * Required for maintenance branches, unless `name` is formatted like
         * `N.N.x` or `N.x` (`N` is a number).
         */
        range?: string | undefined;

        /**
         * The pre-release identifier to append to [semantic versions](https://semver.org/)
         * released from this branch.
         *
         * A `prerelease` property applies only to pre-release branches and
         * the `prerelease` value must be valid per the [Semantic Versioning
         * Specification](https://semver.org/#spec-item-9). It will determine
         * the name of versions. For example if `prerelease` is set to
         * `"beta"`, the version will be formatted like `2.0.0-beta.1`,
         * `2.0.0-beta.2`, etc.
         *
         * The value of `prerelease`, if defined as a string, is generated with
         * [Lodash template](https://lodash.com/docs#template) with the
         * variable `name` set to the name of the branch.
         *
         * If the `prerelease property is set to `true` then the name of the
         * branch is used as the pre-release identifier.
         *
         * Required for pre-release branches.
         */
        prerelease?: string | boolean | undefined;
    }

    /**
     * Specifies a git branch holding commits to analyze and code to release.
     *
     * Each branch may be defined either by a string or an object. Specifying
     * a string is a shortcut for specifying that string as the `name` field,
     * for example `"master"` expands to `{name: "master"}`.
     */
    type BranchSpec = string | BranchObject;
    /**
     * Specifies a plugin to use.
     *
     * The plugin is specified by its module name.
     *
     * To pass options to a plugin, specify an array containing the plugin module
     * name and an options object.
     */
    type PluginSpec = string | [string, any];

    /** semantic-release configuration specific for API usage. */
    interface Config {
        /**
         * The current working directory to use. It should be configured to
         * the root of the Git repository to release from.
         *
         * It allows to run semantic-release from a specific path without
         * having to change the local process cwd with process.chdir().
         *
         * @default process.cwd
         */
        cwd?: string | undefined;

        /**
         * The environment variables to use.
         *
         * It allows to run semantic-release with specific environment
         * variables without having to modify the local process.env.
         *
         * @default process.env
         */
        env?: { [name: string]: string } | undefined;

        /**
         * The writable stream used to log information.
         *
         * It allows to configure semantic-release to write logs to a specific
         * stream rather than the local process.stdout.
         *
         * @default process.stdout
         */
        stdout?: NodeJS.WriteStream | undefined;

        /**
         * The writable stream used to log errors.
         *
         * It allows to configure semantic-release to write errors to a
         * specific stream rather than the local process.stderr.
         *
         * @default process.stderr
         */
        stderr?: NodeJS.WriteStream | undefined;
    }

    interface LastRelease {
        /**
         * The version name of the release.
         */
        version: string;

        /**
         * The Git tag of the release.
         */
        gitTag: string;

        /**
         * The Git checksum of the last commit of the release.
         */
        gitHead: string;
    }

    interface NextRelease extends LastRelease {
        /**
         * The semver type of the release.
         */
        type: ReleaseType;

        /**
         * The release channel of the release.
         */
        channel?: string | undefined;

        /**
         * The git hash of the release.
         */
        gitHead: string;

        /**
         * The version without v
         */
        version: string;

        /**
         * The version with v prefix
         */
        gitTag: string;

        /**
         * The release name
         */
        name?: string;

        /**
         * The release notes of the next release.
         */
        notes: string;
    }

    interface Context {
        /**
         * The semantic release configuration itself.
         */
        options?: GlobalConfig | undefined;

        /**
         * The previous release details.
         */
        lastRelease?: LastRelease | undefined;

        /**
         * The next release details.
         */
        nextRelease?: NextRelease | undefined;

        /**
         * The shared logger instance of semantic release.
         */
        logger: {
            await: LoggerFunction;
            complete: LoggerFunction;
            debug: LoggerFunction;
            error: LoggerFunction;
            fatal: LoggerFunction;
            fav: LoggerFunction;
            info: LoggerFunction;
            log: LoggerFunction;
            note: LoggerFunction;
            pause: LoggerFunction;
            pending: LoggerFunction;
            star: LoggerFunction;
            start: LoggerFunction;
            success: LoggerFunction;
            wait: LoggerFunction;
            warn: LoggerFunction;
            watch: LoggerFunction;
        };

        /**
         * Environment variables.
         */
        env: {
            [key: string]: string;
        };

        /**
         * Commits to analyze.
         */
        commits?: Commit[];

        /**
         * Current branch being published.
         */
        branch: BranchObject;
    }

    interface Commit {
        /**
         * The commit abbreviated and full hash.
         */
        commit: {
            /**
             * The commit hash.
             */
            long: string;

            /**
             * The commit abbreviated hash.
             */
            short: string;
        };

        /**
         * The commit abbreviated and full tree hash.
         */
        tree: {
            /**
             * The commit tree hash.
             */
            long: string;

            /**
             * The commit abbreviated tree hash.
             */
            short: string;
        };

        /**
         * The commit author information.
         */
        author: {
            /**
             * The commit author name.
             */
            name: string;

            /**
             * The commit author email.
             */
            email: string;

            /**
             * The commit author date.
             */
            short: string;
        };

        /**
         * The committer information.
         */
        committer: {
            /**
             * The committer name.
             */
            name: string;

            /**
             * The committer email.
             */
            email: string;

            /**
             * The committer date.
             */
            short: string;
        };

        /**
         * The commit subject.
         */
        subject: string;

        /**
         * The commit body.
         */
        body: string;

        /**
         * The commit full message (subject and body).
         */
        message: string;

        /**
         * The commit hash.
         */
        hash: string;

        /**
         * The committer date.
         */
        committerDate: string;
    }

    /**
     * Details of a release published by a publish plugin.
     */
    interface Release {
        /**
         * The release name, only if set by the corresponding publish plugin.
         */
        name?: string | undefined;

        /**
         * The release URL, only if set by the corresponding publish plugin.
         */
        url?: string | undefined;

        /**
         * The semver type of the release.
         */
        type: ReleaseType;

        /**
         * The version of the release.
         */
        version: string;

        /**
         * The sha of the last commit being part of the release.
         */
        gitHead: string;

        /**
         * The Git tag associated with the release.
         */
        gitTag: string;

        /**
         * The release notes for the release.
         */
        notes: string;

        /**
         * The name of the plugin that published the release.
         */
        pluginName: string;
    }

    /**
     * An object with details of the release if a release was published, or
     * false if no release was published.
     */
    type Result =
        | false
        | {
            /**
             * Information related to the last release found.
             */
            lastRelease: LastRelease;

            /**
             * The list of commits included in the new release.
             */
            commits: Commit[];

            /**
             * Information related to the newly published release.
             */
            nextRelease: NextRelease;

            /**
             * The list of releases published, one release per publish plugin.
             */
            releases: Release[];
        };
}

/**
 * Run semantic-release and returns a Promise that resolves to a Result
 * object.
 * @async
 */
declare function SemanticRelease(
    options: SemanticRelease.Options,
    environment?: SemanticRelease.Config,
): Promise<SemanticRelease.Result>;

export = SemanticRelease;
