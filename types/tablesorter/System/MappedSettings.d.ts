/**
 * Represents settings mapped to columns.
 */
export interface MappedSettings<T> {
    /**
     * The jquery-selector and their settings.
     */
    [selector: string]: T;

    /**
     * The column-index and its settings.
     */
    [index: number]: T;
}
