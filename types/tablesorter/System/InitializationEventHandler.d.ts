/**
 * Provides the functionality to handle the `Initialized`-event.
 */
export interface InitializationEventHandler<TElement> {
    /**
     * Handles the `Initialized`-event.
     *
     * @param table
     * The initialized table.
     */
    (table: TElement): void;
}
