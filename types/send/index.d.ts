// Type definitions for send v0.14.1
// Project: https://github.com/pillarjs/send
// Definitions by: Mike Jerred <https://github.com/MikeJerred>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";
import * as fs from "fs";

/**
 * Create a new SendStream for the given path to send to a res.
 * The req is the Node.js HTTP request and the path is a urlencoded path to send (urlencoded, not the actual file-system path).
 */
declare function send(req: stream.Readable, path: string, options?: send.SendOptions): send.SendStream;

import * as m from "mime";

declare namespace send {
    var mime: typeof m;
    interface SendOptions {
        /**
         * Enable or disable accepting ranged requests, defaults to true.
         * Disabling this will not send Accept-Ranges and ignore the contents of the Range request header.
         */
        acceptRanges?: boolean;

        /**
         * Enable or disable setting Cache-Control response header, defaults to true.
         * Disabling this will ignore the maxAge option.
         */
        cacheControl?: boolean;

        /**
         * Set how "dotfiles" are treated when encountered.
         * A dotfile is a file or directory that begins with a dot (".").
         * Note this check is done on the path itself without checking if the path actually exists on the disk.
         * If root is specified, only the dotfiles above the root are checked (i.e. the root itself can be within a dotfile when when set to "deny").
         * 'allow' No special treatment for dotfiles.
         * 'deny' Send a 403 for any request for a dotfile.
         * 'ignore' Pretend like the dotfile does not exist and 404.
         * The default value is similar to 'ignore', with the exception that this default will not ignore the files within a directory that begins with a dot, for backward-compatibility.
         */
        dotfiles?: "allow" | "deny" | "ignore";

        /**
         * Byte offset at which the stream ends, defaults to the length of the file minus 1.
         * The end is inclusive in the stream, meaning end: 3 will include the 4th byte in the stream.
         */
        end?: number;

        /**
         * Enable or disable etag generation, defaults to true.
         */
        etag?: boolean;

        /**
         * If a given file doesn't exist, try appending one of the given extensions, in the given order.
         * By default, this is disabled (set to false).
         * An example value that will serve extension-less HTML files: ['html', 'htm'].
         * This is skipped if the requested file already has an extension.
         */
        extensions?: string[] | string | boolean;

        /**
         * By default send supports "index.html" files, to disable this set false or to supply a new index pass a string or an array in preferred order.
         */
        index?: string[] | string | boolean;

        /**
         * Enable or disable Last-Modified header, defaults to true.
         * Uses the file system's last modified value.
         */
        lastModified?: boolean;

        /**
         * Provide a max-age in milliseconds for http caching, defaults to 0.
         * This can also be a string accepted by the ms module.
         */
        maxAge?: string | number;

        /**
         * Serve files relative to path.
         */
        root?: string;

        /**
         * Byte offset at which the stream starts, defaults to 0.
         * The start is inclusive, meaning start: 2 will include the 3rd byte in the stream.
         */
        start?: number;
    }

    interface SendStream extends stream.Stream {
        /**
         * @deprecated pass etag as option
         * Enable or disable etag generation.
         */
        etag(val: boolean): SendStream;

        /**
         * @deprecated use dotfiles option
         * Enable or disable "hidden" (dot) files.
         */
        hidden(val: boolean): SendStream;

        /**
         * @deprecated pass index as option
         * Set index `paths`, set to a falsy value to disable index support.
         */
        index(paths: string[] | string): SendStream;

        /**
         * @deprecated pass root as option
         * Set root `path`.
         */
        root(paths: string): SendStream;

        /**
         * @deprecated pass root as option
         * Set root `path`.
         */
        from(paths: string): SendStream;

        /**
         * @deprecated pass maxAge as option
         * Set max-age to `maxAge`.
         */
        maxage(maxAge: string | number): SendStream;

        /**
         * Emit error with `status`.
         * @private
         */
        error(status: number, error?: Error): void;

        /**
         * Check if the pathname ends with "/".
         * @private
         */
        hasTrailingSlash(): boolean;

        /**
         * Check if this is a conditional GET request.
         * @private
         */
        isConditionalGET(): boolean;

        /**
         * Strip content-* header fields.
         * @private
         */
        removeContentHeaderFields(): void;

        /**
         * Respond with 304 not modified.
         * @private
         */
        notModified(): void;

        /**
         * Raise error that headers already sent.
         * @private
         */
        headersAlreadySent(): void;

        /**
         * Check if the request is cacheable, aka responded with 2xx or 304 (see RFC 2616 section 14.2{5,6}).
         * @private
         */
        isCachable(): boolean;

        /**
         * Handle stat() error.
         * @private
         */
        onStatError(error: Error): void;

        /**
         * Check if the cache is fresh.
         * @private
         */
        isFresh(): boolean;

        /**
         * Check if the range is fresh.
         * @private
         */
        isRangeFresh(): boolean;

        /**
         * Redirect to path.
         * @private
         */
        redirect(path: string): void;

        /**
         * Pipe to `res`.
         */
        pipe(res: stream.Writable): stream.Writable;

        /**
         * Transfer `path`.
         */
        send(path: string, stat?: fs.Stats): void;

        /**
         * Transfer file for `path`.
         * @private
         */
        sendFile(path: string): void;

        /**
         * Transfer index for `path`.
         * @private
         */
        sendIndex(path: string): void;

        /**
         * Transfer index for `path`.
         * @private
         */
        stream(path: string, options?: {}): void;

        /**
         * Set content-type based on `path` if it hasn't been explicitly set.
         * @private
         */
        type(path: string): void;

        /**
         * Set response header fields, most fields may be pre-defined.
         * @private
         */
        setHeader(path: string, stat: fs.Stats): void;
    }
}

export = send;
