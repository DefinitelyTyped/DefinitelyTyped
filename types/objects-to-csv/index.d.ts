// Type definitions for objects-to-csv 1.3
// Project: https://github.com/anton-bot/objects-to-csv#readme
// Definitions by: Tom Plant <https://github.com/pl4nty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class ObjectsToCsv {
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
     * @param filename The path and filename of the new CSV file.
     * @param options The options for writing to disk.
     * @param options.append Whether to append to file. Default is overwrite (false).
     * @param options.bom Append the BOM mark so that Excel shows
     * @param options.allColumns Whether to check all items for column names or only the first.  Default is the first.
     * @returns Data converted to a CSV string.
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
     * @param header - If false, omit the first row containing the
     * column names.
     * @param allColumns - Whether to check all items for column names.
     *   Uses only the first item if false.
     */
    toString(header?: boolean, allColumns?: boolean): Promise<string>;

    /**
     * Private method to run the actual conversion of array of objects to CSV data.
     * @param data Data to be converted.
     * @param header Whether the first line should contain column headers.
     * @param allColumns Whether to check all items for column names.
     *   Uses only the first item if false.
     * @returns Data converted to a CSV string.
     */
    convert(data: object[], header?: boolean, allColumns?: boolean): Promise<string>;
}

export = ObjectsToCsv;
