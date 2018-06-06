import JSON2CSVBase from './JSON2CSVBase';

declare class JSON2CSVParser<T> extends JSON2CSVBase<T> {
    /**
     * Main function that converts json to csv.
     *
     * @param {object|object[]} data Array of JSON objects to be converted to CSV
     * @returns {string} The CSV formated data as a string
     */
    public parse(data: Readonly<T> | ReadonlyArray<T>): string;

    /**
     * Preprocess the data according to the give opts (unwind, flatten, etc.)
        and calculate the fields and field names if they are not provided.
     *
     * @param {object|object[]} data Array or object to be converted to CSV
     * @returns {object[]} Preprocessed data ready to be processed
     */
    protected preprocessData(data: T | Array<T>): Array<T>;

    /**
     * Create the content row by row below the header
     *
     * @param {object[]} data Array of JSON objects to be converted to CSV
     * @returns {string} CSV string (body)
     */
    protected processData(data: Array<T>): string;
}

export default JSON2CSVParser;
