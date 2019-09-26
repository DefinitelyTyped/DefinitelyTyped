import { TablesorterConfigurationStore } from "../System/TablesorterConfigurationStore";
import { WidgetOptions } from "./WidgetOptions";

/**
 * Represents a widget.
 */
export interface Widget<TElement = HTMLElement> {
    /**
     * The identification of the widget.
     */
    id: string;

    /**
     * The priority of the widget.
     */
    priority: number;

    /**
     * The default options of the widget.
     */
    options: { [name: string]: any };

    /**
     * Initializes the widget.
     *
     * @param table
     * The table which is being processed.
     *
     * @param thisWidget
     * This instance of the widget.
     *
     * @param config
     * The configuration of the tablesorter.
     *
     * @param widgetOptions
     * The widget-options of the tablesorter.
     */
    init(table: TElement, thisWidget: this, config: TablesorterConfigurationStore<TElement>, widgetOptions: { [name: string]: any }): void;

    /**
     * Pre-processes the table after applying a sort.
     *
     * @param table
     * The table which is being processed.
     *
     * @param config
     * The configuration of the tablesorter.
     *
     * @param widgetOptions
     * The widget-options of the tablesorter.
     *
     * @param initializing
     * A value indicating whether the widget is being initialized.
     */
    format(table: TElement, config: TablesorterConfigurationStore<TElement>, widgetOptions: { [name: string]: any }, initializing: boolean): void;

    /**
     * Removes the widget from the table.
     *
     * @param table
     * The table which is being processed.
     *
     * @param config
     * The configuration of the tablesorter.
     *
     * @param widgetOptions
     * The widget-options of the tablesorter.
     *
     * @param refreshing
     * A value indicating whether the widgets are being refreshed.
     */
    remove(table: TElement, config: TablesorterConfigurationStore<TElement>, widgetOptions: { [name: string]: any }, refreshing: boolean): void;
}
