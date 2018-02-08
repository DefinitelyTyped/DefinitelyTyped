// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface ValuesIn {
    /**
     * Creates an array of the own and inherited enumerable property values of object.
     *
     * @param object The object to query.
     * @return Returns the array of property values.
     */
    <T>(object: _.Dictionary<T>|_.NumericDictionary<T>|_.List<T> | null | undefined): T[];
    /**
     * Creates an array of the own and inherited enumerable property values of object.
     *
     * @param object The object to query.
     * @return Returns the array of property values.
     */
    <T extends object>(object: T | null | undefined): Array<T[keyof T]>;
}

declare const valuesIn: ValuesIn;
declare namespace valuesIn {}
export = valuesIn;
