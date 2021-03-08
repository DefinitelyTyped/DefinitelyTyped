import Observer from "./observer";

/**
 * Selection observer class observes selection changes in the document. If a selection changes on the document this
 * observer checks if there are any mutations and if the DOM selection is different from the
 * {@link module:engine/view/document~Document#selection view selection}. The selection observer fires
 * {@link module:engine/view/document~Document#event:selectionChange} event only if a selection change was the only change in the document
 * and the DOM selection is different then the view selection.
 *
 * Note that this observer is attached by the {@link module:engine/view/view~View} and is available by default.
 *
 * @see module:engine/view/observer/mutationobserver~MutationObserver
 */
export default class SelectionObserver extends Observer {}
