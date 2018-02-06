import _ = require("../index");

declare namespace Lodash {
    interface Assign {
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        (): Assign;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TObject>(object: TObject): Assign1x1<TObject>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TObject, TSource1>(object: TObject, source1: TSource1): Assign1x2<TObject, TSource1>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): Assign1x3<TObject, TSource1, TSource2>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Assign1x1<TObject> {
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        (): Assign1x1<TObject>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TSource1>(source1: TSource1): Assign1x2<TSource1, TObject>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TSource1, TSource2>(source1: TSource1, source2: TSource2): Assign1x3<TSource1, TSource2, TObject>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Assign1x2<TObject, TSource1> {
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        (): Assign1x2<TObject, TSource1>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TSource2>(source2: TSource2): Assign1x3<TSource2, TObject, TSource1>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TSource2, TSource3>(source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Assign1x3<TObject, TSource1, TSource2> {
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        (): Assign1x3<TObject, TSource1, TSource2>;
        /**
         * Assigns own enumerable properties of source objects to the destination
         * object. Source objects are applied from left to right. Subsequent sources
         * overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * function Foo() {
         *   this.c = 3;
         * }
         *
         * function Bar() {
         *   this.e = 5;
         * }
         *
         * Foo.prototype.d = 4;
         * Bar.prototype.f = 6;
         *
         * _.assign({ 'a': 1 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3, 'e': 5 }
         */
        <TSource3>(source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
}

declare const assignAll: Lodash.Assign;
export = assignAll;
