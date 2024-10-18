/// <reference types="node" />

import { Config } from "conventional-changelog-config-spec";

declare function standardVersion(options: Options): Promise<void>;

declare namespace standardVersion {
    interface Options extends Config {
        /**
         * @default
         * [
         *   'package.json',
         *   'bower.json',
         *   'manifest.json',
         *   'composer.json'
         * ]
         */
        packageFiles?: Array<string | Options.VersionFile> | undefined;

        /**
         * @default
         * [
         *   'package-lock.json',
         *   'npm-shrinkwrap.json',
         *   'composer.lock'
         * ]
         */
        bumpFiles?: Array<string | Options.VersionFile> | undefined;

        /**
         * Specify the release type manually (like npm version <major|minor|patch>).
         */
        releaseAs?: string | undefined;

        /**
         * Make a pre-release with optional option value to specify a tag id.
         */
        prerelease?: string | undefined;

        /**
         * Read the CHANGELOG from this file.
         *
         * @default
         * 'CHANGELOG.md'
         */
        infile?: string | Buffer | URL | number | undefined;

        /**
         * Commit message, replaces %s with new version.
         *
         * @deprecated
         * This option will be removed in the next major version, please use
         * `releaseCommitMessageFormat`.
         */
        message?: string | undefined;

        /**
         * Is this the first release?
         *
         * @default
         * false
         */
        firstRelease?: boolean | undefined;

        /**
         * Should the git commit and tag be signed?
         *
         * @default
         * false
         */
        sign?: boolean | undefined;

        /**
         * Bypass pre-commit or commit-msg git hooks during the commit phase.
         *
         * @default
         * false
         */
        noVerify?: boolean | undefined;

        /**
         * Commit all staged changes, not just files affected by standard-version.
         *
         * @default
         * false
         */
        commitAll?: boolean | undefined;

        /**
         * Don't print logs and errors.
         *
         * @default
         * false
         */
        silent?: boolean | undefined;

        /**
         * Set a custom prefix for the git tag to be created.
         *
         * @default
         * 'v'
         */
        tagPrefix?: string | undefined;

        /**
         * Provide scripts to execute for lifecycle events (prebump, precommit, etc.,).
         *
         * @default
         * {}
         */
        scripts?: Options.Scripts | undefined;

        /**
         * Map of steps in the release process that should be skipped.
         *
         * @default
         * {}
         */
        skip?: Options.Skip | undefined;

        /**
         * See the commands that running standard-version would run.
         *
         * @default
         * false
         */
        dryRun?: boolean | undefined;

        /**
         * Fallback to git tags for version, if no meta-information file is found (e.g.,
         * package.json).
         *
         * @default
         * true
         */
        gitTagFallback?: boolean | undefined;

        /**
         * Only populate commits made under this path.
         */
        path?: string | undefined;

        /**
         * Use a custom header when generating and updating changelog.
         *
         * @deprecated
         * This option will be removed in the next major version, please use `header`.
         */
        changelogHeader?: string | undefined;

        /**
         * Commit message guideline preset.
         *
         * @default
         * require.resolve('conventional-changelog-conventionalcommits')
         */
        preset?: string | undefined;
    }

    namespace Options {
        interface Updater {
            /**
             * This method is used to read the version from the provided file contents.
             *
             * @param contents provided file content
             * @return semantic version string
             */
            readVersion(contents: string): string;

            /**
             * This method is used to write the version to the provided contents.
             *
             * @param contents provided file content
             * @param version new semantic version string to write
             * @return value that will be written directly (overwrite) to the provided file
             */
            writeVersion(contents: string, version: string): string;
        }

        interface VersionFile {
            /**
             * path to the file you want to "bump"
             *
             * If no type or updater provided, type will be inferred from file extension
             */
            filename: string;

            /**
             * Built-in file types
             *
             * The `plain-text` updater assumes the file contents represents the version.
             *
             * The `json` updater assumes the version is available under a `version` key in the provided JSON document.
             */
            type?: "plain-text" | "json";

            /**
             * An updater is expected to be a Javascript module with atleast two methods exposed: readVersion and writeVersion
             * or the path to require it.
             */
            updater?: string | Updater;
        }

        interface Scripts {
            /**
             * Executed before anything happens. If the `prerelease` script returns a
             * non-zero exit code, versioning will be aborted, but it has no other effect on
             * the process.
             */
            prerelease?: string | undefined;

            /**
             * Executed before the version is bumped. If the `prebump` script returns a
             * version #, it will be used rather than the version calculated by
             * `standard-version`.
             */
            prebump?: string | undefined;

            /**
             * Executed after the version is bumped.
             */
            postbump?: string | undefined;

            /**
             * Executes before the CHANGELOG is generated.
             */
            prechangelog?: string | undefined;

            /**
             * Executes after the CHANGELOG is generated.
             */
            postchangelog?: string | undefined;

            /**
             * Called before the commit step.
             */
            precommit?: string | undefined;

            /**
             * Called after the commit step.
             */
            postcommit?: string | undefined;

            /**
             * Called before the tagging step.
             */
            pretag?: string | undefined;

            /**
             * Called after the tagging step.
             */
            posttag?: string | undefined;
        }

        type Skip = Partial<Record<"bump" | "changelog" | "commit" | "tag", boolean>>;
    }
}

type Options = standardVersion.Options;

export = standardVersion;
