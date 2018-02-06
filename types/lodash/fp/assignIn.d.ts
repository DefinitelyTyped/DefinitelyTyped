import _ = require("../index");

declare namespace Lodash {
    interface AssignIn {
        (): AssignIn;
        <TSource>(source: TSource): AssignIn1x1<TObject, TSource>;
        <TObject, TSource>(source: TSource, object: TObject): TObject & TSource;
        (...otherArgs: any[]): AssignIn2x1<TResult>;
        <TResult>(...otherArgs: any[], object: any): TResult;
    }
    interface AssignIn1x1<TObject, TSource> {
        (): AssignIn1x1<TObject, TSource>;
        (object: TObject): TObject & TSource;
    }
    interface AssignIn2x1<TResult> {
        (): AssignIn2x1<TResult>;
        (object: any): TResult;
    }
}

declare const assignIn: Lodash.AssignIn;
export = assignIn;
