import _ = require("../index");

declare namespace Lodash {
    interface AssignWith {
        (): AssignWith;
        <TSource>(source: TSource): AssignWith1x1<TObject, TSource>;
        <TSource>(source: TSource, customizer: AssignCustomizer): AssignWith1x2<TObject, TSource>;
        <TObject, TSource>(source: TSource, customizer: AssignCustomizer, object: TObject): TObject & TSource;
    }
    interface AssignWith1x1<TObject, TSource> {
        (): AssignWith1x1<TObject, TSource>;
        (customizer: AssignCustomizer): AssignWith1x2<TObject, TSource>;
        (customizer: AssignCustomizer, object: TObject): TObject & TSource;
    }
    interface AssignWith1x2<TObject, TSource> {
        (): AssignWith1x2<TObject, TSource>;
        (object: TObject): TObject & TSource;
    }
}

declare const assignWith: Lodash.AssignWith;
export = assignWith;
