import "jquery";
import { SortDefinition } from "../Sorting/SortDefinition";
import { PagerConfiguration } from "./PagerConfiguration";
import { PagerDataPart } from "./PagerDataPart";
import { PagerMemory } from "./PagerMemory";

/**
 * Represents the configuration-store of the `pager` addon.
 */
export interface PagerConfigurationStore<TElement = HTMLElement> extends PagerConfiguration<TElement> {
    page: number;

    size: number;

    /**
     * The initial settings of the pager.
     */
    settings: PagerConfiguration<TElement>;

    /**
     * A value indicating whether ajax is enabled.
     */
    ajax: boolean;

    /**
     * The url to query data from.
     */
    ajaxUrl: string;

    /**
     * The optional url to query data from.
     */
    optAjaxUrl: string;

    /**
     * The number of performed ajax-request.
     */
    ajaxCounter: number;

    /**
     * The old success-callback of the ajax-settings.
     */
    oldAjaxSuccess: JQuery.Ajax.SuccessCallback<any>;

    /**
     * The result of the ajax-request.
     */
    ajaxData: PagerDataPart<TElement> | [number] | [number, JQuery | any[][], string[]?];

    /**
     * The index of the cached rows which are being displayed.
     */
    cachedIndex: number[];

    /**
     * A value indicating whether the pager is disabled.
     */
    isDisabled: boolean;

    /**
     * A value indicating whether the pager is initializing.
     */
    initializing: boolean;

    /**
     * A value indicating whether the pager is initialized.
     */
    initialized: boolean;

    /**
     * The last memorized settings of the `pager`.
     */
    last: PagerMemory;

    /**
     * The number of the first row being displayed.
     */
    startRow: number;

    /**
     * The number of the last row being displayed.
     */
    endRow: number;

    /**
     * The amount of filtered rows.
     */
    filteredRows: number;

    /**
     * The total amount of rows.
     */
    totalRows: number;

    /**
     * The amount of filtered pages.
     */
    filteredPages: number;

    /**
     * The total amount of pages.
     */
    totalPages: number;

    /**
     * The regex for identifying rows.
     */
    regexRows: RegExp;

    /**
     * The regex for identifying filtered rows.
     */
    regexFiltered: RegExp;

    /**
     * The applied filters.
     */
    currentFilters: string[];

    /**
     * The sorting to apply.
     */
    sortList: SortDefinition[];

    /**
     * The jQuery-object which contains the container-control.
     */
    $container: JQuery;

    /**
     * The jQuery-object which contains the control for jumping to pages.
     */
    $goto: JQuery;

    /**
     * The jQuery-object which contains the size-control.
     */
    $size: JQuery;
}
