import { EditingController, Model } from '@ckeditor/ckeditor5-engine';

/**
 * A table headings refresh handler which marks the table cells or rows in the differ to have it re-rendered
 * if the headings attribute changed.
 *
 * Table heading rows and heading columns are represented in the model by a `headingRows` and `headingColumns` attributes.
 *
 * When table headings attribute changes, all the cells/rows are marked to re-render to change between `<td>` and `<th>`.
 */
export default function tableHeadingsRefreshHandler(model: Model, editing: EditingController): void;
