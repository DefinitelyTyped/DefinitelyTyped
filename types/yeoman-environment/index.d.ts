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

declare class Environment<
    TOptions extends Environment.Options = Environment.Options
    > extends EventEmitter {
    /**
     * The utilities of the module.
     */
    static util: typeof util;

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

    static enforceUpdate<TEnv extends Environment>(env: TEnv): TEnv;

    static namespaceToName(namespace: string): string;

    arguments: string[];

    options: TOptions;

    cwd: string;

    store: Storage;

    sharedFs: MemFsStore;

    lookups: string[];

    aliases: Environment.Alias[];

    constructor(
        args?: string | string[],
        opts?: TOptions,
        adapter?: Environment.Adapter
    );

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

    type RunDone = (err: null | Error) => void;
}

export = Environment;
