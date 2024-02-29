import minimist = require("minimist");

interface RcResultType extends Record<number | string | symbol, unknown> {
    /**
     * Contains file path of all parsed configurations from different sources
     * like '/etc/${appname}rc', '/etc/${appname}/config', and other.
     */
    configs?: string[];
    /**
     * same as RcResultType.configs[RcResultType.configs.length - 1]
     */
    config?: string;
}

declare function rc(
    /**
     * The name of the app to configure, rc will search for this files :
     * `/etc/${name}/config`,
     * `/etc/${name}rc`,
     * `~/.config/${name}/config`,
     * `~/.config/${name}`,
     * `~/.${name}/config`,
     * `~/.${name}rc` and
     * `.${name}rc` in CWD and its ancestors
     */
    name: string,
    /**
     * Default config values.
     * Can be an Object that contains the default values for the config,
     * the path of a JSON or INI file to use as default config or
     * can be `null` or `undefined` for no default values
     */
    defaults?: string | null,
    /**
     * Parsed argv object.
     * For example, if args is `--foo bar`, then this value should be `{foo: 'bar'}`
     * If `argv` is `null` or `undefined`, then `rc`'s default parser will parse `process.argv`.
     */
    argv?: null,
    /**
     * Custom config file parser.
     * This function will be passed the string contents of each
     * discovered configuration file, should return a parsed object dictionary.
     */
    parse?: (content: string) => object,
): RcResultType & minimist.ParsedArgs;
declare function rc<T extends object>(
    /**
     * The name of the app to configure, rc will search for this files :
     * `/etc/${name}/config`,
     * `/etc/${name}rc`,
     * `~/.config/${name}/config`,
     * `~/.config/${name}`,
     * `~/.${name}/config`,
     * `~/.${name}rc` and
     * `.${name}rc` in CWD and its ancestors
     */
    name: string,
    /**
     * Default config values.
     * Can be an Object that contains the default values for the config,
     * the path of a JSON or INI file to use as default config or
     * can be `null` or `undefined` for no default values
     */
    defaults: T,
    /**
     * Parsed argv object.
     * For example, if args is `--foo bar`, then this value should be `{foo: 'bar'}`
     * If `argv` is `null` or `undefined`, then `rc`'s default parser will parse `process.argv`.
     */
    argv?: null,
    /**
     * Custom config file parser.
     * This function will be passed the string contents of each
     * discovered configuration file, should return a parsed object dictionary.
     */
    parse?: (content: string) => object,
): T & RcResultType & minimist.ParsedArgs;
declare function rc<U extends object>(
    /**
     * The name of the app to configure, rc will search for this files :
     * `/etc/${name}/config`,
     * `/etc/${name}rc`,
     * `~/.config/${name}/config`,
     * `~/.config/${name}`,
     * `~/.${name}/config`,
     * `~/.${name}rc` and
     * `.${name}rc` in CWD and its ancestors
     */
    name: string,
    /**
     * Default config values.
     * Can be an Object that contains the default values for the config,
     * the path of a JSON or INI file to use as default config or
     * can be `null` or `undefined` for no default values
     */
    defaults: string | null | undefined,
    /**
     * Parsed argv object.
     * For example, if args is `--foo bar`, then this value should be `{foo: 'bar'}`
     * If `argv` is `null` or `undefined`, then `rc`'s default parser will parse `process.argv`.
     */
    argv: U,
    /**
     * Custom config file parser.
     * This function will be passed the string contents of each
     * discovered configuration file, should return a parsed object dictionary.
     */
    parse?: (content: string) => object,
): U & RcResultType;
declare function rc<
    T extends object,
    U extends object,
>(
    /**
     * The name of the app to configure, rc will search for this files :
     * `/etc/${name}/config`,
     * `/etc/${name}rc`,
     * `~/.config/${name}/config`,
     * `~/.config/${name}`,
     * `~/.${name}/config`,
     * `~/.${name}rc` and
     * `.${name}rc` in CWD and its ancestors
     */
    name: string,
    /**
     * Default config values.
     * Can be an Object that contains the default values for the config,
     * the path of a JSON or INI file to use as default config or
     * can be `null` or `undefined` for no default values
     */
    defaults: T,
    /**
     * Parsed argv object.
     * For example, if args is `--foo bar`, then this value should be `{foo: 'bar'}`
     * If `argv` is `null` or `undefined`, then `rc`'s default parser will parse `process.argv`.
     */
    argv: U,
    /**
     * Custom config file parser.
     * This function will be passed the string contents of each
     * discovered configuration file, should return a parsed object dictionary.
     */
    parse?: (content: string) => object,
): T & U & RcResultType;
declare function rc<
    T extends object | string | null | undefined,
    U extends object | null | undefined,
>(
    /**
     * The name of the app to configure, rc will search for this files :
     * `/etc/${name}/config`,
     * `/etc/${name}rc`,
     * `~/.config/${name}/config`,
     * `~/.config/${name}`,
     * `~/.${name}/config`,
     * `~/.${name}rc` and
     * `.${name}rc` in CWD and its ancestors
     */
    name: string,
    /**
     * Default config values.
     * Can be an Object that contains the default values for the config,
     * the path of a JSON or INI file to use as default config or
     * can be `null` or `undefined` for no default values
     */
    defaults: T,
    /**
     * Parsed argv object.
     * For example, if args is `--foo bar`, then this value should be `{foo: 'bar'}`
     * If `argv` is `null` or `undefined`, then `rc`'s default parser will parse `process.argv`.
     */
    argv: U,
    /**
     * Custom config file parser.
     * This function will be passed the string contents of each
     * discovered configuration file, should return a parsed object dictionary.
     */
    parse?: (content: string) => object,
): T extends string | null | undefined ? (U extends null | undefined ? minimist.ParsedArgs : U) & RcResultType
    : T & (U extends null | undefined ? minimist.ParsedArgs : U) & RcResultType;

export = rc;
