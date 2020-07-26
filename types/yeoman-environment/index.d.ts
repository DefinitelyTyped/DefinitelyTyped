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

    static namespaceToName(namespace: string): string;

    alias(match: string | RegExp, value: string): void;

    create(name: string, options: object): void;

    error(err: Error | object): Error;

    findGeneratorsIn(list: string[]): string[];

    get(namespace: string): Generator | null;

    getByPath(path: string): Generator | null;

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

    interface InstantiateOptions {
        arguments: string | string[];
        options: Options;
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

    type RunDone = (err: null | Error) => void;
}

export = Environment;
