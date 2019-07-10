/** Asynchronously parse a TOML string and return a promise of the resulting object. */
declare function parseAsync(str: string, opts?: parseAsync.Options): Promise<Record<string, any>>;

declare namespace parseAsync {
    interface Options {
        /** The amount text to parser per pass through the event loop. Defaults to 40kb. */
        blocksize?: number;
    }
}
export = parseAsync;
