// Type definitions for csvtojson 1.1
// Project: https://github.com/Keyang/node-csvtojson
// Definitions by: Eric Byers <https://github.com/EricByers>, Wayne Carson <https://github.com/wcarson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';

declare namespace csvtojson {
    /**
     * Stream options
     */
    type StreamOptions = stream.TransformOptions;

    /**
     * Converter options
     */
    interface ConverterOptions {
       /**
        * Whether to construct final json object in memory which will be populated in "end_parsed"
        * event. Set to false if deal with huge csv data. default: true.
        */
        constructResult?: boolean;

        /**
         * Delimiter used for seperating columns. Use "auto" if delimiter is unknown in advance,
         * in this case, delimiter will be auto-detected (by best attempt). Use an array to give
         * a list of potential delimiters e.g. [",","|","$"]. (default: ",")
         */
        delimiter?: string | string[];

        /**
         * If a column contains delimiter, it is able to use quote character to surround the column
         * content. e.g. "hello, world" wont be split into two columns while parsing. Set to "off"
         * will ignore all quotes. (default: " (double quote))
         */
        quote?: string;

        /**
         * Indicate if parser trim off spaces surrounding column content. e.g. " content " will be
         * trimmed to "content". (default: true)
         */
        trim?: boolean;

        /**
         * This parameter turns on and off whether check field type. (default: true)
         */
        checkType?: boolean;

        /**
         * Stringify the stream output to JSON array. This is useful when pipe output to a file
         * which expects stringified JSON array. (default: false and only stringified JSON (without [])
         * will be pushed to downstream)
         */
        toArrayString?: boolean;

        /**
         * Ignore the empty value in CSV columns. If a column value is not giving, set this to true to
         * skip them. (default: false)
         */
        ignoreEmpty?: boolean;

        /**
         * Number of worker processes. The worker process will use multi-cores to help process CSV data.
         * Set to number of cores to improve the performance of processing large CSV file. Keep 1 for
         * small csv files. (default: 1)
         */
        workerNum?: number;

        /**
         * Indicating CSV data has no header row and first row is data row. (default: false)
         */
        noheader?: boolean;

        /**
         * An array to specify the headers of CSV data. If noheader is false, this value will override
         * CSV header row. Example: ["my field","name"] (default: null)
         */
        headers?: string[];

        /**
         * Don't interpret dots (.) and square brackets in header fields as nested object or array identifiers
         * at all (treat them like regular characters for JSON field identifiers). (default: false)
         */
        flatKeys?: boolean;

        /**
         * The max character a CSV row could have. 0 means infinite. If max number exceeded, parser will emit
         * "error" of "row_exceed". if a possibly corrupted CSV data provided, give it a number like 65535
         * so the parser wont consume memory. (default: 0)
         */
        maxRowLength?: number;

        /**
         * Whether or not to check if the column number of a row is the same as headers. If column number
         * mismatched headers number, an error of "mismatched_column" will be emitted. (default: false)
         */
        checkColumn?: boolean;

        /**
         * End of line character. If omitted, parser will attempt retrieve it from first chunk of CSV data.
         * If no valid eol found, then operation system eol will be used.
         */
        eol?: string;

        /**
         * Escape character used in quoted column. Default is double quote (") according to RFC4108. Change
         * to back slash (\) or other chars for your own case. (default: " (double quote))
         */
        escape?: string;

        /**
         * This parameter instructs the parser to include only those columns as specified by an array of
         * column indexes. Example: [0,2,3] will parse and include only columns 0, 2, and 3 in the JSON output.
         */
        includeColumns?: number[];

        /**
         * This parameter instructs the parser to ignore columns as specified by an array of column indexes.
         * Example: [1,3,5] will ignore columns 1, 3, and 5 and will not return them in the JSON output.
         */
        ignoreColumns?: number[];

        /**
         * Deprecated. Use workerNum instead.
         */
        fork?: number;
    }

    /**
     * Callback function for handling result of parse.
     */
    type ParseResultHandler = (err: any, result: any) => void;

    /**
     * Event handler for "json" events.
     */
    type JsonEventHandler = (jsonObj: any, rowNumber: number) => void;

    /**
     * Event handler for "csv" events.
     */
    type CsvEventHandler = (csvRow: string[], rowNumber: number) => void;

    /**
     * Event handler for "data" events.
     */
    type DataEventHandler = (data: any) => void;

    /**
     * Event handler for "error" events.
     */
    type ErrorEventHandler = (err: any) => void;

    /**
     * Event handler for "record_parsed" events.
     */
    type RecordParsedEventHandler = (jsonObj: any, csvRoe: string[], rowNumber: number) => void;

    /**
     * Event handler for "end" events.
     */
    type EndEventHandler = () => void;

    /**
     * Event handler for "end_parsed" events.
     */
    type EndParsedEventHandler = (jsonObjArray: any[]) => void;

    /**
     * Event handler for "done" events.
     */
    type DoneEventHandler = (err: any) => void;

    /**
     * Converts provided CSV input to  a JSON object.
     */
    class Converter extends stream.Transform {
        /**
         * Initializes a new instance of a Converter
         * @param options       converter options
         * @param    streamOptions stream options
         */
        constructor(options?: ConverterOptions, streamOptions?: StreamOptions);

        /**
         * Reads in a CSV from a string.
         * @param str the string to convert
         * @return returns this object for chaining
         */
        fromString(str: string): this;

        /**
         * Reads in a CSV from a string.
         * @param             str      the string to convert
         * @param callback callback function to handle result or error
         */
        fromString(str: string, callback: ParseResultHandler): void;

        /**
         * Reads in a CSV from a file.
         * @param filePath the path to the CSV file
         * @return returns this object for chaining
         */
        fromFile(filePath: string): this;

        /**
         * Reads in a CSV from a file.
         * @param             filePath the path to the CSV file
         * @param callback callback function to handle result or error
         */
        fromFile(filePath: string, callback: ParseResultHandler): void;

        /**
         * Reads in a CSV from a stream.
         * @param stream the stream
         * @return returns this object for chaining
         */
        fromStream(stream: NodeJS.ReadableStream): this;

        /**
         * Reads in a CSV from a stream.
         * @param             stream   the stream
         * @param callback callback function to handle result or error
         */
        fromStream(stream: stream.Stream, callback: ParseResultHandler): void;

        /**
         * Adds a listener function to the end of the listeners array for an event.
         * Available events:
         * - json
         * - csv
         * - data
         * - error
         * - record_parsed
         * - end
         * - end_parsed
         * - done
         * @param    event    name of event
         * @param  listener listener function
         * @return returns this object for chaining
         */
        // tslint:disable-next-line ban-types
        on(event: string, listener: Function | JsonEventHandler | CsvEventHandler | DataEventHandler | ErrorEventHandler
            | RecordParsedEventHandler | EndEventHandler | EndParsedEventHandler | DoneEventHandler): this;

        /**
         * Transform objects after CSV parsing but before result being emitted or pushed downstream.
         * @param  callback transform function
         * @return returns this object for chaining
         */
        transf(callback: (jsonObj: any, csvRow: string[], rowNumber: number) => void): this;

        /**
         * The function in preRawData will be called directly with the string from upper stream.
         * @param  callback callback function
         * @return returns this object for chaining
         */
        preRawData(callback: (csvRawData: string, cb: (newData: any) => void) => void): this;

        /**
         * The function is called each time a file line being found in csv stream.
         * @param  callback callback function
         * @return returns this object for chaining
         */
        preFileLine(callback: (line: string, rowNumber: number) => string): this;
    }
}

/**
 * Factory function which creates an instance of a Converter object.
 * @param options       converter options
 * @param    streamOptions stream options
 * @return Converter object
 */
declare function csvtojson(options?: csvtojson.ConverterOptions, streamOptions?: csvtojson.StreamOptions): csvtojson.Converter;

export = csvtojson;
