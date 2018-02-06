import _ = require("../index");

declare namespace Lodash {
    interface Extend {
        /**
         * @see _.extend
         */
        (): Extend;
        /**
         * @see _.extend
         */
        <TObject>(object: TObject): Extend1x1<TObject>;
        /**
         * @see _.extend
         */
        <TObject, TSource1>(object: TObject, source1: TSource1): Extend1x2<TObject, TSource1>;
        /**
         * @see _.extend
         */
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): Extend1x3<TObject, TSource1, TSource2>;
        /**
         * @see _.extend
         */
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Extend1x1<TObject> {
        /**
         * @see _.extend
         */
        (): Extend1x1<TObject>;
        /**
         * @see _.extend
         */
        <TSource1>(source1: TSource1): Extend1x2<TSource1, TObject>;
        /**
         * @see _.extend
         */
        <TSource1, TSource2>(source1: TSource1, source2: TSource2): Extend1x3<TSource1, TSource2, TObject>;
        /**
         * @see _.extend
         */
        <TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Extend1x2<TObject, TSource1> {
        /**
         * @see _.extend
         */
        (): Extend1x2<TObject, TSource1>;
        /**
         * @see _.extend
         */
        <TSource2>(source2: TSource2): Extend1x3<TSource2, TObject, TSource1>;
        /**
         * @see _.extend
         */
        <TSource2, TSource3>(source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Extend1x3<TObject, TSource1, TSource2> {
        /**
         * @see _.extend
         */
        (): Extend1x3<TObject, TSource1, TSource2>;
        /**
         * @see _.extend
         */
        <TSource3>(source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
}

declare const extend: Lodash.Extend;
export = extend;
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
        <TObject, TSource>(source: TSource, object: TObject): TObject & TSource;
    }
    interface AssignIn1x1<TSource> {
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
        (): AssignIn1x1<TSource>;
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
        <TObject>(object: TObject): TObject & TSource;
    }
}

declare const extend: Lodash.AssignIn;
export = extend;
