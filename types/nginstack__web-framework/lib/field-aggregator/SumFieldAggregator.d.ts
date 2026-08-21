export = SumFieldAggregator;
declare function SumFieldAggregator(ratioBaseFieldName: any, fieldName: any, dataSet: any): void;
declare class SumFieldAggregator {
    constructor(ratioBaseFieldName: any, fieldName: any, dataSet: any);
    ratioBaseFieldName: any;
    supportsCalculatedFields: boolean;
    previewValue(recNo: any, newValue: any): void;
    fValue: any;
    clone(): SumFieldAggregator;
}
