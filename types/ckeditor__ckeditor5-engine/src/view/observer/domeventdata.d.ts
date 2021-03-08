import ViewDocument from "../document";
import ViewElement from "../element";
import View from "../view";

/**
 * Information about a DOM event in context of the {@link module:engine/view/document~Document}.
 * It wraps the native event, which usually should not be used as the wrapper contains
 * additional data (like key code for keyboard events).
 */
export default class DomEventData {
    constructor(view: View, domEvent: Event, additionalData?: Record<string, string>);
    /**
     * The instance of the view.
     */
    readonly view: View;
    /**
     * The instance of the document.
     */
    readonly document: ViewDocument;
    /**
     * The DOM event.
     */
    readonly domEvent: Event;

    /**
     * The DOM target.
     */
    readonly domTarget: HTMLElement;

    /**
     * The tree view element representing the target.
     */
    get target(): ViewElement;

    /**
     * Prevents the native's event default action.
     */
    preventDefault(): void;

    /**
     * Stops native event propagation.
     */
    stopPropagation(): void;
}
