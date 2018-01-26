import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignIn
         */
        assignIn(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.assignIn
         */
        assignIn<TResult>(...otherArgs: any[]): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignIn
         */
        assignIn(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.assignIn
         */
        assignIn(...otherArgs: any[]): LoDashExplicitWrapper<any>;
    }
}