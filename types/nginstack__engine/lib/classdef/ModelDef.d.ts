export = ModelDef;
declare function ModelDef(): void;
declare class ModelDef {
    cachedFields: string[];
    private localDeclaredProperty_;
    private ownFieldsSet_;
    private ownFieldsArray_;
    protected logger_: Logger;
    protected defaultAdapterDescriptor_: any;
    canAddAdaptedListeners(): boolean;
    declareCloneableObject(propertyName: string, initialValue: any): void;
    private nextParentDefWithFieldsCache_;
    private extraFilterExpressionCache_;
    private extraFilterFieldsCache_;
    cachedData: boolean | CachedDataOptions;
    cacheStrategy: {
        ALWAYS: string;
        NEVER: string;
        ON_DEMAND: string;
    };
    cachedVfsContent: boolean;
    classDefManager: ClassDefManager;
    classChangePolicy: number;
    classFieldName: string;
    dataDictionary: string;
    dbIndexSpace: string;
    dbPrimaryKey: string;
    dbTableSpace: string;
    fieldClass: (...args: any[]) => any;
    findOrder: number;
    help: string;
    hasOwnJustToGroup: boolean;
    keyFieldName: string;
    lookupDisplayFieldName: string;
    memoDbType: string;
    metaClass: number;
    occurrenceLimit: number;
    transactionLogMaxDays: number;
    versionFieldName: string;
    displayName: string;
    displayOrder: number;
    sourceType: {
        MODEL: string;
        VIEW: string;
        CONFIG: string;
        NON_STRICT_MODEL: string;
    };
    cache: ClassDefCache;
    integerDatabaseType: string;
    private integerDatabaseType_;
    ownFields: Field[];
    private fields_;
    upgradeMustSyncRecords: boolean;
    managedDatabaseSchema: boolean;
    upgradeChangesTableStructure: boolean;
    session: any;
    realm: string;
    justToGroup: boolean;
    tableName: string;
    groups: FieldGroupSet;
    resetJustToGroup(): void;
    private justToGroup_;
    private nextParentWithFields_;
    private nextParentDefWithFields_;
    private notifyFieldUsage_;
    field(name: string, type?: string, size?: number): Field;
    getClassDef(classKey: any): any;
    getNormalizedDef(classKey: number): ModelDef;
    fields: FieldList;
    getClassDefWithObjectProperty(propertyName: string, skipCurrentClass?: boolean): any;
    getClassDefWithEvent(eventName: string, skipCurrentClass?: boolean): any;
    hasObjectProperty(propertyName: string): boolean;
    hasObjectPropertyDeclaredInThisClass(propertyName: string): boolean;
    hasEvent(eventName: string): boolean;
    declareArray(name: string): void;
    declareGetterOfObjectProperty(propertyName: string, objectClassName: string): void;
    datasourceDefaultFilters: string[];
    indexes: string[];
    dbSums: any[];
    declareObject(name: string): void;
    declareEvent(name: string): void;
    protected adaptEvent_(name: string, descriptor: AdapterDescriptor | Record<any, any>): void;
    onLookupAddResult: Event;
    onValidate: DataEvent;
    init(opt_parentDef?: ClassDef, ...args: any[]): void;
    hasOwnFields(): boolean;
    getFieldsAsStringList(): StringList;
    findField(name: string): Field;
    private findChildField_;
    getLookupDisplay(sender: any, value: any, event?: Event): string;
    fileAttributes(vfsKey: number): {
        display: boolean;
        displayName: string;
        displayOrder: number;
        permissionControlEnabled: boolean;
    };
    hasOwnFileAttributes(fileKey: any): boolean;
    hideFiles(files: number[]): void;
    toString(): string;
    setFieldsProperties(...args: any[]): void;
    getFieldsByProperty(...args: any[]): Field[];
    private _getArrayFromList;
    private _translateFieldNamesToFieldObjectsArray;
    private _getFieldByName;
    getKeySchema(): string;
    toJSONSchema(): string;
    clone(): ModelDef;
    getExtraFilterFields(): Field[];
    getExtraFilterExpression(): string;
}
declare namespace ModelDef {
    export {
        declareCloneableObject,
        declareArray,
        declareGetterOfObjectProperty,
        declareObject,
        declareEvent,
        Event,
        AdapterDescriptor,
        CachedDataOptions,
        ClassDefManager,
        ViewDef,
    };
}
import Logger = require('../log/Logger.js');
type CachedDataOptions = Record<any, any>;
type ClassDefManager = import('./ClassDefManager');
import ClassDefCache = require('./ClassDefCache.js');
import Field = require('./Field.js');
import FieldGroupSet = require('./FieldGroupSet.js');
import FieldList = require('./FieldList.js');
type AdapterDescriptor = import('../event/AdapterDescriptor');
type Event = import('../event/Event');
import DataEvent = require('./DataEvent.js');
import ClassDef = require('./ClassDef.js');
import StringList = require('../string/StringList.js');
declare function declareCloneableObject(
    obj: ModelDef,
    propertyName: string,
    initialValue: any
): void;
declare function declareArray(obj: ModelDef, name: string): void;
declare function declareGetterOfObjectProperty(
    obj: ModelDef,
    propertyName: string,
    objectClassName: string
): void;
declare function declareObject(obj: ModelDef, name: string): void;
declare function declareEvent(obj: ModelDef, name: string): void;
type ViewDef = any;
