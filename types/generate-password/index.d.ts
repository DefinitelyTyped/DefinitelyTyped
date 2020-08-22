// Type definitions for generate-password 1.5
// Project: https://github.com/brendanashworth/generate-password
// Definitions by: Eddie CooRo <https://github.com/Eddie-Cooro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface GenerateOptions {
    /**
     * Length of the generated password.
     * @default 10
     */
    length?: number;
    /**
     * Should the password include numbers
     * @default false
     */
    numbers?: boolean;
    /**
     * Should the password include symbols
     * @default false
     */
    symbols?: boolean;
    /**
     * Should the password include lowercase characters
     * @default true
     */
    lowercase?: boolean;
    /**
     * Should the password include uppercase characters
     * @default true
     */
    uppercase?: boolean;
    /**
     * Should exclude visually similar characters like 'i' and 'I'
     * @default false
     */
    excludeSimilarCharacters?: boolean;
    /**
     * List of characters to be excluded from the password
     * @default ""
     */
    exclude?: string;
    /**
     * Password should include at least one character from each pool
     * @default false
     */
    strict?: boolean;
}

/**
 * Generate one password with the given options.
 */
export function generate(options?: GenerateOptions): string;
/**
 * Bulk generate multiple passwords at once, with the same options for all.
 */
export function generateMultiple(count: number, options?: GenerateOptions): string[];
