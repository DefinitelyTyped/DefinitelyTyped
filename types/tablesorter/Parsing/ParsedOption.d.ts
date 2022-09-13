/**
 * Represents a parsed option.
 */
export interface ParsedOption {
    /**
     * The unparsed text of the cell.
     */
    raw: string;

    /**
     * The parsed value of the cell.
     */
    parsed: any;
}
