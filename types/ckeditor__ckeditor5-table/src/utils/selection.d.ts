import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import ModelRange from '@ckeditor/ckeditor5-engine/src/model/range';
import ModelSelection from '@ckeditor/ckeditor5-engine/src/model/selection';
import TableUtils from '../tableutils';

/**
 * Returns all model table cells that are fully selected (from the outside)
 * within the provided model selection's ranges.
 *
 * To obtain the cells selected from the inside, use
 * {@link module:table/utils/selection~getTableCellsContainingSelection}.
 */
export function getSelectedTableCells(selection: ModelSelection): ModelElement[];

/**
 * Returns all model table cells that the provided model selection's ranges
 * {@link module:engine/model/range~Range#start} inside.
 *
 * To obtain the cells selected from the outside, use
 * {@link module:table/utils/selection~getSelectedTableCells}.
 */
export function getTableCellsContainingSelection(selection: ModelSelection): ModelElement[];

/**
 * Returns all model table cells that are either completely selected
 * by selection ranges or host selection range
 * {@link module:engine/model/range~Range#start start positions} inside them.
 *
 * Combines {@link module:table/utils/selection~getTableCellsContainingSelection} and
 * {@link module:table/utils/selection~getSelectedTableCells}.
 */
export function getSelectionAffectedTableCells(selection: ModelSelection): ModelElement[];

/**
 * Returns an object with the `first` and `last` row index contained in the given `tableCells`.
 *
 *    const selectedTableCells = getSelectedTableCells( editor.model.document.selection );
 *
 *    const { first, last } = getRowIndexes( selectedTableCells );
 *
 *    console.log( `Selected rows: ${ first } to ${ last }` );
 */
export function getRowIndexes(tableCells: ModelElement[]): { first: ModelElement; last: ModelElement };

/**
 * Returns an object with the `first` and `last` column index contained in the given `tableCells`.
 *
 *    const selectedTableCells = getSelectedTableCells( editor.model.document.selection );
 *
 *    const { first, last } = getColumnIndexes( selectedTableCells );
 *
 *    console.log( `Selected columns: ${ first } to ${ last }` );
 */
export function getColumnIndexes(tableCells: ModelElement[]): { first: ModelElement; last: ModelElement };

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
export function isSelectionRectangular(selectedTableCells: ModelElement[], tableUtils: TableUtils): boolean;

/**
 * Returns array of sorted ranges.
 */
export function sortRanges(ranges: Iterable<ModelRange>): ModelRange[];
