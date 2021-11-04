import "jquery";
import { TablesorterConfigurationStore } from "../System/TablesorterConfigurationStore";
import { PagerConfigurationStore } from "./PagerConfigurationStore";

/**
 * Provides the functionality to handle pager-events of the `tablesorter`.
 */
export interface PagerEventHandler<TElement = HTMLElement> {
    /**
     * Handles pager-events of the `tablesorter`.
     *
     * @param eventArgs
     * An object that contains event data.
     *
     * @param options
     * Either the options of the configuration of the tablesorter or the configuration of the pager-widget.
     */
    (eventArgs: JQuery.TriggeredEvent<TElement, null, TElement, TElement>, options: TablesorterConfigurationStore<TElement> | PagerConfigurationStore<TElement>): void;
}
