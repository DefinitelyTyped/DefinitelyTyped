// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Head =
    /**
     * Gets the first element of array.
     *
     * @alias _.first
     *
     * @param array The array to query.
     * @return Returns the first element of array.
     */
    <T>(array: _.List<T> | null | undefined) => T | undefined;

declare const first: Head;
export = first;
