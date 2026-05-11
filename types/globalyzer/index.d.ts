/**
 * Detect and extract the static part of a glob string.
 * Utility to detect if a string contains a glob and then split it in a glob and none-glob part.
 * @param pattern - Glob string to analyze
 */
declare function globalyzer(
    glob: string,
    options?: {
        /**
         * Use strict parsing (be strict about what's a glob and what's not)
         * @default false
         */
        strict?: boolean | undefined;
    },
): {
    base: string;
    glob: string;
    isGlob: boolean;
};

export = globalyzer;
