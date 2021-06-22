import "jquery";

/**
 * Provides the functionality to handle common events of the `tablesorter`.
 */
export interface CommonEventHandler<TElement = HTMLElement> {
    /**
     * Handles common events of the `tablesorter`.
     *
     * @param eventArgs
     * An object that contains event data.
     */
    (eventArgs: JQuery.TriggeredEvent<TElement, null, TElement, TElement>): void;
}
