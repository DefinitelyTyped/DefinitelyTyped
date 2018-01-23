declare namespace _ {
    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.merge
         */
        merge<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.merge
         */
        merge(
            ...otherArgs: any[]
        ): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.merge
         */
        merge<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.merge
         */
        merge(
            ...otherArgs: any[]
        ): LoDashExplicitWrapper<any>;
    }
}