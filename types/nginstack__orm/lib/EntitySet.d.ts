export = EntitySet;
declare function EntitySet(
    baseClass: number,
    dataSet: any,
    opt_options?: EntitySetOptions | Record<any, any>
): void;
declare class EntitySet {
    constructor(baseClass: number, dataSet: any, opt_options?: EntitySetOptions | Record<any, any>);
    baseClass_: number;
    userKey_: number;
    dataSet_: any;
    keyFieldName_: number;
    keyFieldIndex_: number;
    classFieldName_: string;
    classFieldIndex_: number;
    autoPersist_: any;
    fields_: string[] | ((arg0: Field) => boolean);
    customModelDef_: ModelDef;
    entityCache_: Record<string, EntitySet.Item_>;
    items_: EntitySet.Item_[];
    baseClass: number;
    autoPersist: boolean;
    private getCachedEntity_;
    findByKey(key: number): Entity;
    some(callback: (arg0: Entity) => boolean, opt_context?: any): boolean;
    forEach(callback: (arg0: Entity) => any, opt_context?: any): void;
    bindDataSet(dataSet: any): void;
    insert(data: Record<any, any>): number;
    newEntity(data: number | Record<any, any>): Entity;
    update(key: number, data: any): void;
    remove(entity: number | Entity): void;
    removeAll(): void;
    merge(data: Record<any, any> | any[]): {
        inserted: number[];
        updated: number[];
    };
    persist(): number;
    toJSONString(): string;
    toJSONSchema(): any;
}
declare namespace EntitySet {
    export { fromClass, fromDataSet, persist, Item_, ModelDef, DataSet, Field, EntitySetOptions };
}
type EntitySetOptions = import('./EntitySetOptions');
type Field = import('@nginstack/engine/lib/classdef/Field');
type ModelDef = import('@nginstack/engine/lib/classdef/ModelDef');
import Entity = require('./Entity.js');
declare function fromClass(
    classKey: number,
    opt_options?:
        | {
              userKey: number;
              fields: string[] | ((arg0: Field) => boolean);
          }
        | Record<any, any>
): EntitySet;
declare function fromDataSet(
    baseClass: number,
    dataSet: any,
    opt_options?:
        | Record<any, any>
        | {
              userKey: number;
              fields: string[] | ((arg0: Field) => boolean);
          }
): EntitySet;
declare function persist(entitySets: EntitySet | EntitySet[]): number;
declare function Item_(entitySet: any, classKey: any, dataSet: any, opt_options: any): void;
declare class Item_ {
    private constructor();
    private entitySet_;
    private persist;
    private clone;
    private checkIfIsEmpty_;
    private insert_;
    private updateClass_;
    private CloneClass_;
}
type DataSet = any;
