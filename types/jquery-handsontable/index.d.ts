// Type definitions for jquery-handsontable
// Project: http://handsontable.com
// Definitions by: Ted John <https://github.com/intelorca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace Handsontable {
    interface CellPosition {
        row: number;
        col: number;
    }

    interface Options {
        /**
         * Initial data source that will be bound to the data grid by reference (editing data grid alters the data source. See Understanding binding as reference.
         */
        data?: any;

        /**
         * Width of the grid. Can be a number or a function that returns a number.
         */
        width?: any;

        /**
         * Height of the grid. Can be a number or a function that returns a number.
         */
        height?: any;

        /**
         * Minimum number of rows. At least that many of rows will be created during initialization.
         */
        minRows?: number;

        /**
         * Minimum number of columns. At least that many of columns will be created during initialization.
         */
        minCols?: number;

        /**
         * Maximum number of rows.
         */
        maxRows?: number;

        /**
         * Maximum number of columns.
         */
        maxCols?: number;

        /**
         * Initial number of rows. Notice: This option only has effect in Handsontable constructor and only if data option is not provided.
         */
        startRows?: number;

        /**
         * Initial number of rows. Notice: This option only has effect in Handsontable constructor and only if data option is not provided.
         */
        startCols?: number;

        /**
         * Setting true or false will enable or disable the default row headers (1, 2, 3). You can also define an array ['One', 'Two', 'Three', ...] or a function to define the headers. If a function is set the index of the rowis passed as a parameter.
         */
        rowHeaders?: any;

        /**
         * Setting true or false will enable or disable the default column headers (A, B, C). You can also define an array ['One', 'Two', 'Three', ...] or a function to define the headers. If a function is set the index of the column is passed as a parameter.
         */
        colHeaders?: any;

        /**
         * Defines column widths in pixels. Accepts number, string (that will be converted to number), array of numbers (if you want to define column width separately for each column) or a function (if you want to set column width dynamically on each render).
         */
        colWidths?: any;

        /**
         * Defines the cell properties and data binding for certain columns. Notice: Using this option sets a fixed number of columns (options startCols, minCols, maxCols will be ignored).
         * @see https://github.com/handsontable/jquery-handsontable/wiki/Options below for more detailed explanation.
         * @see http://handsontable.com/demo/datasources.html for examples
         */
        columns?: any[];

        /**
         * Defines the cell properties for given row, col, prop coordinates.
         * See Cells section below for more detailed explanation.
         */
        cells?: (row: number, col: number, prop: string) => void;

        /**
         * Defines the structure of a new row when data source is an object.
         * @see http://handsontable.com/demo/datasources.html for examples.
         */
        dataSchema?: any;

        /**
         * When set to 1 (or more), Handsontable will add a new row at the end of grid if there are no more empty rows.
         */
        minSpareRows?: number;

        /**
         * When set to 1 (or more), Handsontable will add a new column at the end of grid if there are no more empty columns.
         */
        minSpareCols?: number;

        /**
         * If true, selection of multiple cells using keyboard or mouse is allowed.
         */
        multiSelect?: boolean;

        /**
         * Enables the fill handle (drag-down and copy-down) functionality, which shows the small rectangle in bottom right corner of the selected area, that let's you expand values to the adjacent cells.
         * Possible values: true (to enable in all directions), "vertical" or "horizontal" (to enable in one direction), false (to disable completely). Setting to true enables the fillHandle plugin, which,
         */
        fillHandle?: any;

        /**
         * Defines if the right-click context menu should be enabled. Context menu allows to create new row or column at any place in the grid.
         * Possible values: true (to enable basic options), false (to disable completely) or array of any available strings: ["row_above", "row_below", "col_left", "col_right", "remove_row", "remove_col", "undo", "redo", "sep1", "sep2", "sep3"].
         * @see http://handsontable.com/demo/contextmenu.html for examples.
         */
        contextMenu?: any;

        /**
         * If true, undo/redo functionality is enabled.
         */
        undo?: boolean;

        /**
         * If true, mouse click outside the grid will deselect the current selection.
         */
        outsideClickDeselects?: boolean;

        /**
         * If true, ENTER begins editing mode (like Google Docs). If false, ENTER moves to next row (like Excel) and adds new row if necessary. TAB adds new column if necessary.
         */
        enterBeginsEditing?: boolean;

        /**
         * Defines cursor move after ENTER is pressed (SHIFT+ENTER uses negative vector). Can be an object or a function that returns an object. The event argument passed to the function is a jQuery.Event object received after a ENTER key has been pressed. This event object can be used to check whether user pressed ENTER or SHIFT + ENTER.
         */
        enterMoves?: any;

        /**
         * Defines cursor move after TAB is pressed (SHIFT+TAB uses negative vector). Can be an object or a function that returns an object. The event argument passed to the function is a jQuery.Event object received after a TAB key has been pressed. This event object can be used to check whether user pressed TAB or SHIFT + TAB.
         */
        tabMoves?: any;

        /**
         * If true, pressing TAB or right arrow in the last column will move to first column in next row.
         */
        autoWrapRow?: boolean;

        /**
         * If true, pressing ENTER or down arrow in the last row will move to first row in next column.
         */
        autoWrapCol?: boolean;

        /**
         * Autocomplete definitions.
         * @see demo/autocomplete.html for examples and definitions.
         */
        autoComplete?: any[];

        /**
         * Maximum number of rows than can be copied to clipboard using CTRL+C.
         */
        copyRowsLimit?: number;

        /**
         * Maximum number of columns than can be copied to clipboard using CTRL+C.
         */
        copyColsLimit?: number;

        /**
         * Defines paste (CTRL+V) behavior. Default value "overwrite" will paste clipboard value over current selection.
         * When set to "shift_down", clipboard data will be pasted in place of current selection, while all selected cells are moved down.
         * When set to "shift_right", clipboard data will be pasted in place of current selection, while all selected cells are moved right.
         */
        pasteMode?: string;

        /**
         * Column stretching mode. Possible values: "none", "last", "all".
         */
        stretchH?: string;

        /**
         * Lets you overwrite the default isEmptyRow method.
         */
        isEmptyRow?: (row: number) => boolean;

        /**
         * Lets you overwrite the default isEmptyCol method.
         */
        isEmptyCol?: (col: number) => boolean;

        /**
         * Turn on Manual column resize, if set to a boolean or define initial column resized widths, if set to an array of numbers.
         */
        manualColumnResize?: any;

        /**
         * Turn on Manual column move, if set to a boolean or define initial column order, if set to an array of column indexes.
         */
        manualColumnMove?: any;

        /**
         * Turn on Column sorting.
         */
        columnSorting?: boolean;

        /**
         * Turn on saving the state of column sorting, columns positions and columns sizes in local storage. For more information see How to save data localy.
         */
        persistentState?: boolean;

        /**
         * Class name for all visible rows in current selection.
         */
        currentRowClassName?: string;

        /**
         * Class name for all visible columns in current selection.
         */
        currentColClassName?: string;

        /**
         * Allows to specify the number of rows fixed (aka freezed) on the top of the table.
         */
        fixedRowsTop?: number;

        /**
         * Allows to specify the number of columns fixed (aka freezed) on the left side of the table.
         */
        fixedColumnsLeft?: number;

        /**
         * Setting to true enables selecting just a fragment of the text within a single cell or between adjacent cells.
         */
        fragmentSelection?: boolean;

        /**
         * Setting to true word wrapping of the cell text content that does not fit in the fixed column width.
         */
        wordWrap?: boolean;

        /**
         * CSS class name cells configured with wordWrap: false.
         */
        noWordWrapClassName?: string;

        /**
         * When set to an non-empty string, displayed as the cell content for empty cells.
         */
        placeholder?: any;

        /**
         * CSS class name for cells that have a placeholder in use.
         */
        placeholderCellClassName?: string;

        /**
         * CSS class name for cells that did not pass validation.
         */
        invalidCellClassName?: string;

        /**
         * CSS class name for read-only cells.
         */
        readOnlyCellClassName?: string;

        /**
         * Setting to true enables the debug mode, currently used to test the correctness of the row and column header fixed positioning on a layer above the master table.
         */
        debug?: boolean;

        /**
         * When set to true, the table is rerendered when it is detected that it was made visible in DOM.
         */
        observeDOMVisibility?: boolean;

        /**
         * Setting to true enables the autoColumnSize plugin, which makes sure each column gets enough space to show its content.
         */
        autoColumnSize?: boolean | Object;

        /**
         * Setting to true enables the observeChanges plugin, which automatically renders the table when a change in the data source is observed.
         */
        observeChanges?: boolean;

        /**
         * Setting to true enables the manualRowResize plugin, which allows to resize the row height with your mouse.
         */
        manualRowResize?: boolean;

        /**
         * Turns on Manual row move, if set to a boolean or define initial row order, if set to an array of row indexes.
         */
        manualRowMove?: boolean;

        /**
         * Setting to true enables the copyPaste plugin, which enables the copying and pasting to the clipboard.
         */
        copyPaste?: boolean;

        /**
         * Setting to true enables the search plugin (see demo).
         */
        search?: boolean;

        /**
         * Setting to true or array enables the mergeCells plugin, which enables the merging of the cells. (see demo). You can provide the merged cells on the pageload if you feed the mergeCells option with an array.
         */
        mergeCells?: any;

        /**
         * Callback fired before Walkontable instance is initiated.
         */
        beforeInitWalkontable?: Function;

        /**
         * Callback fired before Handsontable instance is initiated.
         * Note: this can be set only by global PluginHooks instance.
         */
        beforeInit?: Function;

        /**
         * Callback fired before Handsontable table is rendered. Parameters:
         *   - isForced is true if rendering was triggered by a change of settings or data; or false if rendering was triggered by scrolling or moving selection.
         */
        beforeRender?: (isForced: boolean) => void;

        /**
         * Callback fired before one or more cells is changed. Its main purpose is to alter changes silently before input. Parameters:
         *   - changes is a 2D array containing information about each of the edited cells [ [row, prop, oldVal, newVal], ... ].
         *     - To disregard a single change, set changes[i] to null or remove it from array using changes.splice(i, 1).
         *     - To alter a single change, overwrite the desired value to changes[i][3].
         *     - To cancel all edit, return false from the callback or set array length to 0 (changes.length = 0).
         *   - source is the name of a source of changes.
         */
        beforeChange?: (changes: any[][], source: string) => void;

        beforeChangeRender?: Function;

        /**
         * Callback fired before sorting the table. The column argument is a relative (displayed) index of a column that is about to be sorted. To get the absolute column index, just add the current column offset. You can get the offset by using colOffset() method.
         */
        beforeColumnSort?: (column: number, order: boolean) => void;

        /**
         * Callback fired before setting single value from the data source array.
         */
        beforeSet?: (v: Object) => void;

        /**
         * Callback fired before getting cell settings.
         */
        beforeGetCellMeta?: (row: number, col: number, cellProperties: Object) => void;

        /**
         * Parameters:
         *   - start is an object containing information about first filled cell: { row : 2, col : 0 }.
         *   - end is an object containing information about last filled cell: { row : 4, col : 1 }.
         *   - data is an 2D array containing information about fill pattern: [ ["1", "Ted"], ["1", "John"] ].
         */
        beforeAutofill?: (start: CellPosition, end: CellPosition, data: string[][]) => void;

        /**
         * Callback fired before keydown event is handled. It can be used to overwrite default key bindings. Caution - in your beforeKeyDown handler you need to call event.stopImmediatePropagation() to prevent default key behavior.
         */
        beforeKeyDown?: (event: KeyboardEvent) => void;

        /**
         * A plugin hook executed before validator function, only if validator function is defined. This can be used to manipulate value of changed cell before it is applied to the validator function. NOTICE: this will not affect values of changes. This will change value ONLY for validation!
         */
        beforeValidate?: (value: any, row: number, prop: string, source: string) => void;

        /**
         * Callback fired after Handsontable instance is initiated.
         */
        afterInit?: Function;

        /**
         * Callback fired after new data is loaded (by loadData method) into the data source array.
         */
        afterLoadData?: Function;

        /**
         * Callback fired after Handsontable table is rendered. Parameters:
         *   - isForced is true if rendering was triggered by a change of settings or data; or false if rendering was triggered by scrolling or moving selection.
         */
        afterRender?: (isForced: boolean) => void;

        /**
         * Callback fired after one or more cells is changed. Its main use case is to save the input. Parameters:
         *   - changes is a 2D array containing information about each of the edited cells [ [row, prop, oldVal, newVal], ... ].
         *   - source is one of the strings: "alter", "empty", "edit", "populateFromArray", "loadData", "autofill", "paste".
         * Note: for performance reasons, the changes array is null for "loadData" source.
         */
        afterChange?: (changes: any[], source: string) => void;

        /**
         * Callback fired after sorting the table. The column argument is a relative (displayed) index of a column that is about to be sorted. To get the absolute column index, just add the current column offset. You can get the offset by using colOffset() method.
         */
        afterColumnSort?: (column: number, order: boolean) => void;

        /**
         * Callback fired while one or more cells are being selected (on mouse move). Parameters:
         *   - r selection start row
         *   - c selection start column
         *   - r2 selection end row
         *   - c2 selection end column
         */
        afterSelection?: (r: number, c: number, r2: number, c2: number) => void;

        /**
         * The same as above, but data source object property name is used instead of the column number.
         */
        afterSelectionByProp?: (r: number, p: string, r2: number, p2: string) => void;

        /**
         * Callback fired while one or more cells are being selected (on mouse up). Parameters:
         *   - r selection start row
         *   - c selection start column
         *   - r2 selection end row
         *   - c2 selection end column
         */
        afterSelectionEnd?: (r: number, c: number, r2: number, c2: number) => void;

        /**
         * The same as above, but data source object property name is used instead of the column number.
         */
        afterSelectionEndByProp?: (r: number, p: string, r2: number, p2: string) => void;

        /**
         * Event called when current cell is deselected.
         */
        afterDeselect?: Function;

        /**
         * Callback fired after getting cell settings.
         */
        afterGetCellMeta?: (row: number, col: number, cellProperties: Object) => void;

        /**
         * Callback fired after getting info about column header.
         */
        afterGetColHeader?: (col: number, TH: HTMLTableHeaderCellElement) => void;

        /**
         * Callback fired after calculating column width.
         */
        afterGetColWidth?: (col: number, response: Object) => void;

        /**
         * Callback fired after destroing Handsontable instance.
         */
        afterDestroy?: Function;

        /**
         * Callback is fired when a new row is created. Parameters:
         *   - index represents the index of first newly created row in the data source array.
         *   - amount number of newly created rows in the data source array.
         */
        afterCreateRow?: (index: number, amount: number) => void;

        /**
         * Callback is fired when a new column is created. Parameters:
         *   - index represents the index of first newly created column in the data source array.
         *   - amount number of newly created columns in the data source array.
         */
        afterCreateCol?: (index: number, amount: number) => void;

        /**
         * Callback is fired when one or more rows are about to be removed. Parameters:
         *   - index is an index of starter row.
         *   - amount is an anount of rows to be removed.
         */
        beforeRemoveRow?: (index: number, amount: number) => void;

        /**
         * Callback is fired when one or more rows are removed. Parameters:
         *   - index is an index of starter row.
         *   - amount is an anount of removed rows.
         */
        afterRemoveRow?: (index: number, amount: number) => void;

        /**
         * Callback is fired when one or more columns are about to be removed. Parameters:
         *   - index is an index of starter column.
         *   - amount is an anount of columns to be removed.
         */
        beforeRemoveCol?: (index: number, amount: number) => void;

        /**
         * Callback is fired when one or more columns are removed. Parameters:
         *   - index is an index of starter column.
         *   - amount is an anount of removed columns.
         */
        afterRemoveCol?: (index: number, amount: number) => void;

        /**
         * Callback is fired after changing column size.
         */
        afterColumnResize?: (col: number, size: number) => void;

        /**
         * Callback is fired after changing column placement.
         */
        afterColumnMove?: (oldIndex: number, newIndex: number) => void;

        /**
         * Callback fired if copyRowsLimit or copyColumnsLimit was reached.
         */
        afterCopyLimit?: (selectedRowsCount: number, selectedColsCount: number, copyRowsLimit: number, copyColsLimit: number) => void;

        /**
         * A plugin hook executed after validator function, only if validator function is defined. Validation result is the first parameter. This can be used to determinate if validation passed successfully or not. You can cancel current change by returning false.
         */
        afterValidate?: (isValid: boolean, value: any, row: number, prop: string, source: string) => boolean;

        /**
         * Callback fired before setting range is ended. Parameters:
         *   - coords is WalkontableCellCoords array
         */
        beforeSetRangeEnd?: (coords: any[]) => void;

        afterUpdateSettings?: Function;

        afterRenderer?: (TD: HTMLTableDataCellElement, row: number, col: number, prop: string, value: string, cellProperties: Object) => void;

        /**
         * Callback fired after clicking on a cell or row/column header.
         * In case the row/column header was clicked, the index is negative. For example clicking on the row header of cell (0, 0) results with afterOnCellMouseDown called with coords {row: 0, col: -1}.
         */
        afterOnCellMouseDown?: (event: MouseEvent, coords: CellPosition, TD: HTMLTableDataCellElement) => void;

        /**
         * Callback fired after hovering a cell or row/column header with the mouse cursor.
         * In case the row/column header was hovered, the index is negative. For example clicking on the row header of cell (0, 0) results with afterOnCellMouseOver called with coords {row: 0, col: -1}.
         */
        afterOnCellMouseOver?: (event: MouseEvent, coords: CellPosition, TD: HTMLTableDataCellElement) => void;

        /**
         * Callback fired after.
         */
        afterOnCellCornerMouseDown?: (event: MouseEvent) => void;

        afterScrollVertically?: Function;

        afterScrollHorizontally?: Function;

        /**
         * Callback fired after reset cell's meta.
         */
        afterCellMetaReset?: Function;

        /**
         * Callback fired after modify column's width.
         */
        modifyColWidth?: (width: number, col: number) => void;

        /**
         * Callback fired after modify hight of row.
         */
        modifyRowHeight?: (height: number, row: number) => void;

        /**
         * Callback fired after row modify.
         */
        modifyRow?: (row: number) => void;

        /**
         * Callback fired after column modify.
         */
        modifyCol?: (col: number) => void;

        afterSetCellMeta?: Function;

        /**
         * Deprecated! Now event is called afterSelection.
         */
        onSelection?: (r: number, p: number, r2: number, p2: number) => void;

        /**
         * Deprecated! Now event is called afterSelectionByProp.
         */
        onSelectionByProp?: (r: number, p: number, r2: number, p2: number) => void;

        /**
         * Deprecated! Now event is called afterSelectionEnd.
         */
        onSelectionEnd?: (r: number, p: number, r2: number, p2: number) => void;

        /**
         * Deprecated! Now event is called afterSelectionEndByProp.
         */
        onSelectionEndByProp?: (r: number, p: number, r2: number, p2: number) => void;

        /**
         * Deprecated! Now event is called beforeChange.
         */
        onBeforeChange?: (changes: any[], source: string) => void;

        /**
         * Deprecated! Now event is called afterChange.
         */
        onChange?: (changes: any[], source: string) => void;

        /**
         * Deprecated! Now event is called afterCopyLimit.
         */
        onCopyLimit?: (selectedRowsCount: number, selectedColsCount: number, copyRowsLimit: number, copyColsLimit: number) => void;
    }

    interface Context {
        /**
         * Use it if you need to change configuration after initialization.
         */
        updateSettings(options: Options): void;

        /**
         * Returns an object containing the current grid settings.
         */
        getSettings(): Options;

        /**
         * Reset all cells in the grid to contain data from the data array.
         */
        loadData(data: any[]): void;

        /**
         * Listen to keyboard input on document body.
         */
        listen(): void;

        /**
         * Returns rederer type/
         */
        getCellRenderer(row: number, col: number): string;

        /**
         * Stop listening to keyboard input on document body.
         */
        unlisten(): void;

        /**
         * Returns true if current Handsontable instance is listening to keyboard input on document body.
         */
        isListening(): boolean;

        /**
         * Rerender the table.
         */
        render(): void;

        /**
         * Remove grid from DOM.
         */
        destroy(): void;

        /**
         * Validates all cells using their validator functions and calls callback when finished. Does not render the view.
         */
        validateCells(callback: Function): void;

        /**
         * Return the current data object (the same that was passed by data configuration option or loadData method). Optionally you can provide cell range row, col, row2, col2 to get only a fragment of grid data
         */
        getData(): any;

        /**
         * Return the current data object (the same that was passed by data configuration option or loadData method). Optionally you can provide cell range row, col, row2, col2 to get only a fragment of grid data
         */
        getData(row: number, col: number, row2: number, col2: number): any;

        /**
         * Return cell value at row, col. row and col are the visible indexes (note that if columns were reordered or sorted, the current order will be used).
         */
        getDataAtCell(row: number, col: number): any;

        /**
         * Same as getDataAtCell, except instead of col, you provide name of the object property (e.g. 'first.name').
         */
        getDataAtRowProp(row: number, prop: string): any;

        /**
         * Returns a single row of the data (array or object, depending on what you have). row is the visible index of the row
         */
        getDataAtRow(row: number): any;

        /**
         * Returns a single row of the data (array or object, depending on what you have). row is the index of the row in the data source.
         */
        getSourceDataAtRow(row: number): any;

        /**
         * Returns array of column values from the data source. col is the visible index of the column.
         */
        getDataAtCol(col: number): any[];

        /**
         * Returns array of column values from the data source. col is the index of the row in the data source.
         */
        getSourceDataAtCol(col: number): any[];

        /**
         * Given the object property name (e.g. 'first.name'), returns array of column values from the data source.
         */
        getDataAtProp(prop: string): any[];

        /**
         * Get value of selected range. Each column is separated by tab, each row is separated by new line character.
         */
        getCopyableData(startRow: number, startCol: number, endRow: number, endCol: number): any;

        /**
         * Returns value of selected cell.
         */
        getValue(): any;

        /**
         * Set new value to a cell. To change many cells at once, pass an array of changes in format [ [row, col, value], ... ] as the only parameter. col is the index of visible column (note that if columns were reordered, the current order will be used). source is a flag for before/afterChange events. If you pass only array of changes then source could be set as second parameter.
         */
        setDataAtCell(row: number, col: number, value: any, source?: string): void;

        /**
         * Set new value to a cell. To change many cells at once, pass an array of changes in format [ [row, col, value], ... ] as the only parameter. col is the index of visible column (note that if columns were reordered, the current order will be used). source is a flag for before/afterChange events. If you pass only array of changes then source could be set as second parameter.
         */
        setDataAtCell(changes: any[], source?: string): void;

        /**
         * Same as above, except instead of col, you provide name of the object property (e.g. [0, 'first.name', 'Jennifer']).
         */
        setDataAtRowProp(row: number, prop: string, value: any, source?: string): void;

        /**
         * Same as above, except instead of col, you provide name of the object property (e.g. [0, 'first.name', 'Jennifer']).
         */
        setDataAtRowProp(changes: any[], source?: string): void;

        /**
         * Populate cells at position with 2D input array (e.g. [ [1, 2], [3, 4] ]).
         * Use endRow, endCol when you want to cut input when certain row is reached.
         * @param source (default value "populateFromArray") is used to identify this call in the resulting events (beforeChange, afterChange).
         * @param populateMethod (default value "overwrite", possible values "shift_down" and "shift_right") has the same effect as pasteMethod option (see Options page).
         */
        populateFromArray(row: number, col: number, input: any[], endRow: number, endCol: number, source?: string, populateMethod?: string): void;

        /**
         * Adds/removes data from the column. This function works is modelled after Array.splice. Parameter col is the index of column in which do you want to do splice. Parameter index is the row index at which to start changing the array. If negative, will begin that many elements from the end. Parameter amount, is the number of old array elements to remove. If the amount is 0, no elements are removed. Fourth and further parameters are the elements to add to the array. If you don't specify any elements, spliceCol simply removes elements from the array.
         */
        spliceCol(col: number, index: number, amount: number, ...elements: any[]): void;

        /**
         * Adds/removes data from the row. This function works is modelled after Array.splice. Parameter row is the index of row in which do you want to do splice. Parameter index is the column index at which to start changing the array. If negative, will begin that many elements from the end. Parameter amount, is the number of old array elements to remove. If the amount is 0, no elements are removed. Fourth and further parameters are the elements to add to the array. If you don't specify any elements, spliceCol simply removes elements from the array.
         */
        spliceRow(row: number, index: number, amount: number, ...elements: any[]): void;

        /**
         * Insert new row(s) above the row at given index. If index is null or undefined, the new row will be added after the current last row. Default amount equals 1.
         */
        alter(type: 'insert_row', index: number, amount?: number, source?: string): void;

        /**
         * Insert new column(s) before the column at given index. If index is null or undefined, the new column will be added after the current last column. Default amount equals 1.
         */
        alter(type: 'insert_col', index: number, amount?: number, source?: string): void;

        /**
         * Remove the row(s) at given index. Default amount equals 1.
         */
        alter(type: 'remove_row', index: number, amount?: number, source?: string): void;

        /**
         * Remove the column(s) at given index. Default amount equals 1.
         */
        alter(type: 'remove_col', index: number, amount?: number, source?: string): void;

        alter(type: string, index: number, amount?: number, source?: string): void;

        /**
         * Returns TD element for given row, col if it is rendered on screen.
         * Returns null if the TD is not rendered on screen (probably because that part of table is not visible).
         */
        getCell(row: number, col: number): any;

        /**
         * Return cell properties for given row, col coordinates.
         */
        getCellMeta(row: number, col: number): any;

        /**
         * Sets cell meta data object key corresponding to params row, col.
         */
        setCellMeta(row: number, col: number, key: string, val: string): void;

        /**
         * Destroys current editor, renders and selects current cell. If revertOriginal == false, edited data is saved. Otherwise previous value is restored.
         */
        destroyEditor(revertOriginal?: boolean): void;

        /**
         * Select cell row, col or range finishing at row2, col2. By default, viewport will be scrolled to selection.
         */
        selectCell(row: number, col: number, row2: number, col2: number, scrollToSelection?: boolean): void;

        /**
         * Deselect current selection.
         */
        deselectCell(): void;

        /**
         * Return index of the currently selected cells as an array [startRow, startCol, endRow, endCol]. Start row and start col are the coordinates of the active cell (where the selection was started).
         */
        getSelected(): number[];

        /**
         * Returns current selection as a WalkontableCellRange object. Returns undefined if there is no selection.
         */
        getSelectedRange(): void;

        /**
         * Clears grid.
         */
        clear(): void;

        /**
         * Returns total number of rows in the grid.
         */
        countRows(): number;

        /**
         * Returns total number of columns in the grid.
         */
        countCols(): number;

        /**
         * Returns property name that corresponds with the given column index.
         */
        colToProp(column: number): string;

        /**
         * Returns index of first visible row.
         */
        rowOffset(): number;

        /**
         * Returns index of first visible column.
         */
        colOffset(): number;

        /**
         * Returns number of visible rows.
         */
        countVisibleRows(): number;

        /**
         * Returns number of visible columns.
         */
        countVisibleCols(): number;

        /**
         * Returns number of empty rows. If the optional ending parameter is true, returns number of empty rows at the bottom of the table.
         */
        countEmptyRows(ending?: boolean): number;

        /**
         * Returns number of empty columns.If the optional ending parameter is true, returns number of empty columns at right hand edge of the table.
         */
        countEmptyCols(ending?: boolean): number;

        /**
         * Returns true if the row at the given index is empty, false otherwise.
         */
        isEmptyRow(row: number): boolean;

        /**
         * Returns true if the column at the given index is empty, false otherwise.
         */
        isEmptyCol(col: number): boolean;

        /**
         * Returns array of row headers (if they are enabled). If param row given, return header at given row as string.
         */
        getRowHeader(row: number): any;

        /**
         * Returns array of col headers (if they are enabled). If param col given, return header at given col as string.
         */
        getColHeader(col: number): any;

        /**
         * Returns information of this table is configured to display row headers.
         */
        hasRowHeaders(): boolean;

        /**
         * Returns information of this table is configured to display column headers.
         */
        hasColHeaders(): boolean;

        /**
         * Return column width.
         */
        getColWidth(col: number): number;

        /**
         * Return row height.
         */
        getRowHeight(row: number): number;

        /**
         * Returns column index that corresponds with the given property.
         */
        propToCol(property: string): number;

        /**
         * Clear undo history.
         */
        clearUndo(): void;

        /**
         * Return true if undo can be performed, false otherwise.
         */
        isUndoAvailable(): boolean;

        /**
         * Return true if redo can be performed, false otherwise.
         */
        isRedoAvailable(): boolean;

        /**
         * Undo last edit.
         */
        undo(): void;

        /**
         * Redo edit (used to reverse an undo).
         */
        redo(): void;

        /**
         * Sorts table content by cell values in given column, using order. column is a zero-based column index. Order of sorting can be either ascending (order = true) or descending (order = false).
         * Note I: This method is only available when coulmnSorting plugin is enabled. See column sorting demo for details.
         * Note II: Running this method will not alter the table data. Sorting takes place only in view layer.
         */
        sort(column: number, order: boolean): void;
    }
}

interface JQuery {
    handsontable(): JQuery;
    handsontable(methodName: string, ...arguments: any[]): any;
    handsontable(options: Handsontable.Options): JQuery;
}
