// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Shuffle {
    /**
     * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
     *
     * @param collection The collection to shuffle.
     * @return Returns the new shuffled array.
     */
    <T>(collection: _.List<T> | null | undefined): T[];
    /**
     * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
     *
     * @param collection The collection to shuffle.
     * @return Returns the new shuffled array.
     */
    <T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
}

declare const shuffle: Shuffle;
declare namespace shuffle {}
export = shuffle;
