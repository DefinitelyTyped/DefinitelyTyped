// Type definitions for html-truncate 1.2
// Project: https://github.com/huang47/nodejs-html-truncate
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

interface TruncateOptions {
    /**
     * Flag to specify if keep image tag, false by default.
     */
    keepImageTag: boolean;
    /**
     * Omission symbol for truncated string, '...' by default.
     */
    ellipsis: boolean|string;
}

/**
 * Truncate HTML text and also keep tag safe.
 */
declare function truncate(input: string, maxLength: number, options?: TruncateOptions): string;

export = truncate;
