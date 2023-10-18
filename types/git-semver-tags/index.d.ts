/**
 * Get all git semver tags of your repository in reverse chronological order
 */
declare function gitSemverTags(options: gitSemverTags.Options, callback: gitSemverTags.Callback): void;
declare function gitSemverTags(callback: gitSemverTags.Callback): void;

declare namespace gitSemverTags {
    type Callback = (error: any, tags: string[]) => void;

    interface Options {
        /**
         * Extract lerna style tags (`foo-package@2.0.0`) from the git history, rather
         * than `v1.0.0` format.
         */
        lernaTags?: boolean | undefined;

        /**
         * What package should lerna style tags be listed for, e.g., `foo-package`.
         */
        package?: string | undefined;

        /**
         * Specify a prefix for the git tag to be ignored from the semver checks.
         */
        tagPrefix?: string | undefined;

        /**
         * If given, unstable tags (e.g. `x.x.x-alpha.1`, `x.x.x-rc.2`) will be skipped.
         */
        skipUnstable?: boolean | undefined;
    }
}

export = gitSemverTags;
