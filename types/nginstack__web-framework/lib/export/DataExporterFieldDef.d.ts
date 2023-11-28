export = DataExporterFieldDef;
declare function DataExporterFieldDef(name: any): void;
declare class DataExporterFieldDef {
    constructor(name: any);
    name: string;
    label: string;
    onCalculate: LegacyEvent;
    onLookupDisplay: LegacyEvent;
    type: string;
    isGroup: boolean;
    lookupType: number;
    displayFormat:
        | DateFormat
        | LatitudeFormat
        | LongitudeFormat
        | AngleFormat
        | string
        | number
        | null;
}
declare namespace DataExporterFieldDef {
    export {
        newFromField,
        LatitudeFormat,
        LongitudeFormat,
        AngleFormat,
        DateFormat,
        Field,
        DataSet,
    };
}
type DateFormat = any;
type LatitudeFormat = any;
type LongitudeFormat = any;
type AngleFormat = any;
declare function newFromField(field: any): DataExporterFieldDef;
type Field = any;
type DataSet = any;
