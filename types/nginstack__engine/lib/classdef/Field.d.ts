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
    databaseType: typeof DatabaseDataType;
    dataSetType: typeof DataSetDataType;
    charLength: number | null;
    private defaultDisplayFormats_;
    private defaultDisplayFormatsByName_;
    dateFormat: DateFormat;
    size: number;
    order: number;
    readOnly: typeof ReadOnlyMode | boolean;
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
    rangeLimit: Limit;
    masterFieldNames: string;
    multiple: boolean;
    detailFieldNames: string;
    masterDeleteAction: typeof MasterDeleteAction;
    detailFilter: string;
    private propertiesToAssign_;
    private propertiesToAssignWithDeepClone_;
    private ownControlledProperties_;
    protected notifyObjectPropertyChange_(name: string): void;
    private _notifyObjectPropertyChange;
    private groupName;
    group: FieldGroup;
    validationType: ValidationType;
    private validationType_;
    protected inheritedClassDefEvents_: string[];
    protected init_(name: string, type: string, opt_size?: number): void;
    private suggestValidationType_;
    protected registerEvents_(): void;
    protected changeFieldType_(type: string, fieldName: string): void;
    private type_;
    clone(NewClass: (...args: any[]) => void): Field;
    assignObjectsTo(field: any): void;
    assign(field: Field): void;
    assignTo(field: Field): void;
    displayFormat: DateFormat | LatitudeFormat | LongitudeFormat | AngleFormat | NumberFormat;
    private displayFormat_;
    onGetOptions: Event;
    onLookupDisplay: Event;
    onBeforeLookupAddResult: Event;
    onLookupAddResult: Event;
    onAfterLookupAddResult: Event;
    onBeforeChange: Event;
    onAfterChange: Event;
    onValidate: Event;
    protected loadClassDefIfNeeded_(): void;
    classDef: any;
    private checkOptions_;
    private validateOptions_;
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
    export {
        Event,
        AdapterDescriptor,
        Limit,
        DateFormat,
        LatitudeFormat,
        LongitudeFormat,
        AngleFormat,
        NumberFormat,
        ValidationType,
    };
}
import DatabaseDataType = require('../database/DatabaseDataType.js');
import DataSetDataType = require('../dataset/DataSetDataType.js');
import ReadOnlyMode = require('./ReadOnlyMode.js');
import MasterDeleteAction = require('./MasterDeleteAction.js');
import FieldGroup = require('./FieldGroup.js');
type Event = import('../event/Event');
type AdapterDescriptor = import('../event/AdapterDescriptor');
type Limit = typeof import('../range/Limit');
type DateFormat = import('../date/DateFormat').DateFormatType;
type LatitudeFormat = import('../geo/LatitudeFormat').LatitudeFormatType;
type LongitudeFormat = import('../geo/LongitudeFormat').LongitudeFormatType;
type AngleFormat = import('../geo/AngleFormat').AngleFormatType;
type NumberFormat = import('../number/NumberFormat').NumberFormatType;
type ValidationType =
    | 'string'
    | 'int64'
    | 'int32'
    | 'number'
    | 'date'
    | 'email'
    | 'cep'
    | 'time'
    | 'phone'
    | 'pis'
    | 'cpf'
    | 'cnpj'
    | 'cpfcnpj'
    | 'latitude'
    | 'longitude'
    | 'angle'
    | 'boolean';
