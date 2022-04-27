// Type definitions for html-truncate 1.2
// Project: https://github.com/huang47/nodejs-html-truncate
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

interface TruncateOptions {
    /**
     * Flag to specify if keep image tag, false by default.
     */
    keepImageTag?: boolean;
    /**
     * Omission symbol for truncated string, '...' by default.
     */
    ellipsis?: boolean | string;

    /**
     * truncates last word, true by default
     */
    truncateLastWord?: boolean;

    /**
     * Tolerance when options.truncateLastWord is false before we give up and just truncate at the maxLength position, 10 by default (but not greater than maxLength)
     */
    slop?: number;
}

/**
 * Truncate HTML text and also keep tag safe.
 */
declare function truncate(input: string, maxLength: number, options?: TruncateOptions): string;

export = truncate;
