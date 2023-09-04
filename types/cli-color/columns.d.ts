declare namespace columns {
    export interface ColumnOptions {
        /**
         * align: Possible options: `'left'`, `'right'` (defaults to `'left'`)
         */
        align?: "left" | "right" | undefined;
    }

    export interface ColumnsOptions {
        /**
         *  Custom colums separator (defaults to `|`)
         */
        sep?: string | undefined;
        /**
         * columns: Per column customizations, as e.g. `[{ align: 'right' }, null, { align: 'left' }]`
         */
        columns?: Array<ColumnOptions | null> | undefined;
    }

    export type Row = Iterable<any> | ArrayLike<any>;
    export type Data = Iterable<Row> | ArrayLike<Row>;
}

/**
 * Outputs aligned table of columns.
 */
declare function columns(data: ReadonlyArray<ReadonlyArray<any>>, options?: columns.ColumnsOptions): string;
declare function columns(data: columns.Data, options?: columns.ColumnsOptions): string;
export = columns;
