// Type definitions for jquery.tile.js 1.1.0
// Project: https://github.com/urin/jquery.tile.js
// Definitions by: Shunsuke Ohtani <https://github.com/zaneli>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQuery {
    /**
     * Align the height of the largest of the elements arranged in the same row.
     * if columns is not specified, align the height of the largest of the all elements.
     *
     * @param columns Number of elements in a row
     */
    tile(columns?: number): void;
}
