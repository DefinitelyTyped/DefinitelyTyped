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
     */
    function firstStrongChar(str: string): string | null | undefined;
    /**
     * Returns the direction of a block of text, based on the direction of its
     * first strong character (has Bidi_Class value of L, R, or AL).
     */
    function firstStrongCharDir(str: string): BidiDirection;
    /**
     * Returns the direction of a block of text, based on the direction of its
     * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
     * direction, if no strong character is found.
     *
     * This function is supposed to be used in respect to Higher-Level Protocol
     * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
     */
    function resolveBlockDir(str: string, fallback: BidiDirection | null | undefined): BidiDirection;
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
     */

    function getDirection(str: string, strongFallback: BidiDirection | null): BidiDirection;
    /**
     * Returns true if getDirection(arguments...) returns LTR.
     */
    function isDirectionLTR(str: string, strongFallback: BidiDirection | null): boolean;
    /**
     * Returns true if getDirection(arguments...) returns RTL.
     */
    function isDirectionRTL(str: string, strongFallback: BidiDirection | null): boolean;
}

// eslint-disable-next-line export-just-namespace
export = UnicodeBidi;
