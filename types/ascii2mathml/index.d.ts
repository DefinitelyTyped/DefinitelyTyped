export = A2MML;

declare var A2MML: ascii2mathml;

interface ascii2mathml {
    /**
     * Generates a function with default options set to convert
     * ASCIIMath expression to MathML markup.
     * @param options Options
     */
    (options: A2MML.Options): ascii2mathml;

    /**
     * Converts ASCIIMath expression to MathML markup.
     * @param asciimath ASCIIMath expression
     * @param options Options
     */
    (asciimath: string, options?: A2MML.Options): string;
}

declare namespace A2MML {
    interface Options {
        decimalMark?: string | undefined;
        colSep?: string | undefined;
        rowSep?: string | undefined;
        display?: "inline" | "block" | undefined;
        dir?: "ltr" | "rtl" | undefined;
        bare?: boolean | undefined;
        standalone?: boolean | undefined;
        annotate?: boolean | undefined;
    }
}
