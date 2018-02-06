import _ = require("../index");

declare namespace Lodash {
    interface ExtendWith {
        /**
         * @see _.extendWith
         */
        (): ExtendWith;
        /**
         * @see _.extendWith
         */
        <TObject>(object: TObject): ExtendWith1x1<TObject>;
        /**
         * @see _.extendWith
         */
        <TObject, TSource1>(object: TObject, source1: TSource1): ExtendWith1x2<TObject, TSource1>;
        /**
         * @see _.extendWith
         */
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): ExtendWith1x3<TObject, TSource1, TSource2>;
        /**
         * @see _.extendWith
         */
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x1<TObject> {
        /**
         * @see _.extendWith
         */
        (): ExtendWith1x1<TObject>;
        /**
         * @see _.extendWith
         */
        <TSource1>(source1: TSource1): ExtendWith1x2<TSource1, TObject>;
        /**
         * @see _.extendWith
         */
        <TSource1, TSource2>(source1: TSource1, source2: TSource2): ExtendWith1x3<TSource1, TSource2, TObject>;
        /**
         * @see _.extendWith
         */
        <TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x2<TObject, TSource1> {
        /**
         * @see _.extendWith
         */
        (): ExtendWith1x2<TObject, TSource1>;
        /**
         * @see _.extendWith
         */
        <TSource2>(source2: TSource2): ExtendWith1x3<TSource2, TObject, TSource1>;
        /**
         * @see _.extendWith
         */
        <TSource2>(source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x3<TObject, TSource1, TSource2> {
        /**
         * @see _.extendWith
         */
        (): ExtendWith1x3<TObject, TSource1, TSource2>;
        /**
         * @see _.extendWith
         */
        (customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
}

declare const extendWith: Lodash.ExtendWith;
export = extendWith;
TSource): AssignInWith1x1<TSource>;
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        <TSource>(source: TSource, customizer: AssignCustomizer): AssignInWith1x2<TSource>;
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        <TObject, TSource>(source: TSource, customizer: AssignCustomizer, object: TObject): TObject & TSource;
    }
    interface AssignInWith1x1<TSource> {
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        (): AssignInWith1x1<TSource>;
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        (customizer: AssignCustomizer): AssignInWith1x2<TSource>;
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        <TObject>(customizer: AssignCustomizer, object: TObject): TObject & TSource;
    }
    interface AssignInWith1x2<TSource> {
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        (): AssignInWith1x2<TSource>;
        /**
         * This method is like `_.assignIn` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extendWith
         * @category Object
         * @param object The destination object.
         * @param sources The source objects.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        <TObject>(object: TObject): TObject & TSource;
    }
}

declare const extendWith: Lodash.AssignInWith;
export = extendWith;
