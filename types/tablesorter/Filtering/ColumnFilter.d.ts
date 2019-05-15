/**
 * Defines a concept for filtering.
 */
export enum ColumnFilter {
    /**
     * Indicates disabled filtering.
     */
    None = "false",

    /**
     * Indicates filtering on parsed data.
     */
    Parsed = "parsed",

    /**
     * Indicates filtering on raw data.
     */
    Default = "default"
}
