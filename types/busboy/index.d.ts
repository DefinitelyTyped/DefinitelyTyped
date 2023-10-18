/// <reference types="node" />

import { IncomingHttpHeaders } from "http";
import { Readable, Writable } from "stream";

declare namespace busboy {
    interface Limits {
        /**
         * Max field name size (in bytes).
         *
         * @default 100
         */
        fieldNameSize?: number | undefined;

        /**
         * Max field value size (in bytes).
         *
         * @default 1048576 (1MB)
         */
        fieldSize?: number | undefined;

        /**
         * Max number of non-file fields.
         *
         * @default Infinity
         */
        fields?: number | undefined;

        /**
         * For multipart forms, the max file size (in bytes).
         *
         * @default Infinity
         */
        fileSize?: number | undefined;

        /**
         * For multipart forms, the max number of file fields.
         *
         * @default Infinity
         */
        files?: number | undefined;

        /**
         * For multipart forms, the max number of parts (fields + files).
         *
         * @default Infinity
         */
        parts?: number | undefined;

        /**
         * For multipart forms, the max number of header key-value pairs to parse.
         *
         * @default 2000 (same as node's http module)
         */
        headerPairs?: number | undefined;
    }

    interface BusboyConfig {
        /**
         * These are the HTTP headers of the incoming request, which are used by individual parsers.
         */
        headers?: IncomingHttpHeaders | undefined;

        /**
         * 'highWaterMark' to use for the parser stream
         *
         * @default stream.Writable
         */
        highWaterMark?: number | undefined;

        /**
         * 'highWaterMark' to use for individual file streams
         *
         * @default stream.Readable
         */
        fileHwm?: number | undefined;

        /**
         * Default character set to use when one isn't defined.
         *
         * @default 'utf8'
         */
        defCharset?: string | undefined;

        /**
         * For multipart forms, the default character set to use for values of part header parameters (e.g. filename)
         * that are not extended parameters (that contain an explicit charset
         *
         * @default 'latin1'
         */
        defParamCharset?: string | undefined;

        /**
         * If paths in filenames from file parts in a 'multipart/form-data' request shall be preserved.
         *
         * @default false
         */
        preservePath?: boolean | undefined;

        /**
         * Various limits on incoming data.
         */
        limits?: Limits | undefined;
    }

    interface Busboy extends Writable {
        addListener<Event extends keyof BusboyEvents>(event: Event, listener: BusboyEvents[Event]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        on<Event extends keyof BusboyEvents>(event: Event, listener: BusboyEvents[Event]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<Event extends keyof BusboyEvents>(event: Event, listener: BusboyEvents[Event]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<Event extends keyof BusboyEvents>(event: Event, listener: BusboyEvents[Event]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<Event extends keyof BusboyEvents>(event: Event, listener: BusboyEvents[Event]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<Event extends keyof BusboyEvents>(event: Event, listener: BusboyEvents[Event]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<Event extends keyof BusboyEvents>(event: Event, listener: BusboyEvents[Event]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface Info {
        encoding: string;
        mimeType: string;
    }

    interface FileInfo extends Info {
        filename: string;
    }

    interface FieldInfo extends Info {
        nameTruncated: boolean;
        valueTruncated: boolean;
    }

    interface BusboyEvents {
        /**
         * Emitted for each new file form field found.
         *
         * * Note: if you listen for this event, you should always handle the `stream` no matter if you care about the
         * file contents or not (e.g. you can simply just do `stream.resume();` if you want to discard the contents),
         * otherwise the 'finish' event will never fire on the Busboy instance. However, if you don't care about **any**
         * incoming files, you can simply not listen for the 'file' event at all and any/all files will be automatically
         * and safely discarded (these discarded files do still count towards `files` and `parts` limits).
         * * If a configured file size limit was reached, `stream` will both have a boolean property `truncated`
         * (best checked at the end of the stream) and emit a 'limit' event to notify you when this happens.
         *
         * @param listener.transferEncoding Contains the 'Content-Transfer-Encoding' value for the file stream.
         * @param listener.mimeType Contains the 'Content-Type' value for the file stream.
         */
        file: (name: string, stream: Readable, info: FileInfo) => void;

        /**
         * Emitted for each new non-file field found.
         */
        field: (name: string, value: string, info: FieldInfo) => void;

        /**
         * Emitted when specified `parts` limit has been reached. No more 'file' or 'field' events will be emitted.
         */
        partsLimit: () => void;

        /**
         * Emitted when specified `files` limit has been reached. No more 'file' events will be emitted.
         */
        filesLimit: () => void;

        /**
         * Emitted when specified `fields` limit has been reached. No more 'field' events will be emitted.
         */
        fieldsLimit: () => void;

        error: (error: unknown) => void;

        /**
         * @deprecated
         * @since 1.0
         */
        finish: () => void;

        /**
         * Use 'close' event instead of 'finish' event when you need to execute
         *
         * @since 1.0
         */
        close: () => void;
    }
}

declare function busboy(config: busboy.BusboyConfig): busboy.Busboy;

export = busboy;
