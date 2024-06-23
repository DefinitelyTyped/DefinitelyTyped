/// <reference types="node" />
import { Transform } from "stream";

declare namespace jsonexport {
    interface UserOptions {
        /** Used to set a custom header order, defaults to [] */
        headers?: string[] | undefined;
        /** Used to set a custom header text, defaults to [] */
        rename?: string[] | undefined;
        /** Used to create the propriety path, defaults to `.` */
        headerPathString?: string | undefined;
        /**
         * Change the file row delimiter
         * - Defaults to `,` (cvs format).
         * - Use `\t` for xls format.
         * - Use `;` for (windows excel .csv format)
         */
        rowDelimiter?: string | undefined;
        /** The character used to escape the text content if needed, defaults to `"` */
        textDelimiter?: string | undefined;
        /** This is used to output primitive arrays in a single column, defaults to `;` */
        arrayPathString?: string | undefined;
        /** If you want to display a custom value for undefined strings, use this option, defaults to ` ` */
        undefinedString?: string | undefined;
        /** Replace the OS default EOL */
        endOfLine?: string | undefined;
        /** Every header will have the `mainPathItem` as the base */
        mainPathItem?: string | undefined;
        /** Will be used instead of `true` */
        booleanTrueString?: string | undefined;
        /** Will be used instead of `false` */
        booleanFalseString?: string | undefined;
        /** Set this option to `false` to hide the CSV headers */
        includeHeaders?: boolean | undefined;
        /** Set this option if don’t want to have empty cells in case of an object with multiple nested items (array prop), defaults to false */
        fillGaps?: boolean | undefined;
        /** Set this option to false to create a horizontal output for JSON Objects, headers in the first row, values in the second */
        verticalOutput?: boolean | undefined;
        /** Set this option to true to wrap every data item and header in the textDelimiter, defaults to `false` */
        forceTextDelimiter?: boolean | undefined;
    }

    /**
     * A function to export the `type`
     * @param value value is of type `key`
     * For instance:
     * ```
     * // Correct
     * Number: (value: number) => value.toFixed(2),
     * // Incorrect, will error
     * Number: (value: Date) => value.toLocaleDateString(),
     * ```
     * @param index the index in the {parent} object
     * @param parent the parent object
     */
    type TypeHandlerFunction = (value: any, index: string, parent: object | object[]) => any;

    /** A key map of constructors used to match by instance to create a value using the defined function */
    interface TypeHandlers {
        [key: string]: TypeHandlerFunction;
    }

    /**
     * @note This options should maybe be within the UserOptions interface
     * However, a check make impossible to accept handlers and other options (not in the DEFAULT_OPTIONS) when the return is a Transform
     * - The check: [lib/index.js#L56](https://github.com/kaue/jsonexport/blob/f486a71432d6ea6ab321554a2dd43418c107b418/lib/index.js#L56)
     * - The `DEFAULT_OPTIONS`: [lib/index.js#L22](https://github.com/kaue/jsonexport/blob/f486a71432d6ea6ab321554a2dd43418c107b418/lib/index.js#L22)
     */
    interface UserHandlers {
        /**
         * Use this to customize all Date in the CSV file
         * @deprecated Use typeHandlers
         * @note Others specific handlers have been remove in 3.0.0 but this one remained by mistake (https://github.com/kaue/jsonexport/pull/74)
         */
        handleDate?: ((value: Date, item: string) => any) | undefined;

        /** A key map of constructors used to match by instance to create a value using the defined function */
        typeHandlers?: TypeHandlers | undefined;

        /**
         * Post-process headers after they are calculated with delimiters
         * @example
         * ```
         * mapHeaders: (header) => header.replace(/foo\./, '')
         * ```
         */
        mapHeaders?: ((header: string) => string) | undefined;
        /** Try filling top rows first for unpopular columns, defaults to `false` */
        fillTopRow?: boolean | undefined;
    }

    type UserOptionsWithHandlers = UserHandlers & UserOptions;
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
declare function jsonexport(json: object | object[], userOptions?: jsonexport.UserOptionsWithHandlers): Promise<string>;
declare function jsonexport(json: object | object[], cb: (err: Error, csv: string) => void): void;
declare function jsonexport(
    json: object | object[],
    userOptions: jsonexport.UserOptionsWithHandlers,
    cb: (err: Error, csv: string) => void,
): void;

export = jsonexport;
