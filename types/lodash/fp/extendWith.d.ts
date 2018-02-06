import _ = require("../index");

declare namespace Lodash {
    interface ExtendWith {
        /**
         * @see _.extendWith
         */
        (): ExtendWith;
        /**
         * @see _.extendWith
         */
        <TObject>(object: TObject): ExtendWith1x1<TObject>;
        /**
         * @see _.extendWith
         */
        <TObject, TSource1>(object: TObject, source1: TSource1): ExtendWith1x2<TObject, TSource1>;
        /**
         * @see _.extendWith
         */
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): ExtendWith1x3<TObject, TSource1, TSource2>;
        /**
         * @see _.extendWith
         */
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x1<TObject> {
        /**
         * @see _.extendWith
         */
        (): ExtendWith1x1<TObject>;
        /**
         * @see _.extendWith
         */
        <TSource1>(source1: TSource1): ExtendWith1x2<TSource1, TObject>;
        /**
         * @see _.extendWith
         */
        <TSource1, TSource2>(source1: TSource1, source2: TSource2): ExtendWith1x3<TSource1, TSource2, TObject>;
        /**
         * @see _.extendWith
         */
        <TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x2<TObject, TSource1> {
        /**
         * @see _.extendWith
         */
        (): ExtendWith1x2<TObject, TSource1>;
        /**
         * @see _.extendWith
         */
        <TSource2>(source2: TSource2): ExtendWith1x3<TSource2, TObject, TSource1>;
        /**
         * @see _.extendWith
         */
        <TSource2>(source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x3<TObject, TSource1, TSource2> {
        /**
         * @see _.extendWith
         */
        (): ExtendWith1x3<TObject, TSource1, TSource2>;
        /**
         * @see _.extendWith
         */
        (customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
}

declare const extendWith: Lodash.ExtendWith;
export = extendWith;
