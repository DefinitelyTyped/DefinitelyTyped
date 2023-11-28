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
import LegacyEvent = require('@nginstack/engine/lib/event/LegacyEvent.js');
type DateFormat = typeof import('@nginstack/engine/lib/date/DateFormat');
type LatitudeFormat = typeof import('@nginstack/engine/lib/geo/LatitudeFormat');
type LongitudeFormat = typeof import('@nginstack/engine/lib/geo/LongitudeFormat');
type AngleFormat = typeof import('@nginstack/engine/lib/geo/AngleFormat');
declare function newFromField(field: Field): DataExporterFieldDef;
type Field = import('@nginstack/engine/lib/classdef/Field');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
