import _ = require("../index");

declare namespace Lodash {
    interface Defaults {
        (): Defaults;
        <TSource>(source: TSource): Defaults1x1<TObject, TSource>;
        <TObject, TSource>(source: TSource, object: TObject): TSource & TObject;
        (...sources: any[]): Defaults2x1;
        (...sources: any[], object: any): any;
    }
    interface Defaults1x1<TObject, TSource> {
        (): Defaults1x1<TObject, TSource>;
        (object: TObject): TSource & TObject;
    }
    interface Defaults2x1 {
        (): Defaults2x1;
        (object: any): any;
    }
}

declare const defaults: Lodash.Defaults;
export = defaults;
