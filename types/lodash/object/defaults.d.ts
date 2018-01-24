import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(
            source: TSource
        ): LoDashImplicitWrapper<TSource & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashImplicitWrapper<TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashImplicitWrapper<TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashImplicitWrapper<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults(): LoDashImplicitWrapper<TValue>;

        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(
            source: TSource
        ): LoDashExplicitWrapper<TSource & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitWrapper<TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitWrapper<TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitWrapper<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;

        /**
         * @see _.defaults
         */
        defaults(): LoDashExplicitWrapper<TValue>;

        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): LoDashExplicitWrapper<any>;
    }
}