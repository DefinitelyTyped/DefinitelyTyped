// Type definitions for objects-to-csv 1.3
// Project: https://github.com/anton-bot/objects-to-csv#readme
// Definitions by: Tom Plant <https://github.com/pl4nty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class {
    /**
     * Creates a new instance of the object array to csv converter.
     */
    constructor(data: object[]);

    /**
     * Holds data to be converted.
     */
    data: object[];

    /**
     * Saves the CSV file to the specified file.
     * @param {string} filename - The path and filename of the new CSV file.
     * @param {object} options - The options for writing to disk.
     * @param {boolean} [options.append] - Whether to append to file. Default is overwrite (false).
     * @param {boolean} [options.bom] - Append the BOM mark so that Excel shows
     * @param {boolean} [options.allColumns] - Whether to check all items for column names or only the first.  Default is the first.
     * @returns {Promise<string>} - Data converted to a CSV string.
     */
    toDisk(
        filename: string,
        options?: {
            append?: boolean;
            bom?: boolean;
            allColumns?: boolean;
        },
    ): Promise<string>;

    /**
     * Returns the CSV file as string.
     * @param {boolean} header - If false, omit the first row containing the
     * column names.
     * @param {boolean} allColumns - Whether to check all items for column names.
     *   Uses only the first item if false.
     */
    toString(header?: boolean, allColumns?: boolean): Promise<string>;

    /**
     * Private method to run the actual conversion of array of objects to CSV data.
     * @param {object[]} data
     * @param {boolean} header - Whether the first line should contain column headers.
     * @param {boolean} allColumns - Whether to check all items for column names.
     *   Uses only the first item if false.
     * @returns {Promise<string>} - Data converted to a CSV string.
     */
    convert(data: object[], header?: boolean, allColumns?: boolean): Promise<string>;
}

export as namespace ObjectsToCsv;
