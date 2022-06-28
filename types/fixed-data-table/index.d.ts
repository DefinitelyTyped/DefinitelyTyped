// Type definitions for fixed-data-table 0.6.0
// Project: https://github.com/facebook/fixed-data-table
// Definitions by: Petar Paar <https://github.com/pepaar>, Stephen Jelfs <https://github.com/stephenjelfs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react"/>

import * as React from "react";

export = FixedDataTable;
export as namespace FixedDataTable;


declare namespace FixedDataTable {
    export var version: string;

    /**
      * Data grid component with fixed or scrollable header and columns.
      *
      * The layout of the data table is as follows:
      *
      *
      * +---------------------------------------------------+
      * | Fixed Column Group    | Scrollable Column Group   |
      * | Header                | Header                    |
      * |                       |                           |
      * +---------------------------------------------------+
      * |                       |                           |
      * | Fixed Header Columns  | Scrollable Header Columns |
      * |                       |                           |
      * +-----------------------+---------------------------+
      * |                       |                           |
      * | Fixed Body Columns    | Scrollable Body Columns   |
      * |                       |                           |
      * +-----------------------+---------------------------+
      * |                       |                           |
      * | Fixed Footer Columns  | Scrollable Footer Columns |
      * |                       |                           |
      * +-----------------------+---------------------------+
      *
      * Fixed Column Group Header:
      *
      * These are the headers for a group of columns if included in
      * the table that do not scroll vertically or horizontally.
      *
      * Scrollable Column Group Header:
      *
      * The header for a group of columns that do not move while
      * scrolling vertically, but move horizontally with the
      * horizontal scrolling.
      *
      * Fixed Header Columns:
      *
      * The header columns that do not move while scrolling
      * vertically or horizontally.
      *
      * Scrollable Header Columns:
      *
      * The header columns that do not move while scrolling
      * vertically, but move horizontally with the horizontal scrolling.
      *
      * Fixed Body Columns:
      *
      * The body columns that do not move while scrolling
      * horizontally, but move vertically with the vertical scrolling.
      *
      * Scrollable Body Columns:
      *
      * The body columns that move while scrolling vertically or
      * horizontally.
      *
      */
    export interface TableProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<Table> | undefined;

        /**
          * Pixel width of table. If all columns do not fit, a
          * horizontal scrollbar will appear.
          */
        width: number;

        /**
          * Pixel height of table. If all rows do not fit, a
          * vertical scrollbar will appear.
          *
          * Either height or maxHeight must be specified.
          */
        height?: number | undefined;

        /**
          * Maximum pixel height of table. If all rows do not fit,
          * a vertical scrollbar will appear.
          *
          * Either height or maxHeight must be specified.
          */
        maxHeight?: number | undefined;

        /**
          * Pixel height of table's owner, this is used in a managed
          * scrolling situation when you want to slide the table up
          * from below the fold without having to constantly update
          * the height on every scroll tick. Instead, vary this
          * property on scroll. By using ownerHeight, we over-render
          * the table while making sure the footer and horizontal
          * scrollbar of the table are visible when the current space
          * for the table in view is smaller than the final,
          * over-flowing height of table. It allows us to avoid
          * resizing and reflowing table when it is moving in the
          * view.
          *
          * This is used if ownerHeight < height (or maxHeight).
          */
        ownerHeight?: number | undefined;

        /**
          * 'hidden'|'auto'
          */
        overflowX?: string | undefined;

        /**
          * 'hidden'|'auto'
          */
        overflowY?: string | undefined;

        /**
          * Number of rows in the table.
          */
        rowsCount: number;

        /**
          * Pixel height of rows unless rowHeightGetter is specified
          * and returns different value.
          */
        rowHeight: number;

        /**
          * If specified, rowHeightGetter(index) is called for each
          * row and the returned value overrides rowHeight for
          * particular row.
          */
        rowHeightGetter?: ((index: number) => number) | undefined;

        /**
          * To get any additional CSS classes that should be added to
          *  a row, rowClassNameGetter(index) is called.
          */
        rowClassNameGetter?: ((index: number) => string) | undefined;

        /**
          * Pixel height of the column group header.
          *
          * defaultValue: 0
          */
        groupHeaderHeight?: number | undefined;

        /**
          * Pixel height of the header.
          *
          * defaultValue: 0
          */
        headerHeight?: number | undefined;

        /**
          * Pixel height of the footer.
          *
          * defaultValue: 0
          */
        footerHeight?: number | undefined;

        /**
          * Value of horizontal scroll.
          *
          * defaultValue: 0
          */
        scrollLeft?: number | undefined;

        /**
          * Index of column to scroll to.
          */
        scrollToColumn?: number | undefined;

        /**
          * Value of vertical scroll.
          *
          * defaultValue: 0
          */
        scrollTop?: number | undefined;

        /**
          * Index of row to scroll to.
          */
        scrollToRow?: number | undefined;

        /**
          * Callback that is called when scrolling starts with
          * current horizontal and vertical scroll values.
          */
        onScrollStart?: ((x: number, y: number) => void) | undefined;

        /**
          * Callback that is called when scrolling ends or stops with
          * new horizontal and vertical scroll values.
          */
        onScrollEnd?: ((x: number, y: number) => void) | undefined;

        /**
          * Callback that is called when rowHeightGetter returns a
          * different height for a row than the rowHeight prop. This
          *  is necessary because initially table estimates heights
          * of some parts of the content.
          */
        onContentHeightChange?: ((newHeight: number) => void) | undefined;

        /**
          * Callback that is called when a row is clicked.
          */
        onRowClick?: ((event: React.SyntheticEvent<Table>, rowIndex: number) => void) | undefined;

        /**
          * Callback that is called when a row is double clicked.
          */
        onRowDoubleClick?: ((event: React.SyntheticEvent<Table>, rowIndex: number) => void) | undefined;

        /**
          * Callback that is called when a mouse-down event happens
          * on a row.
          */
        onRowMouseDown?: ((event: React.SyntheticEvent<Table>, rowIndex: number) => void) | undefined;

        /**
          * Callback that is called when a mouse-enter event happens
          * on a row.
          */
        onRowMouseEnter?: ((event: React.SyntheticEvent<Table>, rowIndex: number) => void) | undefined;

        /**
          * Callback that is called when a mouse-leave event happens
          * on a row.
          */
        onRowMouseLeave?: ((event: React.SyntheticEvent<Table>, rowIndex: number) => void) | undefined;

        /**
          * Callback that is called when resizer has been released
          * and column needs to be updated.
          *
          * Required if the isResizable property is true on any
          * column.
          */
        onColumnResizeEndCallback?: ((newColumnWidth: number, columnKey: string) => void) | undefined;

        /**
          * Whether a column is currently being resized.
          */
        isColumnResizing?: boolean | undefined;
    }

    /**
     * Component that defines the attributes of table column.
     */
    interface ColumnProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<Column>;

        /**
          * The horizontal alignment of the table cell content.
          *
          * 'left'|'center'|'right'
          */
        align?: string | undefined;

        /**
          * Controls if the column is fixed when scrolling in the X
          * axis.
          *
          * defaultValue: false
          */
        fixed?: boolean | undefined;

        /**
          * The header cell for this column. This can either be a
          * string. a React element, or a function that generates a
          * React Element. Passing in a string will render a default
          * header cell with that string. By default, the React
          * element passed in can expect to receive the following
          * props:
          *
          * props: {
          *   columnKey: string // (of the column, if given)
          *   height: number // (supplied from the Table or rowHeightGetter)
          *   width: number // (supplied from the Column)
          * }
          *
          * Because you are passing in your own React element, you
          * can feel free to pass in whatever props you may want or need.
          *
          * If you pass in a function, you will receive the same props object as the first argument.
          */
        header?: string | React.ReactElement | ((props: CellProps) => (string | React.ReactElement)) | undefined;

        /**
          * This is the body cell that will be cloned for this
          * column. This can either be a string a React element,
          * or a function that generates a React Element. Passing
          * in a string will render a default cell with that
          * string. By default, the React element passed in can
          * expect to receive the following props:
          *
          * props: {
          *   rowIndex; number // (the row index of the cell)
          *   columnKey: string // (of the column, if given)
          *   height: number // (supplied from the Table or rowHeightGetter)
          *   width: number // (supplied from the Column)
          * }
          *
          * Because you are passing in your own React element, you
          * can feel free to pass in whatever props you may want or
          * need.
          *
          * If you pass in a function, you will receive the same
          * props object as the first argument.
          */
        cell?: string | React.ReactElement | ((props: CellProps) => (string | React.ReactElement)) | undefined;

         /**
          * The footer cell for this column. This can either be a
          * string. a React element, or a function that generates a
          * React Element. Passing in a string will render a default
          * header cell with that string. By default, the React
          * element passed in can expect to receive the following
          * props:
          *
          * props: {
          *   columnKey: string // (of the column, if given)
          *   height: number // (supplied from the Table or rowHeightGetter)
          *   width: number // (supplied from the Column)
          * }
          *
          * Because you are passing in your own React element, you
          * can feel free to pass in whatever props you may want or
          * need.
          *
          * If you pass in a function, you will receive the same
          * props object as the first argument.
          */
        footer?: string | React.ReactElement | ((props: CellProps) => (string | React.ReactElement)) | undefined;

        /**
          * This is used to uniquely identify the column, and is not
          * required unless you a resizing columns. This will be the
          * key given in the onColumnResizeEndCallback on the Table.
          */
        columnKey?: string | number | undefined;

        /**
          * The pixel width of the column.
          */
        width: number;

        /**
          * If this is a resizable column this is its minimum pixel
          * width.
          */
        minWidth?: number | undefined;

        /**
          * If this is a resizable column this is its maximum pixel
          * width.
          */
        maxWidth?: number | undefined;

        /**
          * The grow factor relative to other columns. Same as the
          * flex-grow API from http://www.w3.org/TR/css3-flexbox/.
          * Basically, take any available extra width and distribute
          * it proportionally according to all columns' flexGrow
          * values. Defaults to zero (no-flexing).
          */
        flexGrow?: number | undefined;

        /**
         * Whether the column can be resized with the
         * FixedDataTableColumnResizeHandle. Please note that if a
         * column has a flex grow, once you resize the column this
         * will be set to 0.
         *
         * This property only provides the UI for the column
         * resizing. If this is set to true, you will need to set the
         * onColumnResizeEndCallback table property and render your
         * columns appropriately.
         */
        isResizable?: boolean | undefined;

        /**
          * Whether cells in this column can be removed from document
          * when outside of viewport as a result of horizontal
          * scrolling. Setting this property to true allows the table
          * to not render cells in particular column that are outside
          * of viewport for visible rows. This allows to create table
          * with many columns and not have vertical scrolling
          * performance drop. Setting the property to false will keep
          * previous behaviour and keep cell rendered if the row it
          * belongs to is visible.
          *
          * defaultValue: false
          */
        allowCellsRecycling?: boolean | undefined;
    }

    /**
     * Component that defines the attributes of a table column group.
     */
    export interface ColumnGroupProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<ColumnGroup>;

        /**
         * The horizontal alignment of the table cell content.
         * 'left', 'center', 'right'
         */
        align?: string | undefined;

        /**
         * Controls if the column group is fixed when scrolling in the X
         * axis.
         *
         * defaultValue: false
         */
        fixed?: boolean | undefined;

        /**
          * The header cell for this column group. This can either be
          * a string. a React element, or a function that generates a
          * React Element. Passing in a string will render a default
          * header cell with that string. By default, the React
          * element passed in can expect to receive the following
          * props:
          *
          * props: {
          *   height: number // (supplied from the groupHeaderHeight)
          *   width: number // (supplied from the Column)
          * }
          *
          * Because you are passing in your own React element, you
          * can feel free to pass in whatever props you may want or
          * need.
          *
          * If you pass in a function, you will receive the same props
          * object as the first argument.
          */
        header: string | React.ReactElement | ((props: CellProps) => (string | React.ReactElement));
    }

    /**
     * Component that handles default cell layout and styling.
     *
     * All props unless specified below will be set onto the top
     * level div rendered by the cell.
     *
     * Example usage via from a Column:
     *
     * const MyColumn = (
     *   <Column
     *     cell={({rowIndex, width, height}) => (
     *       <Cell
     *         width={width}
     *         height={height}
     *         className="my-class">
     *         Cell number: <span>{rowIndex}</span>
     *        </Cell>
     *     )}
     *     width={100}
     *   />
     * );
     */
    export interface CellProps extends React.HTMLAttributes<Cell> {
        /**
         * The row index of the cell.
         */
        rowIndex?: number | undefined;

        /**
         * Outer height of the cell.
         */
        height?: number | undefined;

        /**
         * Outer width of the cell.
         */
        width?: number | undefined;

        /**
         * Optional prop that if specified on the Column will be
         * passed to the cell. It can be used to uniquely identify
         * which column is the cell is in.
         */
        columnKey?: string | number | undefined;
    }

    export class Table extends React.Component<TableProps> {
    }
    export class Column extends React.Component<ColumnProps> {
    }
    export class ColumnGroup extends React.Component<ColumnGroupProps> {
    }
    export class Cell extends React.Component<CellProps> {
    }
}
