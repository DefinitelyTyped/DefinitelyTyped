// Type definitions for async-csv 2.1
// Project: https://github.com/anton-bot/async-csv#readme
// Definitions by: Moritz Friedrich <https://github.com/Radiergummi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
     *
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

    type RecordDelimiter = string | Buffer | 'auto' | 'unix' | 'mac' | 'windows' | 'ascii' | 'unicode';

    interface CastingContext {
        readonly column?: number | string;
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
        columns?: number | string[];

        /**
         * Set the field delimiter.
         */
        delimiter?: string;

        /**
         * Period to run in milliseconds.
         */
        duration?: number;

        /**
         * If specified, then buffers will be decoded to strings using the
         * specified encoding.
         */
        encoding?: string;

        /**
         * When to stop the generation.
         */
        end?: number | Date;

        /**
         * One or multiple characters to print at the end of the file; only
         * apply when objectMode is disabled.
         */
        eof?: boolean | string;

        /**
         * Generate buffers equals length as defined by the
         * `highWaterMark` option.
         */
        fixed_size?: boolean;
        fixedSize?: boolean;

        /**
         * The maximum number of bytes to store in the internal buffer before
         * ceasing to read from the underlying resource.
         */
        high_water_mark?: number;
        highWaterMark?: number;

        /**
         * Number of lines or records to generate.
         */
        length?: number;

        /**
         * Maximum number of characters per word.
         */
        max_word_length?: number;
        maxWordLength?: number;

        /**
         * Whether this stream should behave as a stream of objects.
         */
        object_mode?: boolean;
        objectMode?: boolean;

        /**
         * One or multiple characters used to delimit records.
         */
        row_delimiter?: string;

        /**
         * Generate idempotent random characters if a number provided.
         */
        seed?: boolean | number;

        /**
         * The time to wait between the generation of each records
         */
        sleep?: number;
    }

    interface CsvParseOptions {
        /**
         * If true, the parser will attempt to convert read data types to
         * native types.
         *
         * @deprecated Use {@link cast}
         */
        auto_parse?: boolean | CastingFunction;

        /**
         * If true, the parser will attempt to convert read data types to dates.
         * It requires the "auto_parse" option.
         *
         * @deprecated Use {@link cast_date}
         */
        auto_parse_date?: boolean | CastingDateFunction;

        /**
         * If true, detect and exclude the byte order mark (BOM) from the CSV
         * input, if present.
         */
        bom?: boolean;

        /**
         * If true, the parser will attempt to convert input string to native
         * types. If a function, receive the value as first argument, a context
         * as second argument and return a new value. More information about the
         * context properties is available below.
         */
        cast?: boolean | CastingFunction;

        /**
         * If true, the parser will attempt to convert input string to dates.
         * If a function, receive the value as argument and return a new value.
         * It requires the "auto_parse" option. Be careful, it relies
         * on `Date.parse`.
         */
        cast_date?: boolean | CastingDateFunction;

        /**
         * List of fields as an array, a user defined callback accepting the
         * first line and returning the column names or true if auto-discovered
         * in the first CSV line. Defaults to null. Affects the result data set
         * in the sense that records will be objects instead of arrays.
         */
        columns?: ColumnOption[] | boolean | ((record: any) => ColumnOption[]);

        /**
         * Treat all the characters after this one as a comment.
         * Default to '' (disabled).
         */
        comment?: string;

        /**
         * Set the field delimiter. One character only, defaults to comma.
         */
        delimiter?: string | Buffer;

        /**
         * Set the escape character, one character only.
         * Defaults to double quotes.
         */
        escape?: string | Buffer;

        /**
         * Start handling records from the requested number of records.
         */
        from?: number;

        /**
         * Start handling records from the requested line number.
         */
        from_line?: number;

        /**
         * Generate two properties `info` and `record` where `info` is a
         * snapshot of the info object at the time the record was created and
         * `record` is the parsed array or object.
         */
        info?: boolean;

        /**
         * If true, ignore whitespace immediately following the delimiter (i.e.
         * left-trim all fields), defaults to false. Does not remove whitespace
         * in a quoted field.
         */
        ltrim?: boolean;

        /**
         * Maximum number of characters to be contained in the field and line
         * buffers before an exception is raised, used to guard against a wrong
         * delimiter or `record_delimiter`, default to 128,000 characters.
         */
        max_record_size?: number;

        /**
         * Name of header-record title to name objects by.
         */
        objname?: string;

        /**
         * Optional character surrounding a field, one character only, defaults
         * to double quotes.
         */
        quote?: string | boolean | Buffer;

        /**
         * Generate two properties raw and row where raw is the original CSV row
         * content and row is the parsed array or object.
         */
        raw?: boolean;

        /**
         * Preserve quotes inside unquoted field.
         */
        relax?: boolean;

        /**
         * Discard inconsistent columns count, default to false.
         */
        relax_column_count?: boolean;

        /**
         * One or multiple characters used to delimit record rows; defaults to
         * auto discovery if not provided. Supported auto discovery method are
         * Linux ("\n"), Apple ("\r") and Windows ("\r\n") row delimiters.
         */
        record_delimiter?: string | string[] | Buffer | Buffer[];

        /**
         * If true, ignore whitespace immediately preceding the delimiter (i.e.
         * right-trim all fields), defaults to false. Does not remove whitespace
         * in a quoted field.
         */
        rtrim?: boolean;

        /**
         * Dont generate empty values for empty lines.
         * Defaults to false
         */
        skip_empty_lines?: boolean;

        /**
         * Skip a line with error found inside and directly go process the
         * next line.
         */
        skip_lines_with_error?: boolean;

        /**
         * Don't generate records for lines containing empty column values
         * (column matching /\s*\/), defaults to false.
         */
        skip_lines_with_empty_values?: boolean;

        /**
         * Stop handling records after the requested number of records.
         */
        to?: number;

        /**
         * Stop handling records after the requested line number.
         */
        to_line?: number;

        /**
         * If `true`, ignore whitespace immediately around the delimiter,
         * defaults to `false`. Does not remove whitespace in a quoted field.
         */
        trim?: boolean;
    }

    interface CsvStringifyOptions {
        /**
         * Key-value object which defines custom cast for certain data types
         */
        cast?: {
            boolean?: Cast<boolean>;
            date?: Cast<Date>;
            number?: Cast<number>;

            /**
             * Custom formatter for generic object values
             */
            object?: Cast<Record<string, any>>;
            string?: Cast<string>;
        };

        /**
         * List of fields, applied when `transform` returns an object, the order
         * matters. Read the transformer documentation for additional
         * information. Columns are auto-discovered in the first record when the
         * user write objects can refer to nested properties of the input JSON
         * see the "header" option on how to print columns names on the
         * first line.
         */
        columns?: string[] | PlainObject<string> | ParseColumnOption[];

        /**
         * Set the field delimiter, one character only, defaults to a comma.
         */
        delimiter?: string | Buffer;

        /**
         * Add the value of "options.RecordDelimiter" on the last line, default
         * to true.
         */
        eof?: boolean;

        /**
         * Defaults to the escape read option.
         */
        escape?: string | Buffer;
        header?: boolean;

        /**
         * The quote characters, defaults to the ", an empty quote value will
         * preserve the original field.
         */
        quote?: string | Buffer | boolean;

        /**
         * Boolean, default to false, quote all the non-empty fields even if
         * not required.
         */
        quoted?: boolean;

        /**
         * Boolean, no default, quote empty fields and overrides `quoted_string`
         * on empty strings when defined.
         */
        quoted_empty?: boolean;

        /**
         * Boolean, default to false, quote all fields matching a
         * regular expression.
         */
        quoted_match?: boolean;

        /**
         * Boolean, default to false, quote all fields of type string even if
         * not required.
         */
        quoted_string?: boolean;

        /**
         * String used to delimit record rows or a special value. Special values
         * are 'auto', 'unix', 'mac', 'windows', 'ascii', 'unicode'. Defaults
         * to 'auto' (discovered in source or 'unix' if no source is specified).
         */
        record_delimiter?: RecordDelimiter;
    }

    interface TransformOptions {
        /**
         * In the absence of a consumer, like a `stream.Readable`, trigger the
         * consumption of the stream.
         */
        consume?: boolean;

        /**
         * The number of transformation callbacks to run in parallel; only apply
         * with asynchronous handlers; default to "100".
         */
        parallel?: number;

        /**
         * Pass user defined parameters to the user handler as last argument.
         */
        params?: any;
    }
}

export = CsvAsync;
