// Type definitions for new-github-release-url 0.1
// Project: https://github.com/sindresorhus/new-github-release-url#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = newGithubReleaseUrl;

/**
 * Returns a URL string.
 */
declare function newGithubReleaseUrl(options: newGithubReleaseUrl.Options): string;

declare namespace newGithubReleaseUrl {
    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
    type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

    type Options = XOR<RepoUrlOptions, UserRepoOptions>;

    interface BaseOptions {
        /**
         * The tag name of the release.
         */
        tag?: string;
        /**
         * The branch name or commit SHA to point the release's tag at, if the tag doesn't already exist.
         * @default The default branch
         */
        target?: string;
        /**
         * The title of the release.
         * GitHub shows the `tag` name when not specified.
         */
        title?: string;
        /**
         * The description text of the release.
         */
        body?: string;
        /**
         * Whether the release should be marked as a pre-release.
         * @default false
         */
        isPrerelease?: boolean;
    }

    interface RepoUrlOptions extends BaseOptions {
        /**
         * The full URL to the repo.
         */
        repoUrl: string;
    }

    interface UserRepoOptions extends BaseOptions {
        /**
         * GitHub username or organization.
         */
        user: string;
        /**
         * GitHub repo.
         */
        repo: string;
    }
}
