// Type definitions for fixed-data-table 0.4.7
// Project: https://github.com/facebook/fixed-data-table
// Definitions by: Petar Paar <https://github.com/pepaar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

declare module FixedDataTable {    
    export var version: string;

    export interface TableProps extends __React.Props<Table> {
         /**
	     * Pixel width of table. If all columns do not fit,
	     * a horizontal scrollbar will appear.
	     */
	    width: number;

	    /**
	     * Pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    height?: number;

	    /**
	     * Maximum pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    maxHeight?: number;

	    /**
	     * Pixel height of table's owner, this is used in a managed scrolling
	     * situation when you want to slide the table up from below the fold
	     * without having to constantly update the height on every scroll tick.
	     * Instead, vary this property on scroll. By using `ownerHeight`, we
	     * over-render the table while making sure the footer and horizontal
	     * scrollbar of the table are visible when the current space for the table
	     * in view is smaller than the final, over-flowing height of table. It
	     * allows us to avoid resizing and reflowing table when it is moving in the
	     * view.
	     *
	     * This is used if `ownerHeight < height` (or `maxHeight`).
	     */
	    ownerHeight?: number;

        /**
         * hidden or auto
         */
	    overflowX?: string;
	    overflowY?: string;

	    /**
	     * Number of rows in the table.
	     */
	    rowsCount: number;

	    /**
	     * Pixel height of rows unless `rowHeightGetter` is specified and returns
	     * different value.
	     */
	    rowHeight: number;

	    /**
	     * If specified, `rowHeightGetter(index)` is called for each row and the
	     * returned value overrides `rowHeight` for particular row.
	     */
	    rowHeightGetter?: Function;

	    /**
	     * To get rows to display in table, `rowGetter(index)`
	     * is called. `rowGetter` should be smart enough to handle async
	     * fetching of data and return temporary objects
	     * while data is being fetched.
	     */
	    rowGetter: Function;

	    /**
	     * To get any additional CSS classes that should be added to a row,
	     * `rowClassNameGetter(index)` is called.
	     */
	    rowClassNameGetter?: Function;

	    /**
	     * Pixel height of the column group header.
	     */
	    groupHeaderHeight?: number;

	    /**
	     * Pixel height of header.
	     */
	    headerHeight: number;

	    /**
	     * Function that is called to get the data for the header row.
	     * If the function returns null, the header will be set to the
	     * Column's label property.
	     */
	    headerDataGetter?: Function;

	    /**
	     * Pixel height of footer.
	     */
	    footerHeight?: number;

	    /**
	     * DEPRECATED - use footerDataGetter instead.
	     * Data that will be passed to footer cell renderers.
	     */
	    footerData?: any;

	    /**
	     * Function that is called to get the data for the footer row.
	     */
	    footerDataGetter?: Function;

	    /**
	     * Value of horizontal scroll.
	     */
	    scrollLeft?: number;

	    /**
	     * Index of column to scroll to.
	     */
	    scrollToColumn?: number;

	    /**
	     * Value of vertical scroll.
	     */
	    scrollTop?: number;

	    /**
	     * Index of row to scroll to.
	     */
	    scrollToRow?: number;

	    /**
	     * Callback that is called when scrolling starts with current horizontal
	     * and vertical scroll values.
	     */
	    onScrollStart?: Function;

	    /**
	     * Callback that is called when scrolling ends or stops with new horizontal
	     * and vertical scroll values.
	     */
	    onScrollEnd?: Function;

	    /**
	     * Callback that is called when `rowHeightGetter` returns a different height
	     * for a row than the `rowHeight` prop. This is necessary because initially
	     * table estimates heights of some parts of the content.
	     */
	    onContentHeightChange?: Function;

	    /**
	     * Callback that is called when a row is clicked.
	     */
	    onRowClick?: Function;

	    /**
	     * Callback that is called when a row is double clicked.
	     */
	    onRowDoubleClick?: Function;

	    /**
	     * Callback that is called when a mouse-down event happens on a row.
	     */
	    onRowMouseDown?: Function;

	    /**
	     * Callback that is called when a mouse-enter event happens on a row.
	     */
	    onRowMouseEnter?: Function;

	    /**
	     * Callback that is called when a mouse-leave event happens on a row.
	     */
	    onRowMouseLeave?: Function;

	    /**
	     * Callback that is called when resizer has been released
	     * and column needs to be updated.
	     *
	     * Required if the isResizable property is true on any column.
	     *
	     * ```
	     * function(
	     *   newColumnWidth: number,
	     *   dataKey: string,
	     * )
	     * ```
	     */
	    onColumnResizeEndCallback?: Function;

	    /**
	     * Whether a column is currently being resized.
	     */
	    isColumnResizing?: boolean
    }

    interface ColumnProps {
        /**
	     * The horizontal alignment of the table cell content.
         * 'left', 'center', 'right'
	     */
	    align?: string;

	    /**
	     * className for this column's header cell.
	     */
	    headerClassName?: string;

	    /**
	     * className for this column's footer cell.
	     */
	    footerClassName?: string;

	    /**
	     * className for each of this column's data cells.
	     */
	    cellClassName?: string;

	    /**
	     * The cell renderer that returns React-renderable content for table cell.
	     * ```
	     * function(
	     *   cellData: any,
	     *   cellDataKey: string,
	     *   rowData: object,
	     *   rowIndex: number,
	     *   columnData: any,
	     *   width: number
	     * ): ?$jsx
	     * ```
	     */
	    cellRenderer?: Function;

	    /**
	     * The getter `function(string_cellDataKey, object_rowData)` that returns
	     * the cell data for the `cellRenderer`.
	     * If not provided, the cell data will be collected from
	     * `rowData[cellDataKey]` instead. The value that `cellDataGetter` returns
	     * will be used to determine whether the cell should re-render.
	     */
	    cellDataGetter?: Function;

	    /**
	     * The key to retrieve the cell data from the data row. Provided key type
	     * must be either `string` or `number`. Since we use this
	     * for keys, it must be specified for each column.
	     */
	    dataKey: string|number;

	    /**
	     * Controls if the column is fixed when scrolling in the X axis.
	     */
	    fixed?: boolean;

	    /**
	     * The cell renderer that returns React-renderable content for table column
	     * header.
	     * ```
	     * function(
	     *   label: ?string,
	     *   cellDataKey: string,
	     *   columnData: any,
	     *   rowData: array<?object>,
	     *   width: number
	     * ): ?$jsx
	     * ```
	     */
	    headerRenderer?: Function;

	    /**
	     * The cell renderer that returns React-renderable content for table column
	     * footer.
	     * ```
	     * function(
	     *   label: ?string,
	     *   cellDataKey: string,
	     *   columnData: any,
	     *   rowData: array<?object>,
	     *   width: number
	     * ): ?$jsx
	     * ```
	     */
	    footerRenderer?: Function;

	    /**
	     * Bucket for any data to be passed into column renderer functions.
	     */
	    columnData?: any;

	    /**
	     * The column's header label.
	     */
	    label: string;

	    /**
	     * The pixel width of the column.
	     */
	    width: number;

	    /**
	     * If this is a resizable column this is its minimum pixel width.
	     */
	    minWidth?: number;

	    /**
	     * If this is a resizable column this is its maximum pixel width.
	     */
	    maxWidth?: number;

	    /**
	     * The grow factor relative to other columns. Same as the flex-grow API
	     * from http://www.w3.org/TR/css3-flexbox/. Basically, take any available
	     * extra width and distribute it proportionally according to all columns'
	     * flexGrow values. Defaults to zero (no-flexing).
	     */
	    flexGrow?: number;

	    /**
	     * Whether the column can be resized with the
	     * FixedDataTableColumnResizeHandle. Please note that if a column
	     * has a flex grow, once you resize the column this will be set to 0.
	     *
	     * This property only provides the UI for the column resizing. If this
	     * is set to true, you will need ot se the onColumnResizeEndCallback table
	     * property and render your columns appropriately.
	     */
	    isResizable?: boolean;

	    /**
	     * Experimental feature
	     * Whether cells in this column can be removed from document when outside
	     * of viewport as a result of horizontal scrolling.
	     * Setting this property to true allows the table to not render cells in
	     * particular column that are outside of viewport for visible rows. This
	     * allows to create table with many columns and not have vertical scrolling
	     * performance drop.
	     * Setting the property to false will keep previous behaviour and keep
	     * cell rendered if the row it belongs to is visible.
	     */
	    allowCellsRecycling?: boolean;
    }

    export interface ColumnGroupProps {
        /**
	     * The horizontal alignment of the table cell content.
         * 'left', 'center', 'right'
	     */
	    align?: string;

	    /**
	     * Controls if the column group is fixed when scrolling in the X axis.
	     */
	    fixed?: boolean;

	    /**
	     * Bucket for any data to be passed into column group renderer functions.
	     */
	    columnGroupData?: any;

	    /**
	     * The column group's header label.
	     */
	    label?: string;

	    /**
	     * The cell renderer that returns React-renderable content for a table
	     * column group header. If it's not specified, the label from props will
	     * be rendered as header content.
	     * ```
	     * function(
	     *   label: ?string,
	     *   cellDataKey: string,
	     *   columnGroupData: any,
	     *   rowData: array<?object>, // array of labels of all columnGroups
	     *   width: number
	     * ): ?$jsx
	     * ```
	     */
	    groupHeaderRenderer?: Function;
    }

    export class Table extends __React.Component<TableProps, {}> {
         render(): __React.DOMElement<any>
    }
    export class Column extends __React.Component<ColumnProps, {}> {
         render(): __React.DOMElement<any>
    }
    export class ColumnGroup extends __React.Component<ColumnGroupProps, {}> {
         render(): __React.DOMElement<any>
    }
}

declare module "fixed-data-table" {    
    export = FixedDataTable;
}