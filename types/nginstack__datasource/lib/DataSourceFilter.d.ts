export = DataSourceFilter;
declare function DataSourceFilter(name: string, type: string): void;
declare class DataSourceFilter {
    constructor(name: string, type: string);
    onAfterLoadDefaultValue: any;
    private propertiesToAssign_;
    group: string;
    size: number;
    rangeLimit: Limit;
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
    getCanonicalName(): any;
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
    fromField(field: any): void;
    type: any;
    label: any;
    options: any;
    help: any;
    classKey: any;
    lookupType: any;
    displayFormat: any;
    stringIfTrue: any;
}
declare namespace DataSourceFilter {
    export { DATE_KEYWORDS, removeRangeSuffix, shouldCreateAuxiliaryRangeFilters, Event, Field };
}
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
type Event = any;
type Field = any;
