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

import { EventEmitter } from 'events';
import { Answers as InquirerAnswers, DistinctQuestion, PromptModule } from 'inquirer';
import { Editor } from 'mem-fs-editor';
import { Observable } from 'rxjs';
import table = require("text-table");
import { format } from 'util';

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

    class Storage {
        constructor(name: string, fs: Editor, configPath: string);

        defaults(defaults: {}): {};
        delete(key: string): void;
        get(key: string): any;
        getAll(): { [key: string]: any };
        save(): void;
        set(key: string, value: any): any;
    }
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
    interface OptionConfig {
        alias?: string;
        default?: any;
        description?: string;
        hide?: boolean;
        type?: typeof Boolean | typeof String | typeof Number;
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
    config: Generator.Storage;
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
    composeWith(namespace: string, options: Generator.GeneratorOptions, settings?: { local: string, link: 'weak' | 'strong' }): this;
    destinationPath(...path: string[]): string;
    destinationRoot(rootPath?: string): string;
    determineAppname(): string;
    option(name: string, config: Generator.OptionConfig): this;
    prompt<A extends Generator.Answers = Generator.Answers>(questions: Generator.Questions<A>): Promise<A>;
    registerTransformStream(stream: {} | Array<{}>): this;
    rootGeneratorName(): string;
    rootGeneratorVersion(): string;
    run(cb?: Generator.Callback): this;
    sourceRoot(rootPath?: string): string;
    templatePath(...path: string[]): string;

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
    bowerInstall(component?: string | string[], options?: object, spawnOptions?: object): void;
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
    npmInstall(pkgs?: string | string[], options?: object, spawnOptions?: object): void;
    /**
     * Combine package manager cmd line arguments and run the `install` command.
     *
     * During the `install` step, every command will be scheduled to run once, on the
     * run loop.
     *
     * @param installer Which package manager to use
     * @param paths Packages to install. Use an empty string for `npm install`
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass `child_process.spawn`. ref
     *                     https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
     */
    scheduleInstallTask(installer: string, paths?: string | string[], options?: object, spawnOptions?: object): void;
    /**
     * Receives a list of `packages` and an `options` object to install through npm.
     *
     * The installation will automatically run during the run loop `install` phase.
     *
     * @param pkgs Packages to install
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass `child_process.spawn`.
     */
    yarnInstall(pkgs?: string | string[], options?: object, spawnOptions?: object): void;

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
