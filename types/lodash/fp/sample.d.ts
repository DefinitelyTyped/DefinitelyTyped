// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Sample {
    /**
     * Gets a random element from collection.
     *
     * @param collection The collection to sample.
     * @return Returns the random element.
     */
    <T>(collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): T | undefined;
    /**
     * Gets a random element from collection.
     *
     * @param collection The collection to sample.
     * @return Returns the random element.
     */
    <T extends object>(collection: T): T[keyof T];
    /**
     * Gets a random element from collection.
     *
     * @param collection The collection to sample.
     * @return Returns the random element.
     */
    <T extends object>(collection: T | null | undefined): T[keyof T] | undefined;
}

declare const sample: Sample;
declare namespace sample {}
export = sample;
