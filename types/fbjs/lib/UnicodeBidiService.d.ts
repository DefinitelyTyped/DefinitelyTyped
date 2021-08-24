/**
 * Stateful API for text direction detection
 *
 * This class can be used in applications where you need to detect the
 * direction of a sequence of text blocks, where each direction shall be used
 * as the fallback direction for the next one.
 *
 * NOTE: A default direction, if not provided, is set based on the global
 *       direction, as defined by `UnicodeBidiDirection`.
 *
 * == Example ==
 * ```
 * var UnicodeBidiService = require('UnicodeBidiService');
 *
 * var bidiService = new UnicodeBidiService();
 *
 * ...
 *
 * bidiService.reset();
 * for (var para in paragraphs) {
 *   var dir = bidiService.getDirection(para);
 *   ...
 * }
 * ```
 *
 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
 * Unicode Standard Annex #9 (UAX9)
 * http://www.unicode.org/reports/tr9/
 */

declare class UnicodeBidiService {
    _defaultDir: UnicodeBidiService.BidiDirection;
    _lastDir: UnicodeBidiService.BidiDirection;
    /**
     * Stateful class for paragraph direction detection
     */

    constructor(defaultDir: UnicodeBidiService.BidiDirection | null);
    /**
     * Reset the internal state
     *
     * Instead of creating a new instance, you can just reset() your instance
     * everytime you start a new loop.
     */

    reset(): void;
    /**
     * Returns the direction of a block of text, and remembers it as the
     * fall-back direction for the next paragraph.
     *
     * @param str  A text block, e.g. paragraph, table cell, tag
     * @return     The resolved direction
     */

    getDirection(str: string): UnicodeBidiService.BidiDirection;
}
declare namespace UnicodeBidiService {
    type BidiDirection = 'LTR' | 'RTL' | 'NEUTRAL';
}
export = UnicodeBidiService;
