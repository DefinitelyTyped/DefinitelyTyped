import { HyphenationFunctionAsync, HyphenationFunctionSync, PatternsDefinition } from ".";

/** The asynchronous hyphenation function for this language. */
export const hyphenate: HyphenationFunctionAsync;

/** The asynchronous hyphenation function, that skips HTML, for this language. */
export const hyphenateHTML: HyphenationFunctionAsync;

/** The synchronous hyphenation function for this language. */
export const hyphenateSync: HyphenationFunctionSync;

/** The synchronous hyphenation function, that skips HTML, for this language. */
export const hyphenateHTMLSync: HyphenationFunctionSync;

/** The hyphenation patterns definition for this language. */
export const patterns: PatternsDefinition;
