// Type definitions for formidable 1.2
// Project: https://github.com/node-formidable/formidable
// Definitions by: Wim Looman <https://github.com/Nemo157>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage } from 'http';
import { Stream, Transform, PassThrough } from 'stream';
import { EventEmitter } from 'events';

declare namespace Formidable {
    type BufferEncoding =
        | 'ascii'
        | 'utf8'
        | 'utf-8'
        | 'utf16le'
        | 'ucs2'
        | 'ucs-2'
        | 'base64'
        | 'latin1'
        | 'binary'
        | 'hex';

    type EventNames =
        /**
         * Emitted when the request was aborted by the user. Right now this can be due to a 'timeout' or
         * 'close' event on the socket. After this event is emitted, an error event will follow. In the
         * future there will be a separate 'timeout' event (needs a change in the node core).
         *
         * @link https://github.com/node-formidable/formidable#aborted
         */
        | 'aborted'
        /**
         * Emitted when the entire request has been received, and all contained files have finished
         * flushing to disk. This is a great place for you to send your response.
         *
         * @link https://github.com/node-formidable/formidable#end
         */
        | 'end'
        /**
         * Emitted when there is an error processing the incoming form. A request that experiences an
         * error is automatically paused, you will have to manually call request.resume() if you want the
         * request to continue firing 'data' events.
         *
         * @link https://github.com/node-formidable/formidable#error
         */
        | 'error'
        /**
         * Emitted whenever a field / value pair has been received.
         *
         * @link https://github.com/node-formidable/formidable#field
         */
        | 'field'
        /**
         * Emitted whenever a field / file pair has been received. file is an instance of File.
         *
         * @link https://github.com/node-formidable/formidable#file-1
         */
        | 'file'
        /**
         * Emitted whenever a new file is detected in the upload stream. Use this event if you want to
         * stream the file to somewhere else while buffering the upload on the file system.
         *
         * @link https://github.com/node-formidable/formidable#filebegin
         */
        | 'fileBegin'
        | 'headerEnd'
        | 'headerField'
        | 'headersEnd'
        | 'headerValue'
        | 'partBegin'
        | 'partData'
        /**
         * Emitted after each incoming chunk of data that has been parsed. Can be used to roll your own
         * progress bar.
         *
         * @link https://github.com/node-formidable/formidable#progress
         */
        | 'progress';

    interface Options {
        /**
         * sets encoding for incoming form fields
         *
         * @default 'utf-8'
         */
        encoding: BufferEncoding;

        /**
         * the directory for placing file uploads in. You can move them later by using fs.rename()
         *
         * @default os.tmpdir()
         */
        uploadDir: string;

        /**
         * to include the extensions of the original files or not
         *
         * @default false
         */
        keepExtensions: boolean;

        /**
         * allow upload empty files
         *
         * @default true
         */
        allowEmptyFiles: boolean;

        /**
         * the minium size of uploaded file
         *
         * @default 1
         */
        minFileSize: number;

        /**
         * limit the size of uploaded file
         *
         * @default 200 * 1024 * 1024
         */
        maxFileSize: number;

        /**
         * limit the number of fields, set 0 for unlimited
         *
         * @default 1000
         */
        maxFields: number;

        /**
         * limit the amount of memory all fields together (except files) can allocate in bytes
         *
         * @default 20 * 1024 * 1024
         */
        maxFieldsSize: number;

        /**
         * include checksums calculated for incoming files, set this to some hash algorithm, see
         * crypto.createHash for available algorithms
         *
         * @default false
         */
        hash: string | false;

        /**
         * which by default writes to host machine file system every file parsed; The function should
         * return an instance of a Writable stream that will receive the uploaded file data. With this
         * option, you can have any custom behavior regarding where the uploaded file data will be
         * streamed for. If you are looking to write the file uploaded in other types of cloud storages
         * (AWS S3, Azure blob storage, Google cloud storage) or private file storage, this is the option
         * you're looking for. When this option is defined the default behavior of writing the file in the
         * host machine file system is lost.
         *
         * @default null
         */
        fileWriteStreamHandler(): void;

        /**
         * when you call the .parse method, the files argument (of the callback) will contain arrays of
         * files for inputs which submit multiple files using the HTML5 multiple attribute. Also, the
         * fields argument will contain arrays of values for fields that have names ending with '[]'
         *
         * @default false
         */
        multiples: boolean;

        enabledPlugins: string[];
    }

    interface Fields {
        [key: string]: string | string[];
    }

    interface Files {
        [key: string]: File | File[]; // is an array when multiples is true
    }

    interface Part extends Stream {
        filename?: string;
        headers: Record<string, string>;
        mime?: string;
        name: string;
    }

    /**
     * @link https://github.com/node-formidable/formidable#file
     */
    interface FileJSON extends Pick<File, 'size' | 'path' | 'name' | 'type' | 'hash'> {
        filename: string;
        length: number;
        mime: string;
        mtime: Date | null;
    }

    interface File {
        /**
         * The size of the uploaded file in bytes. If the file is still being uploaded (see `'fileBegin'`
         * event), this property says how many bytes of the file have been written to disk yet.
         */
        size: number;

        /**
         * The path this file is being written to. You can modify this in the `'fileBegin'` event in case
         * you are unhappy with the way formidable generates a temporary path for your files.
         */
        path: string;

        /**
         * The name this file had according to the uploading client.
         */
        name: string | null;

        /**
         * The mime type of this file, according to the uploading client.
         */
        type: string | null;

        /**
         * A Date object (or `null`) containing the time this file was last written to. Mostly here for
         * compatibility with the [W3C File API Draft](http://dev.w3.org/2006/webapi/FileAPI/).
         */
        lastModifiedDate?: Date | null;

        /**
         * If `options.hash` calculation was set, you can read the hex digest out of this var.
         */
        hash?: string | 'sha1' | 'md5' | 'sha256' | null;

        /**
         * This method returns a JSON-representation of the file, allowing you to JSON.stringify() the
         * file which is useful for logging and responding to requests.
         *
         * @link https://github.com/node-formidable/formidable#filetojson
         */
        toJSON(): FileJSON;

        toString(): string;
    }

    interface EmitData {
        formname: any;
        key?: string | number;
        name: 'fileBegin' | 'file';
        value: File | string;
    }

    interface EventData {
        name: EventNames;
        buffer: string;
        end: string;
        formname: string;
        key: string;
        start: string;
        value: string;
    }

    type PluginFunction = (formidable: Formidable, options: Partial<Options>) => void;

    /**
     * Default options
     */
    const defaultOptions: Options;

    /**
     * Enabled plugins
     */
    const enabledPlugins: string[];

    /**
     * Errors
     */
    const errors: Record<
        | 'missingPlugin'
        | 'pluginFunction'
        | 'aborted'
        | 'noParser'
        | 'uninitializedParser'
        | 'filenameNotString'
        | 'maxFieldsSizeExceeded'
        | 'maxFieldsExceeded'
        | 'smallerThanMinFileSize'
        | 'biggerThanMaxFileSize'
        | 'noEmptyFiles'
        | 'missingContentType'
        | 'malformedMultipart'
        | 'missingMultipartBoundary'
        | 'unknownTransferEncoding',
        number
    > & {
        FormidableError: (message: string, internalCode: number, httpCode: number) => void;
    };

    /**
     * Persistent File
     */
    class PersistentFile extends EventEmitter {
        constructor(properties: File);
        open(): void;
        toJSON(): FileJSON;
        toString(): string;
        write(buffer: string, cb: () => void): void;
        end(cb: () => void): void;
        destroy(): void;
    }

    /**
     * Volatile File
     */
    const VolatileFile: typeof PersistentFile;

    /**
     * File
     */
    const File: typeof PersistentFile;

    /**
     * Plugins
     */
    const plugins: Record<'octetstream' | 'querystring' | 'multipart' | 'json', PluginFunction>;

    /**
     * Parsers
     */
    class DummyParser extends Transform {
        constructor(incomingForm: Formidable, options?: Partial<Options>);
        _flush(callback: () => void): void;
    }

    class JSONParser extends Transform {
        constructor(options?: Partial<Options>);
        _flush(callback: () => void): void;
        _transform(chunk: any, encoding: BufferEncoding, callback: () => void): void;
    }

    class MultipartParser extends Transform {
        constructor(options?: Partial<Options>);
        _final(callback: () => void): void;
        _handleCallback(name: string, buffer: Buffer, start?: number, end?: number): void;
        _transform(buffer: Buffer, _: any, callback: () => void): number;
        explain(): string;
        initWithBoundary(str: string): void;

        static stateToString: (stateNumber: number) => string;

        static STATES: Record<
            | 'PARSER_UNINITIALIZED'
            | 'START'
            | 'START_BOUNDARY'
            | 'HEADER_FIELD_START'
            | 'HEADER_FIELD'
            | 'HEADER_VALUE_START'
            | 'HEADER_VALUE'
            | 'HEADER_VALUE_ALMOST_DONE'
            | 'HEADERS_ALMOST_DONE'
            | 'PART_DATA_START'
            | 'PART_DATA'
            | 'PART_END'
            | 'END',
            number
        >;
    }

    class OctetStreamParser extends PassThrough {
        constructor(options?: Partial<Options>);
    }

    class QuerystringParser extends Transform {
        constructor(options?: Partial<Options>);
        _flush(callback: () => void): void;
        _transform(buffer: Buffer, encoding: BufferEncoding, callback: () => void): void;
    }

    class StreamingQuerystring extends QuerystringParser {
        emitField(key: string, val?: string): void;
        getSection(buffer: Buffer, i: number): string;
    }

    const parsers: {
        DummyParser: DummyParser;
        JSONParser: JSONParser;
        MultipartParser: MultipartParser;
        OctetstreamParser: OctetStreamParser;
        OctetStreamParser: OctetStreamParser;
        QuerystringParser: QuerystringParser;
        QueryStringParser: QuerystringParser;
    };

    /**
     * make it available without requiring the `new` keyword
     * if you want it access `const formidable.IncomingForm` as v1
     */
    function formidable(options?: Partial<Options>): Formidable;

    /**
     * Alias
     */
    const IncomingForm: typeof Formidable;
}

declare class Formidable {
    constructor(options?: Partial<Formidable.Options>);

    /**
     * Parses an incoming Node.js request containing form data. If callback is provided, all fields
     * and files are collected and passed to the callback.
     *
     * @link https://github.com/node-formidable/formidable#parserequest-callback
     */
    parse(
        request: IncomingMessage,
        callback: (err: any, fields: Formidable.Fields, files: Formidable.Files) => void,
    ): void;

    once(name: 'end', callback: () => void): void;
    once(name: 'error', callback: (err: any) => void): void;

    on(name: 'data', callback: (data: Formidable.EventData) => void): void;
    on(name: 'error', callback: (err: any) => void): void;
    on(name: 'field', callback: (name: string, value: string) => void): void;
    on(name: 'fileBegin' | 'file', callback: (formName: string, file: Formidable.File) => void): void;
    on(name: 'progress', callback: (bytesReceived: number, bytesExpected: number) => void): void;
    on(name: string, callback: () => void): void;

    emit(name: 'data', data: Formidable.EmitData): void;

    /**
     * A method that allows you to extend the Formidable library. By default we include 4 plugins,
     * which esentially are adapters to plug the different built-in parsers.
     *
     * @link https://github.com/node-formidable/formidable#useplugin-plugin
     */
    use(plugin: Formidable.PluginFunction): void;

    /**
     * If you want to use Formidable to only handle certain parts for you, you can do something
     * similar. Or see #387 for inspiration, you can for example validate the mime-type.
     *
     * @link https://github.com/node-formidable/formidable#formonpart
     */
    onPart(part: Formidable.Part): void;

    handlePart(part: Formidable.Part): void;

    static readonly DEFAULT_OPTIONS: Formidable.Options;
}

export = Formidable;
