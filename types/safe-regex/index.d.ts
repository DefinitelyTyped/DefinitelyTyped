/**
 * Checks if a regex is safe to use in order to prevent catastrophic backtracking.
 * @param re can be a RegExp object or just a string.
 * @param opts Options for the check.
 * `limit` - maximum number of allowed repetitions in the entire regex. Default: `25`.
 */
declare function safe(re: string | RegExp, opts?: { limit?: number }): boolean;

export = safe;
