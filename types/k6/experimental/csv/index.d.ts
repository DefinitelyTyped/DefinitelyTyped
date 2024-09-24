/**
 * The `k6-experimental/csv` module provides efficient ways to handle CSV files in k6, offering faster parsing and lower memory
 * usage compared to traditional JavaScript-based libraries.
 *
 * This module includes functionalities for both full-file parsing and streaming, allowing users to choose between
 * performance and memory optimization.
 */

import type { SharedArray } from "k6/data";
import * as fs from "k6/experimental/fs";

/**
 * The parse function parses an entire CSV file at once and returns a promise
 * that resolves to a `SharedArray` instance.
 *
 * This function uses Go-based processing, which results in faster parsing and
 * lower memory usage compared to JavaScript alternatives.
 *
 * It's ideal for scenarios where performance is a priority, and the entire CSV
 * file can be loaded into memory.
 *
 * @param {fs.File} file - The file path as a `fs.File` instance. Relative paths are resolved relative to the k6 script.
 * @param {Partial<Options>} [options] - An optional configuration object for the parsing operation.
 */
export function parse(file: fs.File, options?: Partial<Options>): Promise<typeof SharedArray>;

/**
 * The `csv.Parser` class provides a streaming parser that reads CSV files
 * line-by-line, offering fine-grained control over the parsing process and
 * minimizing memory consumption.
 *
 * It's well-suited for scenarios where memory efficiency is crucial or when
 * you need to process large CSV files without loading the entire file into memory.
 */
export class Parser {
    /**
     * Constructs a new Parser instance.
     *
     * @param {fs.File} file - A csv file to parse, provided as a `fs.File` instance.
     * @param {Partial<Options>} [options] - An optional configuration object for the parser.
     */
    constructor(file: fs.File, options?: Partial<Options>);

    /**
     * Parses the next record from the CSV file.
     *
     * @returns {Promise<{done: boolean, value: string[]}>} - A promise that
     * resolves to an object with the `done` property set to `true` if the end of the file
     * is reached, and the `value` property set to an array of strings representing the record.
     */
    next(): Promise<{ done: boolean; value: string[] }>;
}

/**
 * The Options object describes the configuration available for the operation of parsing CSV
 * files using the `parse` function and the `Parser` class.
 */
export interface Options {
    /**
     * The delimiter character used in the CSV file. Default is ','.
     */
    delimiter: string;

    /**
     * Whether to skip the first line of the CSV file. Default is false.
     */
    skipFirstLine: boolean;

    /**
     * The line number the parsing should start from. Default is 0.
     */
    fromLine: number;

    /**
     * The line number the parsing should stop at. Default is undefined.
     */
    toLine?: number;
}

export * as default from "k6/experimental/csv";
