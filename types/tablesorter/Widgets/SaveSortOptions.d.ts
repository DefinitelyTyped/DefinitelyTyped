import { StorageType } from "../Storage/StorageType";

/**
 * Provides options for the `saveSort`-widget.
 */
export interface SaveSortOptions {
    /**
     * A value indicating whether the sorting should be saved locally.
     */
    saveSort?: boolean | undefined;

    /**
     * The id of the `saveSort`-settings.
     */
    storage_tableId?: string | undefined;

    /**
     * A url to a table for grouping settings together.
     */
    storage_fixedUrl?: string | undefined;

    /**
     * The name of the data-attribute to obtain an id for the table which allows grouping multiple tables together.
     */
    storage_group?: string | undefined;

    /**
     * The name of the data-attribute to obtain a table url which allows grouping tables together across pages.
     */
    storage_page?: string | undefined;

    /**
     * The storage-type to use.
     */
    storage_storageType?: StorageType | undefined;
}
