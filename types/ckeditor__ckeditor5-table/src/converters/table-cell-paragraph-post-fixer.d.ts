import { Model } from '@ckeditor/ckeditor5-engine';

/**
 * Injects a table cell post-fixer into the model which inserts a `paragraph` element into empty table cells.
 *
 * A table cell must contain at least one block element as a child. An empty table cell will have an empty `paragraph` as a child.
 *
 *    <table>
 *      <tableRow>
 *        <tableCell></tableCell>
 *      </tableRow>
 *    </table>
 *
 * Will be fixed to:
 *
 *    <table>
 *      <tableRow>
 *        <tableCell><paragraph></paragraph></tableCell>
 *      </tableRow>
 *    </table>
 */
export default function injectTableCellParagraphPostFixer(model: Model): void;
