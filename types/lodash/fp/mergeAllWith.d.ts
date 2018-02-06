// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface MergeWith {
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined` merging is handled by the
         * method instead. The `customizer` is invoked with seven arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param customizer The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   if (_.isArray(objValue)) {
         * return objValue.concat(srcValue);
         *   }
         * }
         *
         * var object = {
         *   'fruits': ['apple'],
         *   'vegetables': ['beet']
         * };
         *
         * var other = {
         *   'fruits': ['banana'],
         *   'vegetables': ['carrot']
         * };
         *
         * _.merge(object, other, customizer);
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
         */
        (): MergeWith;
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined` merging is handled by the
         * method instead. The `customizer` is invoked with seven arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param customizer The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   if (_.isArray(objValue)) {
         * return objValue.concat(srcValue);
         *   }
         * }
         *
         * var object = {
         *   'fruits': ['apple'],
         *   'vegetables': ['beet']
         * };
         *
         * var other = {
         *   'fruits': ['banana'],
         *   'vegetables': ['carrot']
         * };
         *
         * _.merge(object, other, customizer);
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
         */
        (customizer: _.MergeWithCustomizer): MergeWith1x1;
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined` merging is handled by the
         * method instead. The `customizer` is invoked with seven arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param customizer The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   if (_.isArray(objValue)) {
         * return objValue.concat(srcValue);
         *   }
         * }
         *
         * var object = {
         *   'fruits': ['apple'],
         *   'vegetables': ['beet']
         * };
         *
         * var other = {
         *   'fruits': ['banana'],
         *   'vegetables': ['carrot']
         * };
         *
         * _.merge(object, other, customizer);
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
         */
        (customizer: _.MergeWithCustomizer, args: ReadonlyArray<any>): any;
    }
    interface MergeWith1x1 {
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined` merging is handled by the
         * method instead. The `customizer` is invoked with seven arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param customizer The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   if (_.isArray(objValue)) {
         * return objValue.concat(srcValue);
         *   }
         * }
         *
         * var object = {
         *   'fruits': ['apple'],
         *   'vegetables': ['beet']
         * };
         *
         * var other = {
         *   'fruits': ['banana'],
         *   'vegetables': ['carrot']
         * };
         *
         * _.merge(object, other, customizer);
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
         */
        (): MergeWith1x1;
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined` merging is handled by the
         * method instead. The `customizer` is invoked with seven arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param customizer The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   if (_.isArray(objValue)) {
         * return objValue.concat(srcValue);
         *   }
         * }
         *
         * var object = {
         *   'fruits': ['apple'],
         *   'vegetables': ['beet']
         * };
         *
         * var other = {
         *   'fruits': ['banana'],
         *   'vegetables': ['carrot']
         * };
         *
         * _.merge(object, other, customizer);
         * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
         */
        (args: ReadonlyArray<any>): any;
    }
}

declare const mergeAllWith: Lodash.MergeWith;
export = mergeAllWith;
