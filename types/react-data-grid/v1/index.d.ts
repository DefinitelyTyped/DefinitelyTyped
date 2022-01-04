// Type definitions for react-data-grid 1.0.4
// Project: https://github.com/adazzle/react-data-grid.git
// Definitions by: Simon Gellis <https://github.com/SupernaviX>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

declare namespace AdazzleReactDataGrid {

    interface SelectionParams {
        rowIdx: number,
        row: any
    }

    interface GridProps {
        /**
         * Gets the data to render in each row. Required.
         * Can be an array or a function that takes an index and returns an object.
         */
        rowGetter: Array<Object> | ((rowIdx: number) => Object)
        /**
         * The total number of rows to render. Required.
         */
        rowsCount: number
        /**
         * The columns to render.
         */
        columns?: Array<Column> | undefined

        /**
         * Invoked when the user changes the value of a single cell.
         * Should update that cell's value.
         * @param e Information about the event
         */
        onRowUpdated?: ((e: RowUpdateEvent) => void) | undefined
        /**
         * Invoked when the user pulls down the drag handle of an editable cell.
         * Should update the values of the selected cells.
         * @param e Information about the event
         */
        onCellsDragged?: ((e: CellDragEvent) => void) | undefined
        /**
         * Invoked when the user double clicks on the drag handle of an editable cell.
         * Should update the values of the cells beneath the selected cell.
         * @param e Information about the event
         */
        onDragHandleDoubleClick?: ((e: DragHandleDoubleClickEvent) => void) | undefined
        /**
         * Invoked when the user copies a value from one cell and pastes it into another (in the same column).
         * Should update the value of the cell in row e.toRow.
         * @param e Information about the event
         */
        onCellCopyPaste?: ((e: CellCopyPasteEvent) => void) | undefined
        /**
         * Invoked after the user updates the grid rows in any way.
         * @param e Information about the event
         */
        onGridRowsUpdated?: ((e: GridRowsUpdatedEvent) => void) | undefined

        /**
         * A toolbar to display above the grid.
         * Consider using the toolbar included in "react-data-grid/addons".
         */
        toolbar?: React.ReactElement | undefined
        /**
         * A context menu to disiplay when the user right-clicks a cell.
         * Consider using "react-contextmenu", included in "react-data-grid/addons".
         */
        contextMenu?: React.ReactElement | undefined
        /**
         * A react component to customize how rows are rendered.
         * If you want to define your own, consider extending ReactDataGrid.Row.
         */
        rowRenderer?: React.ReactElement | React.ComponentClass<any> | React.FunctionComponent<any> | undefined
        /**
         * A component to display when there are no rows to render.
         */
        emptyRowsView?: React.ComponentClass<any> | React.FunctionComponent<any> | undefined

        /**
         * The minimum width of the entire grid in pixels.
         */
        minWidth?: number | undefined
        /**
         * The minimum height of the entire grid in pixels.
         * @default 350
         */
        minHeight?: number | undefined
        /**
         * The height of each individual row in pixels.
         * @default 35
         */
        rowHeight?: number | undefined
        /**
         * The height of the header row in pixels.
         * @default rowHeight
         */
        headerRowHeight?: number | undefined
        /**
         * The minimum width of each column in pixels.
         * @default 80
         */
        minColumnWidth?: number | undefined
        /**
         * Invoked when a column has been resized.
         * @param index The index of the column
         * @param width The new width of the column
         */
        onColumnResize?: ((index: number, width: number) => void) | undefined

        /**
         * Controls what happens when the user navigates beyond the first or last cells.
         * 'loopOverRow' will navigate to the beginning/end of the current row.
         * 'changeRow' will navigate to the beginning of the next row or the end of the last.
         * 'none' will do nothing.
         * @default none
         */
        cellNavigationMode?: 'none' | 'loopOverRow' | 'changeRow' | undefined

        /**
         * Called when the user sorts the grid by some column.
         * Should update the order of the rows returned by rowGetter.
         * @param sortColumn The name of the column being sorted by
         * @param sortDirection The direction to sort ('ASC'/'DESC'/'NONE')
         */
        onGridSort?: ((sortColumn: string, sortDirection: 'ASC' | 'DESC' | 'NONE') => void) | undefined
        /**
         * Called when the user filters a column by some value.
         * Should restrict the rows in rowGetter to only things that match the filter.
         * @param filter The filter being added
         */
        onAddFilter?: ((filter: Filter) => void) | undefined
        /**
         * Called when the user clears all filters.
         * Should restore the rows in rowGetter to their original state.
         */
        onClearFilters?: (() => void) | undefined

        /**
         * When set to true or 'multi', enables multiple row select.
         * When set to 'single', enables single row select.
         * When set to false or not set, disables row select.
         * @default false
         */
        enableRowSelect?: boolean | 'single' | 'multi' | undefined
        /**
         * Called when a row is selected.
         * @param rows The (complete) current selection of rows.
         */
        onRowSelect?: ((rows: Array<Object>) => void) | undefined
        /**
         * A property that's unique to every row.
         * This property is required to enable row selection.
         * @default 'id'
         */
        rowKey?: string | undefined

        /**
         * Enables cells to be selected when clicked.
         * @default false
         */
        enableCellSelect?: boolean | undefined
        /**
         * Called when a cell is selected.
         * @param coordinates The row and column indices of the selected cell.
         */
        onCellSelected?: ((coordinates: {rowIdx: number, idx: number}) => void) | undefined
        /**
         * Called when a cell is deselected.
         * @param coordinates The row and column indices of the deselected cell.
         */
        onCellDeSelected?: ((coordinates: {rowIdx: number, idx: number}) => void) | undefined

        /**
         * How long to wait before rendering a new row while scrolling in milliseconds.
         * @default 0
         */
        rowScrollTimeout?: number | undefined
        /**
         * Options object for selecting rows
         */
        rowSelection?: {
            showCheckbox?: boolean | undefined
            enableShiftSelect?: boolean | undefined
            onRowsSelected?: ((rows: Array<SelectionParams>) => void) | undefined,
            onRowsDeselected?: ((rows: Array<SelectionParams>) => void) | undefined,
            selectBy?: {
                indexes?: Array<number> | undefined;
                keys?: { rowKey: string, values: Array<any> } | undefined;
                isSelectedKey?: string | undefined;
            } | undefined
        } | undefined
    }

    /**
     * Information about a specific column to be rendered.
     */
    interface Column {
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
        width?: number | undefined
        /**
         * Whether this column can be resized by the user.
         * @default false
         */
        resizable?: boolean | undefined
        /**
         * Whether this column should stay fixed on the left as the user scrolls horizontally.
         * @default false
         */
        locked?: boolean | undefined
        /**
         * Whether this column can be edited.
         * @default false
         */
        editable?: boolean | undefined
        /**
         * Whether the rows in the grid can be sorted by this column.
         * @default false
         */
        sortable?: boolean | undefined
        /**
         * Whether the rows in the grid can be filtered by this column.
         * @default false
         */
        filterable?: boolean | undefined
        /**
         * The editor for this column. Several editors are available in "react-data-grid/addons".
         * @default A simple text editor
         */
        editor?: React.ReactElement | undefined
        /**
         * A custom read-only formatter for this column. An image formatter is available in "react-data-grid/addons".
         */
        formatter?: React.ReactElement | React.ComponentClass<any> | React.FunctionComponent<any> | undefined
        /**
         * A custom formatter for this column's header.
         */
        headerRenderer?: React.ReactElement | React.ComponentClass<any> | React.FunctionComponent<any> | undefined
        /**
         * Events to be bound to the cells in this specific column.
         * Each event must respect this standard in order to work correctly:
         * @example
         * function onXxx(ev :SyntheticEvent, (rowIdx, idx, name): args)
         */
        events?: {
            [name: string]: ColumnEventCallback
        } | undefined
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
     * Information about a row update
     */
    interface RowUpdateEvent {
        /**
         * The index of the updated row.
         */
        rowIdx: number
        /**
         * The columns that were updated and their values.
         */
        updated: Object
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
     * Information about a drag handle double click
     */
    interface DragHandleDoubleClickEvent {
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
        rowData: Object
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
     * Information about some update to the grid's contents
     */
    interface GridRowsUpdatedEvent {
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
        updated: Object
        /**
         * The action that occurred to trigger this event.
         * One of 'cellUpdate', 'cellDrag', 'columnFill', or 'copyPaste'.
         */
        action: 'cellUpdate' | 'cellDrag' | 'columnFill' | 'copyPaste'
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
    export class ReactDataGrid extends React.Component<GridProps> { }
    export namespace ReactDataGrid {
        // Useful types
        export import Column = AdazzleReactDataGrid.Column;
        export import Filter = AdazzleReactDataGrid.Filter;

        // Various events
        export import RowUpdateEvent = AdazzleReactDataGrid.RowUpdateEvent;
        export import SelectionParams = AdazzleReactDataGrid.SelectionParams;
        export import CellDragEvent = AdazzleReactDataGrid.CellDragEvent;
        export import DragHandleDoubleClickEvent = AdazzleReactDataGrid.DragHandleDoubleClickEvent;
        export import CellCopyPasteEvent = AdazzleReactDataGrid.CellCopyPasteEvent;
        export import GridRowsUpdatedEvent = AdazzleReactDataGrid.GridRowsUpdatedEvent;

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
    // TODO: refine types for these addons
    export namespace Editors {
        export class AutoComplete extends React.Component<any> { }
        export class DropDownEditor extends React.Component<any> { }
        export class SimpleTextEditor extends React.Component<any> { }
        export class CheckboxEditor extends React.Component<any> { }
    }
    export namespace Formatters {
        export class ImageFormatter extends React.Component<any> { }
        export class DropDownFormatter extends React.Component<any> { }
    }
    export class Toolbar extends React.Component<any> {}
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

declare module "react-data-grid/addons" {
    import Plugins = AdazzleReactDataGridPlugins;
    import Editors = Plugins.Editors;
    import Formatters = Plugins.Formatters;
    import Toolbar = Plugins.Toolbar;
    import Menu = Plugins.Menu;

    // ES6 named exports
    export {
        Editors,
        Formatters,
        Toolbar,
        Menu
    }

    // attach to window
    global {
        interface Window {
            ReactDataGridPlugins: {
                Editors: typeof Editors
                Formatters: typeof Formatters
                Toolbar: typeof Toolbar
                Menu: typeof Menu
            }
        }
    }
}
