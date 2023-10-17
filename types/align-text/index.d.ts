interface TransformResult {
    /**
     * the amount of indentation to use. Default is 0 when an object is returned.
     */
    indent: number;
    /**
     * the character to use for indentation. Default is '' (empty string) when an object is returned.
     */
    character: string;
    /**
     * leading characters to use at the beginning of each line. '' (empty string) when an object is returned.
     */
    prefix: string;
}

interface Callback {
    /**
     * @param len the length of the "current" line
     * @param longest the length of the longest line
     * @param line the current line (string) being aligned
     * @param lines the array of all lines
     * @param idx the index of the current line
     */
    (len: number, longest: number, line: string, lines: string[], idx: number):
        | number
        | TransformResult;
}

declare function align_text(text: string, fn?: number | Callback): string;
declare function align_text(text: any[], fn?: number | Callback): string[];

export = align_text;
