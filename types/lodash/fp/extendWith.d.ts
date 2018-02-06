import _ = require("../index");

declare namespace Lodash {
    interface ExtendWith {
        (): ExtendWith;
        <TObject>(object: TObject): ExtendWith1x1<TObject, TSource1, TSource2>;
        <TObject, TSource1>(object: TObject, source1: TSource1): ExtendWith1x2<TObject, TSource1, TSource2>;
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): ExtendWith1x3<TObject, TSource1, TSource2>;
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x1<TObject, TSource1, TSource2> {
        (): ExtendWith1x1<TObject, TSource1, TSource2>;
        (source1: TSource1): ExtendWith1x2<TObject, TSource1, TSource2>;
        (source1: TSource1, source2: TSource2): ExtendWith1x3<TObject, TSource1, TSource2>;
        (source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x2<TObject, TSource1, TSource2> {
        (): ExtendWith1x2<TObject, TSource1, TSource2>;
        (source2: TSource2): ExtendWith1x3<TObject, TSource1, TSource2>;
        (source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
    interface ExtendWith1x3<TObject, TSource1, TSource2> {
        (): ExtendWith1x3<TObject, TSource1, TSource2>;
        (customizer: AssignCustomizer): TObject & TSource1 & TSource2;
    }
}

declare const extendWith: Lodash.ExtendWith;
export = extendWith;
