export = Entity;
declare function Entity(
    classKey: number,
    dataSet: DataSet,
    opt_options?: EntityOptions | Record<any, any>,
): void;
declare class Entity {
    constructor(classKey: number, dataSet: DataSet, opt_options?: EntityOptions | Record<any, any>);
    private userKey_;
    private fieldsFilter_;
    private dataSet_;
    private autoPersist_;
    private customModelDef_;
    private originalBookmark_;
    protected CloneClass_(): void;
    private cloneableProperties_;
    private fieldPermissions_;
    private modelDef_;
    private configDef_;
    private visibleFieldNames_;
    private visibleFieldNamesSet_;
    private changeableFieldNamesSet_;
    private visibleFieldIndexes_;
    private fields_;
    private editableProductFields_;
    private extraFilterFields_;
    private requiredFields_;
    private fieldsWithDefaultValue_;
    private masterDetailFields_;
    private editableNegativeKeys_;
    private autoPersistVersion_;
    key: number;
    classKey: number;
    autoPersist: boolean;
    postPending: boolean;
    state: EntityState;
    protected updateClass_(classKey: number): void;
    private classKey_;
    private fieldTypeIsSupported_;
    private normalizeFieldValue_;
    private emitEvent_;
    private emitDataSetEvent_;
    private emitFieldEvent_;
    private emitFieldChangeEvent_;
    private getExtraFilters_;
    private permissionFieldLabels_;
    private checkPermission_;
    private checkPosition_;
    private checkIfIsEmpty_;
    private checkIfClassIsJustToGroup_;
    private checkIfCanChangeNegativeKey_;
    private checkRequiredFields_;
    private checkStrictMode_;
    private checkIfFieldIsReadOnly_;
    private checkIfCanChangeClass_;
    private validateLookupValue_;
    private executeMasterDetailActions_;
    private suggestDefaultValues_;
    protected insert_(): void;
    set(name: string, value: any): void;
    private normalizeAndCheckFieldPermission_;
    get(name: any): any;
    val(expr: string): string | number | null | boolean | Date;
    str(expr: string): string;
    num(expr: string): number;
    bool(expr: string): boolean;
    date(expr: string): Date | null;
    dbkey(expr: string): DBKey | null;
    assign(values: { [x: string]: any }): void;
    edit(): void;
    cancel(): void;
    post(): void;
    delete(): void;
    bindDataSet(dataSet: DataSet): void;
    key_: any;
    clone(): Entity;
    persist(): number;
    private stringify_;
    toJSONString(): string;
    toJSONSchema(): any;
}
declare namespace Entity {
    export {
        ConfigDef,
        DataSet,
        Emitter,
        EntityOptions,
        EntityState,
        Event,
        Field,
        FieldPermissions,
        fromDataSet,
        fromKey,
        ModelDef,
        requiresStrictMode,
    };
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
declare function fromKey(
    key: number,
    opt_options?:
        | {
            userKey: number;
            fields: string[] | ((arg0: Field) => boolean);
        }
        | Record<any, any>,
): Entity;
declare function fromDataSet(
    classKey: number,
    dataSet: DataSet,
    opt_options?:
        | {
            userKey: number;
            fields: string[] | ((arg0: Field) => boolean);
        }
        | Record<any, any>,
): Entity;
declare let requiresStrictMode: boolean;
type ModelDef = import("@nginstack/engine/lib/classdef/ModelDef");
type ConfigDef = import("@nginstack/engine/lib/classdef/ConfigDef");
type Field = import("@nginstack/engine/lib/classdef/Field");
type Event = import("@nginstack/engine/lib/event/Event");
type Emitter = import("@nginstack/engine/lib/event/Emitter");
type FieldPermissions = import("@nginstack/engine/lib/security/FieldPermissions");
type DataSet = import("@nginstack/engine/lib/dataset/DataSet");
type EntityOptions = import("./EntityOptions");
type EntityState = typeof EntityState;
import EntityState = require("./EntityState.js");
