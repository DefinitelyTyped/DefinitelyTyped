/**
 * Represents a filter-box.
 */
export enum FilterBox {
    /**
     * Indicates an ordinary text-box.
     */
    TextBox = "search",

    /**
     * Indicates a dropdown.
     */
    Dropdown = "select",

    /**
     * Indicates the textbox for the start of a date-range.
     */
    DateFrom = "from",

    /**
     * Indicates the textbox for the end of a date-range.
     */
    DateTo = "to"
}
