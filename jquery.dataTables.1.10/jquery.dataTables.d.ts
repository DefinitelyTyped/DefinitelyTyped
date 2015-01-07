interface JQuery {
    DataTable(param?: DataTablesNew.Options): DataTablesNew.DataTable
}

declare module DataTablesNew {
    export interface DataTable {
        order(): any[][];
        order(order: any[]): void;
        order(order: any[][]): void;

        page: PageApiInterface;
    }

    export interface Options {
    }

    export interface PageInterface {
        page: number;
        pages: number;
        start: number;
        end: number;
        length: number;
        recordsTotal: number;
        recordsDisplay: number;
    }

    export interface PageApiInterface {
        info(): PageInterface;
    }
}
