import _ = require("../index");

declare namespace Lodash {
    interface MergeWith {
        (): MergeWith;
        <TSource>(source: TSource): MergeWith1x1<TObject, TSource>;
        <TSource>(source: TSource, customizer: MergeWithCustomizer): MergeWith1x2<TObject, TSource>;
        <TObject, TSource>(source: TSource, customizer: MergeWithCustomizer, object: TObject): TObject & TSource;
    }
    interface MergeWith1x1<TObject, TSource> {
        (): MergeWith1x1<TObject, TSource>;
        (customizer: MergeWithCustomizer): MergeWith1x2<TObject, TSource>;
        (customizer: MergeWithCustomizer, object: TObject): TObject & TSource;
    }
    interface MergeWith1x2<TObject, TSource> {
        (): MergeWith1x2<TObject, TSource>;
        (object: TObject): TObject & TSource;
    }
}

declare const mergeWith: Lodash.MergeWith;
export = mergeWith;
