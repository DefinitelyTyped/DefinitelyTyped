// Type definitions for node-multiparty
// Project: https://github.com/andrewrk/node-multiparty
// Definitions by: Ken Fukuyama <https://github.com/kenfdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import http = require('http');
import events = require('events');
import stream = require('stream');

export declare class Form extends events.EventEmitter {
    constructor(options?: FormOptions);
    /**
     * Parses an incoming node.js request containing form data.
     * This will cause form to emit events based off the incoming request
     * @param request
     * @param callback
     */
    parse(request: http.IncomingMessage, callback?: (error: Error, fields: any, files: any) => any): void;
}

export interface File {
    /**
     * same as name - the field name for this file
     */
    fieldName: string;
    /**
     * the filename that the user reports for the file
     */
    originalFileName: string;
    /**
     * the absolute path of the uploaded file on disk
     */
    path: string;
    /**
     * the HTTP headers that were sent along with this file
     */
    headers: any;
    /**
     * size of the file in bytes
     */
    size: number;
}

interface Part extends stream.Readable {
    /**
     * the headers for this part. For example, you may be interested in content-type
     */
    headers: any;
    /**
     * the field name for this part
     */
    name: string;
    /**
     * only if the part is an incoming file
     */
    filename: string;
    /**
     * the byte offset of this part in the request body
     */
    byteOffset: number;
    /**
     * assuming that this is the last part in the request, this is the size of this part in bytes.
     * You could use this, for example, to set the Content-Length header if uploading to S3.
     * If the part had a Content-Length header then that value is used here instead.
     */
    byteCount: number;
}

export interface FormOptions {
    /**
     * sets encoding for the incoming form fields. Defaults to utf8.
     */
    encoding?: string;
    /**
     * Limits the amount of memory all fields (not files) can allocate in bytes.
     * If this value is exceeded, an error event is emitted. The default size is 2MB.
     */
    maxFieldsSize?: number;
    /**
     * Limits the number of fields that will be parsed before emitting an error event.
     * A file counts as a field in this case. Defaults to 1000.
     */
    maxFields?: number;
    /**
     * Only relevant when autoFiles is true.
     * Limits the total bytes accepted for all files combined.
     * If this value is exceeded, an error event is emitted.
     * The default is Infinity.
     */
    maxFilesSize?: number;
    /**
     * Enables field events and disables part events for fields.
     * This is automatically set to true if you add a field listener.
     */
    autoFields?: boolean;
    /**
     * Enables file events and disables part events for files.
     * This is automatically set to true if you add a file listener.
     */
    autoFiles?: boolean;
    /**
     * Only relevant when autoFiles is true.
     * The directory for placing file uploads in.
     * You can move them later using fs.rename(). Defaults to os.tmpDir().
     */
    uploadDir?: string;
}
