import * as _ from "..";
declare module ".." {
    type MergeWithCustomizer = { bivariantHack(value: any, srcValue: any, key: string, object: any, source: any): any; }["bivariantHack"]

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(
            source: TSource,
            customizer: MergeWithCustomizer
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: MergeWithCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: MergeWithCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: MergeWithCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.mergeWith
         */
        mergeWith(
            ...otherArgs: any[]
        ): LoDashImplicitWrapper<any>;
    }
}