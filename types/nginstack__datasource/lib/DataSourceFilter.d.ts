export = DataSourceFilter;
declare function DataSourceFilter(name: string, type: string): void;
declare class DataSourceFilter {
    constructor(name: string, type: string);
    onAfterLoadDefaultValue: Event;
    private propertiesToAssign_;
    group: string;
    size: number;
    rangeLimit: typeof Limit;
    value: any;
    private normalizeValue_;
    newFiltersToRange(): DataSourceFilter[];
    newFilterToRange(rangeSuffix: string): DataSourceFilter;
    private parseExpression_;
    private notifyNameChange_;
    private fieldName_;
    private prefix_;
    private getNameSegments;
    getFieldName(): string;
    getCanonicalName(): string;
    private defaultValue_;
    setDefaultValue(value: number | string | Date): void;
    getDefaultValue(): number | string | Date;
    operator:
        | {
              EQUALITY: string;
              INEQUALITY: string;
              GREATER_THAN: string;
              LESS_THAN: string;
              GREATER_THAN_OR_EQUAL: string;
              LESS_THAN_OR_EQUAL: string;
              LIKE: string;
              EXISTS: string;
              NOT_EXISTS: string;
          }
        | string;
    fromField(field: Field): void;
    type: string;
    label: string;
    options: any[][];
    help: string;
    classKey: number;
    lookupType: number;
    displayFormat:
        | {
              DDMMYYYY: number;
              DDMM: number;
              MMYYYY: number;
              WWYYYY: number;
              YYYYWW: number;
              MMMYYYY: number;
          }
        | {
              DDD_DDDDD: number;
              DDD_MM_MMM_DIR: number;
              DDD_MM_SS_S_DIR: number;
          }
        | {
              DDD_DDDDD: number;
              DDD_MM_MMM_DIR: number;
              DDD_MM_SS_S_DIR: number;
          }
        | {
              DDD: number;
              DDD_DD: number;
          };
    stringIfTrue: string;
}
declare namespace DataSourceFilter {
    export { DATE_KEYWORDS, removeRangeSuffix, shouldCreateAuxiliaryRangeFilters, Event, Field };
}
type Event = import('@nginstack/engine/lib/event/Event');
import Limit = require('@nginstack/engine/lib/range/Limit.js');
type Field = import('@nginstack/engine/lib/classdef/Field');
declare namespace DATE_KEYWORDS {
    const IM: boolean;
    const FM: boolean;
    const IB: boolean;
    const FB: boolean;
    const IT: boolean;
    const FT: boolean;
    const IQ: boolean;
    const FQ: boolean;
    const IS: boolean;
    const FS: boolean;
    const IA: boolean;
    const FA: boolean;
}
declare function removeRangeSuffix(name: string): string;
declare function shouldCreateAuxiliaryRangeFilters(filter: DataSourceFilter | Field): boolean;
