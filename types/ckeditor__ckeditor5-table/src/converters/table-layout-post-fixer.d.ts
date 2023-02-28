import { Model } from '@ckeditor/ckeditor5-engine';

/**
 * Injects a table layout post-fixer into the model.
 *
 * The role of the table layout post-fixer is to ensure that the table rows have the correct structure
 * after a {@link module:engine/model/model~Model#change `change()`} block was executed.
 *
 * The correct structure means that:
 *
 * * All table rows have the same size.
 * * None of the table cells extend vertically beyond their section (either header or body).
 * * A table cell has always at least one element as a child.
 *
 * If the table structure is not correct, the post-fixer will automatically correct it in two steps:
 *
 * 1. It will clip table cells that extend beyond their section.
 * 2. It will add empty table cells to the rows that are narrower than the widest table row.
 *
 * ## Clipping overlapping table cells
 *
 * Such situation may occur when pasting a table (or a part of a table) to the editor from external sources.
 *
 * For example, see the following table which has a cell (FOO) with the rowspan attribute (2):
 *
 *    <table headingRows="1">
 *      <tableRow>
 *        <tableCell rowspan="2"><paragraph>FOO</paragraph></tableCell>
 *        <tableCell colspan="2"><paragraph>BAR</paragraph></tableCell>
 *      </tableRow>
 *      <tableRow>
 *        <tableCell><paragraph>BAZ</paragraph></tableCell>
 *        <tableCell><paragraph>XYZ</paragraph></tableCell>
 *      </tableRow>
 *    </table>
 *
 * It will be rendered in the view as:
 *
 *    <table>
 *      <thead>
 *        <tr>
 *          <td rowspan="2">FOO</td>
 *          <td colspan="2">BAR</td>
 *        </tr>
 *      </thead>
 *      <tbody>
 *        <tr>
 *          <td>BAZ</td>
 *          <td>XYZ</td>
 *        </tr>
 *      </tbody>
 *    </table>
 *
 * In the above example the table will be rendered as a table with two rows: one in the header and second one in the body.
 * The table cell (FOO) cannot span over multiple rows as it would extend from the header to the body section.
 * The `rowspan` attribute must be changed to (1). The value (1) is the default value of the `rowspan` attribute
 * so the `rowspan` attribute will be removed from the model.
 *
 * The table cell with BAZ in the content will be in the first column of the table.
 *
 * ## Adding missing table cells
 *
 * The table post-fixer will insert empty table cells to equalize table row sizes (the number of columns).
 * The size of a table row is calculated by counting column spans of table cells, both horizontal (from the same row) and
 * vertical (from the rows above).
 *
 * In the above example, the table row in the body section of the table is narrower then the row from the header: it has two cells
 * with the default colspan (1). The header row has one cell with colspan (1) and the second with colspan (2).
 * The table cell (FOO) does not extend beyond the head section (and as such will be fixed in the first step of this post-fixer).
 * The post-fixer will add a missing table cell to the row in the body section of the table.
 *
 * The table from the above example will be fixed and rendered to the view as below:
 *
 *    <table>
 *      <thead>
 *        <tr>
 *          <td rowspan="2">FOO</td>
 *          <td colspan="2">BAR</td>
 *        </tr>
 *      </thead>
 *      <tbody>
 *        <tr>
 *          <td>BAZ</td>
 *          <td>XYZ</td>
 *        </tr>
 *      </tbody>
 *    </table>
 *
 * ## Collaboration and undo - Expectations vs post-fixer results
 *
 * The table post-fixer only ensures proper structure without a deeper analysis of the nature of the change. As such, it might lead
 * to a structure which was not intended by the user. In particular, it will also fix undo steps (in conjunction with collaboration)
 * in which the editor content might not return to the original state.
 *
 * This will usually happen when one or more users change the size of the table.
 *
 * As an example see the table below:
 *
 *    <table>
 *      <tbody>
 *        <tr>
 *          <td>11</td>
 *          <td>12</td>
 *        </tr>
 *        <tr>
 *          <td>21</td>
 *          <td>22</td>
 *        </tr>
 *      </tbody>
 *    </table>
 *
 * and the user actions:
 *
 * 1. Both users have a table with two rows and two columns.
 * 2. User A adds a column at the end of the table. This will insert empty table cells to two rows.
 * 3. User B adds a row at the end of the table. This will insert a row with two empty table cells.
 * 4. Both users will have a table as below:
 *
 *
 *    <table>
 *      <tbody>
 *        <tr>
 *          <td>11</td>
 *          <td>12</td>
 *          <td>(empty, inserted by A)</td>
 *        </tr>
 *        <tr>
 *          <td>21</td>
 *          <td>22</td>
 *          <td>(empty, inserted by A)</td>
 *        </tr>
 *        <tr>
 *          <td>(empty, inserted by B)</td>
 *          <td>(empty, inserted by B)</td>
 *        </tr>
 *      </tbody>
 *    </table>
 *
 * The last row is shorter then others so the table post-fixer will add an empty row to the last row:
 *
 *    <table>
 *      <tbody>
 *        <tr>
 *          <td>11</td>
 *          <td>12</td>
 *          <td>(empty, inserted by A)</td>
 *        </tr>
 *        <tr>
 *          <td>21</td>
 *          <td>22</td>
 *          <td>(empty, inserted by A)</td>
 *        </tr>
 *        <tr>
 *          <td>(empty, inserted by B)</td>
 *          <td>(empty, inserted by B)</td>
 *          <td>(empty, inserted by the post-fixer)</td>
 *        </tr>
 *      </tbody>
 *    </table>
 *
 * Unfortunately undo does not know the nature of the changes and depending on which user applies the post-fixer changes, undoing them
 * might lead to a broken table. If User B undoes inserting the column to the table, the undo engine will undo only the operations of
 * inserting empty cells to rows from the initial table state (row 1 and 2) but the cell in the post-fixed row will remain:
 *
 *    <table>
 *      <tbody>
 *        <tr>
 *          <td>11</td>
 *          <td>12</td>
 *        </tr>
 *        <tr>
 *          <td>21</td>
 *          <td>22</td>
 *        </tr>
 *        <tr>
 *          <td>(empty, inserted by B)</td>
 *          <td>(empty, inserted by B)</td>
 *          <td>(empty, inserted by a post-fixer)</td>
 *        </tr>
 *      </tbody>
 *    </table>
 *
 * After undo, the table post-fixer will detect that two rows are shorter than others and will fix the table to:
 *
 *    <table>
 *      <tbody>
 *        <tr>
 *          <td>11</td>
 *          <td>12</td>
 *          <td>(empty, inserted by a post-fixer after undo)</td>
 *        </tr>
 *        <tr>
 *          <td>21</td>
 *          <td>22</td>
 *          <td>(empty, inserted by a post-fixer after undo)</td>
 *        </tr>
 *        <tr>
 *          <td>(empty, inserted by B)</td>
 *          <td>(empty, inserted by B)</td>
 *          <td>(empty, inserted by a post-fixer)</td>
 *        </tr>
 *      </tbody>
 *    </table>
 */
export default function injectTableLayoutPostFixer(model: Model): void;
