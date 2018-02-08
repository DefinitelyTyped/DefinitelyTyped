// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Chunk {
    /**
     * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
     * final chunk will be the remaining elements.
     *
     * @param array The array to process.
     * @param size The length of each chunk.
     * @return Returns the new array containing chunks.
     */
    (): Chunk;
    /**
     * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
     * final chunk will be the remaining elements.
     *
     * @param array The array to process.
     * @param size The length of each chunk.
     * @return Returns the new array containing chunks.
     */
    (size: number): Chunk1x1;
    /**
     * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
     * final chunk will be the remaining elements.
     *
     * @param array The array to process.
     * @param size The length of each chunk.
     * @return Returns the new array containing chunks.
     */
    <T>(size: number, array: _.List<T> | null | undefined): T[][];
}
interface Chunk1x1 {
    /**
     * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
     * final chunk will be the remaining elements.
     *
     * @param array The array to process.
     * @param size The length of each chunk.
     * @return Returns the new array containing chunks.
     */
    (): Chunk1x1;
    /**
     * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
     * final chunk will be the remaining elements.
     *
     * @param array The array to process.
     * @param size The length of each chunk.
     * @return Returns the new array containing chunks.
     */
    <T>(array: _.List<T> | null | undefined): T[][];
}

declare const chunk: Chunk;
declare namespace chunk {}
export = chunk;
