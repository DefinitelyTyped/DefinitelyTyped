import "pdfkit";

export = VoilabPdfTable;

interface VoilabPdfTableDefaultType {
    [key: string]: string | number | undefined;
}

declare class VoilabPdfTable<T = VoilabPdfTableDefaultType> {
    // tslint:disable-next-line:no-misused-new
    constructor(pdf: PDFKit.PDFDocument, conf?: VoilabPdfTable.VoilabPdfTableConfig<T>);

    /** Add action before data rows are added */
    onBodyAdd(cb: (table: this, data: T[]) => void): this;

    /** Add action after data rows are added */
    onBodyAdded(cb: (table: this, data: T[]) => void): this;

    /** Add action before a row is added */
    onRowAdd(cb: (table: this, row: T, rowIdx: number) => void): this;

    /** Add action after a row is added */
    onRowAdded(cb: (table: this, row: T, rowIdx: number) => void): this;

    /** Add action before a header is added */
    onHeaderAdd(cb: (table: this, header: VoilabPdfTable.VoilabPdfTableHeader<T>) => void): this;

    /** Add action after a header is added */
    onHeaderAdded(cb: (table: this, header: VoilabPdfTable.VoilabPdfTableHeader<T>) => void): this;

    /** Add action before a page is added */
    onPageAdd(cb: (table: this, row: T, ev: { cancel: boolean }) => void): this;

    /** Add action after a page is added */
    onPageAdded(cb: (table: this, row: T) => void): this;

    /** Add action before height is calculated for every row */
    onRowHeightCalculate(cb: (table: this, data: T[]) => void): this;

    /** Add action after height is calculated for every row */
    onRowHeightCalculated(cb: (table: this, data: T[]) => void): this;

    /** Add action before height is calculated for the header */
    onHeaderHeightCalculate(cb: (table: this, header: VoilabPdfTable.VoilabPdfTableHeader<T>) => void): this;

    /** Add action after height is calculated for the header */
    onHeaderHeightCalculated(cb: (table: this, header: VoilabPdfTable.VoilabPdfTableHeader<T>) => void): this;

    /** Add action after a column is added */
    onColumnAdded(cb: (table: this, column: VoilabPdfTable.VoilabPdfTableColumn<T>) => void): this;

    /** Add action before a cell background is added */
    onCellBackgroundAdd(
        cb: (
            table: this,
            column: VoilabPdfTable.VoilabPdfTableColumn<T>,
            row: T,
            index: number,
            isHeader: boolean,
        ) => void,
    ): this;

    /** Add action after a cell background is added */
    onCellBackgroundAdded(
        cb: (
            table: this,
            column: VoilabPdfTable.VoilabPdfTableColumn<T>,
            row: T,
            index: number,
            isHeader: boolean,
        ) => void,
    ): this;

    /** Add action before a cell border is added */
    onCellBorderAdd(
        cb: (table: this, column: VoilabPdfTable.VoilabPdfTableColumn<T>, row: T, isHeader: boolean) => void,
    ): this;

    /** Add action after a cell border is added */
    onCellBorderAdded(
        cb: (table: this, column: VoilabPdfTable.VoilabPdfTableColumn<T>, row: T, isHeader: boolean) => void,
    ): this;

    /** Add action after a column's property is changed */
    onColumnPropertyChanged(
        cb: (table: this, column: VoilabPdfTable.VoilabPdfTableColumn<T>, prop: string, oldValue: any) => void,
    ): this;

    /** Add a plugin */
    addPlugin(arg0: VoilabPdfTable.VoilabPdfTablePlugin<T>): this;

    /** Get a plugin */
    getPlugin(id: string): any;

    /** Remove a plugin and its events by the key */
    removePlugin(id: string): this;

    /** Determine if headers need to be displayed or not when .addBody is called */
    setShowHeaders(showHeaders: boolean): this;

    /** Adds a column */
    addColumn(column: VoilabPdfTable.VoilabPdfTableColumn<T>): this;

    /** Set defaults for all new columns to add */
    setColumnsDefaults(defaults: Partial<VoilabPdfTable.VoilabPdfTableColumnDefaults<T>>): this;

    /** Add multiple columns */
    addColumns(columns: ReadonlyArray<VoilabPdfTable.VoilabPdfTableColumn<T>>): this;

    /** Set columns in one shot */
    setColumns(columns: ReadonlyArray<VoilabPdfTable.VoilabPdfTableColumn<T>>, add?: boolean): this;

    /** Get all table columns */
    getColumns(withHidden?: boolean): Array<VoilabPdfTable.VoilabPdfTableColumn<T>>;

    /** Get a definition for a column */
    getColumn(columnId: keyof T): VoilabPdfTable.VoilabPdfTableColumn<T>;

    /** Get width between two columns. Widths of these columns are included in the sum. */
    getColumnWidthBetween(columnA: keyof T, columnB: keyof T): number;

    /** Get width from start to the given column. Given width's column is not included in the sum. */
    getColumnWidthUntil(columnId: keyof T): number;

    /** Get width from a column to the end of the table. Given column's width is added to the sum. */
    getColumnWidthFrom(columnId: keyof T): number;

    /** Get table width (sum of all columns) */
    getWidth(): number;

    /** Get column width */
    getColumnWidth(columnId: keyof T): number;

    /** Set column width */
    setColumnWidth(columnId: keyof T, width: number, silent?: boolean): this;

    /** Get column param */
    getColumnParam<K extends keyof VoilabPdfTable.VoilabPdfTableColumn<T>>(
        columnId: keyof T,
        param: K,
    ): VoilabPdfTable.VoilabPdfTableColumn<T>[K];

    /** Set a specific definition for a column */
    setColumnParam<K extends keyof VoilabPdfTable.VoilabPdfTableColumn<T>>(
        columnId: keyof T,
        key: K,
        value: VoilabPdfTable.VoilabPdfTableColumn<T>[K],
        silent?: boolean,
    ): this;

    /** Add content to the table */
    addBody(data: T[]): this;

    /** Add table headers */
    addHeader(index?: number): this;

    pdf: PDFKit.PDFDocument;
}

declare namespace VoilabPdfTable {
    interface VoilabPdfTableConfig<T> {
        columns?: Array<VoilabPdfTableColumn<T>>;
        columnsDefaults?: VoilabPdfTableColumnDefaults<T>;
        plugins?: [];
        minRowHeight?: number;
        bottomMargin?: number;
        showHeaders?: boolean;
        pos?: {
            x: number;
            y: number;
        };
    }

    type VoilabPdfTableColumn<T> =
        & (
            & {
                id: keyof T;
                renderer?: (table: VoilabPdfTable<T>, row: T, draw: boolean) => void;
                cellAdded?: (table: VoilabPdfTable<T>, row: T, draw: boolean) => void;
                hidden?: boolean;
                border?: string;
                borderOpacity?: number;
                width?: number;
                height?: number;
                valign?: "top" | "center" | "bottom";
                align?: "left" | "center" | "right";
                fill?: boolean;
                cache?: boolean;
                padding?: [number] | [number, number] | [number, number, number, number];
                headerPadding?: [number] | [number, number] | [number, number, number, number];
            }
            & (
                | {
                    header: string;
                    headerRenderer?: (table: VoilabPdfTable<T>, header: VoilabPdfTableHeader<T>, draw: boolean) => void;
                    headerCellAdded?: (
                        table: VoilabPdfTable<T>,
                        header: VoilabPdfTableHeader<T>,
                        draw: boolean,
                    ) => void;
                    headerBorder?: string;
                    headerBorderOpacity?: number;
                    headerFill?: boolean;
                    headerHeight?: number;
                }
                | {
                    header?: never;
                    headerRenderer?: never;
                    headerCellAdded?: never;
                    headerBorder?: never;
                    headerBorderOpacity?: never;
                    headerFill?: never;
                    headerHeight?: never;
                }
            )
        )
        & PDFKit.Mixins.TextOptions;

    type DistributiveOmit<T, K extends keyof T> = T extends unknown ? Omit<T, K> : never;

    type VoilabPdfTableColumnDefaults<T> = DistributiveOmit<VoilabPdfTableColumn<T>, "id">;

    type VoilabPdfTableHeader<T> = {
        [key in keyof T]: string;
    };

    interface VoilabPdfTablePlugin<T> {
        configure(table: VoilabPdfTable<T>): void;
    }
}
