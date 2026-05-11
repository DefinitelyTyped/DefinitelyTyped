export = DataSourceField;
declare function DataSourceField(name: string, type: string): void;
declare class DataSourceField {
    constructor(name: string, type: string);
    type: DataSourceDataType.DataSourceDataType;
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
    assignFrom(src: DataSourceField | Record<string, any>): void;
    toString(): string;
    clone(): DataSourceField;
    unshare(): DataSourceField;
}
declare namespace DataSourceField {
    let PREFIX_SEPARATOR: string;
}
import DataSourceDataType = require("./DataSourceDataType.js");
