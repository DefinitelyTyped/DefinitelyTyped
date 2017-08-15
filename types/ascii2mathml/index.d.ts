// Type definitions for ascii2mathml 0.5
// Project: https://github.com/runarberg/ascii2mathml
// Definitions by: Muhammad Ragib Hasin <https://github.com/RagibHasin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = A2MML;

declare var A2MML: ascii2mathml;

interface ascii2mathml {
    /**
     * Converts ASCIIMath expression to MathML markup.
     * @param asciimath {string} ASCIIMath expression
     * @param options Options
     */
    (asciimath: string, options?: {
        decimalMark?: string
        colSep?: string
        rowSep?: string
        display?: 'inline' | 'block'
        dir?: 'ltr' | 'rtl'
        bare?: boolean
        standalone?: boolean
        annotate?: boolean
    }): string;

    /**
     * Generates a function with default options set to convert
     * ASCIIMath expression to MathML markup.
     * @param options Options
     */
    (options: {
        decimalMark?: string
        colSep?: string
        rowSep?: string
        display?: 'inline' | 'block'
        dir?: 'ltr' | 'rtl'
        bare?: boolean
        standalone?: boolean
        annotate?: boolean
    }): ascii2mathml;
}
