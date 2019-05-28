/**
 * Defines a sort-order for empty cells.
 */
export type EmptySorting =
    /**
     * Indicates that the cells are pinned to the top.
     */
    "top" |

    /**
     * Indicates that the cells are pinned to the bottom.
     */
    "bottom" |

    /**
     * Indicates that the cells are treated like a value lesser than the minimal numeric value.
     */
    "emptyMin" |

    /**
     * Indicates that the cells are treated like a value greater than the maximal numeric value.
     */
    "emptyMax" |

    /**
     * Indicates that the cells are treated like a value equal to `0`.
     */
    "zero";
