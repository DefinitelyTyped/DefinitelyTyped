// Type definitions for yeoman-generator 3.1
// Project: https://github.com/yeoman/generator, http://yeoman.io
// Definitions by: Kentaro Okuno <https://github.com/armorik83>
//                 Jay Anslow <https://github.com/janslow>
//                 Ika <https://github.com/ikatyang>
//                 Joshua Cherry <https://github.com/tasadar2>
//                 Arthur Corenzan <https://github.com/haggen>
//                 Richard Lea <https://github.com/chigix>
//                 Devid Farinelli <https://github.com/misterdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { SpawnOptions } from 'child_process';
import { Debugger } from 'debug';
import { EventEmitter } from 'events';
import { Answers as InquirerAnswers, DistinctQuestion, PromptModule, prompt } from 'inquirer';
import { Editor } from 'mem-fs-editor';
import { Observable } from 'rxjs';
import table = require("text-table");
import { format } from 'util';
import Storage = require("./lib/util/storage");

declare namespace Generator {
    /**
     * Provides a priority-specification for a custom queue.
     */
    interface Priority {
        /**
         * The name for identifying the queue.
         */
        queueName?: string;

        /**
         * The name of the method to execute.
         */
        priorityName: string;

        /**
         * The name of the queue which this priority should be added before.
         */
        before: string;
    }

    /**
     * Provides options for generators.
     */
    interface GeneratorOptions {
        /**
         * Gets or sets additional properties.
         */
        [name: string]: any;

        /**
         * Gets or sets a collection of custom priorities.
         */
        customPriorities?: Array<Priority>;
    }

    type Callback = (err: any) => void;
    type Question<T extends Answers = Answers> = DistinctQuestion<T> & {
        /**
         * whether to store the user's previous answer
         */
        store?: boolean;
    };

    /**
     * Represents an answer-hash.
     */
    type Answers = InquirerAnswers;

    type Questions<A extends Answers = Answers> = (
        | Question<A>
        | Array<Question<A>>
        | Observable<Question<A>>
    );

    interface InstallOptions {
        /**
         * whether to run `npm install` or can be options to pass to `dargs` as arguments
         */
        npm?: boolean | object;
        /**
         * whether to run `bower install` or can be options to pass to `dargs` as arguments
         */
        bower?: boolean | object;
        /**
         * whether to run `yarn install` or can be options to pass to `dargs` as arguments
         */
        yarn?: boolean | object;
        /**
         * whether to log the used commands
         */
        skipMessage?: boolean;
    }
    interface ArgumentConfig {
        description?: string;
        required?: boolean;
        optional?: boolean;
        type?: typeof String | typeof Number | typeof Array | typeof Object;
        default?: any;
    }

    /**
     * Provides settings for creating a new generator-option.
     */
    interface OptionConfig {
        /**
         * The type of the option.
         */
        type: typeof Boolean | typeof String | typeof Number;

        /**
         * The option name alias (example `-h` and --help`).
         */
        alias?: string;

        /**
         * The default value.
         */
        default?: any;

        /**
         * The description for the option.
         */
        description?: string;

        /**
         * A value indicating whether the option should be hidden from the help output.
         */
        hide?: boolean;

        /**
         * The storage to persist the option
         */
        storage?: Storage;
    }

    /**
     * Provides the functionality to log messages.
     */
    interface Logger extends EventEmitter {
        /**
         * Writes a log-message.
         *
         * @param format
         * The format of the log-messages.
         *
         * @param params
         * The parameters to replace variables with.
         */
        (format: string, params?: Record<string, any>): this;

        /**
         * Writes a log-message.
         */
        write(...args: Parameters<typeof format>): this;

        /**
         * Writes a log-message with an appended newline character.
         */
        writeln(...args: Parameters<typeof format>): this;

        /**
         * Writes a success status with a check mark `✔`.
         */
        ok(...args: Parameters<typeof format>): this;

        /**
         * Writes an error-message with a prepended cross mark.
         */
        error(...args: Parameters<typeof format>): this;

        /**
         * Writes a `skip`-message.
         */
        skip(...args: Parameters<typeof format>): this;

        /**
         * Writes a `force`-message.
         */
        force(...args: Parameters<typeof format>): this;

        /**
         * Writes a `create`-message.
         */
        create(...args: Parameters<typeof format>): this;

        /**
         * Writes a `invoke`-message.
         */
        invoke(...args: Parameters<typeof format>): this;

        /**
         * Writes a `conflict`-message.
         */
        conflict(...args: Parameters<typeof format>): this;

        /**
         * Writes a `identical`-message.
         */
        identical(...args: Parameters<typeof format>): this;

        /**
         * Writes a `info`-message.
         */
        info(...args: Parameters<typeof format>): this;

        /**
         * Writes a table to the console.
         */
        table: typeof table;
    }

    /**
     * Represents a generator-constructor.
     */
    interface GeneratorConstructor {
        new(...args: any[]): Generator<any>;
    }

    /**
     * Represents options for composing a generator.
     */
    interface CompositionOptions {
        Generator: GeneratorConstructor;
        path: string;
    }
}

declare class Generator<T extends Generator.GeneratorOptions = Generator.GeneratorOptions> extends EventEmitter {
    constructor(args: string | string[], options: T);

    env: {
        error(...e: Error[]): void;
        adapter: {
            promptModule: PromptModule;
        };
    };
    args: {};
    resolved: string;
    description: string;
    appname: string;

    /**
     * The `.yo-rc` config file manager.
     */
    config: Storage;

    fs: Editor;
    options: T;
    log: Generator.Logger;

    /**
     * Reads the options or a single option at the specified property-path from the `.yo-rc` config-store.
     *
     * @param path
     * The property-path of the option to get.
     */
    _templateData(path?: string): any;

    argument(name: string, config: Generator.ArgumentConfig): this;

    /**
     * Cancels all cancellable tasks.
     */
    cancelCancellableTasks(): void;

    /**
     * Compose this generator with another one.
     *
     * @param generator The path to the generator module or an object (see examples).
     * @param options The options passed to the Generator.
     * @param returnNewGenerator Returns the created generator instead of returning this.
     * @return This generator or the composed generator when returnNewGenerator=true
     *
     * @example
     * this.composeWith('bootstrap', { sass: true });
     *
     * @example
     * this.composeWith(require.resolve('generator-bootstrap/app/main.js'), { sass: true });
     *
     * @example
     * this.composeWith({ Generator: MyGenerator, path: '../generator-bootstrap/app/main.js' }, { sass: true });
     *
     * @returns
     * Either returns this generator or the newly created generator.
     */
    composeWith<T extends true | false = true>(generators: Array<Generator.CompositionOptions | string> | Generator.CompositionOptions | string, options?: Generator.GeneratorOptions, returnNewGenerator?: T): T extends true ? Generator : this;

    /**
     * Creates a new storage.
     *
     * @param storagePath The path to the `json`-file of the storage.
     * @param key The key in which the options are stored inside the `json`.
     * @param lodashPath A value indicating whether the `key` argument should be treated as a lodash path.
     */
    createStorage(storagePath: string, key?: string, lodashPath?: boolean): Storage;

    /**
     * Convenience debug method.
     */
    debug: (...args: Parameters<Debugger>) => void;

    destinationPath(...path: string[]): string;

    /**
     * Changes the generator destination root directory.
     *
     * This path is used to find storage, when using file system helper methods (such as `this.writeDestination` and `this.copyDestination`).
     *
     * @param rootPath The new destination root path.
     * @param skipEnvironment A value indicating whether `this.env.cwd` and the current working directory shouldn't be changed.
     */
    destinationRoot(rootPath?: string, skipEnvironment?: boolean): string;
    determineAppname(): string;

    /**
     * Adds an option to the set of generator expected options, only used to generate generator usage.
     * By default, generators get all the cli options parsed by nopt as a `this.options` hash object.
     *
     * @param name The name of the option.
     * @param config The configuration of the option.
     * @param {Storage} [config.storage] - 
     * @return {this} This generator
     */
    option(name: string, config: Generator.OptionConfig): this;

    /**
     * Prompt user to answer questions.
     */
    prompt: typeof prompt;

    /**
     * Queues the basic tasks of the generator.
     */
    queueBasicTasks(): void;
    registerTransformStream(stream: {} | Array<{}>): this;
    rootGeneratorName(): string;
    rootGeneratorVersion(): string;
    run(cb?: Generator.Callback): this;
    sourceRoot(rootPath?: string): string;
    templatePath(...path: string[]): string;

    // actions/fs mixin
    /**
     * Copy file from destination folder to another destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.copy(this.destinationPath(from), this.destinationPath(to))
     * ```
     */
    copyDestination(...args: Parameters<Editor["copy"]>): ReturnType<Editor["copy"]>;

    /**
     * Copy file from templates folder to destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.copy(this.templatePath(from), this.destinationPath(to))
     * ```
     */
    copyTemplate(...args: Parameters<Editor["copy"]>): ReturnType<Editor["copy"]>;

    /**
     * Deletes file from destination folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.delete(this.destinationPath(filepath))
     * ```
     */
    deleteDestination(...args: Parameters<Editor["delete"]>): ReturnType<Editor["delete"]>;

    /**
     * Checks whether a file exists in the destination folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.exists(this.destinationPath(filepath))
     * ```
     */
    existsDestination(...args: Parameters<Editor["exists"]>): ReturnType<Editor["exists"]>;

    /**
     * Move file from destination folder to another destination folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.move(this.destinationPath(from), this.destinationPath(to))
     * ```
     */
    moveDestination(...args: Parameters<Editor["move"]>): ReturnType<Editor["move"]>;

    // actions/help mixin
    argumentsHelp(): string;
    async(): () => {};
    desc(description: string): this;
    help(): string;
    optionsHelp(): string;
    usage(): string;

    // actions/spawn_command mixin
    spawnCommand(command: string, args: string[], opt?: {}): any;
    spawnCommandSync(command: string, args: string[], opt?: {}): any;

    // actions/install mixin
    /**
     * Receives a list of `components` and an `options` object to install through bower.
     *
     * The installation will automatically run during the run loop `install` phase.
     *
     * @param component Components to install
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass `child_process.spawn`.
     */
    bowerInstall(component?: string | string[], options?: object, spawnOptions?: SpawnOptions): void;
    /**
     * Runs `npm` and `bower`, in sequence, in the generated directory and prints a
     * message to let the user know.
     *
     * @example
     * this.installDependencies({
     *   bower: true,
     *   npm: true
     * }).then(() => console.log('Everything is ready!'));
     *
     * @example
     * this.installDependencies({
     *   yarn: {force: true},
     *   npm: false
     * }).then(() => console.log('Everything is ready!'));
     *
     */
    installDependencies(options?: Generator.InstallOptions): void;
    /**
     * Receives a list of `packages` and an `options` object to install through npm.
     *
     * The installation will automatically run during the run loop `install` phase.
     *
     * @param pkgs Packages to install
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass `child_process.spawn`.
     */
    npmInstall(pkgs?: string | string[], options?: object, spawnOptions?: SpawnOptions): void;
    /**
     * Combine package manager cmd line arguments and run the `install` command.
     *
     * During the `install` step, every command will be scheduled to run once, on the
     * run loop.
     *
     * @param installer Which package manager to use
     * @param paths Packages to install. Use an empty string for `npm install`
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass `child_process.spawn`.
     */
    scheduleInstallTask(installer: string, paths?: string | string[], options?: object, spawnOptions?: SpawnOptions): void;
    /**
     * Receives a list of `packages` and an `options` object to install through npm.
     *
     * The installation will automatically run during the run loop `install` phase.
     *
     * @param pkgs Packages to install
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass `child_process.spawn`.
     */
    yarnInstall(pkgs?: string | string[], options?: object, spawnOptions?: SpawnOptions): void;

    // actions/user mixin
    readonly user: {
        readonly git: {
            /**
             * Retrieves user's email from Git in the global scope or the project scope
             * (it'll take what Git will use in the current context)
             * @return configured git email or undefined
             */
            email(): string;
            /**
             * Retrieves user's name from Git in the global scope or the project scope
             * (it'll take what Git will use in the current context)
             * @return configured git name or undefined
             */
            name(): string;
        };
        readonly github: {
            /**
             * Retrieves GitHub's username from the GitHub API
             * @return Resolved with the GitHub username or rejected if unable to
             *         get the information
             */
            username(): Promise<string>;
        }
    };
}
export = Generator;
