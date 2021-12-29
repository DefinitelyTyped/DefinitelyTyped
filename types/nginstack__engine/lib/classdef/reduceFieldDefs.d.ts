export = reduceFieldDefs;
declare function reduceFieldDefs(
    classKey: number,
    fldExpr: string,
    f: (arg0: any, arg1: Field) => any,
    val?: any,
    opt_obj?: any
): any;
declare namespace reduceFieldDefs {
    export { Field };
}
type Field = import('./Field');
