// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Flatten = 
    /**
     * Flattens `array` a single level deep.
     *
     * @param array The array to flatten.
     * @return Returns the new flattened array.
     */
    <T>(array: _.List<_.Many<T>> | null | undefined) => T[];

declare const unnest: Flatten;
declare namespace unnest {}
export = unnest;
