export = AvgFieldAggregator;
declare function AvgFieldAggregator(fieldName: any, dataSet: any): void;
declare class AvgFieldAggregator {
    constructor(fieldName: any, dataSet: any);
    supportsCalculatedFields: boolean;
    type: string;
    previewValue(recNo: any, newValue: any): void;
    fValue: any;
    clone(): AvgFieldAggregator;
}
