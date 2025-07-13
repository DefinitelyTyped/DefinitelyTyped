export = DataSourceFilter;
declare function DataSourceFilter(name: string, type: string): void;
declare class DataSourceFilter {
    constructor(name: string, type: string);
    onAfterLoadDefaultValue: import("@nginstack/engine/lib/event/Event");
    private propertiesToAssign_;
    group: string;
    size: number;
    rangeLimit: LimitType;
    value: any;
    private normalizeValue_;
    newFiltersToRange(): DataSourceFilter[];
    newFilterToRange(rangeSuffix: string): DataSourceFilter;
    private parseExpression_;
    private notifyNameChange_;
    private fieldName_;
    private prefix_;
    fieldName: string;
    canonicalName: string;
    defaultValue: number | string | Date;
    private setDefaultValue;
    operator: typeof FilterOperator | string;
    fromField(field: Field): void;
    type: string;
    label: string;
    options: any[][];
    help: string;
    classKey: number;
    lookupType: number;
    displayFormat:
        | typeof import("@nginstack/engine/lib/date/DateFormat.js")
        | typeof import("@nginstack/engine/lib/geo/LatitudeFormat.js")
        | typeof import("@nginstack/engine/lib/geo/LongitudeFormat.js")
        | typeof import("@nginstack/engine/lib/geo/AngleFormat.js");
    stringIfTrue: string;
}
declare namespace DataSourceFilter {
    export { DATE_KEYWORDS, Event, Field, LimitType, removeRangeSuffix, shouldCreateAuxiliaryRangeFilters };
}
import FilterOperator = require("./FilterOperator.js");
declare namespace DATE_KEYWORDS {
    let IM: boolean;
    let FM: boolean;
    let IB: boolean;
    let FB: boolean;
    let IT: boolean;
    let FT: boolean;
    let IQ: boolean;
    let FQ: boolean;
    let IS: boolean;
    let FS: boolean;
    let IA: boolean;
    let FA: boolean;
}
declare function removeRangeSuffix(name: string): string;
declare function shouldCreateAuxiliaryRangeFilters(filter: DataSourceFilter | Field): boolean;
type Event = import("@nginstack/engine/lib/event/Event");
type Field = import("@nginstack/engine/lib/classdef/Field");
type LimitType = 1 | 2;
