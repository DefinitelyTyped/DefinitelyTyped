// Type definitions for url-match-patterns 0.2
// Project: https://github.com/nickclaw/url-match-patterns
// Definitions by: Lionel Rowe <https://github.com/lionel-rowe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Checks if a pattern matches against a URL
 *
 * @param pattern The pattern to match against
 * @param url The URL to match
 * @returns Whether the URL matched the pattern
 * @throws {AssertionError} Invalid pattern
 */
declare function match(pattern: string): (url: string) => boolean;
declare function match(pattern: string, url: string): boolean;

export default match;
