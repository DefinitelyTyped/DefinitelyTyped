/**
 * Provides the functionality to handle filtering-events of the `tablesorter`.
 */
export interface FilterEventHandler<TElement = HTMLElement> {
    /**
     * Handles filtering-events of the `tablesorter`.
     */
    (eventArgs: JQuery.TriggeredEvent<TElement, null, TElement, TElement>, filters: string[]): void;
}
