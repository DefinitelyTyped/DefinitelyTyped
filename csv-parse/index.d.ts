// Type definitions for csv-parse 1.1.0
// Project: https://github.com/wdavidw/node-csv-parse
// Definitions by: David Muller <https://github.com/davidm77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "csv-parse/types" {
    interface callbackFn {
        (err: any, output: any): void
    }

    interface nameCallback {
        (line1: any[]): boolean | string[]
    }

    interface options {
        /***
         *  Set the field delimiter. One character only, defaults to comma.
         */
        delimiter?: string;

        /***
         *  String used to delimit record rows or a special value; special constants are 'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified).
         */
        rowDelimiter?:  string;
        /***
         *  Optional character surrounding a field, one character only, defaults to double quotes.
         */
        quote?: string

        /***
         *  Set the escape character, one character only, defaults to double quotes.
         */
        escape?: string

        /***
         *  List of fields as an array, a user defined callback accepting the first line and returning the column names or true if autodiscovered in the first CSV line, default to null, affect the result data set in the sense that records will be objects instead of arrays.
         */
        columns?: any[]|boolean|nameCallback;

        /***
         *  Treat all the characters after this one as a comment, default to '' (disabled).
         */
        comment?: string

        /***
         *  Name of header-record title to name objects by.
         */
        objname?: string

        /***
         *  Preserve quotes inside unquoted field.
         */
        relax?: boolean

        /***
         *  Discard inconsistent columns count, default to false.
         */
        relax_column_count?: boolean

        /***
         *  Dont generate empty values for empty lines.
         */
        skip_empty_lines?: boolean

        /***
         *  Maximum numer of characters to be contained in the field and line buffers before an exception is raised, used to guard against a wrong delimiter or rowDelimiter, default to 128000 characters.
         */
        max_limit_on_data_read?: number

        /***
         *  If true, ignore whitespace immediately around the delimiter, defaults to false. Does not remove whitespace in a quoted field.
         */
        trim?: boolean

        /***
         *  If true, ignore whitespace immediately following the delimiter (i.e. left-trim all fields), defaults to false. Does not remove whitespace in a quoted field.
         */
        ltrim?: boolean

        /***
         *  If true, ignore whitespace immediately preceding the delimiter (i.e. right-trim all fields), defaults to false. Does not remove whitespace in a quoted field.
         */
        rtrim?: boolean

        /***
         *  If true, the parser will attempt to convert read data types to native types.
         */
        auto_parse?: boolean

        /***
         *  If true, the parser will attempt to convert read data types to dates. It requires the "auto_parse" option.
         */
        auto_parse_date?: boolean
    }

    import * as stream from "stream";

    interface Parser extends stream.Transform {
        __push(line: any): any ;
        __write(chars: any, end: any, callback: any): any;
    }

    interface ParserConstructor {
       new (options: options): Parser;
    }

    interface ParserStream extends NodeJS.ReadWriteStream {
        read(size?: number): any & string[];
    }

    interface parse {
        (input: string, options?: options, callback?: callbackFn): any;
        (options: options, callback: callbackFn): any;
        (callback: callbackFn): any;
        (options?: options): ParserStream;
        Parser: ParserConstructor;
    }
}

declare module "csv-parse" {
    import { parse as parseIntf } from "csv-parse/types";

    let parse: parseIntf;

    export = parse;
}

declare module "csv-parse/lib/sync" {
   import { options } from "csv-parse/types";

   function parse (input: string, options?: options): any;

   export = parse;
}