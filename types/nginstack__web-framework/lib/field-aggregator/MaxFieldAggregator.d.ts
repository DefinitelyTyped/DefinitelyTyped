export = MaxFieldAggregator;
declare function MaxFieldAggregator(fieldName: any, dataSet: any): void;
declare class MaxFieldAggregator {
    constructor(fieldName: any, dataSet: any);
    supportsCalculatedFields: boolean;
    previewValue(recNo: any, newValue: any): void;
    fValue: any;
    clone(): MaxFieldAggregator;
}
