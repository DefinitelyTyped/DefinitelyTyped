// Type definitions for parse-git-config 2.0
// Project: https://github.com/jonschlinkert/parse-git-config
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
//                 Nikita Litvin <https://github.com/deltaidea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare const parse: Parse;
export = parse;

interface Parse {
    /**
     * Asynchronously parse a .git/config file.
     * If only the callback is passed, the .git/config file relative to process.cwd() is used.
     */
    (options: (Options | object) | string, cb: ParseCallback): void;
    /**
     * Asynchronously parse a .git/config file.
     * If only the callback is passed, the .git/config file relative to process.cwd() is used.
     */
    (cb: ParseCallback): void;
    /**
     * Asynchronously parse a .git/config file. Returns a promise.
     * Resolves with `null` if unable to resolve path to the git config file.
     * If no arguments are passed, the .git/config file relative to process.cwd() is used.
     */
    (options?: (Options | object) | string): Promise<Config | null>;
    /**
     * Asynchronously parse a .git/config file. Returns a promise.
     * Resolves with `null` if unable to resolve path to the git config file.
     * If no arguments are passed, the .git/config file relative to process.cwd() is used.
     */
    promise(options?: (Options | object) | string): Promise<Config | null>;
    /**
     * Synchronously parse a .git/config file.
     * If no arguments are passed, the .git/config file relative to process.cwd() is used.
     */
    sync(options?: (Options | object) | string): Config;
    /**
     * Returns an object with only the properties that had ini-style keys converted to objects.
     */
    expandKeys(config: Config): Config;
}

interface Options extends Pick<_Options, keyof _Options> { }

interface _Options {
    cwd: string;
    path: string;
    include?: boolean;
    expandKeys?: boolean;
}

type ParseCallback = ((err: Error | null, config: Config) => void);
// TODO: Can this be defined more precisely?
interface Config {
    [key: string]: any;
}
