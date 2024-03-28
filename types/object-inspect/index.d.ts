declare namespace objectInspect {
    /**
     * Inspection options
     */
    interface Options {
        /**
         * Maximum depth of the inspection. Default: `5`.
         */
        depth?: number | undefined;
        /**
         * Must be "single" or "double", if present.
         */
        quoteStyle?: "single" | "double" | undefined;
        /**
         * Must be 0, a positive integer, Infinity, or null, if present. Default Infinity.
         */
        maxStringLength?: number | null | undefined;
        /**
         * When true, a custom inspect method function will be invoked (either under the util.inspect.custom symbol, or the inspect property). When the string 'symbol', only the symbol method will be invoked. Default true.
         */
        customInspect?: boolean | "symbol" | undefined;
        /**
         * Must be "\t", null, or a positive integer. Default null.
         */
        indent?: number | "\t" | null | undefined;
        /**
         * Must be a boolean, if present. Default false. If true, all numbers will be printed with numeric separators (eg, 1234.5678 will be printed as '1_234.567_8')
         */
        numericSeparator?: boolean | undefined;
    }
}

/**
 * Return a string `s` with the string representation of `obj` up to a depth of `opts.depth`.
 *
 * @param obj Object to inspect
 * @param opts Inspection options. Default: `{}`.
 * @return String representation of `obj`
 */
declare function objectInspect(obj: any, opts?: objectInspect.Options): string;

export = objectInspect;
