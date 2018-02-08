// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type FlattenDeep = 
    /**
     * Recursively flattens a nested array.
     *
     * @param array The array to recursively flatten.
     * @return Returns the new flattened array.
     */
    <T>(array: _.ListOfRecursiveArraysOrValues<T> | null | undefined) => T[];

declare const flattenDeep: FlattenDeep;
declare namespace flattenDeep {}
export = flattenDeep;
