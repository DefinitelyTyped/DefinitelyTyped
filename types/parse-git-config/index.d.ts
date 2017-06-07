// Type definitions for parse-git-config 1.1
// Project: https://github.com/jonschlinkert/parse-git-config
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
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
     * Synchronously parse a .git/config file.
     * If no arguments are passed, the .git/config file relative to process.cwd() is used.
     */
    sync(options?: (Options | object) | string): Config;
    /**
     * Returns an object with only the properties that had ini-style keys converted to objects.
     */
    keys(config: Config): Config;
}

// no-empty-interface is disabled for a better debugging experience. Empty interfaces are used to alias a type alias.
// tslint:disable-next-line no-empty-interface
interface Options extends Pick<_Options, keyof _Options> { }

interface _Options {
    cwd: string;
    path: string;
}

type ParseCallback = ((err: Error | null, config: Config) => void);
// TODO: Can this be defined more precisely?
interface Config {
    [key: string]: any;
}
