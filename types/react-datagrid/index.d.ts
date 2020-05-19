// Type definitions for react-datagrid 1.2.15
// Project: https://github.com/zippyui/react-datagrid.git
// Definitions by: Stephen Jelfs <https://github.com/stephenjelfs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

import * as React from "react";
import DataGrid = ReactDataGrid.DataGrid;
export = DataGrid;

declare namespace ReactDataGrid {
    interface DataGridProps extends React.Props<DataGrid> {
        /**
          * Array/String/Function/Promise - for local data, an array of object
          * to render in the grid. For remote data, a string url, or a function
          * that returns a promise.
          */
        dataSource: any[] | string | ((query: {pageSize: number, skip: number}) => Promise<any[]>);

        dataSourceCount?: number;

        /**
          * String - the name of the property where the id is found for each
          * object in the data array.
          */
        idProperty: string;

        /**
          * Array - an array of columns that are going to be rendered in the
          * grid.
          */
        columns: Column[];

        /**
          * Sorting the data array is not done by the grid. You can however
          * pass in sort info so the grid renders with sorting icons as needed.
          */
        onSortChange?: (sortInfo: SortInfo[]) => void;

        /**
          * Array - an array with sorting information.
          */
        sortInfo?: SortInfo[];

        style?: React.CSSProperties;

        /**
          * Object/Function - you can specify either a style object to be
          * applied to all rows, or a function. The function is called with
          * (data, props) (so you have access to props.index for example) and
          * is expected to return a style object.
          */
        rowStyle?: React.CSSProperties | ((data: any, props: RowProps) => React.CSSProperties);

        /**
          * Boolean - show a column menu to show/hide columns.
          */
        withColumnMenu?: boolean;

        /**
          * If you want to enable column reordering, just specify the
          * onColumnOrderChange prop on the grid:
          */
        onColumnOrderChange?: (index: number, dropIndex: number) => void;

        /**
          * If you want to enable column resized, just specify the
          * onColumnResize prop on the grid:
          */
        onColumnResize?: (firstCol: Column, firstSize: number,
                          secondCol: Column, secondSize: number) => void;

        /**
          * If you want to enable selection, just specify the
          * onSelectionChange prop on the grid:
          */
        onSelectionChange?: (newSelected: {}, data: any) => void;

        /**
          * When a column is shown/hidden, you can be notified using the
          * onColumnVisibilityChange callback prop.
          */
        onColumnVisibilityChange?: (column: Column, visibility: boolean) => void;

        /**
          * The current selection.
          */
        selected?: {};

        /**
          * Group rows by matching values.
          */
        groupBy?: any[];

        /**
          * If you want to enable filter, just specify the
          * onFilter prop on the grid:
          */
        onFilter?: (column: Column, value: any, allFilterValues: any[]) => void;

        /**
          * To apply the filter while typing.
          */
        liveFilter?: boolean;

        /**
          * Empty text for no records.
          */
        emptyText?: string;

        /**
          * Loading grid.
          */
        loading?: boolean;

        /**
          * If you dont want loadMask over header, specify
          */
        loadMaskOverHeader?: boolean;

        /**
         * Show cell borders. Other valid values: 'horizontal', 'vertical'.
         */
        showCellBorders?: boolean | string;

        /**
          * Custom row height.
          */
        rowHeight?: number;

        /**
          * When you have remote data, pagination is setup by default. If you
          * want to disable pagination, specify the pagination prop with a false
          * value.
          */
        pagination?: boolean;
        defaultPageSize?: number;
        defaultPage?: number;

        /**
          * Number - controlled alternative for defaultPageSize. When pageSize
          * changes, onPageSizeChange(pageSize) is called.
          */
        pageSize?: number;

        /**
          * Number - controlled alternative for defaultPage. When page changes,
          * onPageChange(page) is called.
          */
        page?: number;

        /**
          * Customize the pagination toolbar.
          */
        paginationToolbarProps?: PaginationToolbarProps;

        /**
          * handle page changes.
          */
        onPageChange?: (page: number) => void;

        /**
          * handle page size changes.
          */
        onPageSizeChange?: (pageSize: number, props: DataGridProps) => void;
    }

    interface SortInfo {
        name: string;
        dir: string;
    }

    interface Column {
        /**
          * String - each column should have a name property.
          */
        name: string;

        /**
          * String/ReactElement - a title to show in the header. If not
          * specified, a humanized version of name will be used. Can be a string
          * or anything that React can render, so you can customize it as you
          * please.
          */
        title?: string | React.ReactElement;

        /**
          * Function - if you want custom rendering, specify this property.
          *
          * The column.render function is called with 3 args:
          *   value - the default value to be rendered (equals to data[column.name])
          *   data - the corresponding data object for the current row
              cellProps - an object with props for the current cell
          */
        render?: (value: any, data: any, cellProps: CellProps) => any;

        /**
          * Object - if you want cells in this column to be have a custom
          * style.
          */
        style?: React.CSSProperties;

        /**
          * String - one of 'left', 'right', 'center'.
          */
        textAlign?: string;

        /**
          * String - a className to be applied to all cells in this column
          */
        className?: string;

        width?: number;

        minWidth?: number;

        /**
          * Columns are flexible via flexbox. Specify a flex property for this.
          * Unless a column specifies a flex or a width property, it is assumed
          * to have flex: 1.
          */
        flex?: number;

        /**
          * Specify a column as visible/hidden.
          */
        defaultVisible?: boolean;
        defaultHidden?: boolean;

        /**
          * Boolean - controlled (which means you have to manually set column
          * visibility when it changes, by using onColumnVisibilityChange).
          */
        visible?: boolean;
    }

    interface CellProps {
        /**
          * the index of the row
          */
        rowIndex: number;

        /**
          * the index of the column
          */
        index: number;

        /**
          * a style for the cell
          */
        style: React.CSSProperties;

        /**
          * a class name for the cell
          */
        className: string;
    }

    interface RowProps {
        /**
          * the index of the row
          */
        index: number;

        /**
          * a class name for the row when the mouse is over it
          */
        overClassName: string;

        /**
          * a class name for the row when selected
          */
        selectedClassName: string;

        /**
          * a class name for the row
          */
        className: string;
    }

    interface PaginationToolbarProps {
        /**
          * Available page sizes.
          */
        pageSizes: number[];

        /**
          * Hide/show page sizes.
          */
        showPageSize: boolean;

        /**
          * Customize icons.
          */
        showRefreshIcon: boolean;
                iconSize: number;
                iconProps: {
                      style: React.SVGAttributes<{}>,
                      overStyle: React.SVGAttributes<{}>,
                      disabledStyle: React.SVGAttributes<{}>
                }
    }

    export class DataGrid extends React.Component<DataGridProps> {
    }
}
