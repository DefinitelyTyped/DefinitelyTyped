// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface ToPairsIn {
    /**
     * Creates an array of own and inherited enumerable key-value pairs for object.
     *
     * @param object The object to query.
     * @return Returns the new array of key-value pairs.
     */
    <T>(object: _.Dictionary<T>): Array<[string, T]>;
    /**
     * Creates an array of own and inherited enumerable key-value pairs for object.
     *
     * @param object The object to query.
     * @return Returns the new array of key-value pairs.
     */
    (object: object): Array<[string, any]>;
}

declare const entriesIn: ToPairsIn;
declare namespace entriesIn {}
export = entriesIn;
