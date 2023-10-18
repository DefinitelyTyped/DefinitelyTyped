interface Options {
    /**
     * Match only URLs ending with .git
     */
    strict?: boolean;
    /**
     * Match only valid GitHub repo URLs
     */
    repository?: boolean;
}
/**
 * @param url A string to be validated
 */
declare function isGithubUrl(url: string, options?: Options): boolean;

export = isGithubUrl;
