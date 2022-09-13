export = SumFieldAggregator;
declare function SumFieldAggregator(ratioBaseFieldName: any, fieldName: any, dataSet: any): void;
declare class SumFieldAggregator {
    constructor(ratioBaseFieldName: any, fieldName: any, dataSet: any);
    ratioBaseFieldName: any;
    supportsCalculatedFields: boolean;
    getValue(): any;
    setValue(value: any): void;
    fValue: any;
    getDescription(): any;
    setDescription(...args: any[]): void;
    getReadOnly(): any;
    setReadOnly(...args: any[]): void;
    previewValue(recNo: any, newValue: any): void;
    clone(): SumFieldAggregator;
}
