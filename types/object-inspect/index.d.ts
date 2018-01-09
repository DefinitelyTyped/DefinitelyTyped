// Type definitions for object-inspect 1.4
// Project: https://github.com/substack/object-inspect
// Definitions by: Charles Samborski <https://github.com/demurgos>
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
