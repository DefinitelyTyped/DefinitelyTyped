// Type definitions for is-github-url 1.2
// Project: https://github.com/alferov/is-github-url
// Definitions by: Ivan Nikolić <https://github.com/niksy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
