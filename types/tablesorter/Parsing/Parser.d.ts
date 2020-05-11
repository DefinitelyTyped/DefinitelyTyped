import { ParserType } from "./ParserType";

/**
 * Represents a parser.
 */
export interface Parser<TElement = HTMLElement> {
    /**
     * The id of the parser.
     */
    id: string;

    /**
     * The type of the parser.
     */
    type: ParserType;

    /**
     * A value indicating whether the tablesorter should use parsed text for searching.
     */
    parsed: boolean;

    /**
     * Checks whether a text is applicable to the parser.
     *
     * @param text
     * The text to check.
     *
     * @returns
     * A value indicating whether the parser is applicable to the `text`.
     */
    is(text: string): boolean;

    /**
     * Formats the text of a cell.
     *
     * @param text
     * The text to format.
     *
     * @param table
     * The table which is being processed.
     *
     * @return
     * The formatted text.
     */
    format(text: string, table: TElement): string;
}
