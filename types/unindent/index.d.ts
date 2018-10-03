// Type definitions for unindent 2.0
// Project: https://github.com/curvedmark/unindent
// Definitions by: Alex Gorbatchev <https://github.com/alexgorbatchev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = unindent;

declare namespace unindent {}

interface UnindentOptions {
    /**
     * If specified, the starting tabs of each line will be convert to spaces.
     */
    tabSize?: number;

    /**
     * Whether the unindented code should be trimed.
     */
    trim?: boolean;
}

/**
 * Removes indentations from a block of code
 * @param code A string of code.
 * @param opts An optional object literal support these options.
 */
declare function unindent(code: string, opts?: UnindentOptions): string;
