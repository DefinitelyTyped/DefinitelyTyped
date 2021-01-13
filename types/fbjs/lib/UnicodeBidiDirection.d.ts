/**
 * Constants to represent text directionality
 *
 * Also defines a *global* direciton, to be used in bidi algorithms as a
 * default fallback direciton, when no better direction is found or provided.
 *
 * NOTE: Use `setGlobalDir()`, or update `initGlobalDir()`, to set the initial
 *       global direction value based on the application.
 *
 * Part of the implementation of Unicode Bidirectional Algorithm (UBA)
 * Unicode Standard Annex #9 (UAX9)
 * http://www.unicode.org/reports/tr9/
 */
declare namespace UnicodeBidiDirection {
    export type BidiDirection = 'LTR' | 'RTL' | 'NEUTRAL';
    export type HTMLDir = 'ltr' | 'rtl';
    // Values
    var NEUTRAL: 'NEUTRAL'; // No strong direction

    var LTR: 'LTR'; // Left-to-Right direction

    var RTL: 'RTL'; // Right-to-Left direction
    /**
     * Check if a directionality value is a Strong one
     */
    var isStrong: (dir: BidiDirection) => boolean;

    /**
     * Get string value to be used for `dir` HTML attribute or `direction` CSS
     * property.
     */
    var getHTMLDir: (dir: BidiDirection) => HTMLDir;
    /**
     * Get string value to be used for `dir` HTML attribute or `direction` CSS
     * property, but returns null if `dir` has same value as `otherDir`.
     * `null`.
     */

    var getHTMLDirIfDifferent: (dir: BidiDirection, otherDir: BidiDirection) => HTMLDir | null | undefined;
    // Global Direction
    /**
     * Set the global direction.
     */
    var setGlobalDir: (dir: BidiDirection) => void;
    /**
     * Initialize the global direction
     */
    var initGlobalDir: () => void;
    /**
     * Get the global direction
     */

    var getGlobalDir: () => BidiDirection;
}
export = UnicodeBidiDirection;
