import JSON2CSVBase = require("./JSON2CSVBase");

declare class JSON2CSVParser<T> extends JSON2CSVBase<T> {
    /**
     * Main function that converts json to csv.
     *
     * @param data Array of JSON objects to be converted to CSV
     * @returns The CSV formated data as a string
     */
    parse(data: Readonly<T> | readonly T[]): string;

    /**
     * Preprocess the data according to the give opts (unwind, flatten, etc.)
     * and calculate the fields and field names if they are not provided.
     *
     * @param data Array or object to be converted to CSV
     * @returns Preprocessed data ready to be processed
     */
    protected preprocessData(data: T | T[]): T[];

    /**
     * Create the content row by row below the header
     *
     * @param data Array of JSON objects to be converted to CSV
     * @returns CSV string (body)
     */
    protected processData(data: T[]): string;
}

export = JSON2CSVParser;
