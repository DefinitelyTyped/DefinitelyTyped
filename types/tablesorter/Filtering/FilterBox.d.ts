/**
 * Represents a filter-box.
 */
export type FilterBox =
    /**
     * Indicates an ordinary text-box.
     */
    "search" |

    /**
     * Indicates a dropdown.
     */
    "select" |

    /**
     * Indicates the textbox for the start of a date-range.
     */
    "from" |

    /**
     * Indicates the textbox for the end of a date-range.
     */
    "to";
