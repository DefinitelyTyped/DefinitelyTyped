// Type definitions for new-github-issue-url 0.1
// Project: https://github.com/sindresorhus/new-github-issue-url#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = newGithubIssueUrl;

/**
 * Returns a URL string.
 */
declare function newGithubIssueUrl(options: newGithubIssueUrl.Options): string;

declare namespace newGithubIssueUrl {
    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
    type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

    type Options = XOR<RepoUrlOptions, UserRepoOptions>;

    interface BaseOptions {
        /**
         * The issue body.
         */
        body?: string;
        /**
         * The issue title.
         */
        title?: string;
        /**
         * Use an [issue template](https://help.github.com/articles/manually-creating-a-single-issue-template-for-your-repository).
         *
         * For example, if you want to use a template at `ISSUE_TEMPLATE/unicorn.md`, you would specify `unicorn.md` here.
         */
        template?: string;
        /**
         * The labels for the issue.
         *
         * *Requires the user to have the permission to add labels.*
         */
        labels?: string[];
        /**
         * The milestone for the issue.
         *
         * *Requires the user to have the permission to add milestone.*
         */
        milestone?: string;
        /**
         * The user to assign to the issue.
         *
         * *Requires the user to have the permission to add assignee.*
         */
        assignee?: string;
        /**
         * The projects to add the issue to.
         *
         * The project reference format is `user/<project-number>`, for example, if the URL to the project
         * is `https://github.com/sindresorhus/some-repo/projects/3`, the project reference would be `some-repo/3`.
         *
         * *Requires the user to have the permission to add projects.*
         */
        projects?: string[];
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
