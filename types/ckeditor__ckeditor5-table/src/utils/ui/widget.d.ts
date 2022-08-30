import ViewSelection from '@ckeditor/ckeditor5-engine/src/view/selection';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import ViewDocumentSelection from '@ckeditor/ckeditor5-engine/src/view/documentselection';
/**
 * Returns a table widget editing view element if one is selected.
 */
export function getSelectedTableWidget(selection: ViewSelection | ViewDocumentSelection): ViewElement | null;

/**
 * Returns a table widget editing view element if one is among the selection's ancestors.
 */
export function getTableWidgetAncestor(selection: ViewSelection | ViewDocumentSelection): Element | null;
