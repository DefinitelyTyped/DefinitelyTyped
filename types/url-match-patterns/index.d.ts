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
