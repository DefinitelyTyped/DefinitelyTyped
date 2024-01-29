/// <reference types="node" />

import { Stream } from "stream";

export = Config;

declare class Config<Definitions extends Config.DefinitionsObject = Config.DefinitionsObject> {
    /**
     * The type definitions passed to `nopt` for CLI option parsing and known
     * configuration validation.
     */
    static readonly typeDefs: Config.TypeDefs;
    /**
     * The prefix for `global` operations.  Set by the `prefix` config value,
     * or defaults based on the location of the `execPath` option.
     */
    globalPrefix: string;
    /**
     * The prefix for `local` operations.  Set by the `prefix` config value on
     * the CLI only, or defaults to either the `cwd` or its nearest ancestor
     * containing a `node_modules` folder or `package.json` file.
     */
    localPrefix: string;
    /**
     * A read-only `Map` of the file (or a comment, if no file found, or
     * relevant) to the config level loaded from that source.
     */
    sources: Map<string, Config.ConfType>;
    /**
     * A `Map` of config level to `ConfigData` objects.  These objects should
     * not be modified directly under any circumstances.
     */
    data: Map<Config.ConfType, Config.ConfigData>;

    /**
     * A list sorted in priority of all the config data objects in the
     * prototype chain.  `config.list[0]` is the `cli` level, `config.list[1]`
     * is the `env` level, and so on.
     */
    list: Config.ConfigData[];
    /** The `cwd` param */
    cwd: string;
    /** The `env` param */
    env: NodeJS.ProcessEnv;
    /** The `argv` param */
    argv: string[];
    /** The `execPath` param */
    execPath: string;
    /** The `platform` param */
    platform: NodeJS.Platform;

    /** The `definitions` param */
    definitions: Definitions;
    deprecated: { [K in keyof Definitions]?: boolean };

    /** The `defaults` param */
    defaults: { [K in keyof Definitions]: Definitions[K]["type"] };
    /** The `shorthands` param */
    shorthands: Config.ShortFlags;
    /** The `types` param */
    types: { [K in keyof Definitions]: Definitions[K]["type"] };
    /** The `npmPath` param */
    npmPath: string;
    /** If `config.get('global')` is true, then `globalPrefix`, otherwise `localPrefix` */
    readonly prefix: string;
    /** The user's home directory, found by looking at `env.HOME` or calling `os.homedir()`. */
    home: string | null;
    /** A boolean indicating whether or not configs are loaded */
    readonly loaded: boolean;
    /**
     * A getter that returns `true` if all the config objects are valid. Any
     * data objects that have been modified with `config.set(...)` will be
     * re-evaluated when `config.valid` is read.
     */
    readonly valid: boolean;
    /**
     * `flat` A getter that returns a flattened object of the entire loaded config,
     * using the provided `flatten` option
     */
    readonly flat: Record<string, any>;

    /**
     * Returns a `config` object, which is not yet loaded.
     */
    constructor(options: Config.Options<Definitions>);

    /**
     * Load configuration from the various sources of information.
     *
     * Returns a `Promise` that resolves when configuration is loaded, and fails
     * if a fatal error is encountered.
     */
    load(): Promise<void>;

    /**
     * Find the effective place in the configuration levels a given key is set.
     * Returns one of: `cli`, `env`, `project`, `user`, `global`, `builtin`, or
     * `default`.
     *
     * Returns `null` if the key is not set.
     */
    find(key: keyof Definitions): Config.ConfType;
    /**
     * Load the given key from the config stack.
     * @param [where='cli']
     */
    get<K extends keyof Definitions>(key: K, where?: Config.ConfType): Config.ConfigValueType<Definitions[K]["type"]>;
    /**
     * Set the key to the specified value, at the specified level in the config stack.
     * @param [where='cli']
     */
    set<K extends keyof Definitions>(
        key: K,
        value: Config.ConfigValueType<Definitions[K]["type"]>,
        where?: Config.ConfType,
    ): void;
    /**
     * Delete the configuration key from the specified level in the config stack.
     * @param [where='cli']
     */
    delete(key: keyof Definitions, where?: Config.ConfType): void;
    /**
     * Verify that all known configuration options are set to valid values, and
     * log a warning if they are invalid.
     *
     * Invalid auth options will cause this method to throw an error with a `code`
     * property of `ERR_INVALID_AUTH`, and a `problems` property listing the specific
     * concerns with the current configuration.
     *
     * If `where` is not set, then all config objects are validated.
     *
     * Returns `true` if all configs are valid.
     *
     * Note that it's usually enough (and more efficient) to just check
     * `config.valid`, since each data object is marked for re-evaluation on every
     * `config.set()` operation.
     */
    validate(where?: Config.ConfType): boolean;
    /**
     * Accept an optional array of problems (as thrown by `config.validate()`) and
     * perform the necessary steps to resolve them. If no problems are provided,
     * this method will call `config.validate()` internally to retrieve them.
     *
     * Note that you must `await config.save('user')` in order to persist the changes.
     */
    repair(problems?: Config.Problem[]): void;
    /**
     * Returns `true` if the value is coming directly from the
     * default definitions, if the current value for the key config is
     * coming from any other source, returns `false`.
     *
     * This method can be used for avoiding or tweaking default values, e.g:
     *
     * >  Given a global default definition of foo='foo' it's possible to read that
     * >  value such as:
     * >
     * >  ```js
     * >     const save = config.get('foo')
     * >  ```
     * >
     * >  Now in a different place of your app it's possible to avoid using the `foo`
     * >  default value, by checking to see if the current config value is currently
     * >  one that was defined by the default definitions:
     * >
     * >  ```js
     * >     const save = config.isDefault('foo') ? 'bar' : config.get('foo')
     * >  ```
     */
    isDefault(key: keyof Definitions): boolean;
    /**
     * Save the config file specified by the `where` param.  Must be one of
     * `project`, `user`, `global`, `builtin`.
     */
    save(where: Config.ConfFileType): Promise<void>;
}

declare class Umask {
    __isUmask__: true;
}

declare namespace Config {
    interface DefinitionsObject {
        [key: string]: Definition;
    }

    interface TypeInfo<Type> {
        type: Type;
        validate: (data: Record<string, any>, k: string, val: string) => boolean;
        description: string;
    }
    interface TypeDefs {
        String: TypeInfo<StringConstructor>;
        Boolean: TypeInfo<BooleanConstructor>;
        url: TypeInfo<typeof import("url")>;
        Number: TypeInfo<NumberConstructor>;
        path: TypeInfo<typeof import("path")>;
        Stream: TypeInfo<typeof Stream>;
        Date: TypeInfo<DateConstructor>;
        semver: TypeInfo<typeof import("semver")>;
        Umask: TypeInfo<typeof Umask>;
    }
    interface Definition {
        type: object | Array<object | string | null>;
        default?: any;
        deprecated?: boolean;
    }
    type ConfigValueType<Def extends Definition["type"]> = Def extends string ? Def
        : Def extends ReadonlyArray<infer T>
            ? ArrayConstructor extends T ? _ConfigValueType<Exclude<T, ArrayConstructor>>
            : _ConfigValueType<T>
        : _ConfigValueType<Def>;
    type _ConfigValueType<Def> = Def extends string | number | null ? Def
        : Def extends StringConstructor | typeof import("url") | typeof import("path") | typeof import("semver")
            ? string
        : Def extends BooleanConstructor ? boolean
        : Def extends NumberConstructor | typeof Umask ? number
        : Def extends typeof Stream ? Stream
        : Def extends DateConstructor ? Date
        : Def extends ArrayConstructor ? unknown[]
        : unknown;
    interface ShortFlags {
        [k: string]: string[] | string;
    }

    interface Options<Definitions extends DefinitionsObject = DefinitionsObject> {
        definitions: Definitions & DefinitionsObject;
        shorthands: ShortFlags;
        /** Must be provided for `.flat` to work */
        flatten?: (data: ConfigData["data"], flattened: Record<string, any>) => void;
        npmPath: string;

        cwd?: string;
        env?: NodeJS.ProcessEnv;
        argv?: string[];
        execPath?: string;
        platform?: NodeJS.Platform;
    }

    type ConfFileType = "project" | "user" | "global";
    type ConfType = "default" | "env" | "cli" | "builtin" | ConfFileType;
    interface ConfigData {
        /** The source where this data was loaded from. */
        source: string;
        /** The raw data used to generate this config data, as it was parsed initially from the environment, config file, or CLI options. */
        raw: Record<string, any>;
        /** The data object reflecting the inheritance of configs up to this point in the chain. */
        readonly data: Record<string, any>;
        readonly valid: boolean;
        /** Any errors encountered that prevented the loading of this config data. */
        loadError: Error | null;
    }

    type Problem =
        | { action: "delete"; key: string; where: ConfType }
        | { action: "rename"; from: string; to: string; where: ConfType };
}
