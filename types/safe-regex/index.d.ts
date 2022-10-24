// Type definitions for safe-regex 1.1
// Project: https://github.com/davisjam/safe-regex
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = safe;
/**
 * 
 * @param re can be a RegExp object or just a string.
 * @param opts Options for the check.
 * `limit` - maximum number of allowed repetitions in the entire regex. Default: `25`.
 */
declare function safe(re: string | RegExp, opts?: { limit?: number }): boolean;
