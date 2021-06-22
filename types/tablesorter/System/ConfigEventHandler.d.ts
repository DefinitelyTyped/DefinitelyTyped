import "jquery";
import { TablesorterConfigurationStore } from "./TablesorterConfigurationStore";

/**
 * Provides the functionality to handle config-events of the `tablesorter`.
 */
export interface ConfigEventHandler<TElement = HTMLElement> {
    /**
     * Handles config-events of the `tablesorter`.
     *
     * @param eventArgs
     * An object that contains event data.
     *
     * @param config
     * The configuration of the table processed by the `tablesorter`.
     */
    (eventArgs: JQuery.TriggeredEvent<TElement, null, TElement, TElement>, config: TablesorterConfigurationStore<TElement>): void;
}
