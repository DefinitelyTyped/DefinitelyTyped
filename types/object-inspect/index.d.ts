// Type definitions for object-inspect 1.6
// Project: https://github.com/substack/object-inspect
// Definitions by: Charles Samborski <https://github.com/demurgos>
//                 Akuukis <https://github.com/Akuukis>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace objectInspect {
    /**
     * Inspection options
     */
    interface Options {
        /**
         * Maximum depth of the inspection. Default: `5`.
         */
        depth?: number;
        /**
         * Must be "single" or "double", if present.
         */
        quoteStyle?: 'single' | 'double';
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
