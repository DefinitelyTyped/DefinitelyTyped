// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Zip =
    /**
     * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
     * the second of which contains the second elements of the given arrays, and so on.
     *
     * @param arrays The arrays to process.
     * @return Returns the new array of grouped elements.
     */
    <T>(arrays: ReadonlyArray<_.List<T> | null | undefined>) => Array<Array<T | undefined>>;

declare const zipAll: Zip;
export = zipAll;
