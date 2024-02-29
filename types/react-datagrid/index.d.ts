/// <reference types="react"/>

import * as React from "react";
import DataGrid = ReactDataGrid.DataGrid;
export = DataGrid;

declare namespace ReactDataGrid {
    interface DataGridProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<DataGrid> | undefined;

        /**
         * Array/String/Function/Promise - for local data, an array of object
         * to render in the grid. For remote data, a string url, or a function
         * that returns a promise.
         */
        dataSource: any[] | string | ((query: { pageSize: number; skip: number }) => Promise<any[]>);

        dataSourceCount?: number | undefined;

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
        onSortChange?: ((sortInfo: SortInfo[]) => void) | undefined;

        /**
         * Array - an array with sorting information.
         */
        sortInfo?: SortInfo[] | undefined;

        style?: React.CSSProperties | undefined;

        /**
         * Object/Function - you can specify either a style object to be
         * applied to all rows, or a function. The function is called with
         * (data, props) (so you have access to props.index for example) and
         * is expected to return a style object.
         */
        rowStyle?: React.CSSProperties | ((data: any, props: RowProps) => React.CSSProperties) | undefined;

        /**
         * Boolean - show a column menu to show/hide columns.
         */
        withColumnMenu?: boolean | undefined;

        /**
         * If you want to enable column reordering, just specify the
         * onColumnOrderChange prop on the grid:
         */
        onColumnOrderChange?: ((index: number, dropIndex: number) => void) | undefined;

        /**
         * If you want to enable column resized, just specify the
         * onColumnResize prop on the grid:
         */
        onColumnResize?:
            | ((firstCol: Column, firstSize: number, secondCol: Column, secondSize: number) => void)
            | undefined;

        /**
         * If you want to enable selection, just specify the
         * onSelectionChange prop on the grid:
         */
        onSelectionChange?: ((newSelected: {}, data: any) => void) | undefined;

        /**
         * When a column is shown/hidden, you can be notified using the
         * onColumnVisibilityChange callback prop.
         */
        onColumnVisibilityChange?: ((column: Column, visibility: boolean) => void) | undefined;

        /**
         * The current selection.
         */
        selected?: {} | undefined;

        /**
         * Group rows by matching values.
         */
        groupBy?: any[] | undefined;

        /**
         * If you want to enable filter, just specify the
         * onFilter prop on the grid:
         */
        onFilter?: ((column: Column, value: any, allFilterValues: any[]) => void) | undefined;

        /**
         * To apply the filter while typing.
         */
        liveFilter?: boolean | undefined;

        /**
         * Empty text for no records.
         */
        emptyText?: string | undefined;

        /**
         * Loading grid.
         */
        loading?: boolean | undefined;

        /**
         * If you dont want loadMask over header, specify
         */
        loadMaskOverHeader?: boolean | undefined;

        /**
         * Show cell borders. Other valid values: 'horizontal', 'vertical'.
         */
        showCellBorders?: boolean | string | undefined;

        /**
         * Custom row height.
         */
        rowHeight?: number | undefined;

        /**
         * When you have remote data, pagination is setup by default. If you
         * want to disable pagination, specify the pagination prop with a false
         * value.
         */
        pagination?: boolean | undefined;
        defaultPageSize?: number | undefined;
        defaultPage?: number | undefined;

        /**
         * Number - controlled alternative for defaultPageSize. When pageSize
         * changes, onPageSizeChange(pageSize) is called.
         */
        pageSize?: number | undefined;

        /**
         * Number - controlled alternative for defaultPage. When page changes,
         * onPageChange(page) is called.
         */
        page?: number | undefined;

        /**
         * Customize the pagination toolbar.
         */
        paginationToolbarProps?: PaginationToolbarProps | undefined;

        /**
         * handle page changes.
         */
        onPageChange?: ((page: number) => void) | undefined;

        /**
         * handle page size changes.
         */
        onPageSizeChange?: ((pageSize: number, props: DataGridProps) => void) | undefined;
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
        title?: string | React.ReactElement | undefined;

        /**
          * Function - if you want custom rendering, specify this property.
          *
          * The column.render function is called with 3 args:
          *   value - the default value to be rendered (equals to data[column.name])
          *   data - the corresponding data object for the current row
              cellProps - an object with props for the current cell
          */
        render?: ((value: any, data: any, cellProps: CellProps) => any) | undefined;

        /**
         * Object - if you want cells in this column to be have a custom
         * style.
         */
        style?: React.CSSProperties | undefined;

        /**
         * String - one of 'left', 'right', 'center'.
         */
        textAlign?: string | undefined;

        /**
         * String - a className to be applied to all cells in this column
         */
        className?: string | undefined;

        width?: number | undefined;

        minWidth?: number | undefined;

        /**
         * Columns are flexible via flexbox. Specify a flex property for this.
         * Unless a column specifies a flex or a width property, it is assumed
         * to have flex: 1.
         */
        flex?: number | undefined;

        /**
         * Specify a column as visible/hidden.
         */
        defaultVisible?: boolean | undefined;
        defaultHidden?: boolean | undefined;

        /**
         * Boolean - controlled (which means you have to manually set column
         * visibility when it changes, by using onColumnVisibilityChange).
         */
        visible?: boolean | undefined;
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
            style: React.SVGAttributes<{}>;
            overStyle: React.SVGAttributes<{}>;
            disabledStyle: React.SVGAttributes<{}>;
        };
    }

    export class DataGrid extends React.Component<DataGridProps> {
    }
}
