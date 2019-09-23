import "jquery";
import { CoreTheme } from "../Design/CoreTheme";
import { GlobalizeSettings } from "../Globalization/GlobalizeSettings";
import { TextExtractor } from "../Parsing/TextExtractor";
import { EmptySorting } from "../Sorting/EmptySorting";
import { NumberSorter } from "../Sorting/NumberSorter";
import { RelativeSortDefinition } from "../Sorting/RelativeSortDefinition";
import { SortDefinition } from "../Sorting/SortDefinition";
import { SortOrder } from "../Sorting/SortOrder";
import { StringSorting } from "../Sorting/StringSorting";
import { TextSorter } from "../Sorting/TextSorter";
import { WidgetOptions } from "../Widgets/WidgetOptions";
import { InitializationEventHandler } from "./InitializationEventHandler";
import { MappedSettings } from "./MappedSettings";
import { RenderHeaderEventHandler } from "./RenderHeaderEventHandler";
import { RenderTemplateEventHandler } from "./RenderTemplateEventHandler";
import { TablesorterConfigBase } from "./TablesorterConfigBase";
import { TablesorterHeading } from "./TablesorterHeading";

/**
 * Represents settings for the `tablesorter`.
 */
export interface TablesorterConfiguration<TElement = HTMLElement> extends TablesorterConfigBase {
    /**
     * The namespace of the table.
     */
    namespace?: string;

    /**
     * The initial sorting after the initialization of the table.
     */
    sortList?: SortDefinition[];

    /**
     * A value indicating whether sortings other than the ones in the `sortList` should be prevented.
     */
    sortRestart?: boolean;

    /**
     * A value indicating whether to apply the original sorting when two cells have the same value.
     */
    sortStable?: boolean;

    /**
     * The key which is used for selecting multiple columns.
     */
    sortMultiSortKey?: keyof MouseEvent;

    /**
     * The key to hold while clicking on a heading for reseting the sorting for the whole table.
     */
    sortResetKey?: keyof MouseEvent;

    /**
     * A value indicating whether the user can reset a sorting of a column by clicking on it a third time.
     */
    sortReset?: boolean;

    /**
     * Sortings to prepend to the current sorting.
     */
    sortForce?: SortDefinition[];

    /**
     * Sortings to append to the current sorting.
     */
    sortAppend?: SortDefinition[] | { [index: number]: RelativeSortDefinition[] };

    /**
     * A value indicating whether accent character should be converted to their equivalent characters during sort.
     */
    sortLocaleCompare?: boolean;

    /**
     * The order which will be applied when clicking on a heading the first time.
     */
    sortInitialOrder?: SortOrder;

    /**
     * A value indicating whether tabbing through table headings is enabled.
     */
    tabIndex?: boolean;

    /**
     * The sorting to apply for empty cells.
     */
    emptyTo?: EmptySorting;

    /**
     * The sorting to apply to text cells in numeric columns.
     */
    stringTo?: StringSorting;

    /**
     * A value indicating whether letter-case should be considered while sorting.
     */
    ignoreCase?: boolean;

    /**
     * A value indicating whether the sorting should be reapplied after an update of the table-data.
     */
    resort?: boolean;

    /**
     * A value indicating whether the selection of the text in the table headers should be disabled.
     */
    cancelSelection?: boolean;

    /**
     * A value indicating whether the width of the columns should be fixed.
     */
    widthFixed?: boolean;

    /**
     * A value indicating whether the table should be initialized upon the initial sort-action.
     */
    delayInit?: boolean;

    /**
     * A value indicating whether widgets should be initialized.
     */
    initWidgets?: boolean;

    /**
     * A value indicating whether contents of spanned cells should be sortable and filterable in all table headers.
     */
    duplicateSpan?: boolean;

    /**
     * Specific configurations for separate headers.
     */
    headers?: { [index: number]: TablesorterHeading };

    /**
     * A template for generating headers.
     *
     * ***Note:***
     *   * `{content}` is replaced by the actual content of the header
     *   * If `cssIcon` is set, `{icon}` is replaced by a tag for the icon
     *
     * This template may also contain html-code.
     */
    headerTemplate?: string;

    /**
     * One or more events which should be considered as a `mousedown`-event.
     */
    pointerDown?: string;

    /**
     * One or more events which should be considered as a `mouseup`-event.
     */
    pointerUp?: string;

    /**
     * One or more events which should be considered as a `click`-event.
     */
    pointerClick?: string;

    /**
     * The `data-attribute` to automatically read text from cells.
     */
    textAttribute?: string;

    /**
     * The methods for extracting text from cells.
     */
    textExtraction?: "basic" | TextExtractor<TElement> | MappedSettings<"basic" | TextExtractor<TElement>>;

    /**
     * The attribute to read the text-value from `img`-tags.
     */
    imgAttr?: string;

    /**
     * Either global `Globalize`-settings or per-column `Globalize`-settings to apply.
     */
    globalize?: GlobalizeSettings | {[index: number]: GlobalizeSettings};

    /**
     * A value indicating whether changes to child-rows are ignored by the table-sorter.
     */
    ignoreChildRow?: boolean;

    /**
     * The widgets to initialize.
     */
    widgets?: string[];

    /**
     * The options for the widgets.
     */
    widgetOptions?: WidgetOptions<TElement>;

    /**
     * The format of the class-names for automatically loading the widget with the id `{name}`.
     *
     * The default setting is `widget-{name}`.
     */
    widgetClass?: string;

    /**
     * A class to add to checked rows.
     */
    checkboxClass?: string;

    /**
     * A value indicating whether only visible rows should be affected by the checkbox located in the header.
     */
    cehckboxVisible?: boolean;

    /**
     * The storage for the `build-table` widget.
     */
    data?: object | any[][];

    /**
     * The date-range for two-digit years.
     */
    dateRange?: number;

    /**
     * Either value indicating whether debug-information should be printed or a set of plugin-names to print debug-information from.
     */
    debug?: boolean | string;

    /**
     * A value indicating whether the sorting is performed by the server.
     */
    serverSideSorting?: boolean;

    /**
     * Processes the table after the initialization.
     */
    initialized?: InitializationEventHandler<TElement>;

    /**
     * The text-sorting to apply.
     */
    textSorter?: TextSorter<TElement> | MappedSettings<TextSorter<TElement>>;

    /**
     * The number-sorting to apply.
     */
    numberSorter?: NumberSorter;

    /**
     * A function for processing the header.
     *
     * @param index
     * The zero-based index of the header.
     *
     * @param template
     * The rendered content of the header.
     *
     * @return
     * A manipulated version of the content of the header.
     */
    onRenderTemplate?: RenderTemplateEventHandler;

    /**
     * A function to execute after the content of the header is processed.
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
    onRenderHeader?: RenderHeaderEventHandler<TElement>;

    /**
     * A value indicating whether a timer icon should be shown while applying sorting and filtering.
     */
    showProcessing?: boolean;

    /**
     * A value indicating whether to use `en-US`-flavored numbers.
     */
    usNumberFormat?: boolean;

    /**
     * The theme to use.
     */
    theme?: CoreTheme | string;

    /**
     * A class to add to the table.
     */
    tableClass?: string;

    /**
     * A class to add to headers when no sort is applied.
     */
    cssNone?: string;

    /**
     * A class for indicating elements which don't cause a sort when clicking on them.
     */
    cssNoSort?: string;

    /**
     * A class to add to the header-row while applying a processing the table.
     */
    cssProcessing?: string;

    /**
     * A class to add to the header-row.
     */
    cssHeaderRow?: string;

    /**
     * A class to add to the table headers.
     */
    cssHeader?: string;

    /**
     * A class to add to table headers with ascending sort.
     */
    cssAsc?: string;

    /**
     * A class to add to table headers with descending sort.
     */
    cssDesc?: string;

    /**
     * A class for indicating rows which should be attached to the above row.
     */
    cssChildRow?: string;

    /**
     * A class to add to the sort-icons.
     */
    cssIcon?: string;

    /**
     * A class to add to sort-icons for with ascending sorting.
     */
    cssIconAsc?: string;

    /**
     * A class to add to sort-icons with descending sorting.
     */
    cssIconDesc?: string;

    /**
     * A class to add to sort-icons with disabled sorting.
     */
    cssIconDisabled?: string;

    /**
     * A class to add to sort-icons without sorting.
     */
    cssIconNone?: string;

    /**
     * A class for indicating rows which should be ignored.
     */
    cssIgnoreRow?: string;

    /**
     * A class for indicating `tbody`s which should not be sortable.
     */
    cssInfoBlock?: string;

    /**
     * A jQuery-selector for finding cells in the header-row.
     */
    selectorHeaders?: JQuery.Selector;

    /**
     * A jQuery-selector for finding rows to remove prior to a table-update.
     */
    selectorRemove?: JQuery.Selector;

    /**
     * A jQuery-selector to find clickable elements inside the result of `selectorHeaders` for triggering a sort.
     */
    selectorSort?: JQuery.Selector;
}
