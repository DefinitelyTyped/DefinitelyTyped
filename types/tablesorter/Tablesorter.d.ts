import { ThemeCollection } from "./Design/ThemeCollection";
import { FilterStatic } from "./Filtering/FilterStatic";
import { FilterFormatter } from "./Filtering/Formatter/FilterFormatter";
import { ParsedCell } from "./Parsing/ParsedCell";
import { ParsedData } from "./Parsing/ParsedData";
import { Parser } from "./Parsing/Parser";
import { Locale } from "./System/Locale";
import { TablesorterConfiguration } from "./System/TablesorterConfiguration";
import { SortDefinition } from "./Sorting/SortDefinition";
import { TablesorterConfigurationStore } from "./System/TablesorterConfigurationStore";
import { RelativeSortDefinition } from "./Sorting/RelativeSortDefinition";
import { TriggerCallbackHandler } from "./System/TriggerCallbackHandler";
import { Widget } from "./Widgets/Widget";
import { StorageConfiguration } from "./Storage/StorageConfiguration";
import { MappedSettings } from "./System/MappedSettings";
import { TablesorterHeading } from "./System/TablesorterHeading";
import { HeaderResizeOptions } from "./System/HeaderResizeOptions";
import { ParsedOption } from "./Parsing/ParsedOption";

/**
 * Represents the tablesorter.
 */
export interface Tablesorter<TElement = HTMLElement> {
    /**
     * The default settings.
     */
    defaults: TablesorterConfiguration<TElement>;

    /**
     * The settings of the themes.
     */
    themes: ThemeCollection;

    /**
     * The localized text for the tablesorter.
     */
    language: Locale;

    /**
     * The custom instance-methods added to the tablesorter.
     */
    instanceMethods: { [name: string]: () => any };

    /**
     * The parsers of the tablesorter.
     */
    parsers: Array<Parser<TElement>>;

    /**
     * The widgets of the tablesorter.
     */
    widgets: Array<Widget<TElement>>;

    /**
     * Provides methods for the `filter`-widget.
     */
    filter: FilterStatic<TElement>;

    /**
     * Provides methods for creating filter-controls.
     */
    filterFormatter: FilterFormatter;

    /**
     * Fetches all filters from the tablesorter.
     *
     * @param table
     * The table to get the filters from.
     *
     * @return
     * The filters applied to the `table`.
     */
    getFilters(table: JQuery<TElement> | TElement, cached?: boolean): string[];

    /**
     * Sets the filter-text of the tablesorter.
     *
     * @param table
     * The table to set the filter-text for.
     *
     * @param filter
     * The filter-text to set.
     *
     * @param apply
     * A value indicating whether to apply the filter after setting the filter-text.
     */
    setFilters(table: JQuery<TElement> | TElement, filter: ReadonlyArray<string>, apply?: boolean): void;

    /**
     * Adds instance-methods to the tablesorter.
     *
     * @param methods
     * The methods to add.
     */
    addInstanceMethods(methods: { [name: string]: () => any }): void;

    /**
     * Adds a parser to the tablesorter.
     *
     * @param parser
     * The parser to add.
     */
    addParser(parser: Parser<TElement>): void;

    /**
     * Adds a widget to the tablesorter.
     *
     * @param widget
     * The widget to add.
     */
    addWidget(widget: Widget<TElement>): void;

    /**
     * Verifies whether the specified `table` has a widget with the specified `id`.
     *
     * @param table
     * The table to check.
     *
     * @param id
     * The id of the widget to verify.
     *
     * @return
     * A value indicating whether a widget with the specified `id` is loaded for the specified `table`.
     */
    hasWidget(table: JQuery<TElement> | TElement, id: string): boolean;

    /**
     * Gets a parser of the tablesorter.
     *
     * @param id
     * The id of the parser to get.
     *
     * @return
     * The parser with the specified `id`.
     */
    getParserById(id: string): Parser<TElement>;

    /**
     * Gets a widget of the tablesorter.
     *
     * @param id
     * The id of the widget to get.
     *
     * @return
     * The widget with the specified `id`.
     */
    getWidgetById(id: string): Widget<TElement>;

    /**
     * Pins an error-message to the table.
     *
     * @param table
     * The table to pin the error-message to.
     *
     * @param request
     * The request which caused an error.
     *
     * @param settings
     * The ajax-settings of the `request`.
     *
     * @param message
     * A message which describes the error.
     */
    showError(table: JQuery<TElement> | TElement, request: string | JQuery.jqXHR, settings: JQueryAjaxSettings, message: string): void;

    /**
     * Verifies whether the specified `text` is a digit.
     *
     * @param text
     * The text to check.
     *
     * @return
     * A value indicating whether the specified `text` is a digit.
     */
    isDigit(text: string): boolean;

    /**
     * Formats a text containing a number according to the correct format.
     *
     * @param text
     * The text to format.
     *
     * @param table
     * The table which is being processed.
     */
    formatFloat(text: string, table: JQuery<TElement> | TElement): void;

    /**
     * Applies a sort to the table.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param sort
     * The sort to apply.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    sortOn(config: TablesorterConfigurationStore<TElement>, sort: ReadonlyArray<(SortDefinition | RelativeSortDefinition)>, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Resets the sorting.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    sortReset(config: TablesorterConfigurationStore<TElement>, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Compares two strings and returns a value indicating whether one is less than, equal to or greater than the other.
     *
     * @param x
     * The first string to compare.
     *
     * @param y
     * The second string to compare.
     *
     * @param ascending
     * A value indicating whether an ascending sort is being performed.
     *
     * @param index
     * The index of the column which is being sorted.
     *
     * @param table
     * The table which is being sorted.
     *
     * @return
     * An integer that indicated the relative values of `x` and `y`:
     *   - If less than 0, `x` is less than `y`.
     *   - If `0`, `x` equals `y`.
     *   - If greater than 0, `x` is greater than `y`.
     */
    sortNatural(x: string, y: string): number;

    /**
     * Compares two strings and returns a value indicating whether one is less than, equal to or greater than the other.
     *
     * @param x
     * The first string to compare.
     *
     * @param y
     * The second string to compare.
     *
     * @param ascending
     * A value indicating whether an ascending sort is being performed.
     *
     * @param index
     * The index of the column which is being sorted.
     *
     * @param table
     * The table which is being sorted.
     *
     * @return
     * An integer that indicated the relative values of `x` and `y`:
     *   - If less than 0, `x` is less than `y`.
     *   - If `0`, `x` equals `y`.
     *   - If greater than 0, `x` is greater than `y`.
     */
    sortText(x: string, y: string): number;

    /**
     * Adds rows to the table.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param rows
     * The rows to add.
     *
     * @param resort
     * Either a value indicating whether to resort the table or a new sort-definition to apply.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    addRows(config: TablesorterConfigurationStore<TElement>, rows: JQuery | string, resort: boolean | ReadonlyArray<SortDefinition>, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Clears all table-bodies inside the specified `table`.
     *
     * @param table
     * The table which is being processed.
     */
    clearTableBody(table: JQuery<TElement> | TElement): void;

    /**
     * Refreshes all currently loaded widgets.
     *
     * @param table
     * The table which is being processed.
     *
     * @param initialize
     * A value indicating whether the widgets should be initialized.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    applyWidget(table: JQuery<TElement> | TElement, initialize?: boolean, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Applies the widget to the specified `table`.
     *
     * @param table
     * The table to apply the widget to.
     *
     * @param id
     * The id of the widget to apply.
     */
    applyWidgetId(table: JQuery<TElement> | TElement, id: string): void;

    /**
     * Removes widgets from the specified `table`.
     *
     * @param table
     * The table to remove the widget from.
     *
     * @param id
     * Either the id of the widget to remove or a value indicating whether to remove all widgets.
     *
     * @param refreshing
     * A value indicating whether to keep the id of the widget in the `widgets`-option.
     */
    removeWidget(table: JQuery<TElement> | TElement, id: string | ReadonlyArray<string> | boolean, refreshing?: boolean): void;

    /**
     * Refreshes the widgets.
     *
     * @param table
     * The table which is being processed.
     *
     * @param removeAll
     * A value indicating whether the widgets should be removed from the table.
     *
     * @param reapply
     * A value indicating whether the widgets should be reapplied after removing them.
     */
    refreshWidgets(table: JQuery<TElement> | TElement, removeAll?: boolean, reapply?: boolean): void;

    /**
     * Adds all cached table-rows back into the table.
     *
     * @param config
     * The configuration of the table-sorter.
     */
    appendCache(config: TablesorterConfigurationStore<TElement>): void;

    /**
     * Updates the data of the table-body.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    update(config: TablesorterConfigurationStore<TElement>, sorting?: boolean | ReadonlyArray<SortDefinition>, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Updates the data of the table-body.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    updateRows(config: TablesorterConfigurationStore<TElement>, sorting?: boolean | ReadonlyArray<SortDefinition>, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Updates the cache and optionally adds new `tbody`s.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param callback
     * A callback for post-processing the table.
     *
     * @param tbodies
     * The `tbody`s to add.
     */
    updateCache(config: TablesorterConfigurationStore<TElement>, callback?: TriggerCallbackHandler<TElement>, tbodies?: JQuery): void;

    /**
     * Updates the cell of the table.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param cell
     * The cell to update.
     *
     * @param sorting
     * Either a new sorting to apply or a value indicating whether the current sorting should be re-applied.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    updateCell(config: TablesorterConfigurationStore<TElement>, cell: JQuery, sorting?: boolean | ReadonlyArray<SortDefinition>, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Updates the table-headers.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    updateHeaders(config: TablesorterConfigurationStore<TElement>, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Updates the data of the whole table.
     *
     * @param config
     * The configuration of the table-sorter.
     *
     * @param sorting
     * Either a new sorting to apply or a value indicating whether the current sorting should be re-applied.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    updateAll(config: TablesorterConfigurationStore<TElement>, sorting?: boolean | ReadonlyArray<SortDefinition>, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Restores the headers of a table.
     *
     * @param table
     * The table to process.
     */
    restoreHeaders(table: JQuery<TElement> | TElement): void;

    /**
     * Re-calculates the `data-column`-attribute of the cells inside the rows.
     *
     * If a `config` is passed, the `data-column`-attributes will be removed for cells whose index matches its actual position.
     *
     * @param rows
     * The rows to compute.
     *
     * @param config
     * The tablesorter-configuration.
     */
    computeColumnIndex(rows: JQuery, config?: TablesorterConfigurationStore<TElement>): void;

    /**
     * Adds a `colgroup`-element to the specified `table`.
     *
     * @param table
     * The table to add the fixed columns to.
     */
    fixColumnWidth(table: JQuery<TElement> | TElement): void;

    /**
     * Identifies the correct setting for a header.
     *
     * @param header
     * The header-cell to get the data from.
     *
     * @param headerConfig
     * The configuration of the header to get the data from.
     *
     * @param option
     * The name of the option to get.
     *
     * @return
     * The correct `option` for the specified `header`.
     */
    getData<T extends keyof TablesorterHeading>(header: JQuery | HTMLElement, headerConfig: TablesorterHeading, option: T): TablesorterHeading[T];

    /**
     * Identifies the correct settings for the specified column `key` in the per-column settings `object`.
     *
     * @param table
     * The table which is being processed.
     *
     * @param object
     * The object which contains column-specific values.
     *
     * @param key
     * The column-index or the class-name of the collumn to get the settings from.
     *
     * @return
     * The settings inside the settings-`object` for the column with the specified `key`.
     */
    getColumnData<T>(table: JQuery<TElement> | TElement, object: MappedSettings<T>, key: string | number): T;

    /**
     * Parses the text of a column.
     *
     * @param table
     * The table which is being processed.
     *
     * @param column
     * The index of the column to get the text from.
     *
     * @param callback
     * A callback for processing the cell-text.
     *
     * @param rowFilter
     * An object for filtering the rows to process.
     *
     * @return
     * The parsed data of the column.
     */
    getColumnText(
        table: JQuery<TElement> | TElement,
        column: number | "all",
        callback?: (cell: ParsedCell) => void,
        rowFilter?: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery | ((this: HTMLElement, index: number, element: HTMLElement) => boolean)): ParsedData;

    /**
     * Binds the header-events to the specified `elements`.
     *
     * @param table
     * The table which is being processed.
     *
     * @param elements
     * The jQuery-object containing the elements to bind the header-events to.
     */
    bindEvents(table: JQuery<TElement> | TElement, elements: JQuery): void;

    /**
     * Adds an event-handler to the `resize`-event for the sticky headers.
     *
     * @param table
     * The table to add the event to.
     *
     * @param disable
     * A value indicating whether the event-handler should be disabled.
     *
     * @param options
     * Options for the event-handler.
     */
    addHeaderResizeEvent(table: JQuery<TElement> | TElement, disable: boolean, options?: HeaderResizeOptions): void;

    /**
     * Adds a processing-icon to headers.
     *
     * @param table
     * The table to apply the processing-icons to.
     *
     * @param state
     * A valud indicating whether the headers are processing.
     *
     * @param headers
     * A jQuery-object containing the objects to apply the processing-icons to.
     */
    isProcessing(table: JQuery<TElement> | TElement, state: boolean, headers?: JQuery): void;

    /**
     * Checks whether a `SortDefinition` for the specified `column` exists.
     *
     * @param column
     * The column-index to check.
     *
     * @param array
     * The sort-definitions to browse.
     *
     * @return
     * A value indicating whether a `SortDefinition` for the specified `column` exists.
     */
    isValueInArray(value: number, array: ReadonlyArray<[number, any]>): boolean;

    /**
     * Replaces all accent characters in the `text`.
     *
     * @param text
     * The text to process.
     *
     * @return
     * The processed text.
     */
    replaceAccents(text: string): string;

    /**
     * Saves data to the storage.
     *
     * @param table
     * The table to store data for.
     *
     * @param key
     * The name of the option to save.
     *
     * @param value
     * The value of the option to save.
     *
     * @param options
     * The options for customizing the way to save the data to the storage.
     */
    storage(table: JQuery<TElement> | TElement, key: string, value: any, options?: StorageConfiguration): void;

    /**
     * Saves data to the storage.
     *
     * @param table
     * The table to store data for.
     *
     * @param key
     * The name of the option to save.
     *
     * @param value
     * The value of the option to save.
     *
     * @param options
     * The options for customizing the way to save the data to the storage.
     */
    storage(table: JQuery<TElement> | TElement, key: string, value?: null, options?: StorageConfiguration): any;

    /**
     * Removes the `tablesorter` from a table.
     *
     * @param table
     * The table to destroy.
     *
     * @param removeClasses
     * A value indicating whether the classes added by tablesorter should be removed.
     *
     * @param callback
     * A callback for post-processing the table.
     */
    destroy(table: JQuery<TElement> | TElement, removeClasses?: boolean, callback?: TriggerCallbackHandler<TElement>): void;

    /**
     * Provides the functionality to process the `tbody`.
     *
     * @param table
     * The table the `tbody` belongs to.
     *
     * @param tbody
     * The `tbody` to process.
     *
     * @param detach
     * A value indicating whether the `tbody` should be detached.
     */
    processTbody(table: JQuery<TElement> | TElement, tbody: JQuery, detach: true): JQuery;

    processTbody(table: JQuery<TElement> | TElement, tbody: JQuery, detach?: false): void;

    /**
     * Resets the column-widths and optionally clears the locally stored column-widths.
     *
     * @param table
     * The table to reset the resizable settings for.
     *
     * @param keepLocalSettings
     * A value indicating whether local settings should not be cleared.
     */
    resizableReset(table: JQuery<TElement> | TElement, keepLocalSettings?: boolean): void;
}
