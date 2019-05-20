/**
 * Defines a sort-order for empty cells.
 */
export enum EmptySorting {
    /**
     * Indicates that the cells are pinned to the top.
     */
    Top = "top",

    /**
     * Indicates that the cells are pinned to the bottom.
     */
    Bottom = "bottom",

    /**
     * Indicates that the cells are treated like a value lesser than the minimal numeric value.
     */
    Min = "emptyMin",

    /**
     * Indicates that the cells are treated like a value greater than the maximal numeric value.
     */
    Max = "emptyMax",

    /**
     * Indicates that the cells are treated like a value equal to `0`.
     */
    Zero = "zero"
}
