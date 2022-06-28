import * as net from 'net';
import * as stream from 'stream';

export type UnderlyingStream = net.Socket | stream.Writable;

export class Terminal {
    constructor(stream: UnderlyingStream);
    /**
     * Shows some text that is meant to be overriden later. Return the previous
     * status that was shown and is no more. Calling `status()` with no argument
     * removes the status altogether. The status is never shown in a
     * non-interactive terminal: for example, if the output is redirected to a
     * file, then we don't care too much about having a progress bar.
     */
    status(format: string, ...args: unknown[]): string;
    /**
     * Similar to `console.log`, except it moves the status/progress text out of
     * the way correctly. In non-interactive terminals this is the same as
     * `console.log`.
     */
    log(format: string, ...args: unknown[]): void;
    /**
     * Log the current status and start from scratch. This is useful if the last
     * status was the last one of a series of updates.
     */
    persistStatus(): void;
}
