import _ = require("../index");
declare module "../index" {
    // assign

    interface Stat {
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
        assign<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TObject & TSource;

        /**
         * @see assign
         */
        assign<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TObject & TSource1 & TSource2;

        /**
         * @see assign
         */
        assign<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see assign
         */
        assign<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assign
         */
        assign<TObject>(object: TObject): TObject;

        /**
         * @see _.assign
         */
        assign(
            object: any,
            ...otherArgs: any[]
        ): any;
    }

    interface Imp<TValue> {
        /**
         * @see _.assign
         */
        assign<TSource>(
            source: TSource
        ): Imp<TValue & TSource>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Imp<TValue & TSource1 & TSource2>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Imp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assign
         */
        assign(): Imp<TValue>;

        /**
         * @see _.assign
         */
        assign(...otherArgs: any[]): Imp<any>;
    }

    interface Exp<TValue> {
        /**
         * @see _.assign
         */
        assign<TSource>(
            source: TSource
        ): Exp<TValue & TSource>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Exp<TValue & TSource1 & TSource2>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Exp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assign
         */
        assign<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assign
         */
        assign(): Exp<TValue>;

        /**
         * @see _.assign
         */
        assign(...otherArgs: any[]): Exp<any>;
    }

    // assignIn

    interface Stat {
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
        assignIn<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TObject & TSource;

        /**
         * @see assignIn
         */
        assignIn<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TObject & TSource1 & TSource2;

        /**
         * @see assignIn
         */
        assignIn<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see assignIn
         */
        assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assignIn
         */
        assignIn<TObject>(object: TObject): TObject;

        /**
         * @see _.assignIn
         */
        assignIn<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(
            source: TSource
        ): Imp<TValue & TSource>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Imp<TValue & TSource1 & TSource2>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Imp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignIn
         */
        assignIn(): Imp<TValue>;

        /**
         * @see _.assignIn
         */
        assignIn<TResult>(...otherArgs: any[]): Imp<TResult>;
    }

    interface Exp<TValue> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(
            source: TSource
        ): Exp<TValue & TSource>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Exp<TValue & TSource1 & TSource2>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Exp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignIn
         */
        assignIn(): Exp<TValue>;

        /**
         * @see _.assignIn
         */
        assignIn(...otherArgs: any[]): Exp<any>;
    }

    // assignInWith

    type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

    interface Stat {
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
        assignInWith<TObject, TSource>(
            object: TObject,
            source: TSource,
            customizer: AssignCustomizer
        ): TObject & TSource;

        /**
         * @see assignInWith
         */
        assignInWith<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2;

        /**
         * @see assignInWith
         */
        assignInWith<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see assignInWith
         */
        assignInWith<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assignInWith
         */
        assignInWith<TObject>(object: TObject): TObject;

        /**
         * @see _.assignInWith
         */
        assignInWith<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignInWith
         */
        assignInWith(): Imp<TValue>;

        /**
         * @see _.assignInWith
         */
        assignInWith<TResult>(...otherArgs: any[]): Imp<TResult>;
    }

    interface Exp<TValue> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignInWith
         */
        assignInWith(): Exp<TValue>;

        /**
         * @see _.assignInWith
         */
        assignInWith(...otherArgs: any[]): Exp<any>;
    }

    // assignWith

    interface Stat {
        /**
         * This method is like `_.assign` except that it accepts `customizer` which
         * is invoked to produce the assigned values. If `customizer` returns `undefined`
         * assignment is handled by the method instead. The `customizer` is invoked
         * with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
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
         * var defaults = _.partialRight(_.assignWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        assignWith<TObject, TSource>(
            object: TObject,
            source: TSource,
            customizer: AssignCustomizer
        ): TObject & TSource;

        /**
         * @see assignWith
         */
        assignWith<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2;

        /**
         * @see assignWith
         */
        assignWith<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see assignWith
         */
        assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.assignWith
         */
        assignWith<TObject>(object: TObject): TObject;

        /**
         * @see _.assignWith
         */
        assignWith<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignWith
         */
        assignWith(): Imp<TValue>;

        /**
         * @see _.assignWith
         */
        assignWith<TResult>(...otherArgs: any[]): Imp<TResult>;
    }

    interface Exp<TValue> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignWith
         */
        assignWith(): Exp<TValue>;

        /**
         * @see _.assignWith
         */
        assignWith(...otherArgs: any[]): Exp<any>;
    }

    // at

    interface Stat {
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        at<T>(
            object: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined,
            ...props: PropertyPath[]
        ): T[];

        /**
         * @see _.at
         */
        at<T extends object>(
            object: T | null | undefined,
            ...props: Array<Many<keyof T>>
        ): Array<T[keyof T]>;
    }

    interface Imp<TValue> {
        /**
         * @see _.at
         */
        at<T>(
            this: Imp<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            ...props: PropertyPath[]
        ): Imp<T[]>;

        /**
         * @see _.at
         */
        at<T extends object>(
            this: Imp<T | null | undefined>,
            ...props: Array<Many<keyof T>>
        ): Imp<Array<T[keyof T]>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.at
         */
        at<T>(
            this: Exp<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            ...props: PropertyPath[]
        ): Exp<T[]>;

        /**
         * @see _.at
         */
        at<T extends object>(
            this: Exp<T | null | undefined>,
            ...props: Array<Many<keyof T>>
        ): Exp<Array<T[keyof T]>>;
    }

    // create

    interface Stat {
        /**
         * Creates an object that inherits from the given prototype object. If a properties object is provided its own
         * enumerable properties are assigned to the created object.
         *
         * @param prototype The object to inherit from.
         * @param properties The properties to assign to the object.
         * @return Returns the new object.
         */
        create<T extends object, U extends object>(
            prototype: T,
            properties?: U
        ): T & U;
    }

    interface Imp<TValue> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): Imp<TValue & U>;
    }

    interface Exp<TValue> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): Exp<TValue & U>;
    }

    // defaults

    interface Stat {
        /**
         * Assigns own enumerable properties of source object(s) to the destination object for all destination
         * properties that resolve to undefined. Once a property is set, additional values of the same property are
         * ignored.
         *
         * Note: This method mutates object.
         *
         * @param object The destination object.
         * @param sources The source objects.
         * @return The destination object.
         */
        defaults<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TSource & TObject;

        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TSource2 & TSource1 & TObject;

        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TSource3 & TSource2 & TSource1 & TObject;

        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TSource4 & TSource3 & TSource2 & TSource1 & TObject;

        /**
         * @see _.defaults
         */
        defaults<TObject>(object: TObject): TObject;

        /**
         * @see _.defaults
         */
        defaults(
            object: any,
            ...sources: any[]
        ): any;
    }

    interface Imp<TValue> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(
            source: TSource
        ): Imp<TSource & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Imp<TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Imp<TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Imp<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults(): Imp<TValue>;

        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): Imp<any>;
    }

    interface Exp<TValue> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(
            source: TSource
        ): Exp<TSource & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Exp<TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Exp<TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Exp<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults(): Exp<TValue>;

        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): Exp<any>;
    }

    // defaultsDeep

    interface Stat {
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        defaultsDeep(
            object: any,
            ...sources: any[]): any;
    }

    interface Imp<TValue> {
        /**
         * @see _.defaultsDeep
         **/
        defaultsDeep(...sources: any[]): Imp<any>;
    }

    interface Exp<TValue> {
        /**
         * @see _.defaultsDeep
         **/
        defaultsDeep(...sources: any[]): Exp<any>;
    }

    // entries

    interface Stat {
        /**
         * @see _.toPairs
         */
        entries<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairs
         */
        entries(object?: object): Array<[string, any]>;
    }

    interface Imp<TValue> {
        /**
         * @see _.toPairs
         */
        entries<T>(this: Imp<Dictionary<T> | NumericDictionary<T>>): Imp<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        entries(): Imp<Array<[string, any]>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.toPairs
         */
        entries<T>(this: Exp<Dictionary<T> | NumericDictionary<T>>): Exp<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        entries(): Exp<Array<[string, any]>>;
    }

    // entriesIn

    interface Stat {
        /**
         * @see _.entriesIn
         */
        entriesIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;

        /**
         * @see _.entriesIn
         */
        entriesIn(object?: object): Array<[string, any]>;
    }

    interface Imp<TValue> {
        /**
         * @see _.entriesIn
         */
        entriesIn<T>(this: Imp<Dictionary<T> | NumericDictionary<T>>): Imp<Array<[string, T]>>;

        /**
         * @see _.entriesIn
         */
        entriesIn(): Imp<Array<[string, any]>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.entriesIn
         */
        entriesIn<T>(this: Exp<Dictionary<T> | NumericDictionary<T>>): Exp<Array<[string, T]>>;

        /**
         * @see _.entriesIn
         */
        entriesIn(): Exp<Array<[string, any]>>;
    }

    // extend

    interface Stat {
        /**
         * @see _.extend
         */
        extend<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TObject & TSource;

        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TObject & TSource1 & TSource2;

        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.extend
         */
        extend<TObject>(object: TObject): TObject;

        /**
         * @see _.extend
         */
        extend<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.extend
         */
        extend<TSource>(
            source: TSource
        ): Imp<TValue & TSource>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Imp<TValue & TSource1 & TSource2>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Imp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.extend
         */
        extend(): Imp<TValue>;

        /**
         * @see _.extend
         */
        extend(...otherArgs: any[]): Imp<any>;
    }

    interface Exp<TValue> {
        /**
         * @see _.extend
         */
        extend<TSource>(
            source: TSource
        ): Exp<TValue & TSource>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Exp<TValue & TSource1 & TSource2>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Exp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.extend
         */
        extend(): Exp<TValue>;

        /**
         * @see _.extend
         */
        extend(...otherArgs: any[]): Exp<any>;
    }

    // extendWith

    interface Stat {
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource>(
            object: TObject,
            source: TSource,
            customizer: AssignCustomizer
        ): TObject & TSource;

        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2;

        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.extendWith
         */
        extendWith<TObject>(object: TObject): TObject;

        /**
         * @see _.extendWith
         */
        extendWith<TResult>(
            object: any,
            ...otherArgs: any[]
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.extendWith
         */
        extendWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.extendWith
         */
        extendWith(): Imp<TValue>;

        /**
         * @see _.extendWith
         */
        extendWith(...otherArgs: any[]): Imp<any>;
    }

    interface Exp<TValue> {
        /**
         * @see _.extendWith
         */
        extendWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.extendWith
         */
        extendWith(): Exp<TValue>;

        /**
         * @see _.extendWith
         */
        extendWith(...otherArgs: any[]): Exp<any>;
    }

    // findKey

    interface Stat {
        /**
         * This method is like _.find except that it returns the key of the first element predicate returns truthy for
         * instead of the element itself.
         *
         * @param object The object to search.
         * @param predicate The function invoked per iteration.
         * @return Returns the key of the matched element, else undefined.
         */
        findKey<T>(
            object: T | null | undefined,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.findKey
         */
        findKey<T>(
            this: Imp<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.findKey
         */
        findKey<T>(
            this: Exp<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): Exp<string | undefined>;
    }

    // findLastKey

    interface Stat {
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
         *
         * @param object The object to search.
         * @param predicate The function invoked per iteration.
         * @return Returns the key of the matched element, else undefined.
         */
        findLastKey<T>(
            object: T | null | undefined,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey<T>(
            this: Imp<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey<T>(
            this: Exp<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): Exp<string | undefined>;
    }

    // forIn

    interface Stat {
        /**
         * Iterates over own and inherited enumerable properties of an object invoking iteratee for each property. The
         * iteratee is invoked with three arguments: (value, key, object). Iteratee functions may
         * exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns object.
         */
        forIn<T>(
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forIn
         */
        forIn<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forIn
         */
        forIn<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }

    // forInRight

    interface Stat {
        /**
         * This method is like _.forIn except that it iterates over properties of object in the opposite order.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns object.
         */
        forInRight<T>(
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forInRight
         */
        forInRight<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forInRight
         */
        forInRight<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }

    // forOwn

    interface Stat {
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns object.
         */
        forOwn<T>(
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forOwn
         */
        forOwn<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forOwn
         */
        forOwn<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }

    // forOwnRight

    interface Stat {
        /**
         * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns object.
         */
        forOwnRight<T>(
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }

    // functions

    interface Stat {
        /**
         * Creates an array of function property names from own enumerable properties
         * of `object`.
         *
         * @category Object
         * @param object The object to inspect.
         * @returns Returns the new array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = _.constant('a');
         *   this.b = _.constant('b');
         * }
         *
         * Foo.prototype.c = _.constant('c');
         *
         * _.functions(new Foo);
         * // => ['a', 'b']
         */
        functions(object: any): string[];
    }

    interface Imp<TValue> {
        /**
         * @see _.functions
         */
        functions(): Imp<string[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.functions
         */
        functions(): Exp<string[]>;
    }

    // functionsIn

    interface Stat {
        /**
         * Creates an array of function property names from own and inherited
         * enumerable properties of `object`.
         *
         * @category Object
         * @param object The object to inspect.
         * @returns Returns the new array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = _.constant('a');
         *   this.b = _.constant('b');
         * }
         *
         * Foo.prototype.c = _.constant('c');
         *
         * _.functionsIn(new Foo);
         * // => ['a', 'b', 'c']
         */
        functionsIn<T extends {}>(object: any): string[];
    }

    interface Imp<TValue> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): Imp<string[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): Exp<string[]>;
    }

    // get

    interface Stat {
        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        get<TObject extends object, TKey extends keyof TObject>(
            object: TObject,
            path: TKey | [TKey]
        ): TObject[TKey];

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            object: TObject | null | undefined,
            path: TKey | [TKey]
        ): TObject[TKey] | undefined;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            object: TObject | null | undefined,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): Exclude<TObject[TKey], undefined> | TDefault;

        /**
         * @see _.get
         */
        get<T>(
            object: NumericDictionary<T>,
            path: number
        ): T;

        /**
         * @see _.get
         */
        get<T>(
            object: NumericDictionary<T> | null | undefined,
            path: number
        ): T | undefined;

        /**
         * @see _.get
         */
        get<T, TDefault>(
            object: NumericDictionary<T> | null | undefined,
            path: number,
            defaultValue: TDefault
        ): T | TDefault;

        /**
         * @see _.get
         */
        get<TDefault>(
            object: null | undefined,
            path: PropertyPath,
            defaultValue: TDefault
        ): TDefault;

        /**
         * @see _.get
         */
        get(
            object: null | undefined,
            path: PropertyPath
        ): undefined;

        /**
         * @see _.get
         */
        get(
            object: any,
            path: PropertyPath,
            defaultValue?: any
        ): any;
    }

    interface Imp<TValue> {
        /**
         * @see _.get
         */
        get<TKey extends keyof TValue>(
            path: TKey | [TKey]
        ): TValue[TKey];

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            this: Imp<TObject | null | undefined>,
            path: TKey | [TKey],
        ): TObject[TKey] | undefined;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            this: Imp<TObject | null | undefined>,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): Exclude<TObject[TKey], undefined> | TDefault;

        /**
         * @see _.get
         */
        get<T>(
            this: Imp<NumericDictionary<T>>,
            path: number
        ): T;

        /**
         * @see _.get
         */
        get<T>(
            this: Imp<NumericDictionary<T> | null | undefined>,
            path: number
        ): T | undefined;

        /**
         * @see _.get
         */
        get<T, TDefault>(
            this: Imp<NumericDictionary<T> | null | undefined>,
            path: number,
            defaultValue: TDefault
        ): T | TDefault;

        /**
         * @see _.get
         */
        get<TDefault>(
            this: Imp<null | undefined>,
            path: PropertyPath,
            defaultValue: TDefault
        ): TDefault;

        /**
         * @see _.get
         */
        get(
            this: Imp<null | undefined>,
            path: PropertyPath
        ): undefined;

        /**
         * @see _.get
         */
        get<TResult>(
            path: PropertyPath,
            defaultValue?: any
        ): any;
    }

    interface Exp<TValue> {
        /**
         * @see _.get
         */
        get<TKey extends keyof TValue>(
            path: TKey | [TKey]
        ): Exp<TValue[TKey]>;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            this: Exp<TObject | null | undefined>,
            path: TKey | [TKey],
        ): Exp<TObject[TKey] | undefined>;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            this: Exp<TObject | null | undefined>,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): Exp<Exclude<TObject[TKey], undefined> | TDefault>;

        /**
         * @see _.get
         */
        get<T>(
            this: Exp<NumericDictionary<T>>,
            path: number
        ): Exp<T>;

        /**
         * @see _.get
         */
        get<T>(
            this: Exp<NumericDictionary<T> | null | undefined>,
            path: number
        ): Exp<T | undefined>;

        /**
         * @see _.get
         */
        get<T, TDefault>(
            this: Exp<NumericDictionary<T> | null | undefined>,
            path: number,
            defaultValue: TDefault
        ): Exp<T | undefined>;

        /**
         * @see _.get
         */
        get<TDefault>(
            this: Exp<null | undefined>,
            path: PropertyPath,
            defaultValue: TDefault
        ): Exp<TDefault>;

        /**
         * @see _.get
         */
        get(
            this: Exp<null | undefined>,
            path: PropertyPath
        ): Exp<undefined>;

        /**
         * @see _.get
         */
        get(
            path: PropertyPath,
            defaultValue?: any
        ): Exp<any>;
    }

    // has

    interface Stat {
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        has<T>(
            object: T,
            path: PropertyPath
        ): boolean;
    }

    interface Imp<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): boolean;
    }

    interface Exp<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): Exp<boolean>;
    }

    // hasIn

    interface Stat {
        /**
         * Checks if `path` is a direct or inherited property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.hasIn(object, 'a');
         * // => true
         *
         * _.hasIn(object, 'a.b.c');
         * // => true
         *
         * _.hasIn(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.hasIn(object, 'b');
         * // => false
         */
        hasIn<T>(
            object: T,
            path: PropertyPath
        ): boolean;
    }

    interface Imp<TValue> {
        /**
         * @see _.hasIn
         */
        hasIn(path: PropertyPath): boolean;
    }

    interface Exp<TValue> {
        /**
         * @see _.hasIn
         */
        hasIn(path: PropertyPath): Exp<boolean>;
    }

    // invert

    interface Stat {
        /**
         * Creates an object composed of the inverted keys and values of object. If object contains duplicate values,
         * subsequent values overwrite property assignments of previous values unless multiValue is true.
         *
         * @param object The object to invert.
         * @param multiValue Allow multiple values per key.
         * @return Returns the new inverted object.
         */
        invert(
            object: object
        ): Dictionary<string>;
    }

    interface Imp<TValue> {
        /**
         * @see _.invert
         */
        invert(): Imp<Dictionary<string>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.invert
         */
        invert(): Exp<Dictionary<string>>;
    }

    // invertBy

    interface Stat {
        /**
         * This method is like _.invert except that the inverted object is generated from the results of running each
         * element of object through iteratee. The corresponding inverted value of each inverted key is an array of
         * keys responsible for generating the inverted value. The iteratee is invoked with one argument: (value).
         *
         * @param object The object to invert.
         * @param interatee The iteratee invoked per element.
         * @return Returns the new inverted object.
         */
        invertBy<T>(
            object: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined,
            interatee?: ValueIteratee<T>
        ): Dictionary<string[]>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            object: T | null | undefined,
            interatee?: ValueIteratee<T[keyof T]>
        ): Dictionary<string[]>;
    }

    interface Imp<TValue> {
        /**
         * @see _.invertBy
         */
        invertBy<T>(
            this: Imp<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            interatee?: ValueIteratee<T>
        ): Imp<Dictionary<string[]>>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            this: Imp<T | null | undefined>,
            interatee?: ValueIteratee<T[keyof T]>
        ): Imp<Dictionary<string[]>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.invertBy
         */
        invertBy<T>(
            this: Exp<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            interatee?: ValueIteratee<T>
        ): Exp<Dictionary<string[]>>;

        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(
            this: Exp<T | null | undefined>,
            interatee?: ValueIteratee<T[keyof T]>
        ): Exp<Dictionary<string[]>>;
    }

    // invoke

    interface Stat {
        /**
        * Invokes the method at path of object.
        * @param object The object to query.
        * @param path The path of the method to invoke.
        * @param args The arguments to invoke the method with.
        **/
        invoke(
            object: any,
            path: PropertyPath,
            ...args: any[]): any;
    }

    interface Imp<TValue> {
        /**
        * @see _.invoke
        **/
        invoke(
            path: PropertyPath,
            ...args: any[]): any;
    }

    interface Exp<TValue> {
        /**
        * @see _.invoke
        **/
        invoke(
            path: PropertyPath,
            ...args: any[]): Exp<any>;
    }

    // keys

    interface Stat {
        /**
         * Creates an array of the own enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects. See the ES spec for more details.
         *
         * @param object The object to query.
         * @return Returns the array of property names.
         */
        keys(object?: any): string[];
    }

    interface Imp<TValue> {
        /**
         * @see _.keys
         */
        keys(): Imp<string[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.keys
         */
        keys(): Exp<string[]>;
    }

    // keysIn

    interface Stat {
        /**
         * Creates an array of the own and inherited enumerable property names of object.
         *
         * Note: Non-object values are coerced to objects.
         *
         * @param object The object to query.
         * @return An array of property names.
         */
        keysIn(object?: any): string[];
    }

    interface Imp<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): Imp<string[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): Exp<string[]>;
    }

    // mapKeys

    interface Stat {
        /**
         * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
         * by running each own enumerable property of object through iteratee.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new mapped object.
         */
        mapKeys<T>(
            object: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T extends object>(
            object: T | null | undefined,
            iteratee?: ObjectIteratee<T>
        ): Dictionary<T[keyof T]>;
    }

    interface Imp<TValue> {
        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): Imp<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T extends object>(
            this: Imp<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): Imp<Dictionary<T[keyof T]>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): Exp<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T extends object>(
            this: Exp<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): Exp<Dictionary<T[keyof T]>>;
    }

    // mapValues

    interface Stat {
        /**
        * Creates an object with the same keys as object and values generated by running each own
        * enumerable property of object through iteratee. The iteratee function is
        * invoked with three arguments: (value, key, object).
        *
        * @param object The object to iterate over.
        * @param iteratee  The function invoked per iteration.
        * @return Returns the new mapped object.
        */
        mapValues<TResult>(obj: string | null | undefined, callback: StringIterator<TResult>): NumericDictionary<TResult>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T, TResult>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, callback: DictionaryIterator<T, TResult>): Dictionary<TResult>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TResult>(obj: T | null | undefined, callback: ObjectIterator<T, TResult>): { [P in keyof T]: TResult };

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: object): Dictionary<boolean>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined, iteratee: object): { [P in keyof T]: boolean };

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T, TKey extends keyof T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: TKey): Dictionary<T[TKey]>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: string): Dictionary<any>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined, iteratee: string): { [P in keyof T]: any };

        /**
         * @see _.mapValues
         */
        mapValues(obj: string | null | undefined): NumericDictionary<string>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined): Dictionary<T>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T): T;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined): PartialObject<T>;
    }

    interface Imp<TValue> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(
            this: Imp<string | null | undefined>,
            callback: StringIterator<TResult>
        ): Imp<NumericDictionary<TResult>>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T, TResult>(
            this: Imp<Dictionary<T> | NumericDictionary<T> | null | undefined>,
            callback: DictionaryIterator<T, TResult>
        ): Imp<Dictionary<TResult>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TResult>(
            this: Imp<T | null | undefined>,
            callback: ObjectIterator<T, TResult>
        ): Imp<{ [P in keyof T]: TResult }>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(
            this: Imp<Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee: object
        ): Imp<Dictionary<boolean>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(
            this: Imp<T | null | undefined>,
            iteratee: object
        ): Imp<{ [P in keyof T]: boolean }>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T, TKey extends keyof T>(
            this: Imp<Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee: TKey
        ): Imp<Dictionary<T[TKey]>>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(
            this: Imp<Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee: string
        ): Imp<Dictionary<any>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(
            this: Imp<T | null | undefined>,
            iteratee: string
        ): Imp<{ [P in keyof T]: any }>;

        /**
         * @see _.mapValues
         */
        mapValues(this: Imp<string | null | undefined>): Imp<NumericDictionary<string>>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(this: Imp<Dictionary<T> | NumericDictionary<T> | null | undefined>): Imp<Dictionary<T>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(this: Imp<T>): Imp<T>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(this: Imp<T | null | undefined>): Imp<PartialObject<T>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(
            this: Exp<string | null | undefined>,
            callback: StringIterator<TResult>
        ): Exp<NumericDictionary<TResult>>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T, TResult>(
            this: Exp<Dictionary<T> | NumericDictionary<T> | null | undefined>,
            callback: DictionaryIterator<T, TResult>
        ): Exp<Dictionary<TResult>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TResult>(
            this: Exp<T | null | undefined>,
            callback: ObjectIterator<T, TResult>
        ): Exp<{ [P in keyof T]: TResult }>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(
            this: Exp<Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee: object
        ): Exp<Dictionary<boolean>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(
            this: Exp<T | null | undefined>,
            iteratee: object
        ): Exp<{ [P in keyof T]: boolean }>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T, TKey extends keyof T>(
            this: Exp<Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee: TKey
        ): Exp<Dictionary<T[TKey]>>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(
            this: Exp<Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee: string
        ): Exp<Dictionary<any>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(
            this: Exp<T | null | undefined>,
            iteratee: string
        ): Exp<{ [P in keyof T]: any }>;

        /**
         * @see _.mapValues
         */
        mapValues(this: Exp<string | null | undefined>): Exp<NumericDictionary<string>>;

        /**
         * @see _.mapValues
         * TODO: This would be better if we had a separate overload for obj: NumericDictionary that returned a NumericDictionary,
         *       but TypeScript cannot select overload signatures based on number vs string index key type.
         */
        mapValues<T>(this: Exp<Dictionary<T> | NumericDictionary<T> | null | undefined>): Exp<Dictionary<T>>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(this: Exp<T>): Exp<T>;

        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(this: Exp<T | null | undefined>): Exp<PartialObject<T>>;
    }

    // merge

    interface Stat {
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        merge<TObject, TSource>(
            object: TObject,
            source: TSource
        ): TObject & TSource;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2
        ): TObject & TSource1 & TSource2;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.merge
         */
        merge(
            object: any,
            ...otherArgs: any[]
        ): any;
    }

    interface Imp<TValue> {
        /**
         * @see _.merge
         */
        merge<TSource>(
            source: TSource
        ): Imp<TValue & TSource>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Imp<TValue & TSource1 & TSource2>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Imp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.merge
         */
        merge(
            ...otherArgs: any[]
        ): Imp<any>;
    }

    interface Exp<TValue> {
        /**
         * @see _.merge
         */
        merge<TSource>(
            source: TSource
        ): Exp<TValue & TSource>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): Exp<TValue & TSource1 & TSource2>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): Exp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.merge
         */
        merge(
            ...otherArgs: any[]
        ): Exp<any>;
    }

    // mergeWith

    type MergeWithCustomizer = { bivariantHack(value: any, srcValue: any, key: string, object: any, source: any): any; }["bivariantHack"];

    interface Stat {
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
         *     return objValue.concat(srcValue);
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
        mergeWith<TObject, TSource>(
            object: TObject,
            source: TSource,
            customizer: MergeWithCustomizer
        ): TObject & TSource;

        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            customizer: MergeWithCustomizer
        ): TObject & TSource1 & TSource2;

        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2, TSource3>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: MergeWithCustomizer
        ): TObject & TSource1 & TSource2 & TSource3;

        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(
            object: TObject,
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: MergeWithCustomizer
        ): TObject & TSource1 & TSource2 & TSource3 & TSource4;

        /**
         * @see _.mergeWith
         */
        mergeWith(
            object: any,
            ...otherArgs: any[]
        ): any;
    }

    interface Imp<TValue> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(
            source: TSource,
            customizer: MergeWithCustomizer
        ): Imp<TValue & TSource>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: MergeWithCustomizer
        ): Imp<TValue & TSource1 & TSource2>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: MergeWithCustomizer
        ): Imp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: MergeWithCustomizer
        ): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.mergeWith
         */
        mergeWith(
            ...otherArgs: any[]
        ): Imp<any>;
    }

    interface Exp<TValue> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(
            source: TSource,
            customizer: MergeWithCustomizer
        ): Exp<TValue & TSource>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: MergeWithCustomizer
        ): Exp<TValue & TSource1 & TSource2>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: MergeWithCustomizer
        ): Exp<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: MergeWithCustomizer
        ): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.mergeWith
         */
        mergeWith(
            ...otherArgs: any[]
        ): Exp<any>;
    }

    // omit

    interface Stat {
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        omit<T extends AnyKindOfDictionary>(
            object: T | null | undefined,
            ...paths: Array<Many<PropertyName>>
        ): T;

        /**
         * @see _.omit
         */
        omit<T extends object, K extends keyof T>(
            object: T | null | undefined,
            ...paths: Array<Many<K>>
        ): Omit<T, K>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            object: T | null | undefined,
            ...paths: Array<Many<PropertyName>>
        ): PartialObject<T>;
    }

    interface Imp<TValue> {
        /**
         * @see _.omit
         */
        omit<T extends AnyKindOfDictionary>(
            this: Imp<T | null | undefined>,
            ...paths: Array<Many<PropertyName>>
        ): Imp<T>;

        /**
         * @see _.omit
         */
        omit<T extends object, K extends keyof T>(
            this: Imp<T | null | undefined>,
            ...paths: Array<Many<K>>
        ): Imp<Omit<T, K>>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            this: Imp<T | null | undefined>,
            ...paths: Array<Many<PropertyName>>
        ): Imp<PartialObject<T>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.omit
         */
        omit<T extends AnyKindOfDictionary>(
            this: Exp<T | null | undefined>,
            ...paths: Array<Many<PropertyName>>
        ): Exp<T>;

        /**
         * @see _.omit
         */
        omit<T extends object, K extends keyof T>(
            this: Exp<T | null | undefined>,
            ...paths: Array<Many<K>>
        ): Exp<Omit<T, K>>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            this: Exp<T | null | undefined>,
            ...paths: Array<Many<PropertyName>>
        ): Exp<PartialObject<T>>;
    }

    // omitBy

    interface Stat {
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        omitBy<T>(
            object: Dictionary<T> | null | undefined,
            predicate?: ValueKeyIteratee<T>
        ): Dictionary<T>;

        /**
         * @see _.omitBy
         */
        omitBy<T>(
            object: NumericDictionary<T> | null | undefined,
            predicate?: ValueKeyIteratee<T>
        ): NumericDictionary<T>;

        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(
            object: T | null | undefined,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): PartialObject<T>;
    }

    interface Imp<TValue> {
        /**
         * @see _.omitBy
         */
        omitBy<T>(
            this: Imp<Dictionary<T> | null | undefined>,
            predicate?: ValueKeyIteratee<T>
        ): Imp<Dictionary<T>>;

        /**
         * @see _.omitBy
         */
        omitBy<T>(
            this: Imp<NumericDictionary<T> | null | undefined>,
            predicate?: ValueKeyIteratee<T>
        ): Imp<NumericDictionary<T>>;

        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(
            this: Imp<T | null | undefined>,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): Imp<PartialObject<T>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.omitBy
         */
        omitBy<T>(
            this: Exp<Dictionary<T> | null | undefined>,
            predicate?: ValueKeyIteratee<T>
        ): Exp<Dictionary<T>>;

        /**
         * @see _.omitBy
         */
        omitBy<T>(
            this: Exp<NumericDictionary<T> | null | undefined>,
            predicate?: ValueKeyIteratee<T>
        ): Exp<NumericDictionary<T>>;

        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(
            this: Exp<T | null | undefined>,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): Exp<PartialObject<T>>;
    }

    // pick

    interface Stat {
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        pick<T extends object, U extends keyof T>(
            object: T,
             ...props: Array<Many<U>>
        ): Pick<T, U>;

        /**
         * @see _.pick
         */
        pick<T>(
            object: T | null | undefined,
            ...props: PropertyPath[]
        ): PartialDeep<T>;
    }

    interface Imp<TValue> {
        /**
         * @see _.pick
         */
        pick<T extends object, U extends keyof T>(
            this: Imp<T>,
            ...props: Array<Many<U>>
        ): Imp<Pick<T, U>>;

        /**
         * @see _.pick
         */
        pick<T extends object>(
            this: Imp<T | null | undefined>,
            ...props: PropertyPath[]
        ): Imp<PartialObject<T>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.pick
         */
        pick<T extends object, U extends keyof T>(
            this: Exp<T>,
            ...props: Array<Many<U>>
        ): Exp<Pick<T, U>>;

        /**
         * @see _.pick
         */
        pick<T extends object>(
            this: Exp<T | null | undefined>,
            ...props: PropertyPath[]
        ): Exp<PartialObject<T>>;
    }

    // pickBy

    interface Stat {
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        pickBy<T, S extends T>(
            object: Dictionary<T> | null | undefined,
            predicate: ValueKeyIterateeTypeGuard<T, S>
        ): Dictionary<S>;

        /**
         * @see _.pickBy
         */
        pickBy<T, S extends T>(
            object: NumericDictionary<T> | null | undefined,
            predicate: ValueKeyIterateeTypeGuard<T, S>
        ): NumericDictionary<S>;

        /**
         * @see _.pickBy
         */
        pickBy<T>(
            object: Dictionary<T> | null | undefined,
            predicate?: ValueKeyIteratee<T>
        ): Dictionary<T>;

        /**
         * @see _.pickBy
         */
        pickBy<T>(
            object: NumericDictionary<T> | null | undefined,
            predicate?: ValueKeyIteratee<T>
        ): NumericDictionary<T>;

        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(
            object: T | null | undefined,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): PartialObject<T>;
    }

    interface Imp<TValue> {
        /**
         * @see _.pickBy
         */
        pickBy<T, S extends T>(
            this: Imp<Dictionary<T> | null | undefined>,
            predicate: ValueKeyIterateeTypeGuard<T, S>
        ): Imp<Dictionary<S>>;

        /**
         * @see _.pickBy
         */
        pickBy<T, S extends T>(
            this: Imp<NumericDictionary<T> | null | undefined>,
            predicate: ValueKeyIterateeTypeGuard<T, S>
        ): Imp<NumericDictionary<S>>;

        /**
         * @see _.pickBy
         */
        pickBy<T>(
            this: Imp<Dictionary<T> | null | undefined>,
            predicate?: ValueKeyIteratee<T>
        ): Imp<Dictionary<T>>;

        /**
         * @see _.pickBy
         */
        pickBy<T>(
            this: Imp<NumericDictionary<T> | null | undefined>,
            predicate?: ValueKeyIteratee<T>
        ): Imp<NumericDictionary<T>>;

        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(
            this: Imp<T | null | undefined>,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): Imp<PartialObject<T>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.pickBy
         */
        pickBy<T, S extends T>(
            this: Exp<Dictionary<T> | null | undefined>,
            predicate: ValueKeyIterateeTypeGuard<T, S>
        ): Exp<Dictionary<S>>;

        /**
         * @see _.pickBy
         */
        pickBy<T, S extends T>(
            this: Exp<NumericDictionary<T> | null | undefined>,
            predicate: ValueKeyIterateeTypeGuard<T, S>
        ): Exp<NumericDictionary<S>>;

        /**
         * @see _.pickBy
         */
        pickBy<T>(
            this: Exp<Dictionary<T> | null | undefined>,
            predicate?: ValueKeyIteratee<T>
        ): Exp<Dictionary<T>>;

        /**
         * @see _.pickBy
         */
        pickBy<T>(
            this: Exp<NumericDictionary<T> | null | undefined>,
            predicate?: ValueKeyIteratee<T>
        ): Exp<NumericDictionary<T>>;

        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(
            this: Exp<T | null | undefined>,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): Exp<PartialObject<T>>;
    }

    // result

    interface Stat {
        /**
         * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
         * of its parent object and its result is returned.
         *
         * @param object The object to query.
         * @param path The path of the property to resolve.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        result<TResult>(
            object: any,
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): TResult;
    }

    interface Exp<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(
            path: PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): Exp<TResult>;
    }

    // set

    interface Stat {
        /**
         * Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created for
         * missing index properties while objects are created for all other missing properties. Use _.setWith to
         * customize path creation.
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @return Returns object.
         */
        set<T extends object>(
            object: T,
            path: PropertyPath,
            value: any
        ): T;

        /**
         * @see _.set
         */
        set<TResult>(
            object: object,
            path: PropertyPath,
            value: any
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.set
         */
        set(
            path: PropertyPath,
            value: any
        ): this;

        /**
         * @see _.set
         */
        set<TResult>(
            path: PropertyPath,
            value: any
        ): Imp<TResult>;
    }

    interface Exp<TValue> {
        /**
         * @see _.set
         */
        set(
            path: PropertyPath,
            value: any
        ): this;

        /**
         * @see _.set
         */
        set<TResult>(
            path: PropertyPath,
            value: any
        ): Exp<TResult>;
    }

    // setWith

    type SetWithCustomizer<T> = (nsValue: any, key: string, nsObject: T) => any;

    interface Stat {
        /**
         * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
         * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
         * invoked with three arguments: (nsValue, key, nsObject).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @param customizer The function to customize assigned values.
         * @return Returns object.
         */
        setWith<T extends object>(
            object: T,
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<T>
        ): T;

        setWith<T extends object, TResult>(
            object: T,
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<T>
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.setWith
         */
        setWith(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.setWith
         */
        setWith<TResult>(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): Imp<TResult>;
    }

    interface Exp<TValue> {
        /**
         * @see _.setWith
         */
        setWith(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.setWith
         */
        setWith<TResult>(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): Exp<TResult>;
    }

    // toPairs

    interface Stat {
        /**
         * Creates an array of own enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairs<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairs
         */
        toPairs(object?: object): Array<[string, any]>;
    }

    interface Imp<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs<T>(this: Imp<Dictionary<T> | NumericDictionary<T>>): Imp<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        toPairs(): Imp<Array<[string, any]>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs<T>(this: Exp<Dictionary<T> | NumericDictionary<T>>): Exp<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        toPairs(): Exp<Array<[string, any]>>;
    }

    // toPairsIn

    interface Stat {
        /**
         * Creates an array of own and inherited enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairsIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(object?: object): Array<[string, any]>;
    }

    interface Imp<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn<T>(this: Imp<Dictionary<T> | NumericDictionary<T>>): Imp<Array<[string, T]>>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(): Imp<Array<[string, any]>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn<T>(this: Exp<Dictionary<T> | NumericDictionary<T>>): Exp<Array<[string, T]>>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(): Exp<Array<[string, any]>>;
    }

    // transform

    interface Stat {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @return Returns the accumulated value.
         */
        transform<T, TResult>(
            object: T[],
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): TResult[];

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: T[],
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator: Dictionary<TResult>
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator: TResult[]
        ): TResult[];

        /**
         * @see _.transform
         */
        transform(
            object: any[],
        ): any[];

        /**
         * @see _.transform
         */
        transform(
            object: object,
        ): Dictionary<any>;
    }

    interface Imp<TValue> {
        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: Imp<T[]>,
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): Imp<TResult[]>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: Imp<T[]>,
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator: Dictionary<TResult>
        ): Imp<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: Imp<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): Imp<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: Imp<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator: TResult[]
        ): Imp<TResult[]>;

        /**
         * @see _.transform
         */
        transform(
            this: Imp<any[]>,
        ): Imp<any[]>;

        /**
         * @see _.transform
         */
        transform(): Imp<Dictionary<any>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: Exp<T[]>,
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): Exp<TResult[]>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: Exp<T[]>,
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): Exp<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: Exp<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): Exp<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: Exp<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): Exp<TResult[]>;

        /**
         * @see _.transform
         */
        transform(
            this: Exp<any[]>,
        ): Exp<any[]>;

        /**
         * @see _.transform
         */
        transform(): Exp<Dictionary<any>>;
    }

    // unset

    interface Stat {
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        unset(
            object: any,
            path: PropertyPath
        ): boolean;
    }

    interface Imp<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): Imp<boolean>;
    }

    interface Exp<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): Exp<boolean>;
    }

    // update

    interface Stat {
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        update(
            object: object,
            path: PropertyPath,
            updater: (value: any) => any
        ): any;
    }

    interface Imp<TValue> {
        /**
         * @see _.update
         */
        update(
            path: PropertyPath,
            updater: (value: any) => any
        ): Imp<any>;
    }

    interface Exp<TValue> {
        /**
         * @see _.update
         */
        update(
            path: PropertyPath,
            updater: (value: any) => any
        ): Exp<any>;
    }

    // updateWith

    interface Stat {
        /**
         * This method is like `_.update` except that it accepts `customizer` which is
         * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
         * path creation is handled by the method instead. The `customizer` is invoked
         * with three arguments: (nsValue, key, nsObject).
         *
         * **Note:** This method mutates `object`.
         *
         * @since 4.6.0
         * @category Object
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * var object = {};
         *
         * _.updateWith(object, '[0][1]', _.constant('a'), Object);
         * // => { '0': { '1': 'a' } }
         */
        updateWith<T extends object>(
            object: T,
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<T>
        ): T;

        /**
         * @see _.updateWith
         */
        updateWith<T extends object, TResult>(
            object: T,
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<T>
        ): TResult;
    }

    interface Imp<TValue> {
        /**
         * @see _.updateWith
         */
        updateWith(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.updateWith
         */
        updateWith<TResult>(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): Imp<TResult>;
    }

    interface Exp<TValue> {
        /**
         * @see _.updateWith
         */
        updateWith(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.updateWith
         */
        updateWith<TResult>(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): Exp<TResult>;
    }

    // values

    interface Stat {
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        values<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];

        /**
         * @see _.values
         */
        values<T extends object>(object: T | null | undefined): Array<T[keyof T]>;

        /**
         * @see _.values
         */
        values(object: any): any[];
    }

    interface Imp<TValue> {
        /**
         * @see _.values
         */
        values<T>(this: Imp<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): Imp<T[]>;

        /**
         * @see _.values
         */
        values<T extends object>(this: Imp<T | null | undefined>): Imp<Array<T[keyof T]>>;

        /**
         * @see _.values
         */
        values(): Imp<any[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.values
         */
        values<T>(this: Exp<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): Exp<T[]>;

        /**
         * @see _.values
         */
        values<T extends object>(this: Exp<T | null | undefined>): Exp<Array<T[keyof T]>>;

        /**
         * @see _.values
         */
        values(): Exp<any[]>;
    }

    // valuesIn

    interface Stat {
        /**
         * Creates an array of the own and inherited enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns the array of property values.
         */
        valuesIn<T>(object: Dictionary<T>|NumericDictionary<T>|List<T> | null | undefined): T[];

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }

    interface Imp<TValue> {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(this: Imp<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): Imp<T[]>;

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(this: Imp<T | null | undefined>): Imp<Array<T[keyof T]>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(this: Exp<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): Exp<T[]>;

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(this: Exp<T | null | undefined>): Exp<Array<T[keyof T]>>;
    }
}
