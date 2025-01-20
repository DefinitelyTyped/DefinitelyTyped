export = parse;

/**
 * Asynchronously parse a `.git/config` file. If only the callback is passed,
 * the `.git/config` file relative to `process.cwd()` is used.
 *
 * @example ```js
 * parse((err, config) => {
 *   if (err) throw err;
 *   // do stuff with config
 * });
 *
 * // or, using async/await
 * (async () => {
 *   console.log(await parse());
 *   console.log(await parse({ cwd: 'foo' }));
 *   console.log(await parse({ cwd: 'foo', path: 'some/.git/config' }));
 * })();
 * ```
 * @param options Options with `cwd` or `path`, the cwd to use, or the callback function.
 * @param callback callback function if the first argument is options or cwd.
 */
declare function parse(cb: parse.ParseCallback): void;
declare function parse(options?: parse.Options | string): Promise<parse.Config | null>;
declare function parse(options: parse.Options | string, cb: parse.ParseCallback): void;

declare namespace parse {
    /**
     * Asynchronously parse a .git/config file. Returns a promise.
     * Resolves with `null` if unable to resolve path to the git config file.
     * If no arguments are passed, the .git/config file relative to process.cwd() is used.
     */
    function promise(options?: Options | string): Promise<Config | null>;

    /**
     * Synchronously parse a `.git/config` file. If no arguments are passed,
     * the `.git/config` file relative to `process.cwd()` is used.
     *
     * @example ```js
     * console.log(parse.sync());
     * console.log(parse.sync({ cwd: 'foo' }));
     * console.log(parse.sync({ cwd: 'foo', path: 'some/.git/config' }));
     * ```
     * @param options Options with `cwd` or `path`, or the cwd to use.
     */
    function sync(options?: Options | string): Config;

    /**
     * Returns an object with only the properties that had ini-style keys
     * converted to objects.
     *
     * @example ```js
     * const config = parse.sync({ path: '/path/to/.gitconfig' });
     * const obj = parse.expandKeys(config);
     * ```
     * @param config The parsed git config object.
     */
    function expandKeys(config: Config): Config;

    /**
     * Resolve the git config path
     */
    function resolveConfigPath(options: string | ResolveConfigOptions): string | null;

    interface ResolveConfigOptions {
        type?: "global" | undefined;
        cwd?: string | undefined;
        path?: string | undefined;
    }

    interface Options extends ResolveConfigOptions {
        include?: boolean | undefined;
        expandKeys?: boolean | undefined;
    }

    type ParseCallback = (err: Error | null, config: Config) => void;

    // TODO: Can this be defined more precisely?
    interface Config {
        [key: string]: any;
    }
}
