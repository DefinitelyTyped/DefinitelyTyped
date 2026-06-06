import { SortDefinition } from "../Sorting/SortDefinition";

/**
 * The memorized settings of the `pager`.
 */
export interface PagerMemory {
    /**
     * The page-number.
     */
    page: number;

    /**
     * The size of a page.
     */
    size: number;

    /**
     * The sorting.
     */
    sortList: SortDefinition[];

    /**
     * The total amount of rows.
     */
    totalRows: number;

    /**
     * The currently applied filters.
     */
    currentFilters: string[];
}
