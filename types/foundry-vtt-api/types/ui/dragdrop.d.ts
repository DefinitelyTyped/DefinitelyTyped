/**
 * A controller class for managing drag and drop workflows within an Application instance.
 * The controller manages the following actions: dragstart, dragover, drop
 * @see {@link Application}
 *
 * @param dragSelector	The CSS selector used to target draggable elements.
 * @param dropSelector	The CSS selector used to target viable drop targets.
 * @param permissions	An object of permission test functions for each action
 * @param callbacks		An object of callback functions for each action
 *
 * @example
 * const dragDrop = new DragDrop({
 *   dragSelector: ".item",
 *   dropSelector: ".items",
 *   permissions: { dragstart: this._canDragStart.bind(this), drop: this._canDragDrop.bind(this) }
 *   callbacks: { dragstart: this._onDragStart.bind(this), drop: this._onDragDrop.bind(this) }
 * });
 * dragDrop.bind(html);
 */
declare class DragDrop {
    // TODO
}
