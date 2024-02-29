// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class PrintWriter {
        /**
         *   Writes data to the PrintWriter stream
         *   @param data all data to be written by the
         *   PrintWriter
         */
        write(data: any[]): void;

        /**
         *   Writes data to the PrintWriter stream, and adds a
         *   new line at the end
         *   @param data all data to be printed by the
         *   PrintWriter
         */
        print(data: any[]): void;

        /**
         *   Clears the data already written to the PrintWriter
         *   object
         */
        clear(): void;

        /**
         *   Closes the PrintWriter
         */
        close(): void;
    }
    interface p5InstanceExtensions {
        /**
         *   Loads a JSON file from a file or a URL, and
         *   returns an Object. Note that even if the JSON file
         *   contains an Array, an Object will be returned with
         *   index numbers as keys. This method is
         *   asynchronous, meaning it may not finish before the
         *   next line in your sketch is executed. JSONP is
         *   supported via a polyfill and you can pass in as
         *   the second argument an object with definitions of
         *   the json callback following the syntax specified
         *   here.
         *
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param path name of the file or url to load
         *   @param [jsonpOptions] options object for jsonp
         *   related settings
         *   @param [datatype] "json" or "jsonp"
         *   @param [callback] function to be executed after
         *   loadJSON() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return JSON data
         */
        loadJSON(
            path: string,
            jsonpOptions?: object,
            datatype?: string,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): object | any[];

        /**
         *   Loads a JSON file from a file or a URL, and
         *   returns an Object. Note that even if the JSON file
         *   contains an Array, an Object will be returned with
         *   index numbers as keys. This method is
         *   asynchronous, meaning it may not finish before the
         *   next line in your sketch is executed. JSONP is
         *   supported via a polyfill and you can pass in as
         *   the second argument an object with definitions of
         *   the json callback following the syntax specified
         *   here.
         *
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param path name of the file or url to load
         *   @param datatype "json" or "jsonp"
         *   @param [callback] function to be executed after
         *   loadJSON() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        loadJSON(
            path: string,
            datatype: string,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): object | any[];

        /**
         *   Loads a JSON file from a file or a URL, and
         *   returns an Object. Note that even if the JSON file
         *   contains an Array, an Object will be returned with
         *   index numbers as keys. This method is
         *   asynchronous, meaning it may not finish before the
         *   next line in your sketch is executed. JSONP is
         *   supported via a polyfill and you can pass in as
         *   the second argument an object with definitions of
         *   the json callback following the syntax specified
         *   here.
         *
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param path name of the file or url to load
         *   @param callback function to be executed after
         *   loadJSON() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        loadJSON(
            path: string,
            callback: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): object | any[];

        /**
         *   Reads the contents of a file and creates a String
         *   array of its individual lines. If the name of the
         *   file is used as the parameter, as in the above
         *   example, the file must be located in the sketch
         *   directory/folder. Alternatively, the file may be
         *   loaded from anywhere on the local computer using
         *   an absolute path (something that starts with / on
         *   Unix and Linux, or a drive letter on Windows), or
         *   the filename parameter can be a URL for a file
         *   found on a network.
         *
         *   This method is asynchronous, meaning it may not
         *   finish before the next line in your sketch is
         *   executed.
         *
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param filename name of the file or url to load
         *   @param [callback] function to be executed after
         *   loadStrings() completes, Array is passed in as
         *   first argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return Array of Strings
         */
        loadStrings(
            filename: string,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): string[];

        /**
         *   Reads the contents of a file or URL and creates a
         *   p5.Table object with its values. If a file is
         *   specified, it must be located in the sketch's
         *   "data" folder. The filename parameter can also be
         *   a URL to a file found online. By default, the file
         *   is assumed to be comma-separated (in CSV format).
         *   Table only looks for a header row if the 'header'
         *   option is included. This method is asynchronous,
         *   meaning it may not finish before the next line in
         *   your sketch is executed. Calling loadTable()
         *   inside preload() guarantees to complete the
         *   operation before setup() and draw() are called.
         *   Outside of preload(), you may supply a callback
         *   function to handle the object:
         *
         *   All files loaded and saved use UTF-8 encoding.
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param filename name of the file or URL to load
         *   @param [extension] parse the table by
         *   comma-separated values "csv", semicolon-separated
         *   values "ssv", or tab-separated values "tsv"
         *   @param [header] "header" to indicate table has
         *   header row
         *   @param [callback] function to be executed after
         *   loadTable() completes. On success, the Table
         *   object is passed in as the first argument.
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return Table object containing data
         */
        loadTable(
            filename: string,
            extension?: string,
            header?: string,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): object;

        /**
         *   Reads the contents of a file and creates an XML
         *   object with its values. If the name of the file is
         *   used as the parameter, as in the above example,
         *   the file must be located in the sketch
         *   directory/folder. Alternatively, the file maybe be
         *   loaded from anywhere on the local computer using
         *   an absolute path (something that starts with / on
         *   Unix and Linux, or a drive letter on Windows), or
         *   the filename parameter can be a URL for a file
         *   found on a network.
         *
         *   This method is asynchronous, meaning it may not
         *   finish before the next line in your sketch is
         *   executed. Calling loadXML() inside preload()
         *   guarantees to complete the operation before
         *   setup() and draw() are called.
         *
         *   Outside of preload(), you may supply a callback
         *   function to handle the object.
         *
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param filename name of the file or URL to load
         *   @param [callback] function to be executed after
         *   loadXML() completes, XML object is passed in as
         *   first argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return XML object containing data
         */
        loadXML(filename: string, callback?: (...args: any[]) => any, errorCallback?: (...args: any[]) => any): object;

        /**
         *   This method is suitable for fetching files up to
         *   size of 64MB.
         *   @param file name of the file or URL to load
         *   @param [callback] function to be executed after
         *   loadBytes() completes
         *   @param [errorCallback] function to be executed if
         *   there is an error
         *   @return an object whose 'bytes' property will be
         *   the loaded buffer
         */
        loadBytes(file: string, callback?: (...args: any[]) => any, errorCallback?: (...args: any[]) => any): object;

        /**
         *   Method for executing an HTTP GET request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'GET'). The 'binary'
         *   datatype will return a Blob object, and the
         *   'arrayBuffer' datatype will return an ArrayBuffer
         *   which can be used to initialize typed arrays (such
         *   as Uint8Array).
         *   @param path name of the file or url to load
         *   @param [datatype] "json", "jsonp", "binary",
         *   "arrayBuffer", "xml", or "text"
         *   @param [data] param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return A promise that resolves with the data when
         *   the operation completes successfully or rejects
         *   with the error after one occurs.
         */
        httpGet(
            path: string,
            datatype?: string,
            data?: object | boolean,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP GET request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'GET'). The 'binary'
         *   datatype will return a Blob object, and the
         *   'arrayBuffer' datatype will return an ArrayBuffer
         *   which can be used to initialize typed arrays (such
         *   as Uint8Array).
         *   @param path name of the file or url to load
         *   @param data param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpGet(
            path: string,
            data: object | boolean,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP GET request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'GET'). The 'binary'
         *   datatype will return a Blob object, and the
         *   'arrayBuffer' datatype will return an ArrayBuffer
         *   which can be used to initialize typed arrays (such
         *   as Uint8Array).
         *   @param path name of the file or url to load
         *   @param callback function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpGet(path: string, callback: (...args: any[]) => any, errorCallback?: (...args: any[]) => any): Promise<any>;

        /**
         *   Method for executing an HTTP POST request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'POST').
         *   @param path name of the file or url to load
         *   @param [datatype] "json", "jsonp", "xml", or
         *   "text". If omitted, httpPost() will guess.
         *   @param [data] param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpPost() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return A promise that resolves with the data when
         *   the operation completes successfully or rejects
         *   with the error after one occurs.
         */
        httpPost(
            path: string,
            datatype?: string,
            data?: object | boolean,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP POST request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'POST').
         *   @param path name of the file or url to load
         *   @param data param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpPost() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpPost(
            path: string,
            data: object | boolean,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP POST request. If data
         *   type is not specified, p5 will try to guess based
         *   on the URL, defaulting to text. This is equivalent
         *   to calling httpDo(path, 'POST').
         *   @param path name of the file or url to load
         *   @param callback function to be executed after
         *   httpPost() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpPost(
            path: string,
            callback: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP request. If data type
         *   is not specified, p5 will try to guess based on
         *   the URL, defaulting to text. For more advanced
         *   use, you may also pass in the path as the first
         *   argument and a object as the second argument, the
         *   signature follows the one specified in the Fetch
         *   API specification. This method is suitable for
         *   fetching files up to size of 64MB when "GET" is
         *   used.
         *   @param path name of the file or url to load
         *   @param [method] either "GET", "POST", or "PUT",
         *   defaults to "GET"
         *   @param [datatype] "json", "jsonp", "xml", or
         *   "text"
         *   @param [data] param data passed sent with request
         *   @param [callback] function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         *   @return A promise that resolves with the data when
         *   the operation completes successfully or rejects
         *   with the error after one occurs.
         */
        httpDo(
            path: string,
            method?: string,
            datatype?: string,
            data?: object,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;

        /**
         *   Method for executing an HTTP request. If data type
         *   is not specified, p5 will try to guess based on
         *   the URL, defaulting to text. For more advanced
         *   use, you may also pass in the path as the first
         *   argument and a object as the second argument, the
         *   signature follows the one specified in the Fetch
         *   API specification. This method is suitable for
         *   fetching files up to size of 64MB when "GET" is
         *   used.
         *   @param path name of the file or url to load
         *   @param options Request object options as
         *   documented in the "fetch" API reference
         *   @param [callback] function to be executed after
         *   httpGet() completes, data is passed in as first
         *   argument
         *   @param [errorCallback] function to be executed if
         *   there is an error, response is passed in as first
         *   argument
         */
        httpDo(
            path: string,
            options: object,
            callback?: (...args: any[]) => any,
            errorCallback?: (...args: any[]) => any
        ): Promise<any>;
        createWriter(name: string, extension?: string): PrintWriter;

        /**
         *   Saves a given element(image, text, json, csv, wav,
         *   or html) to the client's computer. The first
         *   parameter can be a pointer to element we want to
         *   save. The element can be one of p5.Element,an
         *   Array of Strings, an Array of JSON, a JSON object,
         *   a p5.Table , a p5.Image, or a p5.SoundFile
         *   (requires p5.sound). The second parameter is a
         *   filename (including extension).The third parameter
         *   is for options specific to this type of object.
         *   This method will save a file that fits the given
         *   parameters. If it is called without specifying an
         *   element, by default it will save the whole canvas
         *   as an image file. You can optionally specify a
         *   filename as the first parameter in such a case.
         *   Note that it is not recommended to call this
         *   method within draw, as it will open a new save
         *   dialog on every render.
         *   @param [objectOrFilename] If filename is provided,
         *   will save canvas as an image with either png or
         *   jpg extension depending on the filename. If object
         *   is provided, will save depending on the object and
         *   filename (see examples above).
         *   @param [filename] If an object is provided as the
         *   first parameter, then the second parameter
         *   indicates the filename, and should include an
         *   appropriate file extension (see examples above).
         *   @param [options] Additional options depend on
         *   filetype. For example, when saving JSON, true
         *   indicates that the output will be optimized for
         *   filesize, rather than readability.
         */
        save(objectOrFilename?: object | string, filename?: string, options?: boolean | string): void;

        /**
         *   Writes the contents of an Array or a JSON object
         *   to a .json file. The file saving process and
         *   location of the saved file will vary between web
         *   browsers.
         *   @param [optimize] If true, removes line breaks and
         *   spaces from the output file to optimize filesize
         *   (but not readability).
         */
        saveJSON(json: any[] | object, filename: string, optimize?: boolean): void;

        /**
         *   Writes an array of Strings to a text file, one
         *   line per String. The file saving process and
         *   location of the saved file will vary between web
         *   browsers.
         *   @param list string array to be written
         *   @param filename filename for output
         *   @param [extension] the filename's extension
         *   @param [isCRLF] if true, change line-break to CRLF
         */
        saveStrings(list: string[], filename: string, extension?: string, isCRLF?: boolean): void;

        /**
         *   Writes the contents of a Table object to a file.
         *   Defaults to a text file with
         *   comma-separated-values ('csv') but can also use
         *   tab separation ('tsv'), or generate an HTML table
         *   ('html'). The file saving process and location of
         *   the saved file will vary between web browsers.
         *   @param Table the Table object to save to a file
         *   @param filename the filename to which the Table
         *   should be saved
         *   @param [options] can be one of "tsv", "csv", or
         *   "html"
         */
        saveTable(Table: Table, filename: string, options?: string): void;
    }
}
