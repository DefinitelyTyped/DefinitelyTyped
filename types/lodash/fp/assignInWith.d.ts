import _ = require("../index");

declare namespace Lodash {
    interface AssignInWith {
        (): AssignInWith;
        <TSource>(source: TSource): AssignInWith1x1<TObject, TSource>;
        <TSource>(source: TSource, customizer: AssignCustomizer): AssignInWith1x2<TObject, TSource>;
        <TObject, TSource>(source: TSource, customizer: AssignCustomizer, object: TObject): TObject & TSource;
    }
    interface AssignInWith1x1<TObject, TSource> {
        (): AssignInWith1x1<TObject, TSource>;
        (customizer: AssignCustomizer): AssignInWith1x2<TObject, TSource>;
        (customizer: AssignCustomizer, object: TObject): TObject & TSource;
    }
    interface AssignInWith1x2<TObject, TSource> {
        (): AssignInWith1x2<TObject, TSource>;
        (object: TObject): TObject & TSource;
    }
}

declare const assignInWith: Lodash.AssignInWith;
export = assignInWith;
