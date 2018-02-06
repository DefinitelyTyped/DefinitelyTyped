import _ = require("../index");

declare namespace Lodash {
    interface Extend {
        (): Extend;
        <TObject>(object: TObject): Extend1x1<TObject, TSource1, TSource2, TSource3>;
        <TObject, TSource1>(object: TObject, source1: TSource1): Extend1x2<TObject, TSource1, TSource2, TSource3>;
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): Extend1x3<TObject, TSource1, TSource2, TSource3>;
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Extend1x1<TObject, TSource1, TSource2, TSource3> {
        (): Extend1x1<TObject, TSource1, TSource2, TSource3>;
        (source1: TSource1): Extend1x2<TObject, TSource1, TSource2, TSource3>;
        (source1: TSource1, source2: TSource2): Extend1x3<TObject, TSource1, TSource2, TSource3>;
        (source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Extend1x2<TObject, TSource1, TSource2, TSource3> {
        (): Extend1x2<TObject, TSource1, TSource2, TSource3>;
        (source2: TSource2): Extend1x3<TObject, TSource1, TSource2, TSource3>;
        (source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Extend1x3<TObject, TSource1, TSource2, TSource3> {
        (): Extend1x3<TObject, TSource1, TSource2, TSource3>;
        (source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
}

declare const extend: Lodash.Extend;
export = extend;
