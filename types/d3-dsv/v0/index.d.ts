/** A parser and formatter for DSV (CSV and TSV) files. Extracted from D3. */
declare function loader(
    /** the symbol used to separate cells in the row. */
    delimiter: string,
    /** example: "text/plain" */
    encoding?: string,
): D3Dsv;

export = loader;
export as namespace d3_dsv;

/** A parser and formatter for DSV (CSV and TSV) files. Extracted from D3. */
interface D3Dsv {
    /**
     * Parses the specified string, which is the contents of a CSV file, returning an array of objects representing the parsed rows.
     * The string is assumed to be RFC4180-compliant.
     * Unlike the parseRows method, this method requires that the first line of the CSV file contains a comma-separated list of column names;
     * these column names become the attributes on the returned objects.
     * For example, consider the following CSV file:
     *
     * Year,Make,Model,Length
     * 1997,Ford,E350,2.34
     * 2000,Mercury,Cougar,2.38
     *
     * The resulting JavaScript array is:
     *
     * [  {"Year": "1997", "Make": "Ford", "Model": "E350", "Length": "2.34"},
     * {"Year": "2000", "Make": "Mercury", "Model": "Cougar", "Length": "2.38"} ]
     */
    parse<TRow>(
        table: string,
        /** coerce cells (strings) into different types or modify them. return null to strip this row from the output results. */
        accessor?: (row: any) => TRow,
    ): TRow[];

    /**
     * Parses the specified string, which is the contents of a CSV file, returning an array of arrays representing the parsed rows.
     * The string is assumed to be RFC4180-compliant.
     * Unlike the parse method, this method treats the header line as a standard row, and should be used whenever the CSV file does not contain a header.
     * Each row is represented as an array rather than an object.
     * Rows may have variable length.
     * For example, consider the following CSV file:
     *
     * 1997,Ford,E350,2.34
     * 2000,Mercury,Cougar,2.38
     * The resulting JavaScript array is:
     *
     * [  ["1997", "Ford", "E350", "2.34"],
     * ["2000", "Mercury", "Cougar", "2.38"] ]
     * Note that the values themselves are always strings; they will not be automatically converted to numbers. See parse for details.
     */
    parseRows<TRow>(
        table: string,
        /** coerce cells (strings) into different types or modify them. return null to strip this row from the output results. */
        accessor?: (row: string[]) => TRow,
    ): TRow[];

    /**
     * Converts the specified array of rows into comma-separated values format, returning a string.
     * This operation is the reverse of parse.
     * Each row will be separated by a newline (\n), and each column within each row will be separated by a comma (,).
     * Values that contain either commas, double-quotes (") or newlines will be escaped using double-quotes.
     *
     * Each row should be an object, and all object properties will be converted into fields.
     * For greater control over which properties are converted, convert the rows into arrays containing only the properties that should be converted and use formatRows.
     */
    format(rows: any[]): string;

    /**
     * Converts the specified array of rows into comma-separated values format, returning a string.
     * This operation is the reverse of parseRows. Each row will be separated by a newline (\n), and each column within each row will be separated by a comma (,).
     * Values that contain either commas, double-quotes (") or newlines will be escaped using double-quotes.
     */
    formatRows(rows: any[]): string;
}
