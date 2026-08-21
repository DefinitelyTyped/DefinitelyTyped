export = CountFieldAggregator;
declare function CountFieldAggregator(fieldName: any, dataSet: any): void;
declare class CountFieldAggregator {
    constructor(fieldName: any, dataSet: any);
    supportsCalculatedFields: boolean;
    decimalPrecision: number;
    type: string;
    previewValue(): void;
    clone(): CountFieldAggregator;
}
