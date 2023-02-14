export = EntitySetOptions;
declare function EntitySetOptions(): void;
declare class EntitySetOptions {
    fields: string[] | ((arg0: Field) => boolean);
    userKey: number;
    modelDef: ModelDef;
}
declare namespace EntitySetOptions {
    export { Field, ModelDef };
}
type Field = import('@nginstack/engine/lib/classdef/Field');
type ModelDef = import('@nginstack/engine/lib/classdef/ModelDef');
