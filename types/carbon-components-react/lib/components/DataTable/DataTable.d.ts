import * as React from "react";
import { InternationalProps, ReactAttr, ReactDivAttr, ShapeOf } from "../../../typings/shared";
import { DataTableSortState, DataTableSortStates } from "./state/sorting";
import Table, { TableCarbonProps } from "./Table";
import TableActionList from "./TableActionList";
import TableBatchAction from "./TableBatchAction";
import TableBatchActions from "./TableBatchActions";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableContainer, { TableContainerProps } from "./TableContainer";
import TableExpandedRow from "./TableExpandedRow";
import TableExpandHeader, { TableExpandHeaderProps } from "./TableExpandHeader";
import TableExpandRow from "./TableExpandRow";
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableSelectAll from "./TableSelectAll";
import TableSelectRow from "./TableSelectRow";
import TableToolbar, { TableToolbarProps } from "./TableToolbar";
import TableToolbarAction from "./TableToolbarAction";
import TableToolbarContent from "./TableToolbarContent";
import TableToolbarMenu from "./TableToolbarMenu";
import TableToolbarSearch from "./TableToolbarSearch";

// region Row Types

export interface DataTableRow<ID extends string = string> {
    disabled?: boolean | undefined;
    id: ID;
    isExpanded?: boolean | undefined;
    isSelected?: boolean | undefined;
}

export interface SortRowData {
    compare(a: any, b: any, locale?: string): number,
    key: string,
    locale?: string | undefined,
    sortDirection: DataTableSortState,
    sortStates: DataTableSortStates,
}

export interface FilterRowsData<R extends DataTableRow = DataTableRow, H extends DataTableHeader = DataTableHeader> {
    cellsById: { [cellId: string]: DataTableCell };
    headers: ReadonlyArray<H>;
    inputValue: string;
    rowIds: ReadonlyArray<R['id']>;
}

export type DenormalizedRow = DataTableRow & { cells: DataTableCell[] };

export interface DataTableCustomRowData<R extends DataTableRow = DataTableRow> {
    onClick?(event: React.MouseEvent<HTMLElement>): void,
    row: R,
}

export interface DataTableCustomRowProps<R extends DataTableRow = DataTableRow> {
    ariaLabel: string,
    disabled: Exclude<R["disabled"], undefined>,
    isExpanded: Exclude<R["isExpanded"], undefined>,
    isSelected: Exclude<R["isSelected"], undefined>,
    key: R["id"],
    onExpand(event: React.MouseEvent<HTMLElement>): void,
}

export interface DataTableCustomSelectionData<R extends DataTableRow = DataTableRow> {
    onClick?(event: React.MouseEvent<HTMLElement>): void,
    row?: R | undefined,
}

export interface DataTableCustomSelectionProps<R extends DataTableRow = DataTableRow> {
    ariaLabel?: string | undefined,
    checked: R extends never ? boolean : NonNullable<R["isSelected"]>,
    disabled: R extends never ? never : R["disabled"],
    id: string,
    indeterminate: R extends never ? boolean : never,
    name: string,
    onSelect(event: React.MouseEvent<HTMLElement>): void,
    radio?: R extends never ? never : (Extract<DataTableProps["radio"], boolean>) | undefined,
}

// endregion Row Types

// region Header Types

export interface DataTableHeader<K extends string = string> {
    header: NonNullable<React.ReactNode>;
    key: K;
}

export interface DataTableCustomHeaderData<H extends DataTableHeader = DataTableHeader> {
    header: H,
    isSortable?: boolean | undefined,
    onClick?(event: React.MouseEvent<HTMLElement>): void,
}

export interface DataTableCustomHeaderProps<H extends { key: string } = DataTableHeader> {
    isSortable?: boolean | undefined;
    isSortHeader: boolean;
    key: H['key'];
    onClick(event: React.MouseEvent<HTMLElement>): void;
    sortDirection: DataTableSortState;
}

// endregion Header Types

// region Cell Types

export interface DataTableCell<V = any, H extends DataTableHeader = DataTableHeader> {
    errors?: any[] | null | undefined;
    id: string;
    info: {
        header: H['key'];
    };
    isEditable: boolean;
    isEditing: boolean;
    isValid: boolean;
    value?: V | undefined;
}

// endregion CellTypes

// region Batch Action Types

export interface DataTableCustomBatchActionsData { }

export interface DataTableCustomBatchActionsProps {
    onCancel(): void,
    shouldShowBatchActions?: boolean | undefined,
    totalSelected: number,
}

// endregion

// region DataTable

// Custom Render Props
export interface DataTableCustomRenderProps<
    R extends DataTableRow = DataTableRow,
    H extends DataTableHeader = DataTableHeader
> {
    expandAll(): void;
    expandRow(rowId: R['id']): void;
    getBatchActionProps<E extends object = ReactDivAttr>(
        data?: ShapeOf<DataTableCustomBatchActionsData, E>
    ): ShapeOf<DataTableCustomBatchActionsProps, E>;
    getExpandHeaderProps(props?: TableExpandHeaderProps): TableExpandHeaderProps;
    getHeaderProps<E extends object = ReactAttr>(
        data: ShapeOf<DataTableCustomHeaderData<H>, E>
    ): ShapeOf<DataTableCustomHeaderProps<H>, E>;
    getRowProps<E extends object = ReactAttr<HTMLTableRowElement>>(
        data: ShapeOf<DataTableCustomRowData, E>
    ): ShapeOf<DataTableCustomRowProps, E>;
    getSelectionProps<E extends object = {}>(
        data?: ShapeOf<DataTableCustomSelectionData, E>
    ): ShapeOf<DataTableCustomSelectionProps<R>, E> | ShapeOf<DataTableCustomSelectionProps<never>, E>;
    getTableContainerProps(): Pick<TableContainerProps, "stickyHeader" | "useStaticWidth">,
    getTableProps(): TableCarbonProps;
    getToolbarProps(props?: TableToolbarProps): TableToolbarProps;
    headers: DataTableProps<R, H>['headers'];
    onInputChange(event: React.SyntheticEvent<HTMLInputElement>): void;
    radio?: DataTableProps<R, H>['radio'] | undefined;
    rows: ReadonlyArray<DenormalizedRow>;
    selectAll(): void;
    selectedRows: ReadonlyArray<DenormalizedRow>;
    selectRow(rowId: R['id']): void;
    sortBy(headerKey: H['key']): void;
}

export type DataTableTranslationKey =
    "carbon.table.row.expand"
    | "carbon.table.row.collapse"
    | "carbon.table.all.expand"
    | "carbon.table.all.collapse"
    | "carbon.table.all.select"
    | "carbon.table.all.unselect"
    | "carbon.table.row.select"
    | "carbon.table.row.unselect";

export interface DataTableProps<
    R extends DataTableRow = DataTableRow,
    H extends DataTableHeader = DataTableHeader
> extends InternationalProps<DataTableTranslationKey>, TableCarbonProps {
    filterRows?(data: FilterRowsData<R, H>): Array<R['id']>;
    headers: H[];
    locale?: string | undefined;
    radio?: boolean | undefined;
    render?(props: DataTableCustomRenderProps<R, H>): React.ReactNode;
    rows: R[];
    sortRow?(cellA: any, cellB: any, data: SortRowData): number;
    stickyHeader?: boolean | undefined;
}

declare class DataTable<
    R extends DataTableRow = DataTableRow,
    H extends DataTableHeader = DataTableHeader,
> extends React.Component<DataTableProps<R, H>> {
    static readonly translationKeys: ReadonlyArray<DataTableTranslationKey>;
    static readonly Table: typeof Table;
    static readonly TableActionList: typeof TableActionList;
    static readonly TableBatchAction: typeof TableBatchAction;
    static readonly TableBatchActions: typeof TableBatchActions;
    static readonly TableBody: typeof TableBody;
    static readonly TableCell: typeof TableCell;
    static readonly TableContainer: typeof TableContainer;
    static readonly TableExpandHeader: typeof TableExpandHeader;
    static readonly TableExpandRow: typeof TableExpandRow;
    static readonly TableExpandedRow: typeof TableExpandedRow;
    static readonly TableHead: typeof TableHead;
    static readonly TableHeader: typeof TableHeader;
    static readonly TableRow: typeof TableRow;
    static readonly TableSelectAll: typeof TableSelectAll;
    static readonly TableSelectRow: typeof TableSelectRow;
    static readonly TableToolbar: typeof TableToolbar;
    static readonly TableToolbarAction: typeof TableToolbarAction;
    static readonly TableToolbarContent: typeof TableToolbarContent;
    static readonly TableToolbarSearch: typeof TableToolbarSearch;
    static readonly TableToolbarMenu: typeof TableToolbarMenu;
}

// endregion DataTable

export default DataTable;
