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
        let NONE: string;
        let SUM: string;
        let COUNT: string;
        let AVG: string;
        let MAX: string;
        let MIN: string;
    }
    type AggregateFunctions = string;
    namespace Order {
        let NONE_1: string;
        export { NONE_1 as NONE };
        export let ASC: string;
        export let DESC: string;
    }
    type Order = string;
}
