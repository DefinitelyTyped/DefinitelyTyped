declare namespace githubUrlFromGit {
    interface githubUrlFromGitOptions {
        /**
         * additional URLs that should be treated as GitHub repos
         */
        extraBaseUrls?: string[] | undefined;
    }

    /**
     * Create a regular expression to parse GitHub URLs
     *
     * @param opts options for regular expression generator
     */
    function re(opts?: githubUrlFromGitOptions): RegExp;
}

/**
 * Normalize Git URLs into GitHub URLs
 *
 * @param url Git URL to process
 * @param opts options for URL parser
 * @returns GitHub URL
 */
declare function githubUrlFromGit(url: string, opts?: githubUrlFromGit.githubUrlFromGitOptions): string;

export = githubUrlFromGit;
