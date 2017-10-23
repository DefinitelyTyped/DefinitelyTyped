// Type definitions for multimatch 2.1
// Project: https://github.com/sindresorhus/multimatch
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Match utility function which supports multiple pattern globbing.
 *
 * @param paths list to match against.
 * @param patterns globbing patterns to use. e.g. `[*, "!cake"]`.
 */
declare function multimatch(paths: string[], patterns: string | string[], options?: multimatch.MultimatchOptions): string[];

declare namespace multimatch {
	/**
	 * Options based on [minimatch](https://github.com/isaacs/minimatch#minimatchmatchlist-pattern-options)
	 */
	interface MultimatchOptions {
		/** Dump a ton of stuff to stderr. */
		debug?: boolean;

		/** Do not expand `{a,b}` and `{1..3}` brace sets. */
		nobrace?: boolean;

		/** Disable `**` matching against multiple folder names. */
		noglobstar?: boolean;

		/**
		 * Allow patterns to match filenames starting with a period, even if
		 * the pattern does not explicitly have a period in that spot.
		 *
		 * Note that by default, `a/** /b` will **not** match `a/.d/b`, unless `dot` is set.
		 */
		dot?: boolean;

		/** Disable "extglob" style patterns like `+(a|b)`. */
		noext?: boolean;

		/** Perform a case-insensitive match. */
		nocase?: boolean;

		/**
		 * When a match is not found by `minimatch.match`, return a list containing
		 * the pattern itself if this option is set.  When not set, an empty list
		 * is returned if there are no matches.
		 */
		nonull?: boolean;

		/**
		 * If set, then patterns without slashes will be matched
		 * against the basename of the path if it contains slashes.  For example,
		 * `a?b` would match the path `/xyz/123/acb`, but not `/xyz/acb/123`.
		 */
		matchBase?: boolean;

		/** Suppress the behavior of treating `#` at the start of a pattern as a comment. */
		nocomment?: boolean;

		/** Suppress the behavior of treating a leading `!` character as negation. */
		nonegate?: boolean;

		/**
		 * Returns from negate expressions the same as if they were not negated.
		 * (Ie, true on a hit, false on a miss.)
		 */
		flipNegate?: boolean;
	}
}

export = multimatch;
