import _ = require("../index");

declare namespace Lodash {
    interface Merge {
        (): Merge;
        <TSource>(source: TSource): Merge1x1<TObject, TSource>;
        <TObject, TSource>(source: TSource, object: TObject): TObject & TSource;
        (...otherArgs: any[]): Merge2x1;
        (...otherArgs: any[], object: any): any;
    }
    interface Merge1x1<TObject, TSource> {
        (): Merge1x1<TObject, TSource>;
        (object: TObject): TObject & TSource;
    }
    interface Merge2x1 {
        (): Merge2x1;
        (object: any): any;
    }
}

declare const merge: Lodash.Merge;
export = merge;
