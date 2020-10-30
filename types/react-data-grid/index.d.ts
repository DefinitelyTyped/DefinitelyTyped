// Type definitions for react-data-grid 4.0
// Project: https://github.com/adazzle/react-data-grid.git
// Definitions by: Simon Gellis <https://github.com/SupernaviX>, Kieran Peat <https://github.com/KieranPeat>, Martin Novak <https://github.com/martinnov92>, Sebastijan Grabar <https://github.com/baso53>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

declare namespace AdazzleReactDataGrid {
    interface ExcelColumn {
        editable: boolean;
        name: any;
        key: string;
        width: number;
        resizeable: boolean;
        filterable: boolean;
    }

    interface EditorBaseProps {
        value: any;
        column: ExcelColumn;
        height: number;
        onBlur: () => void;
        onCommit: () => void;
        onCommitCancel: () => void;
        rowData: any;
        rowMetaData: any;
    }

    interface SelectionParams<T> {
        rowIdx: number;
        row: T;
    }

    interface GridProps<T> {
        /**
         * Gets the data to render in each row. Required.
         * Can be an array or a function that takes an index and returns an object.
         */
        rowGetter: Array<T> | ((rowIdx: number) => T)
        /**
         * The total number of rows to render. Required.
         */
        rowsCount: number
        /**
         * The columns to render.
         */
        columns?: Array<Column<T>>
        /**
         * Called when the grid is scrolled
         */
        onScroll?:(scrollState:ScrollState) => void
        /**
         * Invoked when the user changes the value of a single cell.
         * Should update that cell's value.
         * @param e Information about the event
         */
        onRowUpdated?: (e: RowUpdateEvent<T>) => void
        /**
         * Invoked when the user pulls down the drag handle of an editable cell.
         * Should update the values of the selected cells.
         * @param e Information about the event
         */
        onCellsDragged?: (e: CellDragEvent) => void
        /**
         * Invoked when the user clicks on one cell to expand it.
         * @param e Information about the event
         */
        onCellExpand?: (e:CellExpandEvent<T>) => void

        getSubRowDetails?: (row: T) => SubRowDetails

        /**
         * Invoked when the user double clicks on the drag handle of an editable cell.
         * Should update the values of the cells beneath the selected cell.
         * @param e Information about the event
         */
        onDragHandleDoubleClick?: (e: DragHandleDoubleClickEvent<T>) => void
        /**
         * Invoked when the user copies a value from one cell and pastes it into another (in the same column).
         * Should update the value of the cell in row e.toRow.
         * @param e Information about the event
         */
        onCellCopyPaste?: (e: CellCopyPasteEvent) => void
        /**
         * Invoked after the user updates the grid rows in any way.
         * @param e Information about the event
         */
        onGridRowsUpdated?: (e: GridRowsUpdatedEvent<T>) => void

        /**
         * A toolbar to display above the grid.
         * Consider using the toolbar included in "react-data-grid/addons".
         */
        toolbar?: React.ReactElement
        /**
         * A context menu to disiplay when the user right-clicks a cell.
         * Consider using "react-contextmenu", included in "react-data-grid/addons".
         */
        contextMenu?: React.ReactElement
        /**
         * A react component to customize how rows are rendered.
         * If you want to define your own, consider extending ReactDataGrid.Row.
         */
        rowRenderer?: React.ReactElement | React.ComponentClass<any> | React.StatelessComponent<any>

        /**
         * A react component to customize how the grouping header row is rendered
         */
        rowGroupRenderer?: React.ComponentType

        /**
         * A component to display when there are no rows to render.
         */
        emptyRowsView?: React.ComponentClass<any> | React.StatelessComponent<any>

        /**
         * The minimum width of the entire grid in pixels.
         */
        minWidth?: number
        /**
         * The minimum height of the entire grid in pixels.
         * @default 350
         */
        minHeight?: number
        /**
         * The height of each individual row in pixels.
         * @default 35
         */
        rowHeight?: number
        /**
         * The height of the header row in pixels.
         * @default rowHeight
         */
        headerRowHeight?: number
        /**
         * The height of the header filter row in pixels.
         * @default 45
         */
        headerFiltersHeight?: number
        /**
         * The minimum width of each column in pixels.
         * @default 80
         */
        minColumnWidth?: number
        /**
         * Invoked when a column has been resized.
         * @param index The index of the column
         * @param width The new width of the column
         */
        onColumnResize?: (index: number, width: number) => void

        /**
         * Controls what happens when the user navigates beyond the first or last cells.
         * 'loopOverRow' will navigate to the beginning/end of the current row.
         * 'changeRow' will navigate to the beginning of the next row or the end of the last.
         * 'none' will do nothing.
         * @default none
         */
        cellNavigationMode?: 'none' | 'loopOverRow' | 'changeRow'

        /**
         * Called when the user sorts the grid by some column.
         * Should update the order of the rows returned by rowGetter.
         * @param sortColumn The name of the column being sorted by
         * @param sortDirection The direction to sort ('ASC'/'DESC'/'NONE')
         */
        onGridSort?: (sortColumn: string, sortDirection: 'ASC' | 'DESC' | 'NONE') => void

        /**
         * Initial sorting direction
         */
        sortDirection?: 'ASC' | 'DESC' | 'NONE'

        /**
         * key of the initial sorted column
         */
        sortColumn?: string

        /**
         * Called when the user filters a column by some value.
         * Should restrict the rows in rowGetter to only things that match the filter.
         * @param filter The filter being added
         */
        onAddFilter?: (filter: Filter) => void
        /**
         * Called when the user clears all filters.
         * Should restore the rows in rowGetter to their original state.
         */
        onClearFilters?: () => void

        /**
         * When set to true or 'multi', enables multiple row select.
         * When set to 'single', enables single row select.
         * When set to false or not set, disables row select.
         * @default false
         */
        enableRowSelect?: boolean | 'single' | 'multi'
        /**
         * Called when a row is selected.
         * @param rows The (complete) current selection of rows.
         */
        onRowSelect?: (rows: Array<T>) => void
        /**
         * A property that's unique to every row.
         * This property is required to enable row selection.
         * @default 'id'
         */
        rowKey?: string

        /**
         * Enables cells to be selected when clicked.
         * @default false
         */
        enableCellSelect?: boolean

        /**
         * Enables cells to be dragged and dropped
         * @default false
         */
        enableDragAndDrop?: boolean

        /**
         * Called when a cell is selected.
         * @param coordinates The row and column indices of the selected cell.
         */
        onCellSelected?: (coordinates: {rowIdx: number, idx: number}) => void
        /**
         * Called when a cell is deselected.
         * @param coordinates The row and column indices of the deselected cell.
         */
        onCellDeSelected?: (coordinates: {rowIdx: number, idx: number}) => void

        /**
         * How long to wait before rendering a new row while scrolling in milliseconds.
         * @default 0
         */
        rowScrollTimeout?: number
        /**
         * Options object for selecting rows
         */
        rowSelection?: {
            showCheckbox?: boolean
            enableShiftSelect?: boolean
            onRowsSelected?: (rows: Array<SelectionParams<T>>) => void,
            onRowsDeselected?: (rows: Array<SelectionParams<T>>) => void,
            selectBy?: {
                indexes?: Array<number>;
                keys?: { rowKey: string, values: Array<any> };
                isSelectedKey?: string;
            }
        }
        /**
         * A custom formatter for the select all checkbox cell
         * @default react-data-grid/src/formatters/SelectAll.js
         */
        selectAllRenderer?: React.ComponentClass<any> | React.StatelessComponent<any>;
        /**
         * A custom formatter for select row column
         * @default AdazzleReactDataGridPlugins.Editors.CheckboxEditor
         */
        rowActionsCell?: React.ComponentClass<any> | React.StatelessComponent<any>;
        /**
         * An event function called when a row is clicked.
         * Clicking the header row will trigger a call with -1 for the rowIdx.
         * @param rowIdx zero index number of row clicked
         * @param row object behind the row
         */
        onRowClick?: (rowIdx: number, row: T) => void

        /**
         * An event function called when a row is expanded with the toggle
         * @param props OnRowExpandToggle object
         */
        onRowExpandToggle?: (props: OnRowExpandToggle ) => void

        /**
         * Responsible for returning an Array of values that can be used for filtering
         * a column that is column.filterable and using a column.filterRenderer that
         * displays a list of options.
         * @param columnKey the column key that we are looking to pull values from
         */
        getValidFilterValues?: (columnKey: string) => Array<any>

        getCellActions?: (column: Column<T>, row: T) => (ActionButton | ActionMenu)[]
    }

    type ActionButton = {
        icon: string;
        callback: () => void;
    }

    type ActionMenu = {
        icon: string;
        actions: {
            icon: string;
            text: string;
            callback: () => void;
        }[];
    }

    /**
     * Information about a specific column to be rendered.
     */
    interface Column<T> {
        /**
         * A unique key for this column. Required.
         * Each row should have a property with this name, which contains this column's value.
         */
        key: string
        /**
         * This column's display name. Required.
         */
        name: string
        /**
         * A custom width for this specific column.
         * @default minColumnWidth from the ReactDataGrid
         */
        width?: number
        /**
         * Whether this column can be resized by the user.
         * @default false
         */
        resizable?: boolean
        /**
         * Whether this column should stay fixed on the left as the user scrolls horizontally.
         * @default false
         */
        locked?: boolean
        /**
         * Whether this column can be edited.
         * @default false
         */
        editable?: boolean
        /**
         * Whether the rows in the grid can be sorted by this column.
         * @default false
         */
        sortable?: boolean
        /**
         * Whether the rows in the grid can be filtered by this column.
         * @default false
         */
        filterable?: boolean;
        /**
         * A custom formatter for this column's filter.
         */
        filterRenderer?: React.ReactElement | React.ComponentClass<any> | React.StatelessComponent<any>;
        /**
         * The editor for this column. Several editors are available in "react-data-grid/addons".
         * @default A simple text editor
         */
        editor?:
            | React.ReactElement<EditorBaseProps>
            | React.ComponentClass<EditorBaseProps>
            | React.StatelessComponent<EditorBaseProps>;
        /**
         * A custom read-only formatter for this column. An image formatter is available in "react-data-grid/addons".
         */
        formatter?: React.ReactElement | React.ComponentClass<any> | React.StatelessComponent<any>
        /**
         * A custom formatter for this column's header.
         */
        headerRenderer?: React.ReactElement | React.ComponentClass<any> | React.StatelessComponent<any>
        /**
         * Events to be bound to the cells in this specific column.
         * Each event must respect this standard in order to work correctly:
         * @example
         * function onXxx(ev :SyntheticEvent, (rowIdx, idx, name): args)
         */
        events?: {
            [name: string]: ColumnEventCallback
        };
        /**
         * Retrieve meta data about the row, optionally provide column as a second argument
         */
        getRowMetaData?: (rowdata: T, column?: Column<T>) => any;
        /**
         * A class name to be applied to the cells in the column
         */
        cellClass?: string;
        /**
         * Whether this column can be dragged (re-arranged).
         * @default false
         */
        draggable?: boolean;
    }
    enum SCROLL_DIRECTION {
        UP = 'upwards',
        DOWN = 'downwards',
        LEFT = 'left',
        RIGHT = 'right',
        NONE = 'none'
    }

    interface ScrollState {
        height: number;
        scrollTop: number;
        scrollLeft: number;
        rowVisibleStartIdx: number;
        rowVisibleEndIdx: number;
        rowOverscanStartIdx: number;
        rowOverscanEndIdx: number;
        colVisibleStartIdx: number;
        colVisibleEndIdx: number;
        colOverscanStartIdx: number;
        colOverscanEndIdx: number;
        scrollDirection: SCROLL_DIRECTION;
        lastFrozenColumnIndex: number;
        isScrolling: boolean;
    }

    interface ColumnEventCallback {
        /**
         * A callback for a native react event on a specific cell.
         * @param ev The react event
         * @param args The row and column coordinates of the cell, and the name of the event.
         */
        (ev: React.SyntheticEvent<any>, args: {rowIdx: number, idx: number, name: string}): void
    }
    
    /**
     * Information about a row update. Generic event type returns untyped row, use parameterized type with the row type as the parameter
     * @default T = any
     */
    interface RowUpdateEvent<T = any> {
        /**
         * The index of the updated row.
         */
        rowIdx: number
        /**
         * The columns that were updated and their values.
         */
        updated: T
        /**
         * The name of the column that was updated.
         */
        cellKey: string
        /**
         * The name of the key pressed to trigger the event ('Tab', 'Enter', etc.).
         */
        key: string
    }

    /**
     * Information about a cell drag
     */
    interface CellDragEvent {
        /**
         * The name of the column that was dragged.
         */
        cellKey: string
        /**
         * The row where the drag began.
         */
        fromRow: number
        /**
         * The row where the drag ended.
         */
        toRow: number
        /**
         * The value of the cell that was dragged.
         */
        value: any
    }

    /**
    *   Information about a cell expanded.
    */
    interface CellExpandEvent<T = any> {
        /**
         * The row index where the cell is being expanded.
         */
        rowIdx: number
        /**
         * The column index where the cell is being expanded.
         */
        idx: number
        /**
         * The values of the row.
         */
        rowData: T
        /**
         * Expand data.
         */
        expandArgs: any
    }

    /**
     * Information about subrows.
     */
    interface SubRowDetails<T = any> {
        /**
         * Determines if the cell can expand.
         */
        canExpand?: boolean;
        /**
         * Sets the field/column that will be use to expand the subrows.
         */
        field: string;
        /**
         * Determines if the row has already expanded.
         */
        expanded: boolean;
        /**
         * Children data.
         */
        children?: T[];
        treeDepth?: number;
        siblingIndex?: number;
        numberSiblings?: number;
        group?: boolean;
    }

    /**
     * Information about a drag handle double click. Generic event type returns untyped row, use parameterized type with the row type as the parameter
     * @default T = any
     */
    interface DragHandleDoubleClickEvent<T = any> {
        /**
         * The row where the double click occurred.
         */
        rowIdx: number
        /**
         * The column where the double click occurred.
         */
        idx: number
        /**
         * The values of the row.
         */
        rowData: T
        /**
         * The double click event.
         */
        e: React.SyntheticEvent<any>
    }

    /**
     * Information about a copy paste
     */
    interface CellCopyPasteEvent {
        /**
         * The row that was pasted to.
         */
        rowIdx: number
        /**
         * The value that was pasted.
         */
        value: any
        /**
         * The row that was copied from.
         */
        fromRow: number
        /**
         * The row that was pasted to.
         */
        toRow: number
        /**
         * The key of the column where the copy paste occurred.
         */
        cellKey: string
    }

    /**
     * Information about some update to the grid's contents. Generic event type returns untyped row, use parameterized type with the row type as the parameter
     * @default T = any
     */
    interface GridRowsUpdatedEvent<T = any> {
        /**
         * The key of the column where the event occurred.
         */
        cellKey: string
        /**
         * The top row affected by the event.
         */
        fromRow: number
        /**
         * The bottom row affected by the event.
         */
        toRow: number
        /**
         * The columns that were updated and their values.
         */
        updated: T
        /**
         * The action that occurred to trigger this event.
         * One of 'cellUpdate', 'cellDrag', 'columnFill', or 'copyPaste'.
         */
        action: 'cellUpdate' | 'cellDrag' | 'columnFill' | 'copyPaste'
    }

    /**
     * Information about the row toggler
     */
    interface OnRowExpandToggle {
        /**
         * The name of the column group the row is in
         */
        columnGroupName: string
        /**
         * The name of the expanded row
         */
        name: string
        /**
         * If it should expand or not
         */
        shouldExpand: boolean
    }

    /**
     * Some filter to be applied to the grid's contents
     */
    interface Filter {
        /**
         * The key of the column being filtered.
         */
        columnKey: string
        /**
         * The term to filter by.
         */
        filterTerm: string
    }

    /**
     * Excel-like grid component built with React, with editors, keyboard navigation, copy & paste, and the like
     * http://adazzle.github.io/react-data-grid/
     */
    export class ReactDataGrid<T> extends React.Component<GridProps<T>> {
        /**
         * Opens the editor for the cell (idx) in the given row (rowIdx). If the column is not editable then nothing will happen.
         */
        openCellEditor(rowIdx: number, idx: number): void;
    }
    export namespace ReactDataGrid {
        // Useful types
        export import Column = AdazzleReactDataGrid.Column;
        export import Filter = AdazzleReactDataGrid.Filter;

        // Various events
        export import RowUpdateEvent = AdazzleReactDataGrid.RowUpdateEvent;
        export import SelectionParams = AdazzleReactDataGrid.SelectionParams;
        export import CellDragEvent = AdazzleReactDataGrid.CellDragEvent;
        export import CellExpandEvent = AdazzleReactDataGrid.CellExpandEvent;
        export import DragHandleDoubleClickEvent = AdazzleReactDataGrid.DragHandleDoubleClickEvent;
        export import CellCopyPasteEvent = AdazzleReactDataGrid.CellCopyPasteEvent;
        export import GridRowsUpdatedEvent = AdazzleReactDataGrid.GridRowsUpdatedEvent;
        export import OnRowExpandToggle = AdazzleReactDataGrid.OnRowExpandToggle;

        export namespace editors {
            class EditorBase<P = {}, S = {}> extends React.Component<P & EditorBaseProps, S> {
                getStyle(): { width: string };

                getValue(): any;

                getInputNode(): Element | null | Text;

                inheritContainerStyles(): boolean;
            }
        }

        // Actual classes exposed on module.exports
        /**
         * A react component that renders a row of the grid
         */
        export class Row extends React.Component<any> { }
        /**
         * A react coponent that renders a cell of the grid
         */
        export class Cell extends React.Component<any> { }
    }
  }

  declare namespace AdazzleReactDataGridPlugins {
    interface AutoCompleteEditorProps {
        onCommit?: () => void;
        options?: Array<{ id: any; title: string }>;
        label?: any;
        value?: any;
        height?: number;
        valueParams?: string[];
        column?: AdazzleReactDataGrid.ExcelColumn;
        resultIdentifier?: string;
        search?: string;
        onKeyDown?: () => void;
        onFocus?: () => void;
        editorDisplayValue?: (column: AdazzleReactDataGrid.ExcelColumn, value: any) => string;
    }

    interface AutoCompleteTokensEditorProps {
        options: Array<string | { id: number; caption: string }>;
        column?: AdazzleReactDataGrid.ExcelColumn;
        value?: any[];
    }

    interface DropDownEditorProps {
        options:
            Array<string | {
              id: string;
              title: string;
              value: string;
              text: string;
          }>;
    }

    export namespace Editors {
        export class AutoComplete extends React.Component<AutoCompleteEditorProps> {}
        export class AutoCompleteTokensEditor extends React.Component<AutoCompleteTokensEditorProps> {}
        export class DropDownEditor extends React.Component<DropDownEditorProps> {}

        // TODO: refine types for these addons
        export class SimpleTextEditor extends React.Component<any> {}
        export class CheckboxEditor extends React.Component<any> {}
    }
    export namespace Filters {
        export class NumericFilter extends React.Component<any> { }
        export class AutoCompleteFilter extends React.Component<any> { }
        export class MultiSelectFilter extends React.Component<any> { }
        export class SingleSelectFilter extends React.Component<any> { }
    }
    export namespace Formatters {
        export class ImageFormatter extends React.Component<any> { }
        export class DropDownFormatter extends React.Component<any> { }
    }
    export class Toolbar extends React.Component<any> {}
    export namespace DraggableHeader {
        export class DraggableContainer extends React.Component<any>{ }
    }
    export namespace Data {
        export const Selectors: {
            getRows: (state: object) => object[];
            getSelectedRowsByKey: (state: object) => object[];
        }
    }
    // TODO: re-export the react-contextmenu typings once those exist
    // https://github.com/vkbansal/react-contextmenu/issues/10
    export namespace Menu {
        export class ContextMenu extends React.Component<any> { }
        export class MenuHeader extends React.Component<any> { }
        export class MenuItem extends React.Component<any> { }
        export class SubMenu extends React.Component<any> { }
        export const monitor: {
            getItem(): any
            getPosition(): any
            hideMenu(): void
        };
        export function connect(Menu: any): any;
        export function ContextMenuLayer(
            identifier: any,
            configure?: (props: any) => any
        ): (Component: any) => any
    }
  }

  declare module "react-data-grid" {
    import ReactDataGrid = AdazzleReactDataGrid.ReactDataGrid;

    // commonjs export
    export = ReactDataGrid;
  }

  declare module "react-data-grid-addons" {
    import Plugins = AdazzleReactDataGridPlugins;
    import Editors = Plugins.Editors;
    import Filters = Plugins.Filters;
    import Formatters = Plugins.Formatters;
    import Toolbar = Plugins.Toolbar;
    import Menu = Plugins.Menu;
    import Data = Plugins.Data;
    import DraggableHeader = Plugins.DraggableHeader;

    // ES6 named exports
    export {
        Editors,
        Filters,
        Formatters,
        Toolbar,
        Menu,
        Data,
        DraggableHeader
    }

    // attach to window
    global {
        interface Window {
            ReactDataGridPlugins: {
                Editors: typeof Editors,
                Filters: typeof Filters,
                Formatters: typeof Formatters,
                Toolbar: typeof Toolbar,
                Menu: typeof Menu,
                Data: typeof Data,
                DraggableHeader: typeof DraggableHeader
            }
        }
    }
  }
