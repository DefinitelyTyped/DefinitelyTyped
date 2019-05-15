/**
 * Defines a sort-order for text-cells.
 */
export enum StringSorting {
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
    Min = "min",

    /**
     * Indicates that the cells are treated like a value greater than the maximal numeric value.
     */
    Max = "max",

    /**
     * Indicates that the cells are treated like a value equal to `0`.
     */
    Zero = "zero"
}
