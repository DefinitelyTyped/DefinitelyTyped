import { Plugin } from '@ckeditor/ckeditor5-core';
import { Element as ModelElement, Range as ModelRange } from '@ckeditor/ckeditor5-engine';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import TableWalker from './tablewalker';
import ModelSelection from '@ckeditor/ckeditor5-engine/src/model/selection';

/**
 * The table utilities plugin.
 */
export default class TableUtils extends Plugin {
    static readonly pluginName: 'TableUtils';
    init(): void;

    /**
     * Returns the table cell location as an object with table row and table column indexes.
     *
     * For instance, in the table below:
     *
     *        0   1   2   3
     *      +---+---+---+---+
     *    0 | a     | b | c |
     *      +       +   +---+
     *    1 |       |   | d |
     *      +---+---+   +---+
     *    2 | e     |   | f |
     *      +---+---+---+---+
     *
     * the method will return:
     *
     *    const cellA = table.getNodeByPath( [ 0, 0 ] );
     *    editor.plugins.get( 'TableUtils' ).getCellLocation( cellA );
     *    // will return { row: 0, column: 0 }
     *
     *    const cellD = table.getNodeByPath( [ 1, 0 ] );
     *    editor.plugins.get( 'TableUtils' ).getCellLocation( cellD );
     *    // will return { row: 1, column: 3 }
     */
    getCellLocation(tableCell: ModelElement): { row: number; column: number } | void;

    /**
     * Creates an empty table with a proper structure. The table needs to be inserted into the model,
     * for example, by using the {@link module:engine/model/model~Model#insertContent} function.
     *
     *    model.change( ( writer ) => {
     *      // Create a table of 2 rows and 7 columns:
     *      const table = tableUtils.createTable( writer, { rows: 2, columns: 7 } );
     *
     *      // Insert a table to the model at the best position taking the current selection:
     *      model.insertContent( table );
     *    }
     */
    createTable(
        writer: Writer,
        options?: { rows?: number; columns?: number; headingRows?: number; headingColumns?: number },
    ): ModelElement;

    /**
     * Inserts rows into a table.
     *
     *    editor.plugins.get( 'TableUtils' ).insertRows( table, { at: 1, rows: 2 } );
     *
     * Assuming the table on the left, the above code will transform it to the table on the right:
     *
     *    row index
     *      0 +---+---+---+       `at` = 1,      +---+---+---+ 0
     *        | a | b | c |       `rows` = 2,    | a | b | c |
     *      1 +   +---+---+   <-- insert here    +   +---+---+ 1
     *        |   | d | e |                      |   |   |   |
     *      2 +   +---+---+       will give:     +   +---+---+ 2
     *        |   | f | g |                      |   |   |   |
     *      3 +---+---+---+                      +   +---+---+ 3
     *                                           |   | d | e |
     *                                           +   +---+---+ 4
     *                                           +   + f | g |
     *                                           +---+---+---+ 5
     */
    insertRows(table: ModelElement, options?: { at?: number; rows?: number; copyStructureFromAbove?: boolean }): void;

    /**
     * Inserts columns into a table.
     *
     *    editor.plugins.get( 'TableUtils' ).insertColumns( table, { at: 1, columns: 2 } );
     *
     * Assuming the table on the left, the above code will transform it to the table on the right:
     *
     *    0   1   2   3                   0   1   2   3   4   5
     *    +---+---+---+                   +---+---+---+---+---+
     *    | a     | b |                   | a             | b |
     *    +       +---+                   +               +---+
     *    |       | c |                   |               | c |
     *    +---+---+---+     will give:    +---+---+---+---+---+
     *    | d | e | f |                   | d |   |   | e | f |
     *    +---+   +---+                   +---+---+---+   +---+
     *    | g |   | h |                   | g |   |   |   | h |
     *    +---+---+---+                   +---+---+---+---+---+
     *    | i         |                   | i                 |
     *    +---+---+---+                   +---+---+---+---+---+
     *        ^---- insert here, `at` = 1, `columns` = 2
     */
    insertColumns(table: ModelElement, options?: { at?: number; columns?: number }): void;

    /**
     * Removes rows from the given `table`.
     *
     * This method re-calculates the table geometry including `rowspan` attribute of table cells overlapping removed rows
     * and table headings values.
     *
     *    editor.plugins.get( 'TableUtils' ).removeRows( table, { at: 1, rows: 2 } );
     *
     * Executing the above code in the context of the table on the left will transform its structure as presented on the right:
     *
     *    row index
     *        ┌───┬───┬───┐        `at` = 1        ┌───┬───┬───┐
     *      0 │ a │ b │ c │        `rows` = 2      │ a │ b │ c │ 0
     *        │   ├───┼───┤                        │   ├───┼───┤
     *      1 │   │ d │ e │  <-- remove from here  │   │ d │ g │ 1
     *        │   │   ├───┤        will give:      ├───┼───┼───┤
     *      2 │   │   │ f │                        │ h │ i │ j │ 2
     *        │   │   ├───┤                        └───┴───┴───┘
     *      3 │   │   │ g │
     *        ├───┼───┼───┤
     *      4 │ h │ i │ j │
     *        └───┴───┴───┘
     */
    removeRows(table: ModelElement, options?: { at?: number; rows?: number }): void;

    /**
     * Removes columns from the given `table`.
     *
     * This method re-calculates the table geometry including the `colspan` attribute of table cells overlapping removed columns
     * and table headings values.
     *
     *    editor.plugins.get( 'TableUtils' ).removeColumns( table, { at: 1, columns: 2 } );
     *
     * Executing the above code in the context of the table on the left will transform its structure as presented on the right:
     *
     *      0   1   2   3   4                       0   1   2
     *    ┌───────────────┬───┐                   ┌───────┬───┐
     *    │ a             │ b │                   │ a     │ b │
     *    │               ├───┤                   │       ├───┤
     *    │               │ c │                   │       │ c │
     *    ├───┬───┬───┬───┼───┤     will give:    ├───┬───┼───┤
     *    │ d │ e │ f │ g │ h │                   │ d │ g │ h │
     *    ├───┼───┼───┤   ├───┤                   ├───┤   ├───┤
     *    │ i │ j │ k │   │ l │                   │ i │   │ l │
     *    ├───┴───┴───┴───┴───┤                   ├───┴───┴───┤
     *    │ m                 │                   │ m         │
     *    └───────────────────┘                   └───────────┘
     *          ^---- remove from here, `at` = 1, `columns` = 2
     */
    removeColumns(table: ModelElement, options?: { at?: number; columns?: number }): void;

    /**
     * Divides a table cell vertically into several ones.
     *
     * The cell will be visually split into more cells by updating colspans of other cells in a column
     * and inserting cells (columns) after that cell.
     *
     * In the table below, if cell "a" is split into 3 cells:
     *
     *    +---+---+---+
     *    | a | b | c |
     *    +---+---+---+
     *    | d | e | f |
     *    +---+---+---+
     *
     * it will result in the table below:
     *
     *    +---+---+---+---+---+
     *    | a |   |   | b | c |
     *    +---+---+---+---+---+
     *    | d         | e | f |
     *    +---+---+---+---+---+
     *
     * So cell "d" will get its `colspan` updated to `3` and 2 cells will be added (2 columns will be created).
     *
     * Splitting a cell that already has a `colspan` attribute set will distribute the cell `colspan` evenly and the remainder
     * will be left to the original cell:
     *
     *    +---+---+---+
     *    | a         |
     *    +---+---+---+
     *    | b | c | d |
     *    +---+---+---+
     *
     * Splitting cell "a" with `colspan=3` into 2 cells will create 1 cell with a `colspan=a` and cell "a" that will have `colspan=2`:
     *
     *    +---+---+---+
     *    | a     |   |
     *    +---+---+---+
     *    | b | c | d |
     *    +---+---+---+
     */
    splitCellVertically(tableCell: ModelElement, numberOfCells: number): void;

    /**
     * Divides a table cell horizontally into several ones.
     *
     * The cell will be visually split into more cells by updating rowspans of other cells in the row and inserting rows with a single cell
     * below.
     *
     * If in the table below cell "b" is split into 3 cells:
     *
     *    +---+---+---+
     *    | a | b | c |
     *    +---+---+---+
     *    | d | e | f |
     *    +---+---+---+
     *
     * It will result in the table below:
     *
     *    +---+---+---+
     *    | a | b | c |
     *    +   +---+   +
     *    |   |   |   |
     *    +   +---+   +
     *    |   |   |   |
     *    +---+---+---+
     *    | d | e | f |
     *    +---+---+---+
     *
     * So cells "a" and "b" will get their `rowspan` updated to `3` and 2 rows with a single cell will be added.
     *
     * Splitting a cell that already has a `rowspan` attribute set will distribute the cell `rowspan` evenly and the remainder
     * will be left to the original cell:
     *
     *    +---+---+---+
     *    | a | b | c |
     *    +   +---+---+
     *    |   | d | e |
     *    +   +---+---+
     *    |   | f | g |
     *    +   +---+---+
     *    |   | h | i |
     *    +---+---+---+
     *
     * Splitting cell "a" with `rowspan=4` into 3 cells will create 2 cells with a `rowspan=1` and cell "a" will have `rowspan=2`:
     *
     *    +---+---+---+
     *    | a | b | c |
     *    +   +---+---+
     *    |   | d | e |
     *    +---+---+---+
     *    |   | f | g |
     *    +---+---+---+
     *    |   | h | i |
     *    +---+---+---+
     */
    splitCellHorizontally(tableCell: ModelElement, numberOfCells?: number): void;

    /**
     * Returns the number of columns for a given table.
     *
     *    editor.plugins.get( 'TableUtils' ).getColumns( table );
     */
    getColumns(table: ModelElement): number;

    /**
     * Returns the number of rows for a given table. Any other element present in the table model is omitted.
     *
     *    editor.plugins.get( 'TableUtils' ).getRows( table );
     */
    getRows(table: ModelElement): number;

    /**
     * Creates an instance of the table walker.
     *
     * The table walker iterates internally by traversing the table from row index = 0 and column index = 0.
     * It walks row by row and column by column in order to output values defined in the options.
     * By default it will output only the locations that are occupied by a cell. To include also spanned rows and columns,
     * pass the `includeAllSlots` option.
     */
    createTableWalker(
        table: ModelElement,
        options?: {
            row?: number;
            startRow?: number;
            endRow?: number;
            column?: number;
            startColumn?: number;
            endColumn?: number;
            includeAllSlots?: boolean;
        },
    ): TableWalker;

    /**
     * Returns all model table cells that are fully selected (from the outside)
     * within the provided model selection's ranges.
     *
     * To obtain the cells selected from the inside, use
     * {@link #getTableCellsContainingSelection}.
     */
    getSelectedTableCells(selection: ModelSelection): ModelElement[];

    /**
     * Returns all model table cells that the provided model selection's ranges
     * {@link module:engine/model/range~Range#start} inside.
     *
     * To obtain the cells selected from the outside, use
     * {@link #getSelectedTableCells}.
     */
    getTableCellsContainingSelection(selection: ModelSelection): ModelElement[];

    /**
     * Returns all model table cells that are either completely selected
     * by selection ranges or host selection range
     * {@link module:engine/model/range~Range#start start positions} inside them.
     *
     * Combines {@link #getTableCellsContainingSelection} and
     * {@link #getSelectedTableCells}.
     */
    getSelectionAffectedTableCells(selection: ModelSelection): ModelElement[];

    /**
     * Returns an object with the `first` and `last` row index contained in the given `tableCells`.
     *
     *    const selectedTableCells = getSelectedTableCells( editor.model.document.selection );
     *
     *    const { first, last } = getRowIndexes( selectedTableCells );
     *
     *    console.log( `Selected rows: ${ first } to ${ last }` );
     */
    getRowIndexes(tableCells: ModelElement[]): { first: number; last: number };

    /**
     * Returns an object with the `first` and `last` column index contained in the given `tableCells`.
     *
     *    const selectedTableCells = getSelectedTableCells( editor.model.document.selection );
     *
     *    const { first, last } = getColumnIndexes( selectedTableCells );
     *
     *    console.log( `Selected columns: ${ first } to ${ last }` );
     */
    getColumnIndexes(tableCells: ModelElement[]): { first: number; last: number };

    /**
     * Checks if the selection contains cells that do not exceed rectangular selection.
     *
     * In a table below:
     *
     *    ┌───┬───┬───┬───┐
     *    │ a │ b │ c │ d │
     *    ├───┴───┼───┤   │
     *    │ e     │ f │   │
     *    │       ├───┼───┤
     *    │       │ g │ h │
     *    └───────┴───┴───┘
     *
     * Valid selections are these which create a solid rectangle (without gaps), such as:
     *   - a, b (two horizontal cells)
     *   - c, f (two vertical cells)
     *   - a, b, e (cell "e" spans over four cells)
     *   - c, d, f (cell d spans over a cell in the row below)
     *
     * While an invalid selection would be:
     *   - a, c (the unselected cell "b" creates a gap)
     *   - f, g, h (cell "d" spans over a cell from the row of "f" cell - thus creates a gap)
     */
    isSelectionRectangular(selectedTableCells: ModelElement[]): boolean;

    /**
     * Returns array of sorted ranges.
     */
    sortRanges(ranges: Iterable<ModelRange>): ModelRange[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableUtils: TableUtils;
    }
}
