export declare namespace json2csv {
    export interface FieldValueCallback<T> {
        (row: T, field: string): string;
    }

    export interface FieldInfo<T> {
        label: string;
        default?: string;
        value?: string | FieldValueCallback<T>;
    }

    export interface Options<T> {
        fields?: Array<string | FieldInfo<T>>;
        ndjson?: boolean;
        unwind?: string | Array<string>;
        unwindBlank?: boolean;
        flatten?: boolean;
        defaultValue?: string;
        quote?: string;
        doubleQuote?: string;
        delimiter?: string;
        eol?: string;
        excelStrings?: boolean;
        header?: boolean;
        includeEmptyRows?: boolean;
        withBOM?: boolean;
    }
}

declare abstract class JSON2CSVBase<T> {
    constructor(opts?: json2csv.Options<T>);

    /**
     * Check passing opts and set defaults.
     *
     * @param {json2csv.Options} opts Options object containing fields,
     * delimiter, default value, quote mark, header, etc.
     * @returns {json2csv.Options} preprocessed Options object
     */
    protected preprocessOpts(opts?: json2csv.Options<T>) : json2csv.Options<T>;

    /**
     * Create the title row with all the provided fields as column headings
     *
     * @returns {string} titles as a string
     */
    protected getHeader(): string;

    /**
     * Preprocess each object according to the give opts (unwind, flatten, etc.).
     *
     * @param {object} row JSON object to be converted in a CSV row
     */
    protected preprocessRow(row: T): object;

    /**
     * Create the content of a specific CSV row
     *
     * @param {object} row JSON object to be converted in a CSV row
     * @returns {string} CSV string (row)
     */
    protected processRow(row: T): string;

    /**
     * Create the content of a specfic CSV row cell
     *
     * @param {object} row JSON object representing the  CSV row that the cell belongs to
     * @param {object} fieldInfo Details of the field to process to be a CSV cell
     * @returns {string} CSV string (cell)
     */
    protected processCell(row: T, fieldInfo: json2csv.FieldInfo<T>) : string;

    /**
     * Create the content of a specfic CSV row cell
     *
     * @param {object} row JSON object representing the  CSV row that the cell belongs to
     * @param {json2csv.FieldInfo} fieldInfo Details of the field to process to be a CSV cell
     * @returns {any} Field value
     */
    protected getValue(row: T, fieldInfo: json2csv.FieldInfo<T>): any;

    /**
     * Create the content of a specfic CSV row cell
     *
     * @param {any} value Value to be included in a CSV cell
     * @param {Boolean} stringify Details of the field to process to be a CSV cell
     * @returns {string} Value stringified and processed
     */
    protected processValue(value: any, stringify: Boolean): string;

    /**
     * Performs the flattening of a data row recursively
     *
     * @param {object} dataRow Original JSON object
     * @param {string} separator Separator to be used as the flattened field name
     * @returns {object} Flattened object
     */
    protected flatten(dataRow: T, separator: string): object;

    /**
     * Performs the unwind recursively in specified sequence
     *
     * @param {object[]} dataRow Original JSON object
     * @param {string[]} unwindPaths The paths as strings to be used to deconstruct the array
     * @returns {Array} Array of objects containing all rows after unwind of chosen paths
     */
    protected unwindData(dataRow: Array<T>, unwindPaths: Array<string>): Array<object>;
}

export default JSON2CSVBase;
