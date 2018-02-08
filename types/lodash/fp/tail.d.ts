// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Tail = 
    /**
     * Gets all but the first element of array.
     *
     * @param array The array to query.
     * @return Returns the slice of array.
     */
    <T>(array: _.List<T> | null | undefined) => T[];

declare const tail: Tail;
declare namespace tail {}
export = tail;
