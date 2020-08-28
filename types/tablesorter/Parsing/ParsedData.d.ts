import "jquery";

/**
 * Represents parsed data.
 */
export interface ParsedData {
    /**
     * The raw values of the rows.
     */
    raw: string[];

    /**
     * The parsed values of the rows.
     */
    parsed: any[];

    /**
     * The jQuery-objects containing the cells of the rows.
     */
    $cells: JQuery[];
}
