import { FilterBox } from "./FilterBox";

/**
 * Provides place-holders for different kinds of filter-boxes.
 */
export type FilterPlaceholders = {
    /**
     * A filter-box and the placeholder to apply.
     */
    [name in FilterBox]?: string;
};
