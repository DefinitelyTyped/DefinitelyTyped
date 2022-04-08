import { StorageType } from "../Storage/StorageType";

/**
 * Provides options for the `saveSort`-widget.
 */
export interface SaveSortOptions {
    /**
     * A value indicating whether the sorting should be saved locally.
     */
    saveSort?: boolean;

    /**
     * The id of the `saveSort`-settings.
     */
    storage_tableId?: string;

    /**
     * A url to a table for grouping settings together.
     */
    storage_fixedUrl?: string;

    /**
     * The name of the data-attribute to obtain an id for the table which allows grouping multiple tables together.
     */
    storage_group?: string;

    /**
     * The name of the data-attribute to obtain a table url which allows grouping tables together across pages.
     */
    storage_page?: string;

    /**
     * The storage-type to use.
     */
    storage_storageType?: StorageType;
}
