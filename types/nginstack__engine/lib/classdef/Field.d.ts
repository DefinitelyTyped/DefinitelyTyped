export = Field;
declare function Field(name: string, type: string, opt_size?: number): void;
declare class Field {
    constructor(name: string, type: string, opt_size?: number);
    private defaultAdapterDescriptor_;
    protected adaptEvent_(name: string, descriptor: AdapterDescriptor | Record<any, any>): void;
    protected typesThatNotSupportUnderscoreAtName_: any;
    name: string;
    upperName: string;
    lowerName: string;
    type: string;
    private getIntegerDatabaseType_;
    private updateDataTypeAndSize_;
    private charLength_;
    private databaseType_;
    private dataSetType_;
    private clearDataTypeAndSizeCache_;
    databaseType: {
        CHAR: string;
        VARCHAR: string;
        CLOB: string;
        INTEGER: string;
        BIGINT: string;
        NUMERIC: string;
        DOUBLE_PRECISION: string;
        TIMESTAMP: string;
        TIMESTAMP_WITH_TIME_ZONE: string;
        DATE: string;
    };
    dataSetType: {
        STRING: string;
        MEMO: string;
        INT32: string;
        INT64: string;
        NUMBER: string;
        DATE: string;
        DATETIME: string;
        BOOLEAN: string;
    };
    charLength: number | null;
    private defaultDisplayFormats_;
    dateFormat: {
        DDMMYYYY: number;
        DDMM: number;
        MMYYYY: number;
        WWYYYY: number;
        YYYYWW: number;
        MMMYYYY: number;
    };
    size: number;
    order: number;
    readOnly:
        | {
              NEVER: number;
              ALWAYS: number;
              AFTER_INSERT: number;
              ONEDIT: number;
              FILLED: number;
          }
        | boolean;
    integrityCheck: boolean;
    dataDictionary: any;
    required: boolean;
    decimalPrecision: number;
    minDecimalPrecision: number;
    maxDecimalPrecision: number;
    options: any[][];
    private options_;
    stringIfTrue: string;
    help: string;
    label: string;
    classKey: number;
    isClassLookup: boolean;
    lookupType: number;
    isDatabaseField: boolean;
    isDataBaseField: boolean;
    private _changedObjectsProperties;
    caseType: string;
    max: number | Date;
    min: number | Date;
    autoTrim: boolean;
    autoSanitize: boolean;
    defaultValue: any;
    permissionFilterFieldName: string;
    userCanChangeNegativeKey: boolean;
    rangeLimit: any;
    protected _getArrayFromList(list: any): any;
    masterFieldNames: string;
    multiple: boolean;
    detailFieldNames: string;
    masterDeleteAction: {
        ERROR: number;
        DELETE: number;
        UNLINK: number;
    };
    detailFilter: string;
    private _propertiesToAssign;
    private _ownControlledProperties;
    protected _notifyObjectPropertyChange(name: string): void;
    private groupName;
    group: FieldGroup;
    protected inheritedClassDefEvents_: string[];
    protected init_(name: string, type: string, opt_size?: number): void;
    protected registerEvents_(): void;
    protected changeFieldType_(type: string, fieldName: string): void;
    private type_;
    clone(NewClass: (...args: any[]) => void): Field;
    assignObjectsTo(field: any): void;
    assign(field: Field): void;
    assignTo(field: Field): void;
    displayFormat:
        | {
              DDMMYYYY: number;
              DDMM: number;
              MMYYYY: number;
              WWYYYY: number;
              YYYYWW: number;
              MMMYYYY: number;
          }
        | {
              DDD_DDDDD: number;
              DDD_MM_MMM_DIR: number;
              DDD_MM_SS_S_DIR: number;
          }
        | {
              DDD_DDDDD: number;
              DDD_MM_MMM_DIR: number;
              DDD_MM_SS_S_DIR: number;
          }
        | {
              DDD: number;
              DDD_DD: number;
          };
    onGetOptions: Event;
    onLookupDisplay: Event;
    onBeforeLookupAddResult: Event;
    onLookupAddResult: Event;
    onAfterLookupAddResult: Event;
    onBeforeChange: Event;
    onAfterChange: Event;
    onValidate: Event;
    private checkCoordinateRange_;
    protected loadClassDefIfNeeded_(): void;
    classDef: any;
    private checkOptions_;
    validateValue(value: string | number | boolean | Date): any;
    private toString;
    isString(): boolean;
    isMemo(): boolean;
    isPassword(): boolean;
    isInteger(): boolean;
    isInt64(): boolean;
    isInt32(): boolean;
    isDate(): boolean;
    isBoolean(): boolean;
    isCombo(): boolean;
    isNumber(): boolean;
    isMasterDetail(): boolean;
    isFile(): boolean;
    isTime(): boolean;
}
declare namespace Field {
    export { Event, AdapterDescriptor };
}
type AdapterDescriptor = import('../event/AdapterDescriptor');
import FieldGroup = require('./FieldGroup.js');
type Event = import('../event/Event');
