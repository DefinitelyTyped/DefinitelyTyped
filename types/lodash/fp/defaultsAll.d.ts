import _ = require("../index");

declare namespace Lodash {
    interface Defaults {
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
        (): Defaults;
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
        <TObject>(object: TObject): Defaults1x1<TObject>;
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
        <TObject, TSource1>(object: TObject, source1: TSource1): Defaults1x2<TObject, TSource1>;
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
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): Defaults1x3<TObject, TSource1, TSource2>;
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
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TSource3 & TSource2 & TSource1 & TObject;
    }
    interface Defaults1x1<TObject> {
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
        (): Defaults1x1<TObject>;
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
        <TSource1>(source1: TSource1): Defaults1x2<TSource1, TObject>;
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
        <TSource1, TSource2>(source1: TSource1, source2: TSource2): Defaults1x3<TSource1, TSource2, TObject>;
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
        <TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): TSource3 & TSource2 & TSource1 & TObject;
    }
    interface Defaults1x2<TObject, TSource1> {
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
        (): Defaults1x2<TObject, TSource1>;
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
        <TSource2>(source2: TSource2): Defaults1x3<TSource2, TObject, TSource1>;
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
        <TSource2, TSource3>(source2: TSource2, source3: TSource3): TSource3 & TSource2 & TSource1 & TObject;
    }
    interface Defaults1x3<TObject, TSource1, TSource2> {
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
        (): Defaults1x3<TObject, TSource1, TSource2>;
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
        <TSource3>(source3: TSource3): TSource3 & TSource2 & TSource1 & TObject;
    }
}

declare const defaultsAll: Lodash.Defaults;
export = defaultsAll;
