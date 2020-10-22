// Type definitions for material-ui-datatables 0.18
// Project: https://github.com/hyojin/material-ui-datatables#readme
// Definitions by: Ravi L. <https://github.com/coding2012>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

import * as React from 'react';

export interface Column {
    /** The element key */
    key?: string;
    /** Style for column */
    style?: React.CSSProperties;
    /** Label */
    label?: string;
    /** Cell tooltip */
    tooltip?: string;
    /** If the column is sortable */
    sortable?: boolean;
    /** Align right */
    alignRight?: boolean;
    /** Class name to use */
    className?: string;
    /**
     * Render function. Given the value extracted
     * from the row; and the row also. Can return JSX content.
     * @param value - the extracted value from data
     * @param row - the data object representing this row
     * @returns Any react node (JSX compatible return)
     */
    render?: (value: any, row: any) => any;
}

export interface DataTableProps {
    /** Table title */
    title: string;
    /** React Style object for the title */
    titleStyle: React.CSSProperties;
    /** Filter hint text */
    filterHintText: string;
    /** If the header should be fixed */
    fixedHeader: boolean;
    /** If the footer should be fixed */
    fixedFooter: boolean;
    /** React Style object applied to footer toolbar */
    footerToolbarStyle: React.CSSProperties;
    /** To display striped rows in the table */
    stripedRows: boolean;
    /** Display a hover in the row under the mouse */
    showRowHover: boolean;
    /** If the table rows are select-able */
    selectable: boolean;
    /** If multiple table rows are select-able */
    multiSelectable: boolean;
    /** Adds a select all button */
    enableSelectAll: boolean;
    /** If clicking away de-selects all */
    deselectOnClickaway: boolean;
    /** Show check-boxes for selected rows */
    showCheckboxes: boolean;
    /** The hight of the table */
    height: any;
    /** Shows a header toolbar */
    showHeaderToolbar: boolean;
    /** Shows a footer toolbar */
    showFooterToolbar: boolean;
    rowSize: number;
    rowSizeLabel: string;
    rowSizeList: number[];
    showRowSizeControls: boolean;
    /** Override the pagination display, ie. "1 - 5 of 11" Return any React node or string */
    summaryLabelTemplate: (start: number, end: number, count: number) => any;
    /**
     * The column structure.
     * ```let columns: Column[] = [{
     *      key: 'bookName',
     *      label: 'Book Name & Author',
     *      render: (__value: any, book: any) => book.name + ' by ' book.author
     *  },```
     */
    columns: Column[];
    /** The array of objects used as data for the table */
    data: any[];
    page: number;
    toolbarIconRight: any;
    count: number;
    /** React style object for the table tag */
    tableStyle: React.CSSProperties;
    /** React style object for the tbody tag */
    tableBodyStyle: React.CSSProperties;
    /** React style object for the th/td tag */
    tableHeaderColumnStyle: React.CSSProperties;
    /** React style object for the th tag */
    tableHeaderStyle: React.CSSProperties;
    /** React style object for the tr tag */
    tableRowStyle: React.CSSProperties;
    /** React style object for the tr/td tag */
    tableRowColumnStyle: React.CSSProperties;
    tableWrapperStyle: React.CSSProperties;
    /** 'default' or 'filter', filter mode shows a search box to reduce visible rows */
    headerToolbarMode: "default" | "filter" | string; // BUG https://github.com/Microsoft/TypeScript/issues/11465
    /** The current filter value */
    filterValue: string;
    /** Show the icon to turn on the filtering feature */
    showHeaderToolbarFilterIcon: boolean;
    onRowSizeChange: (index: number, value: any) => void;
    onSortOrderChange: (key: string, order: string) => void;
    /** Callback when the cell is clicked. This callback is only active when selectable is false. */
    onCellClick: (rowIndex: number, columnIndex: number, row: any, columnValue: any, event: any) => void;
    /** Similar to onCellClick, activated when the cell is double clicked. Fires even if rows are selectable. */
    onCellDoubleClick: (rowIndex: number, columnIndex: number, row: any, columnValue: any, event: any) => void;
    /** Notification if the filter value changes */
    onFilterValueChange: (value: string) => void;
    onNextPageClick: (event: any) => void;
    onPreviousPageClick: (event: any) => void;
    onRowSelection: (selectedRows: any) => void;
}

export default class DataTable extends React.Component<Partial<DataTableProps>> { }
