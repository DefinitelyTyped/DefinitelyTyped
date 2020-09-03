import { SortOrder } from "../Sorting/SortOrder";

/**
 * I don't fucking know what this is supposed to be...
 */
export interface TablesorterConfigBase {
    /**
     * The date-format for dates inside the table.
     */
    dateFormat?: string;

    /**
     * The order which will be applied when clicking on the heading the first time.
     */
    sortInitialOrder?: SortOrder;
}
