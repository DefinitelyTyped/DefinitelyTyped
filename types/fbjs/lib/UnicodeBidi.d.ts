import { BidiDirection } from './UnicodeBidiDirection';

/**
 * Basic (stateless) API for text direction detection
 *
 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
 * Unicode Standard Annex #9 (UAX9)
 * http://www.unicode.org/reports/tr9/
 */
declare namespace UnicodeBidi {
    /**
     * Returns the first strong character (has Bidi_Class value of L, R, or AL).
     *
     * @param str  A text block; e.g. paragraph, table cell, tag
     * @return     A character with strong bidi direction, or null if not found
     */
    var firstStrongChar: (str: string) => string | null | undefined;
    /**
     * Returns the direction of a block of text, based on the direction of its
     * first strong character (has Bidi_Class value of L, R, or AL).
     *
     * @param str  A text block; e.g. paragraph, table cell, tag
     * @return     The resolved direction
     */
    var firstStrongCharDir: (str: string) => BidiDirection;
    /**
     * Returns the direction of a block of text, based on the direction of its
     * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
     * direction, if no strong character is found.
     *
     * This function is supposed to be used in respect to Higher-Level Protocol
     * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
     *
     * @param str       A text block; e.g. paragraph, table cell, tag
     * @param fallback  Fallback direction, used if no strong direction detected
     *                  for the block (default = NEUTRAL)
     * @return          The resolved direction
     */
    var resolveBlockDir: (str: string, fallback: BidiDirection | null | undefined) => BidiDirection;
    /**
     * Returns the direction of a block of text, based on the direction of its
     * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
     * direction, if no strong character is found.
     *
     * NOTE: This function is similar to resolveBlockDir(), but uses the global
     * direction as the fallback, so it *always* returns a Strong direction,
     * making it useful for integration in places that you need to make the final
     * decision, like setting some CSS class.
     *
     * This function is supposed to be used in respect to Higher-Level Protocol
     * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
     *
     * @param str             A text block; e.g. paragraph, table cell
     * @param strongFallback  Fallback direction, used if no strong direction
     *                        detected for the block (default = global direction)
     * @return                The resolved Strong direction
     */

    var getDirection: (str: string, strongFallback: BidiDirection | null) => BidiDirection;
    /**
     * Returns true if getDirection(arguments...) returns LTR.
     *
     * @param str             A text block; e.g. paragraph, table cell
     * @param strongFallback  Fallback direction, used if no strong direction
     *                        detected for the block (default = global direction)
     * @return                True if the resolved direction is LTR
     */
    var isDirectionLTR: (str: string, strongFallback: BidiDirection | null) => boolean;
    /**
     * Returns true if getDirection(arguments...) returns RTL.
     *
     * @param str             A text block; e.g. paragraph, table cell
     * @param strongFallback  Fallback direction, used if no strong direction
     *                        detected for the block (default = global direction)
     * @return                True if the resolved direction is RTL
     */
    var isDirectionRTL: (str: string, strongFallback: BidiDirection | null) => boolean;
}
export = UnicodeBidi;
