import "jquery";
import { TablesorterConfigurationStore } from "./TablesorterConfigurationStore";

/**
 * Provides the functionality to handle the `RenderHeader`-event.
 */
export interface RenderHeaderEventHandler<TElement = HTMLElement> {
    /**
     * Handles the `RenderHeader`-event.
     *
     * @param index
     * The zero-based index of the current table header cell.
     *
     * @param config
     * The current configuration of the table.
     *
     * @param table
     * The jQuery-object of the table.
     */
    (index: number, config: TablesorterConfigurationStore<TElement>, table: JQuery<TElement>): void;
}
