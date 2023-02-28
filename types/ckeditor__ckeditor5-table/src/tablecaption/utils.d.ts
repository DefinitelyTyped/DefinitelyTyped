import ModelDocumentSelection from '@ckeditor/ckeditor5-engine/src/model/documentselection';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import ModelSelection from '@ckeditor/ckeditor5-engine/src/model/selection';
import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';

/**
 * Checks if the provided model element is a `table`.
 */
export function isTable(modelElement: ModelElement): boolean;

/**
 * Returns the caption model element from a given table element. Returns `null` if no caption is found.
 */
export function getCaptionFromTableModelElement(tableModelElement: ModelElement): ModelElement | null;

/**
 * Returns the caption model element for a model selection. Returns `null` if the selection has no caption element ancestor.
 */
export function getCaptionFromModelSelection(selection: ModelSelection | ModelDocumentSelection): ModelElement | null;

/**
 * {@link module:engine/view/matcher~Matcher} pattern. Checks if a given element is a caption.
 *
 * There are two possible forms of the valid caption:
 *  - A `<figcaption>` element inside a `<figure class="table">` element.
 *  - A `<caption>` inside a <table>.
 */
export function matchTableCaptionViewElement(element: ViewElement): null | { name: true };

/**
 * Depending on the position of the selection we either return the table under cursor or look for the table higher in the hierarchy.
 */
export function getSelectionAffectedTable(selection: ModelPosition): ModelElement;
