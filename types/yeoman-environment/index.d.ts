// Type definitions for yeoman-environment 2.10
// Project: https://github.com/yeoman/environment, http://yeoman.io
// Definitions by: c4605 <https://github.com/bolasblack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { EventEmitter } from "events";
import { Store as MemFsStore } from "mem-fs";
import * as inquirer from "inquirer";
import * as Generator from "yeoman-generator";
import Storage = require("yeoman-generator/lib/util/storage");
import { Logger as LoggerBase } from "./lib/util/log";
import util = require("./lib/util/util");

/**
 * `Environment` object is responsible of handling the lifecyle and bootstrap
 * of generators in a specific environment (your app).
 *
 * It provides a high-level API to create and run generators, as well as further
 * tuning where and how a generator is resolved.
 *
 * An environment is created using a list of `arguments` and a Hash of `options`.
 * Usually, this is the list of arguments you get back from your CLI options parser.
 *
 * An optional adapter can be passed to provide interaction in non-CLI environment
 * (e.g. IDE plugins), otherwise a `TerminalAdapter` is instantiated by default
 */
declare class Environment<TOptions extends Environment.Options = Environment.Options> extends EventEmitter {
    /**
     * The utilities of the module.
     */
    static util: typeof util;

    arguments: string[];

    options: TOptions;

    cwd: string;

    store: Storage;

    sharedFs: MemFsStore;

    lookups: string[];

    aliases: Environment.Alias[];

    /**
     * Initializes a new instance of the `Environment` class.
     *
     * @param args The arguments to pass to the environment.
     * @param opts The options for the environment.
     * @param adapter A `TerminalAdapter` instance for handling input/output.
     */
    constructor(args?: string | string[], opts?: TOptions, adapter?: Environment.Adapter);

    /**
     * Createas a new `Environment` instance.
     *
     * @param args The arguments to pass to the environment.
     * @param opts The options for the environment.
     * @param adapter A `TerminalAdapter` instance for handling input/output.
     */
    static createEnv<TOptions extends Environment.Options = Environment.Options>(
        args?: string | string[],
        opts?: TOptions,
        adapter?: Environment.Adapter
    ): Environment<TOptions>;

    /**
     * Creates a new `Environment` instance with the specified `version`.
     *
     * @param version The version of the environment.
     * @param args The arguments to pass to the environment.
     * @param opts The options for the environment.
     * @param adapter A `TerminalAdapter` instance for handling input/output.
     */
    static createEnvWithVersion<TOptions extends Environment.Options>(
        version: string,
        args?: string | string[],
        opts?: TOptions,
        adapter?: Environment.Adapter
    ): Environment<TOptions>;

    /**
     * Makes sure the Environment present expected methods if an old version is passed to a Generator.
     *
     * @param env The environment to update.
     * @returns The updated `env`.
     */
    static enforceUpdate<TEnv extends Environment>(env: TEnv): TEnv;

    /**
     * Invokes a lookup for a specific generator.
     *
     * @param namespace The namespace of the generator to search.
     * @param options Options for searching the generator.
     */
    static lookupGenerator(namespace: string, options?: Environment.GeneratorLookupOptions): string;

    /**
     * Converts a generator namespace to its name.
     *
     * @param namespace The generator namespace.
     */
    static namespaceToName(namespace: string): string;

    /**
     * Gets the alias for the specified `name`.
     */
    alias(name: string): string;

    /**
     * Creates an alias.
     *
     * Alias allows the `get()` and `lookup()` methods to search in alternate filepath for a given namespaces.
     * It's used for example to map `generator-*` npm package to their namespace equivalent (without the generator- prefix),
     * or to default a single namespace like `angular` to `angular:app` or `angular:all`.
     *
     * If multiple aliases are defined, then the replacement is recursive, replacing each alias in reverse order.
     *
     * An alias can be a single String or a Regular Expression.
     * The finding is done based on .match().
     *
     * @param match The name to match.
     * @param value The replacement for the specified `match`.
     *
     * @example
     * env.alias(/^([a-zA-Z0-9:\*]+)$/, 'generator-$1');
     * env.alias(/^([^:]+)$/, '$1:app');
     * env.alias(/^([^:]+)$/, '$1:all');
     * env.alias('foo');
     * // => generator-foo:all
     */
    alias(match: string | RegExp, value: string): void;

    /**
     * Creates a new generator.
     *
     * @param namespaceOrPath The namespace of the generator or the path to a generator.
     * @param options The options to pass to the generator.
     *
     * @returns Either the newly created generator or the error that occured.
     */
    create<TOptions extends Generator.GeneratorOptions>(
        namespaceOrPath: string, options?: Environment.InstantiateOptions<TOptions>): Generator<TOptions> | Error;

    /**
     * Handles the specified `error`.
     *
     * The `error`-event is emitted with the specified `error` object.
     * If no `error` listener is registered, the error is thrown.
     *
     * @param error An object representing the error.
     * @param verifyListener A value indicating whether an error should be thrown if no `error` listener is present.
     */
    error(error: Error | object, verifyListener?: boolean): Error;

    /**
     * Searches npm for every available generator.
     * Generators are npm-packages whose name starts with `generator-` and that are placed in the top level `node_module` path.
     * They can be installed globally or locally.
     *
     * @deprecated
     * @param list The paths to search for generators.
     * @param options The options for looking for generators.
     */
    findGeneratorsIn(list: string[], options?: Environment.GeneratorsInOptions): string[];

    /**
     * Gets a single constructor of a generator from the registered list of generators.
     *
     * The lookup is based on generator's namespace, "walking up" the namespaces until a matching is found.
     * Eg. if an `angular:common` namespace is registered, and we try to get `angular:common:all`,
     * then we get `angular:common` as a fallback (unless an `angular:common:all` generator is registered).
     *
     * @param namespaceOrPath The namespace of the generator or the path to a generator.
     * @returns The constructor of the generator registered under the namespace.
     */
    get(namespaceOrPath: string): typeof Generator | undefined;

    /**
     * Gets a constructor of a generator by the path instead of the namespace.
     *
     * @param path The path to the generator.
     * @returns The constructor of the generator found at the location.
     */
    getByPath(path: string): typeof Generator | undefined;

    getGeneratorNames(): string[];

    getGeneratorsMeta(): { [namespace: string]: Environment.GeneratorMeta };

    getNpmPaths(): string[];

    help(name: string): string;

    instantiate(
        name: string,
        options: Environment.InstantiateOptions
    ): Generator;

    lookup(cb?: (err: null | Error) => void): void;

    namespace(filepath: string): string;

    namespaces(): string[];

    register(name: string, namespace?: string): string;

    registerStub(generator: Generator.GeneratorConstructor, namespace: string): this;

    resolveModulePath(moduleId: string): string;

    run(done: Environment.RunDone): void;
    run(args: string | string[], done: Environment.RunDone): void;
    run(
        args: string | string[],
        options: object,
        done: Environment.RunDone
    ): void;

    private _tryRegistering(generatorReference: string): void;
}

declare namespace Environment {
    /**
     * Represents a component for logging messages.
     */
    type Logger = LoggerBase;

    interface Adapter {
        prompt<T>(questions: Adapter.Questions<T>): Promise<T>;
        prompt<TAnswers, TResult>(
            questions: Adapter.Questions<TAnswers>,
            cb: (res: TAnswers) => TResult
        ): Promise<TResult>;

        diff(actual: string, expected: string): string;
    }

    namespace Adapter {
        type Question<T> = inquirer.DistinctQuestion<T>;

        type Questions<T> = inquirer.QuestionCollection<T>;

        type Answers = inquirer.Answers;
    }

    interface Alias {
        match: RegExp;
        value: string;
    }

    interface Options {
        cwd?: string;
        [key: string]: any;
    }

    interface GeneratorMeta {
        resolved: string;
        namespace: string;
    }

    /**
     * Provides options for instantiating a generator.
     */
    interface InstantiateOptions<TOptions extends Generator.GeneratorOptions = Generator.GeneratorOptions> {
        /**
         * The arguments to pass to the generator.
         */
        arguments?: string | string[];

        /**
         * The options for creating the generator.
         */
        options?: TOptions;
    }

    /**
     * Provides options for lookups.
     */
    interface LookupOptions {
        /**
         * A value indicating whether globally installed packages should be ignored.
         */
        localOnly?: boolean;
    }

    /**
     * Provides options for generator-lookups.
     */
    interface GeneratorLookupOptions extends LookupOptions {
        /**
         * A value indicating whether the path to the package should be returned instead of the path to the generator.
         */
        packagePath?: boolean;

        /**
         * A value indicating whether only one result should be returned.
         */
        singleResult?: boolean;
    }

    /**
     * Provides options for the `findGeneratorsIn` method.
     */
    interface GeneratorsInOptions {
        /**
         * The package-patterns to look for.
         */
        packagePatterns?: string[];
    }

    type RunDone = (err: null | Error) => void;
}

export = Environment;
