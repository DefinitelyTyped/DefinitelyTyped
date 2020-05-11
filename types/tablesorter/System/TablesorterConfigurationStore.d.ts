import "jquery";
import { PagerConfigurationStore } from "../Paging/PagerConfigurationStore";
import { Parser } from "../Parsing/Parser";
import { TableSorting } from "../Sorting/TableSorting";
import { WidgetOptionStore } from "../Widgets/WidgetOptionStore";
import { TablesorterCache } from "./TablesorterCache";
import { TablesorterConfiguration } from "./TablesorterConfiguration";

/**
 * Represents the configuration-store of the `tablesorter`.
 */
export interface TablesorterConfigurationStore<TElement = HTMLElement> extends Required<TablesorterConfiguration<TElement>> {
    /**
     * A jQuery-object containing all headers of the table.
     */
    $headers: JQuery;

    /**
     * The headers of the table.
     */
    $headerIndexed: JQuery[];

    /**
     * A jQuery-object which contains all filter-cells.
     */
    $filters: JQuery;

    /**
     * A jQuery-object containing the table itself.
     */
    $table: JQuery<TElement>;

    /**
     * The html-representation of the table.
     */
    table: TElement;

    /**
     * A jQuery-object containing all sortable table-bodies.
     */
    $tbodies: JQuery;

    /**
     * The number of columns of the table.
     */
    columns: number;

    /**
     * The initial content of the headers.
     */
    headerContent: string[];

    /**
     * The headers of the table.
     */
    headerList: HTMLElement[];

    /**
     * The total amount of rows.
     */
    totalRows: number;

    /**
     * The amount of filtered rows.
     */
    filteredRows: number;

    /**
     * The cache of the tablesorter.
     */
    cache: TablesorterCache;

    /**
     * The parsers of the table.
     */
    parsers: Array<Parser<TElement>>;

    /**
     * The sortings of the tablesorter.
     */
    sortVars: TableSorting[];

    widgetOptions: WidgetOptionStore<TElement>;

    /**
     * Provides methods and settings for the `pager`-widget.
     */
    pager: PagerConfigurationStore<TElement>;
}
