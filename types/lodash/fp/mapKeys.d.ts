// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface MapKeys {
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    (): MapKeys;
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    (iteratee: _.ValueIteratee<string>): MapKeys1x1;
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    <T>(iteratee: _.ValueIteratee<string>, object: _.List<T> | null | undefined): _.Dictionary<T>;
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    <T>(iteratee: _.ValueIteratee<string>, object: _.Dictionary<T> | null | undefined): _.Dictionary<T>;
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    (iteratee: _.ValueIteratee<any[keyof any]>): MapKeys3x1;
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    (iteratee: _.ValueIteratee<any[keyof any]>, object: object | null | undefined): _.Dictionary<any>;
}
interface MapKeys1x1 {
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    (): MapKeys1x1;
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    <T>(object: _.List<T> | null | undefined): _.Dictionary<T>;
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    <T>(object: _.Dictionary<T> | null | undefined): _.Dictionary<T>;
}
interface MapKeys3x1 {
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    (): MapKeys3x1;
    /**
     * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
     * by running each own enumerable property of object through iteratee.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns the new mapped object.
     */
    (object: object | null | undefined): _.Dictionary<any>;
}

declare const mapKeys: MapKeys;
declare namespace mapKeys {}
export = mapKeys;
