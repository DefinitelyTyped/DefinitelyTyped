// Type definitions for fixed-data-table-2 0.8
// Project: https://github.com/schrodinger/fixed-data-table-2, http://schrodinger.github.io/fixed-data-table-2
// Definitions by: Ilya Petukhov <https://github.com/ilivit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace FixedDataTable;

export interface RowProps {
    /** the row index */
    rowIndex: number;

    /** supplied from the Table or rowHeightGetter */
    height: number;

    /** supplied from the Table */
    width: number;
}

export interface ColumnReorderEndEvent {
    /** the column before the new location of this one */
    columnBefore?: string;

    /** the column after the new location of this one */
    columnAfter?: string;

    /** the column key that was just reordered */
    reorderColumn: string;
}

export type ElementOrFunc<P> = string | React.ReactElement | ((props: P) => (string | React.ReactElement));

export type TableRowEventHandler = (event: React.SyntheticEvent<Table>, rowIndex: number) => void;

/**
 * Data grid component with fixed or scrollable header and columns.
 *
 * The layout of the data table is as follows:
 *
 * ```
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
 * ```
 *
 * - Fixed Column Group Header: These are the headers for a group
 *   of columns if included in the table that do not scroll
 *   vertically or horizontally.
 *
 * - Scrollable Column Group Header: The header for a group of columns
 *   that do not move while scrolling vertically, but move horizontally
 *   with the horizontal scrolling.
 *
 * - Fixed Header Columns: The header columns that do not move while scrolling
 *   vertically or horizontally.
 *
 * - Scrollable Header Columns: The header columns that do not move
 *   while scrolling vertically, but move horizontally with the horizontal
 *   scrolling.
 *
 * - Fixed Body Columns: The body columns that do not move while scrolling
 *   horizontally, but move vertically with the vertical scrolling.
 *
 * - Scrollable Body Columns: The body columns that move while scrolling
 *   vertically or horizontally.
 */
export interface TableProps extends React.ClassAttributes<Table> {
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
     * Class name to be passed into parent container
     */
    className?: string;

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

    overflowX?: 'hidden' | 'auto';
    overflowY?: 'hidden' | 'auto';

    /**
     * Boolean flag indicating of touch scrolling should be enabled
     * This feature is current in beta and may have bugs
     */
    touchScrollEnabled?: boolean;

    /** Boolean flags to control if scrolling with keys is enabled */
    keyboardScrollEnabled?: boolean;
    /** Boolean flags to control if scrolling with keys is enabled */
    keyboardPageEnabled?: boolean;

    /** Hide the scrollbar but still enable scroll functionality */
    showScrollbarX?: boolean;
    /** Hide the scrollbar but still enable scroll functionality */
    showScrollbarY?: boolean;

    /**
     * Callback when horizontally scrolling the grid.
     *
     * Return false to stop propagation.
     */
    onHorizontalScroll?: (scrollPos: number) => boolean;

    /**
     * Callback when vertically scrolling the grid.
     *
     * Return false to stop propagation.
     */
    onVerticalScroll?: (scrollPos: number) => boolean;

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
    rowHeightGetter?: (index: number) => number;

    /**
     * Pixel height of sub-row unless `subRowHeightGetter` is specified and returns
     * different value.  Defaults to 0 and no sub-row being displayed.
     */
    subRowHeight?: number;

    /**
     * If specified, `subRowHeightGetter(index)` is called for each row and the
     * returned value overrides `subRowHeight` for particular row.
     */
    subRowHeightGetter?: (index: number) => number;

    /**
     * The row expanded for table row.
     * This can either be a React element, or a function that generates
     * a React Element. By default, the React element passed in can expect to
     * receive the following props:
     *
     * ```
     * props: {
     *   rowIndex; number // (the row index)
     *   height: number // (supplied from the Table or rowHeightGetter)
     *   width: number // (supplied from the Table)
     * }
     * ```
     *
     * Because you are passing in your own React element, you can feel free to
     * pass in whatever props you may want or need.
     *
     * If you pass in a function, you will receive the same props object as the
     * first argument.
     */
    rowExpanded?: ElementOrFunc<RowProps>;

    /**
     * To get any additional CSS classes that should be added to a row,
     * `rowClassNameGetter(index)` is called.
     */
    rowClassNameGetter?: (index: number) => string;

    /**
     * If specified, `rowKeyGetter(index)` is called for each row and the
     * returned value overrides `key` for the particular row.
     */
    rowKeyGetter?: (index: number) => string;

    /**
     * Pixel height of the column group header.
     */
    groupHeaderHeight?: number;

    /**
     * Pixel height of header.
     */
    headerHeight: number;

    /**
     * Pixel height of fixedDataTableCellGroupLayout/cellGroupWrapper.
     * Default is headerHeight and groupHeaderHeight.
     *
     * This can be used with CSS to make a header cell span both the group & normal header row.
     * Setting this to a value larger than height will cause the content to
     * overflow the height. This is useful when adding a 2nd table as the group
     * header and vertically merging the 2 headers when a column is not part
     * of a group. Here are the necessary CSS changes:
     *
     * Both headers:
     *  - cellGroupWrapper needs overflow-x: hidden and pointer-events: none
     *  - cellGroup needs pointer-events: auto to reenable them on child els
     * Group header:
     *  - Layout/main needs overflow: visible and a higher z-index
     *  - CellLayout/main needs overflow-y: visible
     *  - cellGroup needs overflow: visible
     */
    cellGroupWrapperHeight?: number;

    /**
     * Pixel height of footer.
     */
    footerHeight?: number;

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
    onScrollStart?: (x: number, y: number) => void;

    /**
     * Callback that is called when scrolling ends or stops with new horizontal
     * and vertical scroll values.
     */
    onScrollEnd?: (x: number, y: number) => void;

    /**
     * If enabled scroll events will not be propagated outside of the table.
     */
    stopScrollPropagation?: boolean;

    /**
     * Callback that is called when `rowHeightGetter` returns a different height
     * for a row than the `rowHeight` prop. This is necessary because initially
     * table estimates heights of some parts of the content.
     */
    onContentHeightChange?: (newHeight: number) => void;

    /**
     * Callback that is called when a row is clicked.
     */
    onRowClick?: TableRowEventHandler;

    /**
     * Callback that is called when a row is double clicked.
     */
    onRowDoubleClick?: TableRowEventHandler;

    /**
     * Callback that is called when a mouse-down event happens on a row.
     */
    onRowMouseDown?: TableRowEventHandler;

    /**
     * Callback that is called when a mouse-up event happens on a row.
     */
    onRowMouseUp?: TableRowEventHandler;

    /**
     * Callback that is called when a mouse-enter event happens on a row.
     */
    onRowMouseEnter?: TableRowEventHandler;

    /**
     * Callback that is called when a mouse-leave event happens on a row.
     */
    onRowMouseLeave?: TableRowEventHandler;

    /**
     * Callback that is called when a touch-start event happens on a row.
     */
    onRowTouchStart?: TableRowEventHandler;

    /**
     * Callback that is called when a touch-end event happens on a row.
     */
    onRowTouchEnd?: TableRowEventHandler;

    /**
     * Callback that is called when a touch-move event happens on a row.
     */
    onRowTouchMove?: TableRowEventHandler;

    /**
     * Callback that is called when resizer has been released
     * and column needs to be updated.
     *
     * Required if the isResizable property is true on any column.
     *
     * ```
     * function(
     *   newColumnWidth: number,
     *   columnKey: string,
     * )
     * ```
     */
    onColumnResizeEndCallback?: (newColumnWidth: number, columnKey: string) => void;

    /**
     * Callback that is called when reordering has been completed
     * and columns need to be updated.
     *
     * ```
     * function(
     *   event {
     *     columnBefore: string|undefined, // the column before the new location of this one
     *     columnAfter: string|undefined,  // the column after the new location of this one
     *     reorderColumn: string,          // the column key that was just reordered
     *   }
     * )
     * ```
     */
    onColumnReorderEndCallback?: (event: ColumnReorderEndEvent) => void;

    /**
     * Whether a column is currently being resized.
     */
    isColumnResizing?: boolean;

    /**
     * Whether columns are currently being reordered.
     */
    isColumnReordering?: boolean;

    /**
     * The number of rows outside the viewport to prerender. Defaults to roughly
     * half of the number of visible rows.
     */
    bufferRowCount?: number;
}

export class Table extends React.Component<TableProps> {
}

export interface ColumnHeaderProps {
    columnKey?: string;

    /** supplied from the Table or rowHeightGetter */
    height: number;

    /** supplied from the Column */
    width: number;
}

export interface ColumnCellProps extends ColumnHeaderProps {
    /** the row index of the cell */
    rowIndex: number;
}

/**
 * Component that defines the attributes of table column.
 */
export interface ColumnProps extends React.ClassAttributes<Column> {
    /**
     * The horizontal alignment of the table cell content.
     */
    align?: 'left' | 'center' | 'right';

    /**
     * Controls if the column is fixed when scrolling in the X axis.
     *
     * defaultValue: false
     */
    fixed?: boolean;

    /**
     * Controls if the column is fixed to the right side of the table
     * when scrolling in the X axis.
     *
     * defaultValue: false
     */
    fixedRight?: boolean;

    /**
     * The header cell for this column.
     * This can either be a string a React element, or a function that generates
     * a React Element. Passing in a string will render a default header cell
     * with that string. By default, the React element passed in can expect to
     * receive the following props:
     *
     * ```
     * props: {
     *   columnKey: string // (of the column, if given)
     *   height: number // (supplied from the Table or rowHeightGetter)
     *   width: number // (supplied from the Column)
     * }
     * ```
     *
     * Because you are passing in your own React element, you can feel free to
     * pass in whatever props you may want or need.
     *
     * If you pass in a function, you will receive the same props object as the
     * first argument.
     */
    header?: ElementOrFunc<ColumnHeaderProps>;

    /**
     * This is the body cell that will be cloned for this column.
     * This can either be a string a React element, or a function that generates
     * a React Element. Passing in a string will render a default header cell
     * with that string. By default, the React element passed in can expect to
     * receive the following props:
     *
     * ```
     * props: {
     *   rowIndex; number // (the row index of the cell)
     *   columnKey: string // (of the column, if given)
     *   height: number // (supplied from the Table or rowHeightGetter)
     *   width: number // (supplied from the Column)
     * }
     * ```
     *
     * Because you are passing in your own React element, you can feel free to
     * pass in whatever props you may want or need.
     *
     * If you pass in a function, you will receive the same props object as the
     * first argument.
     */
    cell?: ElementOrFunc<ColumnCellProps>;

    /**
     * This is the footer cell for this column.
     * This can either be a string a React element, or a function that generates
     * a React Element. Passing in a string will render a default header cell
     * with that string. By default, the React element passed in can expect to
     * receive the following props:
     *
     * ```
     * props: {
     *   columnKey: string // (of the column, if given)
     *   height: number // (supplied from the Table or rowHeightGetter)
     *   width: number // (supplied from the Column)
     * }
     * ```
     *
     * Because you are passing in your own React element, you can feel free to
     * pass in whatever props you may want or need.
     *
     * If you pass in a function, you will receive the same props object as the
     * first argument.
     */
    footer?: ElementOrFunc<ColumnHeaderProps>;

    /**
     * This is used to uniquely identify the column, and is not required unless
     * you a resizing columns. This will be the key given in the
     * `onColumnResizeEndCallback` on the Table.
     */
    columnKey?: string | number;

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
     * is set to true, you will need to set the onColumnResizeEndCallback table
     * property and render your columns appropriately.
     */
    isResizable?: boolean;

    /**
     * Whether the column can be dragged to reorder.
     */
    isReorderable?: boolean;

    /**
     * Whether cells in this column can be removed from document when outside
     * of viewport as a result of horizontal scrolling.
     * Setting this property to true allows the table to not render cells in
     * particular column that are outside of viewport for visible rows. This
     * allows to create table with many columns and not have vertical scrolling
     * performance drop.
     * Setting the property to false will keep previous behaviour and keep
     * cell rendered if the row it belongs to is visible.
     *
     * defaultValue: false
     */
    allowCellsRecycling?: boolean;

    /**
     * Flag to enable performance check when rendering. Stops the component from
     * rendering if none of it's passed in props have changed
     */
    pureRendering?: boolean;
}

export class Column extends React.Component<ColumnProps> {
}

export interface ColumnGroupHeaderProps {
    /* supplied from the groupHeaderHeight */
    height: number;

    /* supplied from the Column */
    width: number;
}

/**
 * Component that defines the attributes of a table column group.
 */
export interface ColumnGroupProps extends React.ClassAttributes<ColumnGroup> {
    /**
     * The horizontal alignment of the table cell content.
     */
    align?: 'left' | 'center' | 'right';

    /**
     * Controls if the column group is fixed when scrolling in the X axis.
     *
     * defaultValue: false
     */
    fixed?: boolean;

    /**
     * This is the header cell for this column group.
     * This can either be a string or a React element. Passing in a string
     * will render a default footer cell with that string. By default, the React
     * element passed in can expect to receive the following props:
     *
     * ```
     * props: {
     *   height: number // (supplied from the groupHeaderHeight)
     *   width: number // (supplied from the Column)
     * }
     * ```
     *
     * Because you are passing in your own React element, you can feel free to
     * pass in whatever props you may want or need.
     *
     * You can also pass in a function that returns a react elemnt, with the
     * props object above passed in as the first parameter.
     */
    header?: string | React.ReactElement | ((props: ColumnGroupHeaderProps) => (string | React.ReactElement));
}

export class ColumnGroup extends React.Component<ColumnGroupProps> {
}

/**
 * Component that handles default cell layout and styling.
 *
 * All props unless specified below will be set onto the top level `div`
 * rendered by the cell.
 *
 * Example usage via from a `Column`:
 * ```
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
 * ```
 */
export interface CellProps extends React.HTMLAttributes<Cell> {
    /**
     * Outer height of the cell.
     */
    height?: number;

    /**
     * Outer width of the cell.
     */
    width?: number;

    /**
     * Optional prop that if specified on the `Column` will be passed to the
     * cell. It can be used to uniquely identify which column is the cell is in.
     */
    columnKey?: string | number;

    /**
     * Optional prop that represents the rows index in the table.
     * For the 'cell' prop of a Column, this parameter will exist for any
     * cell in a row with a positive index.
     *
     * Below that entry point the user is welcome to consume or
     * pass the prop through at their discretion.
     */
    rowIndex?: number;
}

export class Cell extends React.Component<CellProps> {
}
