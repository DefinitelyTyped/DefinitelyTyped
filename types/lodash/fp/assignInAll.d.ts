import _ = require("../index");

declare namespace Lodash {
    interface AssignIn {
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        (): AssignIn;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TObject>(object: TObject): AssignIn1x1<TObject>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TObject, TSource1>(object: TObject, source1: TSource1): AssignIn1x2<TObject, TSource1>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): AssignIn1x3<TObject, TSource1, TSource2>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface AssignIn1x1<TObject> {
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        (): AssignIn1x1<TObject>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TSource1>(source1: TSource1): AssignIn1x2<TSource1, TObject>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TSource1, TSource2>(source1: TSource1, source2: TSource2): AssignIn1x3<TSource1, TSource2, TObject>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface AssignIn1x2<TObject, TSource1> {
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        (): AssignIn1x2<TObject, TSource1>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TSource2>(source2: TSource2): AssignIn1x3<TSource2, TObject, TSource1>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TSource2, TSource3>(source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface AssignIn1x3<TObject, TSource1, TSource2> {
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        (): AssignIn1x3<TObject, TSource1, TSource2>;
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @alias extend
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * function Bar() {
         *   this.d = 4;
         * }
         *
         * Foo.prototype.c = 3;
         * Bar.prototype.e = 5;
         *
         * _.assignIn({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
         */
        <TSource3>(source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
}

declare const assignInAll: Lodash.AssignIn;
export = assignInAll;
