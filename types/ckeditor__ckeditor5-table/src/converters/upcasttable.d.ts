import UpcastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';

/**
 * Returns a function that converts the table view representation:
 *
 *    <figure class="table"><table>...</table></figure>
 *
 * to the model representation:
 *
 *    <table></table>
 */
export function upcastTableFigure(): (dispatcher: UpcastDispatcher) => void;

/**
 * View table element to model table element conversion helper.
 *
 * This conversion helper converts the table element as well as table rows.
 */
export default function upcastTable(): (dispatcher: UpcastDispatcher) => void;

/**
 * A conversion helper that skips empty <tr> elements from upcasting at the beginning of the table.
 *
 * An empty row is considered a table model error but when handling clipboard data there could be rows that contain only row-spanned cells
 * and empty TR-s are used to maintain the table structure (also {@link module:table/tablewalker~TableWalker} assumes that there are only
 * rows that have related `tableRow` elements).
 *
 * *Note:* Only the first empty rows are removed because they have no meaning and it solves the issue
 * of an improper table with all empty rows.
 */
export function skipEmptyTableRow(): (dispatcher: UpcastDispatcher) => void;

/**
 * A converter that ensures an empty paragraph is inserted in a table cell if no other content was converted.
 */
export function ensureParagraphInTableCell(elementName: string): (dispatcher: UpcastDispatcher) => void;
