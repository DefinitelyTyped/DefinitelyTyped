export = DataSourceField;
declare function DataSourceField(name: string, type: string): void;
declare class DataSourceField {
    constructor(name: string, type: string);
    type: {
        STRING: string;
        CHAR: string;
        DATE: string;
        INT32: string;
        INT64: string;
        NUMBER: string;
        ARRAY: string;
        MEMO: string;
        COMBO: string;
        MASTER_DETAIL: string;
        BOOLEAN: string;
        PHONE: string;
        FILE: string;
        PASSWORD: string;
        TIME: string;
        DATETIME: string;
        CEP: string;
        LATITUDE: string;
        LONGITUDE: string;
        ANGLE: string;
        GRID: string;
        INTEGER: string;
    };
    name: string;
    protected propertiesToAssign_: string[];
    protected base_: DataSourceField;
    protected baseLabelSuffix_: string;
    upperName: string;
    lowerName: string;
    label: string;
    help: string;
    classKey: number | null;
    stringIfTrue: string;
    private shared;
    lookupType: number;
    options: any[];
    protected notifyNameChange_(name: string): void;
    isDate(): boolean;
    isInteger(): boolean;
    isCombo(): boolean;
    assignFrom(
        src:
            | DataSourceField
            | {
                  [x: string]: any;
              }
    ): void;
    toString(): string;
    clone(): DataSourceField;
    unshare(): DataSourceField;
}
declare namespace DataSourceField {
    const PREFIX_SEPARATOR: string;
}
