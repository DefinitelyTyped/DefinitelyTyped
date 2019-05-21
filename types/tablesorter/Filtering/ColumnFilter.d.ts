/**
 * Defines a concept for filtering.
 */
export type ColumnFilter =
    /**
     * Indicates disabled filtering.
     */
    "false" |

    /**
     * Indicates filtering on parsed data.
     */
    "parsed" |

    /**
     * Indicates filtering on raw data.
     */
    "default";
