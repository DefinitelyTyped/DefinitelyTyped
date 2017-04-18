declare module goog {
    function require(name: 'goog.editor.Table'): typeof goog.editor.Table;
    function require(name: 'goog.editor.TableRow'): typeof goog.editor.TableRow;
    function require(name: 'goog.editor.TableCell'): typeof goog.editor.TableCell;
}

declare module goog.editor {

    /**
     * Class providing high level table editing functions.
     * @param {Element} node Element that is a table or descendant of a table.
     * @constructor
     * @final
     */
    class Table {
        constructor(node: Element);
        
        /**
         * Optimum size of empty cells (in pixels), if possible.
         * @type {number}
         */
        static OPTIMUM_EMPTY_CELL_WIDTH: number;
        
        /**
         * Maximum width for new tables.
         * @type {number}
         */
        static OPTIMUM_MAX_NEW_TABLE_WIDTH: number;
        
        /**
         * Default color for table borders.
         * @type {string}
         */
        static DEFAULT_BORDER_COLOR: string;
        
        /**
         * Walks the dom structure of this object's table element and populates
         * this.rows with goog.editor.TableRow objects. This is done initially
         * to populate the internal data structures, and also after each time the
         * DOM structure is modified. Currently this means that the all existing
         * information is discarded and re-read from the DOM.
         */
        refresh(): void;
        
        /**
         * Returns all child elements of a TR element that are of type TD or TH.
         * @param {Element} tr TR element in which to find children.
         * @return {!Array<Element>} array of child cell elements.
         */
        static getChildCellElements(tr: Element): Array<Element>;
        
        /**
         * Inserts a new row in the table. The row will be populated with new
         * cells, and existing rowspanned cells that overlap the new row will
         * be extended.
         * @param {number=} opt_rowIndex Index at which to insert the row. If
         *     this is omitted the row will be appended to the end of the table.
         * @return {!Element} The new row.
         */
        insertRow(opt_rowIndex?: number): Element;
        
        /**
         * Inserts a new column in the table. The column will be created by
         * inserting new TD elements in each row, or extending the colspan
         * of existing TD elements.
         * @param {number=} opt_colIndex Index at which to insert the column. If
         *     this is omitted the column will be appended to the right side of
         *     the table.
         * @return {!Array<Element>} Array of new cell elements that were created
         *     to populate the new column.
         */
        insertColumn(opt_colIndex?: number): Array<Element>;
        
        /**
         * Removes a row from the table, removing the TR element and
         * decrementing the rowspan of any cells in other rows that overlap the row.
         * @param {number} rowIndex Index of the row to delete.
         */
        removeRow(rowIndex: number): void;
        
        /**
         * Removes a column from the table. This is done by removing cell elements,
         * or shrinking the colspan of elements that span multiple columns.
         * @param {number} colIndex Index of the column to delete.
         */
        removeColumn(colIndex: number): void;
        
        /**
         * Merges multiple cells into a single cell, and sets the rowSpan and colSpan
         * attributes of the cell to take up the same space as the original cells.
         * @param {number} startRowIndex Top coordinate of the cells to merge.
         * @param {number} startColIndex Left coordinate of the cells to merge.
         * @param {number} endRowIndex Bottom coordinate of the cells to merge.
         * @param {number} endColIndex Right coordinate of the cells to merge.
         * @return {boolean} Whether or not the merge was possible. If the cells
         *     in the supplied coordinates can't be merged this will return false.
         */
        mergeCells(startRowIndex: number, startColIndex: number, endRowIndex: number, endColIndex: number): boolean;
        
        /**
         * Splits a cell with colspans or rowspans into multiple descrete cells.
         * @param {number} rowIndex y coordinate of the cell to split.
         * @param {number} colIndex x coordinate of the cell to split.
         * @return {!Array<Element>} Array of new cell elements created by splitting
         *     the cell.
         */
        splitCell(rowIndex: number, colIndex: number): Array<Element>;
        
        /**
         * Inserts a cell element at the given position. The colIndex is the logical
         * column index, not the position in the dom. This takes into consideration
         * that cells in a given logical  row may actually be children of a previous
         * DOM row that have used rowSpan to extend into the row.
         * @param {Element} td The new cell element to insert.
         * @param {number} rowIndex Row in which to insert the element.
         * @param {number} colIndex Column in which to insert the element.
         */
        insertCellElement(td: Element, rowIndex: number, colIndex: number): void;
        
        /**
         * Creates an empty TD element and fill it with some empty content so it will
         * show up with borders even in IE pre-7 or if empty-cells is set to 'hide'
         * @return {!Element} a new TD element.
         */
        createEmptyTd(): Element;
        
        /**
         * Creates a new table element, populated with cells and formatted.
         * @param {Document} doc Document in which to create the table element.
         * @param {number} columns Number of columns in the table.
         * @param {number} rows Number of rows in the table.
         * @param {Object=} opt_tableStyle Object containing borderWidth and borderColor
         *    properties, used to set the inital style of the table.
         * @return {!Element} a table element.
         */
        static createDomTable(doc: Document, columns: number, rows: number, opt_tableStyle?: Object): Element;
    }

    /**
     * Class representing a logical table row: a tr element and any cells
     * that appear in that row.
     * @param {Element} trElement This rows's underlying TR element.
     * @param {number} rowIndex This row's index in its parent table.
     * @constructor
     * @final
     */
    class TableRow {
        constructor(trElement: Element, rowIndex: number);
    }

    /**
     * Class representing a table cell, which may span across multiple
     * rows and columns
     * @param {Element} td This cell's underlying TD or TH element.
     * @param {number} startRow Index of the row where this cell begins.
     * @param {number} startCol Index of the column where this cell begins.
     * @constructor
     * @final
     */
    class TableCell {
        constructor(td: Element, startRow: number, startCol: number);
        
        /**
         * Set this cell's colSpan, updating both its colSpan property and the
         * underlying element's colSpan attribute.
         * @param {number} colSpan The new colSpan.
         */
        setColSpan(colSpan: number): void;
        
        /**
         * Set this cell's rowSpan, updating both its rowSpan property and the
         * underlying element's rowSpan attribute.
         * @param {number} rowSpan The new rowSpan.
         */
        setRowSpan(rowSpan: number): void;
    }
}
