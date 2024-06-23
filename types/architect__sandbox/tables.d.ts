import { Callback, StartOptions } from "./shared";

export namespace tables {
    /**
     * Starts up a local [in-memory DynamoDB server](https://www.npmjs.com/package/dynalite), enabling @tables or @indexes functions (if defined in your Architect project manifest).
     *
     * Invokes callback once everything is ready, or returns a promise if callback is falsy.
     */
    function start(opts?: StartOptions): Promise<string>;
    function start(opts: StartOptions | undefined, callback: Callback): void;

    /**
     * Shuts down anything started by sandbox.tables.start(). Invokes callback once shut down, or returns a promise if callback is falsy.
     */
    function end(): Promise<string>;
    function end(callback: Callback): void;
}
