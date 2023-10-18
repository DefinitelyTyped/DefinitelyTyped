/// <reference types="node" />

export interface JSFL {
    init: (...args: any[]) => void;
    [index: string]: any;
}

/**
 * Creates a JSFL file from a JSFL object
 * @param jsfl A valid JSFL object
 * @param fileName Path to output JSFL file location
 * @param initParams Parameters to pass to JSFL init function
 * @param callback Callback
 */
export function createJSFL(
    jsfl: JSFL,
    fileName: string,
    initParams: Array<any>,
    callback: (err: NodeJS.ErrnoException) => void,
): void;

/**
 * Deletes a JSFL file
 * @param fileName Path to JSFL file to delete
 * @param callback Callback
 */
export function deleteJSFL(fileName: string, callback: (err: NodeJS.ErrnoException) => void): void;

/**
 * Runs a JSFL file
 * @param flashLocation Path to Flash executable
 * @param fileName Path to JSFL file to run
 * @param callback Callback
 */
export function runJSFL(flashLocation: string, fileName: string, callback: (err: NodeJS.ErrnoException) => void): void;
