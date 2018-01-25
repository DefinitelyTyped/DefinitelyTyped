import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignWith
         */
        assignWith(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.assignWith
         */
        assignWith<TResult>(...otherArgs: any[]): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.assignWith
         */
        assignWith(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.assignWith
         */
        assignWith(...otherArgs: any[]): LoDashExplicitWrapper<any>;
    }
}