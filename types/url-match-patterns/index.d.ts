// Type definitions for url-match-patterns 0.2
// Project: https://github.com/nickclaw/url-match-patterns
// Definitions by: Lionel Rowe <https://github.com/lionel-rowe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-single-declare-module no-declare-current-package
declare module 'url-match-patterns' {
    /**
     * Checks if a pattern matches against a URL
     *
     * @param pattern The pattern to match against
     * @param url The URL to match
     * @returns Whether the URL matched the pattern
     * @throws {AssertionError} Invalid pattern
     */
    function match(pattern: string): (url: string) => boolean;
    function match(pattern: string, url: string): boolean;

    export default match;
}
