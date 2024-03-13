export type DataTableOrderDirection = "asc" | "desc";
export type DataTableColumnType = "string" | "number" | "date";

export interface DataTableOptions {
    columns?: DataTableColumnOptions[];
    data?: any; // TODO: define data
    firstLast?: boolean;
    firstText?: string;
    fixedColumns?: boolean;
    fixedHeight?: boolean;
    footer?: boolean;
    header?: boolean;
    hiddenHeader?: boolean;
    labels?: DataTableLabels;
    layout?: DataTableLayout;
    lastText?: string;
    nextPrev?: boolean;
    nextText?: string;
    paging?: boolean;
    perPage?: number;
    perPageSelect?: number[];
    prevText?: string;
    scrollY?: string;
    searchable?: boolean;
    sortable?: boolean;
    truncatePager?: boolean;
}

export interface DataTableColumnOptions {
    select: number | number[];
    sort?: DataTableOrderDirection;
    sortable?: boolean;
    hidden?: boolean;
    type?: DataTableColumnType;
    format?: string;
    render?: (data: string, cell: HTMLTableCellElement, row: DataTableRow) => string;
}

// TODO: some of the attributes only exist depending on the type selected
export interface DataTableExportOptions {
    type: "csv" | "txt" | "json" | "sql";
    download?: boolean;
    filename?: string;
    selection?: number | number[];
    skipColumn?: number[];
    // csv
    lineDelimiter?: string;
    columnDelimiter?: string;
    // sql
    tableName?: string;
    // json
    replacer?: (this: any, key: string, value: any) => any;
    space?: number;
}

// TODO: some of the attributes only exist depending on the type selected
export interface DataTableImportOptions {
    type: "csv" | "json";
    data: string;
    // csv only
    headings?: boolean;
    lineDelimiter?: string;
    columnDelimiter?: string;
}

export interface DataTableLabels {
    placeholder?: string;
    perPage?: string;
    noRows?: string;
    info?: string;
}

export interface DataTableLayout {
    top?: string;
    bottom?: string;
}

export interface DataTableColumn {
    heading: string;
    data: string[];
    sortable?: boolean;
    type?: DataTableColumnType;
    format?: string;
}

export class DataTableRow extends HTMLTableRowElement {
    dataIndex: number;
}

export class DataTableRows {
    add(data: string[] | string[][]): void;
    remove(select: number | number[]): void;
}

export class DataTableColumns {
    sort(column: number, direction: DataTableOrderDirection): void;
    add(data: DataTableColumn): void;
    remove(select: number | number[]): void;
    hide(select: number | number[]): void;
    show(select: number | number[]): void;
    visible(): boolean | boolean[];
    visible(select: number | number[]): void;
    /** @deprecated */
    hidden(select: number | number[]): void;
    swap(indexes: number[]): void;
    order(indexes: number[]): void;
}

export class DataTablePlugin {
    constructor();
    init(): void;
}

export class DataTable {
    table: HTMLTableElement;
    head: HTMLElement;
    body: HTMLElement;
    foot: HTMLElement;
    wrapper: HTMLDivElement;
    container: HTMLDivElement;
    pagers: []; // TODO: array of what ?
    headings: HTMLCollection; // TODO: array of what ?
    options: DataTableOptions;
    initialized: boolean;
    data: DataTableRow[];
    dataIndex: number;
    activeRows: []; // TODO: array of what ?
    pages: []; // TODO: array of what ?
    hasRows: boolean;
    hasHeadings: boolean;
    currentPage: number;
    totalPages: number;
    onFirstPage: boolean;
    onLastPage: boolean;
    searching: boolean;
    searchData: DataTableRow[];

    constructor(table: string | Element, options?: DataTableOptions);

    static extend(pluginName: string, callback: (options: DataTableOptions) => DataTablePlugin): void;

    on(event: "datatable.init" | "datatable.refresh" | "datatable.update", callback: () => void): void;
    on(event: "datatable.page", callback: (page: number) => void): void;
    on(event: "datatable.sort", callback: (column: number, direction: DataTableOrderDirection) => void): void;
    on(event: "datatable.perpage", callback: (perpage: number) => void): void;
    on(event: "datatable.search", callback: (query: string, matched: DataTableRow[]) => void): void;

    rows(): DataTableRows;
    columns(): DataTableColumns;
    refresh(): void;
    page(pageNumber: number): void;
    insert(data: any): void; // TODO: define data
    setMessage(message: string): void;
    destroy(): void;
    init(options?: DataTableOptions): void;
    export(options: DataTableExportOptions): boolean;
    import(options: DataTableImportOptions): boolean;
    /** @deprecated */
    print(): void;
}
