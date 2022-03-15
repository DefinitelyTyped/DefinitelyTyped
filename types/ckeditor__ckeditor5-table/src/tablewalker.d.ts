import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';

/**
 * The table iterator class. It allows to iterate over table cells. For each cell the iterator yields
 * {@link module:table/tablewalker~TableSlot} with proper table cell attributes.
 */
export default class TableWalker {
    /**
     * Creates an instance of the table walker.
     *
     * The table walker iterates internally by traversing the table from row index = 0 and column index = 0.
     * It walks row by row and column by column in order to output values defined in the constructor.
     * By default it will output only the locations that are occupied by a cell. To include also spanned rows and columns,
     * pass the `includeAllSlots` option to the constructor.
     *
     * The most important values of the iterator are column and row indexes of a cell.
     *
     * See {@link module:table/tablewalker~TableSlot} what values are returned by the table walker.
     *
     * To iterate over a given row:
     *
     *    const tableWalker = new TableWalker( table, { startRow: 1, endRow: 2 } );
     *
     *    for ( const tableSlot of tableWalker ) {
     *      console.log( 'A cell at row', tableSlot.row, 'and column', tableSlot.column );
     *    }
     *
     * For instance the code above for the following table:
     *
     *    +----+----+----+----+----+----+
     *    | 00      | 02 | 03 | 04 | 05 |
     *    |         +----+----+----+----+
     *    |         | 12      | 14 | 15 |
     *    |         +----+----+----+    +
     *    |         | 22           |    |
     *    |----+----+----+----+----+    +
     *    | 30 | 31 | 32 | 33 | 34 |    |
     *    +----+----+----+----+----+----+
     *
     * will log in the console:
     *
     *    'A cell at row 1 and column 2'
     *    'A cell at row 1 and column 4'
     *    'A cell at row 1 and column 5'
     *    'A cell at row 2 and column 2'
     *
     * To also iterate over spanned cells:
     *
     *    const tableWalker = new TableWalker( table, { row: 1, includeAllSlots: true } );
     *
     *    for ( const tableSlot of tableWalker ) {
     *      console.log( 'Slot at', tableSlot.row, 'x', tableSlot.column, ':', tableSlot.isAnchor ? 'is anchored' : 'is spanned' );
     *    }
     *
     * will log in the console for the table from the previous example:
     *
     *    'Cell at 1 x 0 : is spanned'
     *    'Cell at 1 x 1 : is spanned'
     *    'Cell at 1 x 2 : is anchored'
     *    'Cell at 1 x 3 : is spanned'
     *    'Cell at 1 x 4 : is anchored'
     *    'Cell at 1 x 5 : is anchored'
     *
     * **Note**: Option `row` is a shortcut that sets both `startRow` and `endRow` to the same row.
     * (Use either `row` or `startRow` and `endRow` but never together). Similarly the `column` option sets both `startColumn`
     * and `endColumn` to the same column (Use either `column` or `startColumn` and `endColumn` but never together).
     */
    constructor(
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
    );

    [Symbol.iterator](): this;

    /**
     * Gets the next table walker's value.
     */
    next(): TableSlot;

    /**
     * Marks a row to skip in the next iteration. It will also skip cells from the current row if there are any cells from the current row
     * to output.
     */
    skipRow(row: number): void;
}

/**
 * An object returned by {@link module:table/tablewalker~TableWalker} when traversing table cells.
 */
export class TableSlot {
    /**
     * Creates an instance of the table walker value.
     */
    constructor(tableWalker: TableWalker, cell: ModelElement, anchorRow: number, anchorColumn: number);
    /**
     * The current table cell.
     */
    readonly cell: ModelElement;
    /**
     * The row index of a table slot.
     */
    readonly row: number;

    /**
     * The column index of a table slot.
     */
    readonly column: number;

    /**
     * The row index of a cell anchor slot.
     */
    readonly cellAnchorRow: number;

    /**
     * The column index of a cell anchor slot.
     */
    readonly cellAnchorColumn: number;

    /**
     * Whether the cell is anchored in the current slot.
     */
    readonly isAnchor: boolean;

    /**
     * The width of a cell defined by a `colspan` attribute. If the model attribute is not present, it is set to `1`.
     */
    readonly cellWidth: number;

    /**
     * The height of a cell defined by a `rowspan` attribute. If the model attribute is not present, it is set to `1`.
     */
    readonly cellHeight: number;

    /**
     * The index of the current row element in the table.
     */
    readonly rowIndex: number;

    /**
     * Returns the {@link module:engine/model/position~Position} before the table slot.
     */
    getPositionBefore(): ModelPosition;
}
