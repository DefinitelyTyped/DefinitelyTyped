export = CountFieldAggregator;
declare function CountFieldAggregator(fieldName: any, dataSet: any): void;
declare class CountFieldAggregator {
    constructor(fieldName: any, dataSet: any);
    supportsCalculatedFields: boolean;
    decimalPrecision: number;
    getValue(): any;
    setReadOnly(...args: any[]): void;
    getReadOnly(): any;
    getDescription(): any;
    setDescription(...args: any[]): void;
    previewValue(): void;
    clone(): CountFieldAggregator;
}
