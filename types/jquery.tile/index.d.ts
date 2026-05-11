/// <reference types="jquery" />

interface JQuery {
    /**
     * Align the height of the largest of the elements arranged in the same row.
     * if columns is not specified, align the height of the largest of the all elements.
     *
     * @param columns Number of elements in a row
     */
    tile(columns?: number): void;
}
