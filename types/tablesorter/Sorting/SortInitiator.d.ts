/**
 * Represents a sort-initiator.
 */
export enum SortInitiator {
    /**
     * Indicates the user.
     */
    User = "user",

    /**
     * Indicates the `sort`-event.
     */
    SortEvent = "sort",

    /**
     * Indicates the `sorton`-method.
     */
    SortOnMethod = "sorton",

    /**
     * Indicates the `sortAppend`-configuration.
     */
    SotAppend = "sortAppend",

    /**
     * Indicates the `sortForce`-configuration.
     */
    SortForce = "sortForce"
}
