import { Callback, StartOptions } from "./shared";

export namespace events {
    /**
     * Starts up a local event bus, enabling interprocess communication for @queues and @events functions (if defined in your Architect project manifest).
     *
     * Invokes callback once everything is ready, or returns a promise if callback is falsy.
     */
    function start(opts?: StartOptions): Promise<string>;
    function start(opts: StartOptions | undefined, callback: Callback): void;

    /**
     * Shuts down anything started by sandbox.events.start(). Invokes callback once shut down, or returns a promise if callback is falsy.
     */
    function end(): Promise<string>;
    function end(callback: Callback): void;
}
