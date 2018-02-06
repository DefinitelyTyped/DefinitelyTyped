// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface InvertBy {
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        (): InvertBy;
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        <T>(interatee: _.ValueIteratee<T>): InvertBy1x1<T>;
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        <T>(interatee: _.ValueIteratee<T>, object: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): _.Dictionary<string[]>;
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        <T extends object>(interatee: _.ValueIteratee<T[keyof T]>, object: T | null | undefined): _.Dictionary<string[]>;
    }
    interface InvertBy1x1<T> {
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        (): InvertBy1x1<T>;
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        (object: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): _.Dictionary<string[]>;
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        (object: object | null | undefined): _.Dictionary<string[]>;
    }
}

declare const invertBy: Lodash.InvertBy;
export = invertBy;
