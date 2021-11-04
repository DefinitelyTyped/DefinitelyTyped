/**
 * Provides localized strings.
 */
export interface Locale {
    /**
     * The text to show for ascending sorting.
     */
    sortAsc: string;

    /**
     * The text to show for descending sorting.
     */
    sortDesc: string;

    /**
     * The text to show for non-sorted columns.
     */
    sortNone: string;

    /**
     * The text to show for disabled sorting.
     */
    sortDisabled: string;

    /**
     * The text to show for applying ascending sorting.
     */
    nextAsc: string;

    /**
     * The text to show for applying descending sorting.
     */
    nextDesc: string;

    /**
     * The text to show for disabling sorting.
     */
    nextNone: string;
}
