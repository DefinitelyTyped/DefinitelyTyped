// Type definitions for html 1.0
// Project: https://github.com/maxogden/commonjs-html-prettyprinter
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PrintOptions {
    /**
     * Put braces on the same line as control statements (`collapse`),
     * or put braces on own line (Allman / ANSI style, `expand`),
     * or just put end braces on own line (`end-expand`). Default: `collapse`.
     */
    brace_style?: 'collapse' | 'expand' | 'end-expand' | undefined;
    /** Default: `normal`. */
    indent_scripts?: 'keep' | 'separate' | 'normal' | undefined;
    /** indentation size. Default: 4. */
    indent_size?: number | undefined;
    /** character to indent with. Default: " " (space). */
    indent_char?: string | undefined;
    /** Maximum amount of characters per line. Default: 70. */
    max_char?: number | undefined;
    /** list of tags, that shouldn't be reformatted. Defaults to inline tags. */
    unformatted?: string[] | undefined;
}

export function prettyPrint(htmlSource: string, options?: PrintOptions): string;
