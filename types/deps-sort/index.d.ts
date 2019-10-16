// Type definitions for deps-sort 2.0
// Project: https://github.com/browserify/deps-sort, https://github.com/substack/deps-sort
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";

/**
 * Return a new through stream that should get written module-deps objects and will output sorted objects.
 */
declare function depsSort(opts?: depsSort.Options): stream.Transform;

/**
 * Sort module-deps output for deterministic browserify bundles.
 */
declare namespace depsSort {
    /**
     * module-deps constructor options
     */
    interface Options {
        /**
         * When true, for each module-deps row, insert 'row.index' with the numeric index and
         * 'row.indexDeps' like 'row.deps' but mapping require strings to row indices
         */
        index?: boolean;

        /**
         * array of names or object mapping names to true not to mangle with integer indexes when 'index' is turned on.
         * If 'expose' maps names to strings, those strings will be used to resolve the indexed references.
         */
        expose?: string[] | { [name: string]: boolean | string };

        /**
         * Set 'row.dedupe' for files that match existing contents. Sets 'row.dedupeIndex' when 'index' is enabled.
         * When 'row.dedupe' is set, 'row.sameDeps' will be set to a boolean of whether the dependencies at the dedupe target match (true) or just the source content (false).
         */
        dedupe?: boolean;

        [prop: string]: any;
    }

    /**
     * Input objects are file objects in the module-deps shape. They must at least have these properties:
     */
    interface InputRow {
        /**
         * a unique identifier for the file
         */
        id: string;
        /**
         * the file contents
         */
        source: string;
        /**
         * dependencies for this file, mapping strings as used in require() to row IDs
         */
        deps: string[];
    }

    /**
     * All the input properties, and:
     */
    interface OutputRow {
        /**
         * when 'opts.index' is true, the sorted numeric index of the row
         */
        index: number;
        /**
         * like 'row.deps', but mapping to 'row.index' instead of 'row.id'
         */
        indexDeps: { [id: string]: number };
        /**
         * when 'opts.dedupe' is true, contains the row ID of a file with identical contents
         */
        dedupe: string;
        /**
         * like 'row.dedupe', but contains the 'row.index' instead of 'row.id'
         */
        dedupeIndex: number;
    }
}

export = depsSort;
