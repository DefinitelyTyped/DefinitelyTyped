import "jquery";

/**
 * Provides the functionality to handle events of the `tablesorter`.
 */
export interface TablesorterEventHandler<TElement = HTMLElement> {
    /**
     * Handles events of the `tablesorter`.
     *
     * @param eventArgs
     * An object that contains event data.
     *
     * @param table
     * The table which is processed by the `tablesorter`.
     */
    (eventArgs: JQuery.TriggeredEvent<TElement, null, TElement, TElement>, table: TElement): void;
}
