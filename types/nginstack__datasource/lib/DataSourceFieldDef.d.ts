export = DataSourceFieldDef;
declare function DataSourceFieldDef(): void;
declare class DataSourceFieldDef {
    name: string;
    type: string;
    classKey: number | null;
    lookupType: number;
    options: {
        includeFieldNames: string;
        excludeFieldNames: string;
        children: boolean;
        onlyVisible: boolean;
        onlyIncludedFieldNames: boolean;
    };
    displayFormat:
        | DateFormat
        | LatitudeFormat
        | LongitudeFormat
        | AngleFormat
        | string
        | number
        | null;
}
declare namespace DataSourceFieldDef {
    export { DateFormat, LatitudeFormat, LongitudeFormat, AngleFormat };
}
type DateFormat = typeof import('@nginstack/engine/lib/date/DateFormat');
type LatitudeFormat = typeof import('@nginstack/engine/lib/geo/LatitudeFormat');
type LongitudeFormat = typeof import('@nginstack/engine/lib/geo/LongitudeFormat');
type AngleFormat = typeof import('@nginstack/engine/lib/geo/AngleFormat');
