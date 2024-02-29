import { StorageType } from "./StorageType";

/**
 * Provides settings for saving data to the storage.
 */
export interface StorageConfiguration {
    /**
     * The id of the storage to save to.
     */
    id?: string | undefined;

    /**
     * The `data-attribute`-name to automatically get the id of the table from.
     */
    group?: string | undefined;

    /**
     * The url to save the storage to.
     */
    url?: string | undefined;

    /**
     * The `data-attribute`-name to automatically get the url of the table from.
     */
    page?: string | undefined;

    /**
     * The medium to save the storage to.
     */
    storageType?: StorageType | undefined;
}
