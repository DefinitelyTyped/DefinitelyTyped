// Type definitions for formidable 1.2
// Project: https://github.com/node-formidable/formidable
// Definitions by: Wim Looman <https://github.com/Nemo157>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from "stream";
import Formidable = require("./Formidable");
import parsers = require("./parsers/index");
import PersistentFile = require("./PersistentFile");
import VolatileFile = require("./VolatileFile");
import errors = require("./FormidableError");

declare namespace formidable {
    type BufferEncoding =
        | "ascii"
        | "base64"
        | "binary"
        | "hex"
        | "latin1"
        | "ucs-2"
        | "ucs2"
        | "utf-8"
        | "utf16le"
        | "utf8";

    type EventNames =
        /**
         * Emitted when the request was aborted by the user. Right now this can be due to a 'timeout' or
         * 'close' event on the socket. After this event is emitted, an error event will follow. In the
         * future there will be a separate 'timeout' event (needs a change in the node core).
         *
         * @link https://github.com/node-formidable/formidable#aborted
         */
        | "aborted"
        /**
         * Emitted when the entire request has been received, and all contained files have finished
         * flushing to disk. This is a great place for you to send your response.
         *
         * @link https://github.com/node-formidable/formidable#end
         */
        | "end"
        /**
         * Emitted when there is an error processing the incoming form. A request that experiences an
         * error is automatically paused, you will have to manually call request.resume() if you want the
         * request to continue firing 'data' events.
         *
         * @link https://github.com/node-formidable/formidable#error
         */
        | "error"
        /**
         * Emitted whenever a field / value pair has been received.
         *
         * @link https://github.com/node-formidable/formidable#field
         */
        | "field"
        /**
         * Emitted whenever a field / file pair has been received. file is an instance of File.
         *
         * @link https://github.com/node-formidable/formidable#file-1
         */
        | "file"
        /**
         * Emitted whenever a new file is detected in the upload stream. Use this event if you want to
         * stream the file to somewhere else while buffering the upload on the file system.
         *
         * @link https://github.com/node-formidable/formidable#filebegin
         */
        | "fileBegin"
        | "headerEnd"
        | "headerField"
        | "headersEnd"
        | "headerValue"
        | "partBegin"
        | "partData"
        /**
         * Emitted after each incoming chunk of data that has been parsed. Can be used to roll your own
         * progress bar.
         *
         * @link https://github.com/node-formidable/formidable#progress
         */
        | "progress";

    interface Options {
        /**
         * sets encoding for incoming form fields
         *
         * @default 'utf-8'
         */
        encoding?: BufferEncoding | undefined;

        /**
         * the directory for placing file uploads in. You can move them later by using fs.rename()
         *
         * @default os.tmpdir()
         */
        uploadDir?: string | undefined;

        /**
         * to include the extensions of the original files or not
         *
         * @default false
         */
        keepExtensions?: boolean | undefined;

        /**
         * allow upload empty files
         *
         * @default true
         */
        allowEmptyFiles?: boolean | undefined;

        /**
         * the minium size of uploaded file
         *
         * @default 1
         */
        minFileSize?: number | undefined;

        /**
         * limit the size of uploaded file
         *
         * @default 200 * 1024 * 1024
         */
        maxFileSize?: number | undefined;

        /**
         * limit the number of fields, set 0 for unlimited
         *
         * @default 1000
         */
        maxFields?: number | undefined;

        /**
         * limit the amount of memory all fields together (except files) can allocate in bytes
         *
         * @default 20 * 1024 * 1024
         */
        maxFieldsSize?: number | undefined;

        /**
         * include checksums calculated for incoming files, set this to some hash algorithm, see
         * crypto.createHash for available algorithms
         *
         * @default false
         */
        hash?: string | false | undefined;

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
        fileWriteStreamHandler?: (() => void) | undefined;

        /**
         * when you call the .parse method, the files argument (of the callback) will contain arrays of
         * files for inputs which submit multiple files using the HTML5 multiple attribute. Also, the
         * fields argument will contain arrays of values for fields that have names ending with '[]'
         *
         * @default false
         */
        multiples?: boolean | undefined;

        enabledPlugins?: string[] | undefined;
    }

    interface Fields {
        [field: string]: string | string[];
    }
    interface Files {
        [file: string]: File | File[];
    }

    interface Part extends Stream {
        filename?: string | undefined;
        headers: Record<string, string>;
        mime?: string | undefined;
        name: string;
    }

    /**
     * @link https://github.com/node-formidable/formidable#file
     */
    interface FileJSON extends Pick<File, "size" | "path" | "name" | "type" | "hash"> {
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
        lastModifiedDate?: Date | null | undefined;

        /**
         * If `options.hash` calculation was set, you can read the hex digest out of this var.
         */
        hash?: string | "sha1" | "md5" | "sha256" | null | undefined;

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
        key?: string | number | undefined;
        name: "fileBegin" | "file";
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

    type MappedParsers = {
        [P in keyof typeof parsers]: typeof parsers[P];
    };

    type Plugins = ["octetstream", "querystring", "multipart", "json"];

    type Plugin = keyof { [K in Plugins[number]]: K };

    type DefaultOptions = Required<Omit<Options, "enabledPlugins">> & {
        enabledPlugins: EnabledPlugins;
    };

    type EnabledPlugins = {
        [P in Plugin]: PluginFunction;
    };
}

declare const formidable: {
    (options?: formidable.Options): Formidable;
    defaultOptions: formidable.DefaultOptions;
    plugins: formidable.EnabledPlugins;
    errors: typeof errors;
    File: typeof PersistentFile;
    PersistentFile: typeof PersistentFile;
    VolatileFile: typeof VolatileFile;
    Formidable: typeof Formidable;
    formidable: (options?: formidable.Options) => Formidable;
    // alias
    IncomingForm: typeof Formidable;
    // parsers and mapped parsers
    parsers: typeof parsers;
} & formidable.MappedParsers;

export = formidable;
