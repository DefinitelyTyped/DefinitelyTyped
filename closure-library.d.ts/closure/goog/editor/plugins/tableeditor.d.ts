declare module goog {
    function require(name: 'goog.editor.plugins.TableEditor'): typeof goog.editor.plugins.TableEditor;
}

declare module goog.editor.plugins {

    /**
     * Plugin that adds support for table creation and editing commands.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class TableEditor extends goog.editor.Plugin {
        constructor();
        
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
        
        /**
         * Adds a function to filter out non-user-editable tables.
         * @param {function(Element):boolean} func A function to decide whether the
         *   table element could be editable by the user or not.
         */
        addIsTableEditableFunction(func: (arg0: Element) => boolean): void;
    }
}

declare module goog.editor.plugins.TableEditor {

    /**
     * Commands supported by goog.editor.plugins.TableEditor.
     * @enum {string}
     */
    type COMMAND = string;
    var COMMAND: {
        TABLE: COMMAND;
        INSERT_ROW_AFTER: COMMAND;
        INSERT_ROW_BEFORE: COMMAND;
        INSERT_COLUMN_AFTER: COMMAND;
        INSERT_COLUMN_BEFORE: COMMAND;
        REMOVE_ROWS: COMMAND;
        REMOVE_COLUMNS: COMMAND;
        SPLIT_CELL: COMMAND;
        MERGE_CELLS: COMMAND;
        REMOVE_TABLE: COMMAND;
    };

    /**
     * Class representing the selected cell objects within a single  table.
     * @param {goog.dom.AbstractRange} range Selected range from which to calculate
     *     selected cells.
     * @param {function(Element):Element?} getParentTableFunction A function that
     *     finds the user-editable table from a given element.
     * @constructor
     * @private
     */
    interface CellSelection_ {
        
        /**
         * Returns the EditableTable object of which this selection's cells are a
         * subset.
         * @return {!goog.editor.Table} the table.
         */
        getTable(): goog.editor.Table;
        
        /**
         * Returns the row index of the uppermost cell in this selection.
         * @return {number} The row index.
         */
        getFirstRowIndex(): number;
        
        /**
         * Returns the row index of the lowermost cell in this selection.
         * @return {number} The row index.
         */
        getLastRowIndex(): number;
        
        /**
         * Returns the column index of the farthest left cell in this selection.
         * @return {number} The column index.
         */
        getFirstColumnIndex(): number;
        
        /**
         * Returns the column index of the farthest right cell in this selection.
         * @return {number} The column index.
         */
        getLastColumnIndex(): number;
        
        /**
         * Returns the cells in this selection.
         * @return {!Array<Element>} Cells in this selection.
         */
        getCells(): Array<Element>;
        
        /**
         * Returns a boolean value indicating whether or not the cells in this
         * selection form a rectangle.
         * @return {boolean} Whether the selection forms a rectangle.
         */
        isRectangle(): boolean;
        
        /**
         * Returns a boolean value indicating whether or not there is exactly
         * one cell in this selection. Note that this may not be the same as checking
         * whether getCells().length == 1; if there is a single cell with
         * rowSpan/colSpan set it will appear multiple times.
         * @return {boolean} Whether there is exatly one cell in this selection.
         */
        containsSingleCell(): boolean;
    }
}
