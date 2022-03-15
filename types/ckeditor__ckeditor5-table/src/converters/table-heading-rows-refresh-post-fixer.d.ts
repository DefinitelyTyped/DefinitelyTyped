import { Model } from '@ckeditor/ckeditor5-engine';

/**
 * Injects a table post-fixer into the model which marks the table in the differ to have it re-rendered.
 *
 * Table heading rows are represented in the model by a `headingRows` attribute. However, in the view, it's represented as separate
 * sections of the table (`<thead>` or `<tbody>`) and changing `headingRows` attribute requires moving table rows between two sections.
 * This causes problems with structural changes in a table (like adding and removing rows) thus atomic converters cannot be used.
 *
 * When table `headingRows` attribute changes, the entire table is re-rendered.
 */
export default function injectTableHeadingRowsRefreshPostFixer(model: Model): void;
