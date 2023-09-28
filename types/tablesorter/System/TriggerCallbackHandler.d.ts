/**
 * Provides the functionality to handle trigger-callbacks.
 */
export interface TriggerCallbackHandler<TElement = HTMLElement> {
    /**
     * Handles a trigger-callback.
     */
    (table: TElement): void;
}
