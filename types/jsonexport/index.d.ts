// Type definitions for jsonexport 3.0
// Project: https://github.com/kaue/jsonexport
// Definitions by: Guillaume Ongenae <https://github.com/g-ongenae>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Transform } from 'stream';

declare namespace jsonexport {
    interface UserOptions {
        headers?: string[];
        rename?: string[];
        headerPathString?: string;
        rowDelimiter?: string;
        textDelimiter?: string;
        arrayPathString?: string;
        undefinedString?: string;
        endOfLine?: string;
        mainPathItem?: string;
        booleanTrueString?: string;
        booleanFalseString?: string;
        includeHeaders?: boolean;
        fillGaps?: boolean;
        verticalOutput?: boolean;
        forceTextDelimiter?: boolean;
    }
}

/**
 * Main declare function that converts json to csv
 *
 * @param json - object or array to convert
 * @param options - csv options
 * @param callback(err, csv) - Callback declare function
 *      if error, returning error in call back.
 *      if csv is created successfully, returning csv output to callback.
 */
declare function jsonexport(userOptions?: jsonexport.UserOptions): Transform;
declare function jsonexport(json: object | object[], userOptions?: jsonexport.UserOptions): Promise<string>;
declare function jsonexport(json: object | object[], cb: (err: Error, csv: string) => void): void;
declare function jsonexport(
    json: object | object[],
    userOptions: jsonexport.UserOptions,
    cb: (err: Error, csv: string) => void,
): void;

export = jsonexport;
