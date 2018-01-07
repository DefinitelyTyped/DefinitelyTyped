/**
 * @name pc
 * @namespace
 * @description Root namespace for the PlayCanvas Engine
 * @preserve PlayCanvas Engine v__CURRENT_SDK_VERSION__ revision __REVISION__
 * http://playcanvas.com
 * Copyright 2011-2017 PlayCanvas Ltd. All rights reserved.
// #ifdef DEBUG
 * DEBUG BUILD
// #endif
// #ifdef PROFILER
 * PROFILER BUILD
// #endif
 */
declare namespace pc {
    const version: string;
    const revision: string;
    var config: {};
    var common: {};
    var apps: {};
    var data: {};

    /**
     * @private
     * @function
     * @name pc.unpack()
     * @description Copy a set of common PlayCanvas functions/classes/namespaces into the global namespace
     */
    function unpack(): void;

    /**
     * @function
     * @private
     * @name pc.makeArray
     * @description Convert an array-like object into a normal array.
     * For example, this is useful for converting the arguments object into an array.
     * @param {Object} arr The array to convert
     * @return {Array} An array
     */
    function makeArray<T>(arr: ArrayLike<T>): T[];

    /**
     * @private
     * @function
     * @name pc.type
     * @description Extended typeof() function, returns the type of the object.
     * @param {Object} obj The object to get the type of
     * @return {String} The type string: "null", "undefined", "number", "string", "boolean", "array", "object", "function", "date", "regexp" or "float32array"
     */
    function type(obj: any): string;

    /**
     * @private
     * @function
     * @name pc.extend
     * @description Merge the contents of two objects into a single object
     * @param {Object} target The target object of the merge
     * @param {Object} ex The object that is merged with target
     * @return {Object} The target object
     * @example
     * var A = {a: function() {console.log(this.a}};
     * var B = {b: function() {console.log(this.b}};
     *
     * pc.extend(A,B);
     * A.a();
     * // logs "a"
     * A.b();
     * // logs "b"
     */
    function extend<T, U>(target: T, ex: U): T & U;

    /**
     * @private
     * @function
     * @name pc.isDefined
     * @description Return true if the Object is not undefined
     * @param {Object} o The Object to test
     * @returns {Boolean} True if the Object is not undefined
     */
    function isDefined(o: any): boolean;

    /**
     * @private
     * @name pc._typeLookup
     * @function
     * @description Create look up table for types
     */
    function _typeLookup(): { [key: string]: any };

}