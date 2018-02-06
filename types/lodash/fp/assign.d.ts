import _ = require("../index");

declare namespace Lodash {
    interface Assign {
        (): Assign;
        <TSource>(source: TSource): Assign1x1<TObject, TSource>;
        <TObject, TSource>(source: TSource, object: TObject): TObject & TSource;
        (...otherArgs: any[]): Assign2x1;
        (...otherArgs: any[], object: any): any;
    }
    interface Assign1x1<TObject, TSource> {
        (): Assign1x1<TObject, TSource>;
        (object: TObject): TObject & TSource;
    }
    interface Assign2x1 {
        (): Assign2x1;
        (object: any): any;
    }
}

declare const assign: Lodash.Assign;
export = assign;
