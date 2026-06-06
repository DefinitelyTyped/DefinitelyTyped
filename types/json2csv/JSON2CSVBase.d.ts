import { FieldInfo, NormalizedFieldInfo, Options } from "./";

declare abstract class JSON2CSVBase<T> {
    constructor(opts?: Options<T>);

    /**
     * Check passing opts and set defaults.
     *
     * @param opts Options object containing fields,
     * delimiter, default value, quote mark, header, etc.
     * @returns preprocessed Options object
     */
    protected preprocessOpts(opts?: Options<T>): Options<T>;

    /**
     * Check and normalize the fields configuration.
     *
     * @param fields Fields configuration provided by the user
     * or inferred from the data
     * @returns preprocessed FieldsInfo array
     */
    preprocessFieldsInfo<T>(fields: Array<string | FieldInfo<T>>): Array<NormalizedFieldInfo<T>>;

    /**
     * Create the title row with all the provided fields as column headings
     *
     * @returns titles as a string
     */
    protected getHeader(): string;

    /**
     * Preprocess each object according to the give opts (unwind, flatten, etc.).
     *
     * @param row JSON object to be converted in a CSV row
     */
    protected preprocessRow(row: T): object;

    /**
     * Create the content of a specific CSV row
     *
     * @param row JSON object to be converted in a CSV row
     * @returns CSV string (row)
     */
    protected processRow(row: T): string;

    /**
     * Create the content of a specfic CSV row cell
     *
     * @param row JSON object representing the CSV row that the cell belongs to
     * @param fieldInfo Details of the field to process to be a CSV cell
     * @returns CSV string (cell)
     */
    protected processCell(row: T, fieldInfo: NormalizedFieldInfo<T>): string;

    /**
     * Create the content of a specfic CSV row cell
     *
     * @param  value Value to be included in a CSV cell
     * @returns Value stringified and processed
     */
    protected processValue(value: any): string;
}

export = JSON2CSVBase;
