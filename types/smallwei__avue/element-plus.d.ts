type ColumnCls<T> = string | ((data: { row: T; rowIndex: number }) => string);

type CellCls<T> =
    | string
    | ((data: { row: T; rowIndex: number; column: TableColumnCtx<T>; columnIndex: number }) => string);

type SpanMethod<T> = (data: { row: T; rowIndex: number; column: TableColumnCtx<T>; columnIndex: number }) =>
    | number[]
    | {
        rowspan: number;
        colspan: number;
    }
    | undefined;

type SummaryMethod<T> = (data: { columns: Array<TableColumnCtx<T>>; data: T[] }) => string[];

interface CI<T> {
    column: TableColumnCtx<T>;
    $index: number;
}
type Filters = Array<{
    text: string;
    value: string;
}>;
type FilterMethods<T> = (value: any, row: T, column: TableColumnCtx<T>) => void;
interface TableColumnCtx<T> {
    id: string;
    realWidth: number;
    type: string;
    label: string;
    className: string;
    labelClassName: string;
    property: string;
    prop: string;
    width: string | number;
    minWidth: string | number;
    renderHeader: (data: CI<T>) => VNode;
    sortable: boolean | string;
    sortMethod: (a: T, b: T) => number;
    sortBy: string | ((row: T, index: number) => string) | string[];
    resizable: boolean;
    columnKey: string;
    rawColumnKey: string;
    align: string;
    headerAlign: string;
    showTooltipWhenOverflow: boolean;
    showOverflowTooltip: boolean;
    fixed: boolean | string;
    formatter: (row: T, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode | string;
    selectable: (row: T, index: number) => boolean;
    reserveSelection: boolean;
    filterMethod: FilterMethods<T>;
    filteredValue: string[];
    filters: Filters;
    filterPlacement: string;
    filterMultiple: boolean;
    index: number | ((index: number) => number);
    sortOrders: Array<"ascending" | "descending" | null>;
    renderCell: (data: any) => void;
    colSpan: number;
    rowSpan: number;
    children: Array<TableColumnCtx<T>>;
    level: number;
    filterable: boolean | FilterMethods<T> | Filters;
    order: string;
    isColumnGroup: boolean;
    isSubColumn: boolean;
    columns: Array<TableColumnCtx<T>>;
    getColumnIndex: () => number;
    no: number;
    filterOpened?: boolean;
}

type UploadStatus = "ready" | "uploading" | "success" | "fail";
interface UploadRawFile extends File {
    uid: number;
}
interface UploadFile {
    name: string;
    percentage?: number;
    status: UploadStatus;
    size?: number;
    response?: unknown;
    uid: number;
    url?: string;
    raw?: UploadRawFile;
}
type UploadUserFile = Omit<UploadFile, "status" | "uid"> & Partial<Pick<UploadFile, "status" | "uid">>;

interface FormItemRule extends RuleItem {
    trigger?: string | string[];
}

type CellEvent<T> = (row: any, column: TableColumnCtx<T>, cell: any, event: Event) => void;
type RowEvent<T> = (row: any, column: TableColumnCtx<T>, event: Event) => void;
type HeaderEvent<T> = (column: TableColumnCtx<T>, event: Event) => void;
