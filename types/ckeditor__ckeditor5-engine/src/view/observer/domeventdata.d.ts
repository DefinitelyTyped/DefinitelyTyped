import Document from '../document';
import Element from '../element';
import View from '../view';

/**
 * Information about a DOM event in context of the {@link module:engine/view/document~Document}.
 * It wraps the native event, which usually should not be used as the wrapper contains
 * additional data (like key code for keyboard events).
 */
export default class DomEventData<V extends View, K extends HTMLElementEventMap[keyof HTMLElementEventMap], L extends keyof K> {
    constructor(view: View, domEvent: K, additionalData?: Record<L, K[L]>);

    /**
     * Instance of the view controller.
     */
    readonly view: V;

    /**
     * The instance of the document.
     */
    readonly document: Document;

    /**
     * The DOM event.
     */
    readonly domEvent: K;

    /**
     * The DOM target.
     */
    readonly domTarget: K['target'];

    /**
     * The tree view element representing the target.
     */
    readonly target: Element;

    /**
     * Prevents the native's event default action.
     */
    preventDefault(): void;

    /**
     * Stops native event propagation.
     */
    stopPropagation(): void;
}
