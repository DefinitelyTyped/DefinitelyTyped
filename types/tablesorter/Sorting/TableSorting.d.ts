import { SortDefinitionOrder } from "./SortDefinitionOrder";
import { SortInitiator } from "./SortInitiator";

/**
 * Represents a sorting for a table.
 */
export interface TableSorting {
    /**
     * The number of times the sorting has been applied.
     */
    count: number;

    /**
     * The order to apply the sorting.
     */
    order: SortDefinitionOrder[];

    /**
     * A value indicating whether the order is locked.
     */
    lockedOrder: boolean;

    /**
     * The initiator of the sorting.
     */
    sortedBy: SortInitiator;
}
