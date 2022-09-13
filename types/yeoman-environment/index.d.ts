// Type definitions for yeoman-environment 2.10
// Project: https://github.com/yeoman/environment, http://yeoman.io
// Definitions by: c4605 <https://github.com/bolasblack>
//                 Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import { EventEmitter } from "events";
import { ExecaChildProcess, ExecaSyncReturnValue, Options, SyncOptions } from "execa";
import { Command } from "commander";
import { Store as MemFsStore } from "mem-fs";
import * as inquirer from "inquirer";
import * as Generator from "yeoman-generator";
import Storage = require("yeoman-generator/lib/util/storage");
import TerminalAdapter = require("./lib/adapter");
import { Logger as LoggerBase } from "./lib/util/log";
import util = require("./lib/util/util");
import Conflicter = require("./lib/util/conflicter");
import { Stream, Transform } from "stream";

/**
 * `Environment` object is responsible of handling the lifecycle and bootstrap
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

    /**
     * The arguments passed to this environment.
     */
    arguments: string[];

    /**
     * The options of the environment.
     */
    options: TOptions;

    /**
     * The adapter of the environment.
     */
    adapter: TerminalAdapter;

    /**
     * The working-directory of the environment.
     */
    cwd: string;

    /**
     * The config-storage of the environment.
     */
    store: Storage;

    /**
     * The file-system of the environment.
     */
    sharedFs: MemFsStore;

    /**
     * The file-paths to look for generators (such as `lib/generators/`).
     */
    lookups: string[];

    /**
     * The alias-settings of the environment.
     */
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
     * Creates a new `Environment` instance.
     *
     * @param args The arguments to pass to the environment.
     * @param opts The options for the environment.
     * @param adapter A `TerminalAdapter` instance for handling input/output.
     * @returns The newly created environment.
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
     * @returns The newly created environment.
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
     * @returns The paths to the generators which were found.
     */
    static lookupGenerator(namespace: string, options?: Environment.ArrayGeneratorLookupOptions): string[];

    /**
     * Invokes a lookup for a specific generator.
     *
     * @param namespace The namespace of the generator to search.
     * @param options Options for searching the generator.
     * @returns The path to the generator which was found.
     */
    static lookupGenerator(namespace: string, options?: Environment.SingleGeneratorLookupOptions): string;

    /**
     * Converts a generator namespace to its name.
     *
     * @param namespace The generator namespace.
     */
    static namespaceToName(namespace: string): string;

    /**
     * Prepares a command for cli support.
     *
     * @param generatorClass The generator class to create a command for.
     * @returns The prepared command.
     */
    static prepareCommand(generatorClass: Generator.GeneratorConstructor): Command;

    /**
     * Prepares a command for cli support.
     *
     * @param command The command to prepare.
     * @param generatorClass The constructor of the generator to prepare the command for.
     * @returns The prepared command.
     */
    static prepareGeneratorCommand(command: Command, generatorClass: Generator.GeneratorConstructor): Command;

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
     * Applies the specified transform streams to the files in the `sharedFs`.
     *
     * @param transformStreams The transforms to apply.
     * @param stream The file stream to apply the transforms on.
     */
    applyTransforms(transformStreams: Transform[], stream?: NodeJS.ReadableStream): Promise<void>;

    /**
     * Commits the `mem-fs` to the disk.
     *
     * @param stream The files to commit.
     */
    commitSharedFs(stream: Stream): Promise<void>;

    /**
     * Composes with a generator.
     *
     * @param namespaceOrPath The namespace of the generator or the path to a generator.
     * @param args The options to pass to the generator.
     * @param options The options to pass to the generator.
     * @returns The instantiated generator or a singleton instance.
     */
    composeWith(namespaceOrPath: string, args: string[], options: Generator.GeneratorOptions): Generator;

    /**
     * Creates a new generator.
     *
     * @param namespaceOrPath The namespace of the generator or the path to a generator.
     * @param args The arguments to pass to the generator.
     * @param options The options to pass to the generator.
     * @returns Either the newly created generator or the error that occurred.
     */
    create<TOptions extends Generator.GeneratorOptions>(
        namespaceOrPath: string, args: string[], options?: Environment.InstantiateOptions<TOptions>): Generator<TOptions> | Error;

    /**
     * Handles the specified `error`.
     *
     * The `error`-event is emitted with the specified `error` object.
     * If no `error` listener is registered, the error is thrown.
     *
     * @param error An object representing the error.
     */
    error(error: Error | object): Error;

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

    /**
     * Gets the names of the registered generators.
     */
    getGeneratorNames(): string[];

    /**
     * Gets metadata of the registered generators.
     */
    getGeneratorsMeta(): Record<string, Environment.GeneratorMeta>;

    /**
     * Gets paths to directories to look for npm-packages (such as `./node_modules`).
     *
     * @deprecated
     */
    getNpmPaths(options?: Environment.NpmPathsOptions): string[];

    /**
     * Gets the most recent path to the generator by its namespace.
     *
     * @param namespace The namespace of the generator.
     */
    getPackagePath(namespace: string): string;

    /**
     * Gets all paths which have been populated for a generator by its namespace.
     *
     * @param namespace The namespace of the generator.
     */
    getPackagePaths(namespace: string): string[];

    /**
     * Gets the namespaces of all registered generators.
     */
    getRegisteredPackages(): string[];

    /**
     * Gets the version of this `Environment` object.
     */
    getVersion(): string;

    /**
     * Gets the version of the specified `dependency`.
     *
     * @param dependency The name of the dependency.
     */
    // tslint:disable-next-line:unified-signatures
    getVersion(dependency: string): string;

    /**
     * Outputs general help and usage for the specified `command`.
     * Optionally, if generators have been registered, a list of available generators is displayed.
     *
     * @param command `The name of the command to get help for.
     */
    help(command?: string): string;

    /**
     * Installs generators at the custom local repository and registers them.
     *
     * @param packages The package-names with the corresponding versions to install.
     */
    installLocalGenerators(packages: Record<string, string>): boolean;

    /**
     * Instantiates a generator.
     *
     * @param generator The constructor of the generator.
     * @param args The arguments to pass to the generator.
     * @param options The options to pass to the generator.
     */
    instantiate(
        generator: Generator.GeneratorConstructor,
        args: string[],
        options: Environment.InstantiateOptions
    ): Generator;

    /**
     * Checks whether a package with the specified `packageNamespace` has been registered.
     *
     * @param packageNamespace The package-namespace to check.
     * @returns A value indicating whether a package with the specified `packageNamespace` has been registered.
     */
    isPackageRegistered(packageNamespace?: string): boolean;

    /**
     * Applies the specified `options` to the environment.
     *
     * @param options The options to load.
     * @returns The new options of the environment.
     */
    loadEnvironmentOptions(options: Environment.Options): Environment.Options;

    /**
     * Loads the specified `options` into the environment for passing to the generators.
     *
     * @param options The options to load.
     * @return the new shared options of the environment.
     */
    loadSharedOptions(options: Generator.GeneratorOptions): Generator.GeneratorOptions;

    /**
     * Searches for generators and their sub-generators.
     *
     * A generator is a `:lookup/:name/index.js` file placed inside an npm package.
     *
     * Default lookups are:
     *   - `./`
     *   - `./generators/`
     *   - `./lib/generators/`
     *
     * So the index file `node_modules/generator-dummy/lib/generators/yo/index.js` would be registered as `dummy:yo` generator.
     *
     * @param options The options for the lookup.
     * @returns A list of generators.
     */
    lookup(options?: Environment.LookupOptions): Environment.LookupGeneratorMeta[];

    /**
     * Searches and registers generators inside the custom local repository.
     *
     * @param packagesToLookup The patterns of the packages to lookup.
     */
    lookupLocalPackages(packagesToLookup?: string[]): Environment.LookupGeneratorMeta[];

    /**
     * Converts the specified `filePath` to a namespace.
     *
     * @param filePath The path to convert.
     * @param lookups The path-part to exclude (such as `lib/generators`).
     */
    namespace(filePath: string, lookups?: string[]): string;

    /**
     * Gets a list of all registered namespaces.
     */
    namespaces(): string[];

    /**
     * Queue's the environment's commit task.
     */
    queueConflicter(): void;

    /**
     * Queues the specified `generator`.
     *
     * @param generator The generator to queue.
     * @param schedule A value indicating whether the execution of the generator should be scheduled.
     * @returns The queued generator.
     */
    queueGenerator(generator: Generator, schedule?: boolean): Generator;

    /**
     * Queues the package manager installation task.
     */
    queuePackageManagerInstall(): void;

    /**
     * Registers a specific `generator` to this environment.
     * This generator is stored under the provided `namespace` or, if not specified, a default namespace format.
     *
     * @param name The filepath to the generator or an npm package name.
     * @param namespace The namespace under which the generator should be registered.
     * @param packagePath The path to the npm package of the generator.
     */
    register(name: string, namespace?: string, packagePath?: string): this;

    /**
     * Registers a stubbed generator to this environment.
     *
     * @param generator The generator constructor.
     * @param namespace The namespace under which the generator should be registered.
     * @param resolved The file-path to the generator.
     * @param packagePath The path to the npm package of the generator.
     */
    registerStub(generator: Generator.GeneratorConstructor, namespace: string, resolved?: string, packagePath?: string): this;

    /**
     * Resolves the path of the specified module.
     *
     * @param moduleId The name of the module.
     * @returns The resolved path to the module.
     */
    resolveModulePath(moduleId: string): string;

    /**
     * Resolves a package name with a specific version.
     *
     * @param packageName The name of the package to resolve.
     * @param packageVersion The version or the version range of the package to resolve.
     */
    resolvePackage(packageName: string, packageVersion: string): [string, string];

    /**
     * Gets the first generator that was queued to run in this environment.
     */
    rootGenerator(): Generator;

    /**
     * Tries to locate and run a specific generator.
     * The lookup is done depending on the provided arguments, options and the list of registered generators.
     *
     * When the environment was unable to resolve a generator, an error is raised.
     *
     * @param args The arguments to pass to the generator.
     * @param options The options to pass to the generator.
     */
    run(args: string | [string, ...string[]], options?: Generator.GeneratorOptions): Promise<void>;

    /**
     * Runs the specified generator.
     *
     * See [#101](https://github.com/yeoman/environment/pull/101) for more info.
     *
     * @param generator The generator to run.
     */
    runGenerator(generator: Generator): Promise<void>;

    /**
     * Starts the environment queue.
     *
     * @param options The conflicter options.
     */
    start(options: Conflicter.ConflicterOptions): Promise<void>;

    /**
     * Spawns a command asynchronously.
     *
     * @param command The command to execute.
     * @param args The arguments to pass to the program.
     * @param options The options to use for running the command.
     */
    spawnCommand(command: string, args: string[], options: Options): ExecaChildProcess;

    /**
     * Spawns a command synchronously.
     *
     * @param command The command to execute.
     * @param args The arguments to pass to the program.
     * @param options The options to use for running the command.
     */
    spawnCommandSync(command: string, args: string[], options: SyncOptions): ExecaSyncReturnValue;
}

declare namespace Environment {
    /**
     * Represents a component for logging messages.
     */
    type Logger = LoggerBase;

    /**
     * Represents a question.
     */
    type Question<T extends inquirer.Answers> = inquirer.DistinctQuestion<T>;

    /**
     * Represents a collection of questions.
     */
    type Questions<T extends inquirer.Answers> = inquirer.QuestionCollection<T>;

    /**
     * Represents an answer-hash.
     */
    type Answers = inquirer.Answers;

    /**
     * Represents an adapter.
     */
    type Adapter = TerminalAdapter;

    /**
     * Represents an alias.
     */
    interface Alias {
        /**
         * The pattern to match.
         */
        match: RegExp;

        /**
         * The replacement of the `match`.
         */
        value: string;
    }

    /**
     * Represents options for an `Environment`.
     */
    interface Options {
        /**
         * The working-directory of the environment.
         */
        cwd?: string | undefined;

        /**
         * A value indicating whether the experimental features should be enabled.
         */
        experimental?: boolean;

        /**
         * The options to pass to generators.
         */
        sharedOptions?: Generator.GeneratorOptions;

        /**
         * A console instance for logging messages.
         */
        console?: Console;

        /**
         * A stream for receiving data from.
         */
        stdin?: Stream;

        /**
         * A stream to write normal messages to.
         */
        stdout?: Stream;

        /**
         * A stream to write error messages to.
         */
        stderr?: Stream;

        /**
         * Additional options.
         */
        [key: string]: any;
    }

    /**
     * Provides information about a generator.
     */
    interface GeneratorMeta {
        /**
         * The resolved path to the generator.
         */
        resolved: string;

        /**
         * The namespace of the generator.
         */
        namespace: string;

        /**
         * The path to the package containing the generator.
         */
        packagePath: string;
    }

    /**
     * Provides information about a generator.
     */
    interface LookupGeneratorMeta extends GeneratorMeta {
        /**
         * A value indicating whether the generator could be registered.
         */
        registered: boolean;
    }

    /**
     * Provides options for instantiating a generator.
     */
    interface InstantiateOptions<TOptions extends Generator.GeneratorOptions = Generator.GeneratorOptions> {
        /**
         * The arguments to pass to the generator.
         */
        arguments?: string | string[] | undefined;

        /**
         * The options for creating the generator.
         */
        options?: TOptions | undefined;
    }

    /**
     * Provides options for lookups.
     */
    interface LookupOptionBase {
        /**
         * A value indicating whether globally installed packages should be ignored.
         */
        localOnly?: boolean | undefined;
    }

    /**
     * Provides options for generator-lookups.
     */
    interface GeneratorLookupOptions extends LookupOptionBase {
        /**
         * A value indicating whether the path to the package should be returned instead of the path to the generator.
         */
        packagePath?: boolean | undefined;

        /**
         * A value indicating whether only one result should be returned.
         */
        singleResult?: boolean | undefined;
    }

    /**
     * Provides options for single generator lookups.
     */
    interface SingleGeneratorLookupOptions extends GeneratorLookupOptions {
        /**
         * @inheritdoc
         */
        singleResult: true;
    }

    /**
     * Provides options array generator lookups.
     */
    interface ArrayGeneratorLookupOptions extends GeneratorLookupOptions {
        /**
         * @inheritdoc
         */
        singleResult?: false | undefined;
    }

    /**
     * Provides options for the `getNpmPaths` method.
     */
    interface NpmPathsOptions extends LookupOptionBase {
        /**
         * A value indicating whether paths which don't end with a supported directory-name should be filtered (unless they are part of `NODE_PATH`).
         */
        filterPaths?: boolean | undefined;
    }

    /**
     * Provides options for the `lookup` method.
     */
    interface LookupOptions extends LookupOptionBase {
        /**
         * The paths to look for generators.
         */
        packagePaths?: string[] | undefined;

        /**
         * The repüository paths to look for generator packages.
         */
        npmPaths?: string[] | undefined;

        /**
         * The file-patterns to look for.
         */
        filePatterns?: string[] | undefined;

        /**
         * The package patterns to look for.
         */
        packagePatterns?: string[] | undefined;

        /**
         * A value indicating whether the lookup should be stopped after finding the first result.
         */
        singleResult?: boolean | undefined;

        /**
         * The `deep` option to pass to `globby`.
         */
        globbyDeep?: number | undefined;
    }

    /**
     * Provides options for the `findGeneratorsIn` method.
     */
    interface GeneratorsInOptions {
        /**
         * The package-patterns to look for.
         */
        packagePatterns?: string[] | undefined;
    }

    /**
     * Provides the functionality to handle callbacks.
     */
    type Callback =
        /**
         * Handles a callback.
         *
         * @param err The error that occurred.
         */
        (err: Error | null) => void;
}

export = Environment;
