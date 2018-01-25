import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.extendWith
         */
        extendWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.extendWith
         */
        extendWith(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.extendWith
         */
        extendWith(...otherArgs: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.extendWith
         */
        extendWith<TSource>(
            source: TSource,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: AssignCustomizer
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.extendWith
         */
        extendWith(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.extendWith
         */
        extendWith(...otherArgs: any[]): LoDashExplicitWrapper<any>;
    }
}