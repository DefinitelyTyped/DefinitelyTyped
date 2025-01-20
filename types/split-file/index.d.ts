/// <reference types="node" />

import * as BluebirdPromise from "bluebird";

/**
 * Split file into number of parts
 * @param file
 * @param parts
 * @param destination
 */
export function splitFile(file: string, parts: number, destination?: string): BluebirdPromise<string[]>;

/**
 * Split file into multiple parts based on max part size given
 * @param file
 * @param maxSize max part size in BYTES!
 * @param destination
 */
export function splitFileBySize(file: string, maxSize: number, destination?: string): BluebirdPromise<string[]>;

/**
 * Merge input files to output file.
 * @param inputFiles
 * @param outputFile
 */
export function mergeFiles(inputFiles: string[], outputFile: string): BluebirdPromise<string[]>;
