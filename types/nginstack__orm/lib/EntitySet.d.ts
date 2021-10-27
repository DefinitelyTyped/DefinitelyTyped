export = EntitySet;
declare function EntitySet(
    baseClass: number,
    dataSet: any,
    opt_options?: EntitySetOptions | Record<any, any>
): void;
declare class EntitySet {
    constructor(baseClass: number, dataSet: any, opt_options?: EntitySetOptions | Record<any, any>);
    private baseClass_;
    private userKey_;
    private dataSet_;
    private keyFieldName_;
    private keyFieldIndex_;
    private classFieldName_;
    private classFieldIndex_;
    private autoPersist_;
    private fields_;
    private customModelDef_;
    private entityCache_;
    private items_;
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
    export { fromClass, fromDataSet, persist, ModelDef, DataSet, Field, EntitySetOptions };
}
type EntitySetOptions = import('./EntitySetOptions');
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
type ModelDef = import('@nginstack/engine/lib/classdef/ModelDef');
type DataSet = any;
type Field = import('@nginstack/engine/lib/classdef/Field');
