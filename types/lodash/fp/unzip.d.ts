// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Unzip = 
    /**
     * This method is like _.zip except that it accepts an array of grouped elements and creates an array
     * regrouping the elements to their pre-zip configuration.
     *
     * @param array The array of grouped elements to process.
     * @return Returns the new array of regrouped elements.
     */
    <T>(array: T[][] | _.List<_.List<T>> | null | undefined) => T[][];

declare const unzip: Unzip;
declare namespace unzip {}
export = unzip;
