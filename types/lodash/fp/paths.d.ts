// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface At {
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        (): At;
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        (props: _.PropertyPath): At1x1;
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        <T>(props: _.PropertyPath, object: _.List<T> | _.Dictionary<T> | null | undefined): T[];
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        <T extends object>(props: _.Many<keyof T>): At2x1<T>;
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        <T extends object>(props: _.Many<keyof T>, object: T | null | undefined): Array<T[keyof T]>;
    }
    interface At1x1 {
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        (): At1x1;
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        <T>(object: _.List<T> | _.Dictionary<T> | null | undefined): T[];
    }
    interface At2x1<T extends object> {
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        (): At2x1<T>;
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        (object: T | null | undefined): Array<T[keyof T]>;
    }
}

declare const paths: Lodash.At;
export = paths;
