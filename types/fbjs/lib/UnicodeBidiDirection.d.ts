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
    type BidiDirection = 'LTR' | 'RTL' | 'NEUTRAL';
    type HTMLDir = 'ltr' | 'rtl';
    // Values
    const NEUTRAL: 'NEUTRAL'; // No strong direction

    const LTR: 'LTR'; // Left-to-Right direction

    const RTL: 'RTL'; // Right-to-Left direction
    /**
     * Check if a directionality value is a Strong one
     */
    function isStrong(dir: BidiDirection): boolean;

    /**
     * Get string value to be used for `dir` HTML attribute or `direction` CSS
     * property.
     */
    function getHTMLDir(dir: BidiDirection): HTMLDir;
    /**
     * Get string value to be used for `dir` HTML attribute or `direction` CSS
     * property, but returns null if `dir` has same value as `otherDir`.
     * `null`.
     */

    function getHTMLDirIfDifferent(dir: BidiDirection, otherDir: BidiDirection): HTMLDir | null | undefined;
    // Global Direction
    /**
     * Set the global direction.
     */
    function setGlobalDir(dir: BidiDirection): void;
    /**
     * Initialize the global direction
     */
    function initGlobalDir(): void;
    /**
     * Get the global direction
     */

    function getGlobalDir(): BidiDirection;
}

// eslint-disable-next-line export-just-namespace
export = UnicodeBidiDirection;
