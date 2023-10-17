/// <reference types="node" />

declare const CsvAsync: {
    /**
     * @param options
     */
    generate(options?: CsvAsync.CsvGenerateOptions): Promise<unknown[]>;

    /**
     * Parses a CSV file into an array of rows.
     *
     * @param input
     * @param options
     */
    parse(input: string, options?: CsvAsync.CsvParseOptions): Promise<unknown[]>;

    /**
     * @param data
     * @param handler
     * @param options
     */
    transform<T = any, U = any>(
        data: T[],
        handler: (record: T, callback: (err?: Error | null, record?: T) => void, params?: any) => U,
        options?: CsvAsync.TransformOptions,
    ): Promise<U[]>;

    /**
     * Converts an array of rows into a CSV string.
     *
     * @param data
     * @param options
     */
    stringify(
        data: Array<Array<string | number | null | undefined>>,
        options?: CsvAsync.CsvStringifyOptions,
    ): Promise<string>;
};

declare namespace CsvAsync {
    type CastingFunction = (value: string, context: CastingContext) => any;

    type CastingDateFunction = (value: string, context: CastingContext) => Date;

    type ColumnOption = string | undefined | null | false | { name: string };

    type ParseColumnOption = string | undefined | null;

    type Cast<T> = (value: T, context: CastingContext) => string;

    type PlainObject<T> = Record<string, T>;

    type RecordDelimiter = string | Buffer | "auto" | "unix" | "mac" | "windows" | "ascii" | "unicode";

    interface CastingContext {
        readonly column?: number | string | undefined;
        readonly empty_lines: number;
        readonly header: boolean;
        readonly index: number;
        readonly quoting: boolean;
        readonly lines: number;
        readonly records: number;
        readonly invalid_field_length: number;
    }

    interface CsvGenerateOptions {
        /**
         * Define the number of generated fields and the generation method.
         */
        columns?: number | string[] | undefined;

        /**
         * Set the field delimiter.
         */
        delimiter?: string | undefined;

        /**
         * Period to run in milliseconds.
         */
        duration?: number | undefined;

        /**
         * If specified, then buffers will be decoded to strings using the
         * specified encoding.
         */
        encoding?: string | undefined;

        /**
         * When to stop the generation.
         */
        end?: number | Date | undefined;

        /**
         * One or multiple characters to print at the end of the file; only
         * apply when objectMode is disabled.
         */
        eof?: boolean | string | undefined;

        /**
         * Generate buffers equals length as defined by the
         * `highWaterMark` option.
         */
        fixed_size?: boolean | undefined;
        fixedSize?: boolean | undefined;

        /**
         * The maximum number of bytes to store in the internal buffer before
         * ceasing to read from the underlying resource.
         */
        high_water_mark?: number | undefined;
        highWaterMark?: number | undefined;

        /**
         * Number of lines or records to generate.
         */
        length?: number | undefined;

        /**
         * Maximum number of characters per word.
         */
        max_word_length?: number | undefined;
        maxWordLength?: number | undefined;

        /**
         * Whether this stream should behave as a stream of objects.
         */
        object_mode?: boolean | undefined;
        objectMode?: boolean | undefined;

        /**
         * One or multiple characters used to delimit records.
         */
        row_delimiter?: string | undefined;

        /**
         * Generate idempotent random characters if a number provided.
         */
        seed?: boolean | number | undefined;

        /**
         * The time to wait between the generation of each records
         */
        sleep?: number | undefined;
    }

    interface CsvParseOptions {
        /**
         * If true, the parser will attempt to convert read data types to
         * native types.
         *
         * @deprecated Use {@link cast}
         */
        auto_parse?: boolean | CastingFunction | undefined;

        /**
         * If true, the parser will attempt to convert read data types to dates.
         * It requires the "auto_parse" option.
         *
         * @deprecated Use {@link cast_date}
         */
        auto_parse_date?: boolean | CastingDateFunction | undefined;

        /**
         * If true, detect and exclude the byte order mark (BOM) from the CSV
         * input, if present.
         */
        bom?: boolean | undefined;

        /**
         * If true, the parser will attempt to convert input string to native
         * types. If a function, receive the value as first argument, a context
         * as second argument and return a new value. More information about the
         * context properties is available below.
         */
        cast?: boolean | CastingFunction | undefined;

        /**
         * If true, the parser will attempt to convert input string to dates.
         * If a function, receive the value as argument and return a new value.
         * It requires the "auto_parse" option. Be careful, it relies
         * on `Date.parse`.
         */
        cast_date?: boolean | CastingDateFunction | undefined;

        /**
         * List of fields as an array, a user defined callback accepting the
         * first line and returning the column names or true if auto-discovered
         * in the first CSV line. Defaults to null. Affects the result data set
         * in the sense that records will be objects instead of arrays.
         */
        columns?: ColumnOption[] | boolean | ((record: any) => ColumnOption[]) | undefined;

        /**
         * Treat all the characters after this one as a comment.
         * Default to '' (disabled).
         */
        comment?: string | undefined;

        /**
         * Set the field delimiter. One character only, defaults to comma.
         */
        delimiter?: string | Buffer | undefined;

        /**
         * Set the escape character, one character only.
         * Defaults to double quotes.
         */
        escape?: string | Buffer | undefined;

        /**
         * Start handling records from the requested number of records.
         */
        from?: number | undefined;

        /**
         * Start handling records from the requested line number.
         */
        from_line?: number | undefined;

        /**
         * Generate two properties `info` and `record` where `info` is a
         * snapshot of the info object at the time the record was created and
         * `record` is the parsed array or object.
         */
        info?: boolean | undefined;

        /**
         * If true, ignore whitespace immediately following the delimiter (i.e.
         * left-trim all fields), defaults to false. Does not remove whitespace
         * in a quoted field.
         */
        ltrim?: boolean | undefined;

        /**
         * Maximum number of characters to be contained in the field and line
         * buffers before an exception is raised, used to guard against a wrong
         * delimiter or `record_delimiter`, default to 128,000 characters.
         */
        max_record_size?: number | undefined;

        /**
         * Name of header-record title to name objects by.
         */
        objname?: string | undefined;

        /**
         * Optional character surrounding a field, one character only, defaults
         * to double quotes.
         */
        quote?: string | boolean | Buffer | undefined;

        /**
         * Generate two properties raw and row where raw is the original CSV row
         * content and row is the parsed array or object.
         */
        raw?: boolean | undefined;

        /**
         * Preserve quotes inside unquoted field.
         */
        relax?: boolean | undefined;

        /**
         * Discard inconsistent columns count, default to false.
         */
        relax_column_count?: boolean | undefined;

        /**
         * One or multiple characters used to delimit record rows; defaults to
         * auto discovery if not provided. Supported auto discovery method are
         * Linux ("\n"), Apple ("\r") and Windows ("\r\n") row delimiters.
         */
        record_delimiter?: string | string[] | Buffer | Buffer[] | undefined;

        /**
         * If true, ignore whitespace immediately preceding the delimiter (i.e.
         * right-trim all fields), defaults to false. Does not remove whitespace
         * in a quoted field.
         */
        rtrim?: boolean | undefined;

        /**
         * Dont generate empty values for empty lines.
         * Defaults to false
         */
        skip_empty_lines?: boolean | undefined;

        /**
         * Skip a line with error found inside and directly go process the
         * next line.
         */
        skip_lines_with_error?: boolean | undefined;

        /**
         * Don't generate records for lines containing empty column values
         * (column matching /\s*\/), defaults to false.
         */
        skip_lines_with_empty_values?: boolean | undefined;

        /**
         * Stop handling records after the requested number of records.
         */
        to?: number | undefined;

        /**
         * Stop handling records after the requested line number.
         */
        to_line?: number | undefined;

        /**
         * If `true`, ignore whitespace immediately around the delimiter,
         * defaults to `false`. Does not remove whitespace in a quoted field.
         */
        trim?: boolean | undefined;
    }

    interface CsvStringifyOptions {
        /**
         * Key-value object which defines custom cast for certain data types
         */
        cast?: {
            boolean?: Cast<boolean> | undefined;
            date?: Cast<Date> | undefined;
            number?: Cast<number> | undefined;

            /**
             * Custom formatter for generic object values
             */
            object?: Cast<Record<string, any>> | undefined;
            string?: Cast<string> | undefined;
        } | undefined;

        /**
         * List of fields, applied when `transform` returns an object, the order
         * matters. Read the transformer documentation for additional
         * information. Columns are auto-discovered in the first record when the
         * user write objects can refer to nested properties of the input JSON
         * see the "header" option on how to print columns names on the
         * first line.
         */
        columns?: string[] | PlainObject<string> | ParseColumnOption[] | undefined;

        /**
         * Set the field delimiter, one character only, defaults to a comma.
         */
        delimiter?: string | Buffer | undefined;

        /**
         * Add the value of "options.RecordDelimiter" on the last line, default
         * to true.
         */
        eof?: boolean | undefined;

        /**
         * Defaults to the escape read option.
         */
        escape?: string | Buffer | undefined;
        header?: boolean | undefined;

        /**
         * The quote characters, defaults to the ", an empty quote value will
         * preserve the original field.
         */
        quote?: string | Buffer | boolean | undefined;

        /**
         * Boolean, default to false, quote all the non-empty fields even if
         * not required.
         */
        quoted?: boolean | undefined;

        /**
         * Boolean, no default, quote empty fields and overrides `quoted_string`
         * on empty strings when defined.
         */
        quoted_empty?: boolean | undefined;

        /**
         * Boolean, default to false, quote all fields matching a
         * regular expression.
         */
        quoted_match?: boolean | undefined;

        /**
         * Boolean, default to false, quote all fields of type string even if
         * not required.
         */
        quoted_string?: boolean | undefined;

        /**
         * String used to delimit record rows or a special value. Special values
         * are 'auto', 'unix', 'mac', 'windows', 'ascii', 'unicode'. Defaults
         * to 'auto' (discovered in source or 'unix' if no source is specified).
         */
        record_delimiter?: RecordDelimiter | undefined;
    }

    interface TransformOptions {
        /**
         * In the absence of a consumer, like a `stream.Readable`, trigger the
         * consumption of the stream.
         */
        consume?: boolean | undefined;

        /**
         * The number of transformation callbacks to run in parallel; only apply
         * with asynchronous handlers; default to "100".
         */
        parallel?: number | undefined;

        /**
         * Pass user defined parameters to the user handler as last argument.
         */
        params?: any;
    }
}

export = CsvAsync;
