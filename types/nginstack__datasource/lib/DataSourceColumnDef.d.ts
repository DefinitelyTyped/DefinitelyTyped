export = DataSourceColumnDef;
declare function DataSourceColumnDef(): void;
declare class DataSourceColumnDef {
    aggregate: string;
    alias: string;
    backDepth: number;
    coalesceValue: any;
    depth: number;
    pathRoot: number | null;
    pathDepth: number;
    pathHeight: number;
    help: string;
    pivot: boolean;
    prefix: string | null;
    showGlobalActions: boolean;
    private sort;
    weight: string | null;
    distinct: boolean;
}
declare namespace DataSourceColumnDef {
    namespace AggregateFunctions {
        const NONE: string;
        const SUM: string;
        const COUNT: string;
        const AVG: string;
        const MAX: string;
        const MIN: string;
    }
    type AggregateFunctions = string;
    namespace Order {
        const NONE_1: string;
        export { NONE_1 as NONE };
        export const ASC: string;
        export const DESC: string;
    }
    type Order = string;
}
