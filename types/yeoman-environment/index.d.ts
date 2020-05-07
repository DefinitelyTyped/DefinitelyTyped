// Type definitions for yeoman-environment 2.3
// Project: https://github.com/yeoman/environment, http://yeoman.io
// Definitions by: c4605 <https://github.com/bolasblack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { EventEmitter } from "events";
import { Store as MemFsStore } from "mem-fs";
import * as inquirer from "inquirer";
import * as Generator from "yeoman-generator";

declare class Environment<
    O extends Environment.Options = Environment.Options
> extends EventEmitter {
    static createEnv<O extends Environment.Options = Environment.Options>(
        args?: string | string[],
        opts?: O,
        adapter?: Environment.Adapter
    ): Environment<O>;

    static enforceUpdate<E extends Environment>(env: E): E;

    static namespaceToName(namespace: string): string;

    arguments: string[];

    options: O;

    cwd: string;

    store: Generator.Storage;

    sharedFs: MemFsStore;

    lookups: string[];

    aliases: Environment.Alias[];

    constructor(
        args?: string | string[],
        opts?: O,
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

    registerStub(generator: typeof Generator, namespace: string): this;

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
    interface Adapter {
        prompt<T>(questions: Adapter.Questions<T>): Promise<T>;
        prompt<T1, T2>(
            questions: Adapter.Questions<T1>,
            cb: (res: T1) => T2
        ): Promise<T2>;

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
