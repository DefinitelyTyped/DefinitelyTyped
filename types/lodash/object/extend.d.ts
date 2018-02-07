import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.extend
         */
        extend<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TValue & TSource>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.extend
         */
        extend(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.extend
         */
        extend(...otherArgs: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.extend
         */
        extend<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TValue & TSource>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3>;

        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;

        /**
         * @see _.extend
         */
        extend(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.extend
         */
        extend(...otherArgs: any[]): LoDashExplicitWrapper<any>;
    }
}