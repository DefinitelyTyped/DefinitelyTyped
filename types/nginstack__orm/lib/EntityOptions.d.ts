export = EntityOptions;
declare function EntityOptions(): void;
declare class EntityOptions {
    fields: string[] | ((arg0: Field) => boolean);
    userKey: number;
    create: boolean;
    modelDef: ModelDef;
}
declare namespace EntityOptions {
    export { Field, ModelDef };
}
type Field = import('@nginstack/engine/lib/classdef/Field');
type ModelDef = import('@nginstack/engine/lib/classdef/ModelDef');
