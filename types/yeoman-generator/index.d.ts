// Type definitions for yeoman-generator 5.2
// Project: https://github.com/yeoman/generator, http://yeoman.io
// Definitions by: Jay Anslow <https://github.com/janslow>
//                 Ika <https://github.com/ikatyang>
//                 Joshua Cherry <https://github.com/tasadar2>
//                 Arthur Corenzan <https://github.com/haggen>
//                 Richard Lea <https://github.com/chigix>
//                 Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import { spawn, SpawnOptions, SpawnSyncOptions } from 'child_process';
import { Debugger } from 'debug';
import { Data as TemplateData, Options as TemplateOptions } from 'ejs';
import { EventEmitter } from 'events';
import { Answers as InquirerAnswers, DistinctQuestion } from 'inquirer';
import { Editor, CopyOptions } from 'mem-fs-editor';
import { Observable } from 'rxjs';
import { Transform } from 'stream';
import Environment = require('yeoman-environment');
import Storage = require('./lib/util/storage');
import Logger = Environment.Logger;

declare namespace Generator {
    /**
     * Provides a priority-specification for a custom queue.
     */
    interface Priority {
        /**
         * The name for identifying the queue.
         */
        queueName?: string | undefined;

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
         * The path to the generator.
         */
        resolved?: string;

        /**
         * Gets or sets a collection of custom priorities.
         */
        customPriorities?: Priority[] | undefined;

        /**
         * The environment to use for creating the generator.
         */
        env?: Environment | undefined;

        /**
         * The destination-root to write the files to.
         */
        destinationRoot?: string | undefined;
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
        (err: any) => void;

    /**
     * Represents a question.
     */
    type Question<T extends Answers = Answers> = DistinctQuestion<T> & {
        /**
         * A value indicating whether to store the user's previous answer.
         */
        store?: boolean | undefined;
    };

    /**
     * Provides options for registering a prompt.
     */
    type QuestionRegistrationOptions<T extends Answers = Answers> = Question<T> & {
        /**
         * The storage to store the answers.
         */
        storage?: Storage | undefined;

        /**
         * A value indicating whether an option should be exported for this question.
         */
        exportOption?: boolean | object | undefined;
    };

    /**
     * Represents an answer-hash.
     */
    type Answers = InquirerAnswers;

    /**
     * Provides a set of questions.
     */
    type Questions<A extends Answers = Answers> = Question<A> | Array<Question<A>> | Observable<Question<A>>;

    /**
     * Provides options for performing installations.
     */
    interface InstallOptions {
        /**
         * A value indicating whether to run `npm install` or options to pass to `dargs` as arguments.
         */
        npm?: boolean | object | undefined;

        /**
         * A value indicating whether to run `bower install` or options to pass to `dargs` as arguments.
         */
        bower?: boolean | object | undefined;

        /**
         * A value indicating whether to run `yarn install` or options to pass to `dargs` as arguments.
         */
        yarn?: boolean | object | undefined;

        /**
         * A value indicating whether messages should be logged.
         */
        skipMessage?: boolean | undefined;
    }

    /**
     * Provides options for creating a new argument.
     */
    interface ArgumentConfig {
        /**
         * Description for the argument.
         */
        description?: string | undefined;

        /**
         * A value indicating whether the argument is required.
         */
        required?: boolean | undefined;

        /**
         * A value indicating whether the argument is optional.
         */
        optional?: boolean | undefined;

        /**
         * The type of the argument.
         */
        type?: typeof String | typeof Number | typeof Array | typeof Object | undefined;

        /**
         * The default value of the argument.
         */
        default?: any;
    }

    /**
     * Provides settings for creating a new generator-option.
     */
    interface OptionConfig {
        /**
         * The type of the option.
         */
        type: typeof Boolean | typeof String | typeof Number | ((opt: string) => any);

        /**
         * The option name alias (example `-h` and --help`).
         */
        alias?: string | undefined;

        /**
         * The default value.
         */
        default?: any;

        /**
         * The description for the option.
         */
        description?: string | undefined;

        /**
         * A value indicating whether the option should be hidden from the help output.
         */
        hide?: boolean | undefined;

        /**
         * The storage to persist the option
         */
        storage?: Storage | undefined;
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
        /**
         * The constructor of the generator.
         */
        Generator: GeneratorConstructor;

        /**
         * The path to the file containing the generator.
         */
        path: string;
    }

    type GeneratorFeaturesUniqueBy = 'argument' | 'namespacep';

    /**
     * Represents generators feature
     */
    interface GeneratorFeatures {
        /**
         * uniqueBy calculation method (undefined/argument/namespace)
         */
        uniqueBy?: GeneratorFeaturesUniqueBy | undefined;

        /**
         * The Generator instance unique identifier.
         * The Environment will ignore duplicated identifiers.
         */
        unique?: string | undefined;

        /**
         * Only queue methods that matches a priority
         */
        tasksMatchingPriority?: boolean | undefined;

        /**
         * Tasks methods starts with prefix. Allows api methods (non tasks) without prefix.
         */
         taskPrefix?: string | undefined;

        /**
         * Enable customCommitTask()
         */
         customCommitTask?: boolean | undefined;

         /**
          * Enable customInstallTask()
          */
         customInstallTask?: boolean | undefined;
    }

    /**
     * Provides options for queues.
     */
    interface QueueOptions {
        /**
         * The name of the queue.
         */
        queueName?: string | undefined;

        /**
         * A value indicating whether the queue should be executed only once per namespace and task-name.
         */
        once?: boolean | undefined;

        /**
         * A value indicating whether the queue should be executed if not running yet.
         */
        run?: boolean | undefined;
    }

    /**
     * Provides options for tasks.
     */
    interface TaskOptions extends QueueOptions {
        /**
         * A method for handling errors.
         */
        reject?: Callback | undefined;
    }

    /**
     * Represents a task.
     */
    interface Task extends TaskOptions {
        /**
         * The function to queue.
         */
        method: (...args: any) => any;

        /**
         * The name of the task.
         */
        taskName: string;
    }

    /**
     * Provides settings for rendering a template.
     */
    interface TemplateRenderOptions<T extends Generator<any>> {
        /**
         * A method for determining whether the template should be rendered.
         */
        when?: ((templateData: TemplateData, generator: T) => boolean) | undefined;

        /**
         * The template file, absolute or relative to {@link Generator.templatePath `templatePath()`}.
         */
        source: string | string[];

        /**
         * The destination, absolute or relative to {@link Generator.destinationPath `destinationPath()`}.
         */
        destination?: string | string[] | undefined;

        /**
         * The `ejs` options.
         */
        templateOptions?: TemplateOptions | undefined;

        /**
         * The `mem-fs-editor` copy-options.
         */
        copyOptions?: CopyOptions | undefined;
    }
}

/**
 * The {@link Generator `Generator`} class provides the common API shared by all generators.
 * It define options, arguments, file, prompt, log, API, etc.
 *
 * Every generator should extend this base class.
 */
declare class Generator<T extends Generator.GeneratorOptions = Generator.GeneratorOptions> extends EventEmitter {
    constructor(args: string | string[], options: T, features?: Generator.GeneratorFeatures);

    /**
     * The current Environment being run.
     */
    env: Environment;

    /**
     * Provides arguments at initialization.
     */
    args: string[];

    /**
     * The path to the current generator.
     */
    resolved: string;

    /**
     * The description to display in the `--help` output.
     */
    description: string;

    /**
     * The application name.
     */
    appname: string;

    /**
     * The `.yo-rc` config file manager.
     */
    config: Storage;

    /**
     * The storage containing the destination-`package.json`.
     */
    packageJson: Storage;

    /**
     * An instance of [`mem-fs-editor`](https://github.com/SBoudrias/mem-fs-editor).
     */
    fs: Editor;

    /**
     * Provides options at initialization.
     */
    options: T;

    /**
     * Provides the functionality to log messages.
     */
    log: Logger;

    /**
     * The path from where the user is running `yo`.
     */
    contextRoot: string;

    /**
     * Reads the options or a single option at the specified property-path from the `.yo-rc` config-store.
     *
     * @param path The property-path of the option to get.
     */
    _templateData(path?: string): any;

    /**
     * Adds an argument to the class and creates an attribute getter for it.
     *
     * Arguments are different from options in several aspects. The first one
     * is how they are parsed from the command line, arguments are retrieved
     * based on their position.
     *
     * Besides, arguments are used inside your code as a property ({@link Generator.args `this.args`}),
     * while options are all kept in a hash ({@link Generator.options `this.options`}).
     *
     *
     * @param name Argument name.
     * @param config Argument options.
     * @return This generator.
     */
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
     * @return This generator or the composed generator when {@link returnNewGenerator `returnNewGenerator`} is `true`.
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
    composeWith(
        generators: Array<Generator.CompositionOptions | string> | Generator.CompositionOptions | string,
        options?: Generator.GeneratorOptions,
        returnNewGenerator?: false,
    ): this;

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
    composeWith(
        generators: Generator.CompositionOptions | string,
        options: Generator.GeneratorOptions,
        returnNewGenerator: true,
    ): Generator;

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
    composeWith(
        generators: Array<Generator.CompositionOptions | string>,
        options: Generator.GeneratorOptions,
        returnNewGenerator: true,
    ): Generator[];

    /**
     * Creates a new storage.
     *
     * @param storagePath The path to the `json`-file of the storage.
     * @param key The key in which the options are stored inside the `json`.
     * @param lodashPath A value indicating whether the {@link key `key`} argument should be treated as a lodash path.
     */
    createStorage(storagePath: string, key?: string, lodashPath?: boolean): Storage;

    /**
     * Convenience debug method.
     */
    debug: (...args: Parameters<Debugger>) => void;

    /**
     * Joins a path to the destination root.
     *
     * @param path The path parts.
     */
    destinationPath(...path: string[]): string;

    /**
     * Changes the generator destination root directory.
     *
     * This path is used to find storage, when using file system helper methods
     * (such as {@link Generator.writeDestination `this.writeDestination`} and {@link Generator.copyDestination `this.copyDestination`}).
     *
     * @param rootPath The new destination root path.
     * @param skipEnvironment A value indicating whether {@link Environment.cwd `this.env.cwd`} and the current working directory shouldn't be changed.
     */
    destinationRoot(rootPath?: string, skipEnvironment?: boolean): string;

    /**
     * Determines the name of the application.
     *
     * First checks for the name in `bower.json`, then checks for the name in `package.json`.
     * Finally defaults to the name of the current directory.
     *
     * @returns The name of the application.
     */
    determineAppname(): string;

    /**
     * Adds an option to the set of generator expected options, only used to generate generator usage.
     * By default, generators get all the cli options parsed by nopt as a {@link Generator.options `this.options`} hash object.
     *
     * @param name The name of the option.
     * @param config The configuration of the option.
     * @returns This generator
     */
    option(name: string, config?: Generator.OptionConfig): this;

    /**
     * Prompt user to answer questions.
     */
    prompt<T extends InquirerAnswers>(questions: Generator.Questions<T>): Promise<T>;

    /**
     * Queues the basic tasks of the generator.
     */
    queueBasicTasks(): void;

    /**
     * Schedules methods on a run queue.
     *
     * @param method The method or an object containing function properties to schedule.
     * @param methodName The name of the method to be scheduled.
     * @param queueName The name of the queue to schedule on.
     * @param reject A callback for handling rejections.
     */
    queueMethod(
        method: ((...args: any[]) => any) | Record<string, (...args: any[]) => any>,
        methodName?: string,
        queueName?: string,
        reject?: Generator.Callback,
    ): void;

    /**
     * Schedules a task on a run queue.
     *
     * @param task The task to queue.
     */
    queueTask(task: Generator.Task): void;

    /**
     * Schedules methods on a run queue.
     *
     * @param taskGroup An object containing tasks.
     * @param taskOptions The options for creating the tasks.
     */
    queueTaskGroup(taskGroup: Record<string, (...args: any[]) => any>, taskOptions?: Generator.TaskOptions): void;

    /**
     * Adds a transform stream to the commit stream.
     *
     * @param stream An array of transform streams or a single one.
     */
    queueTransformStream(stream: Transform | Transform[]): this;

    /**
     * Registers the specified {@link priorities `priorities`}.
     *
     * @param priorities
     * The priorities to register.
     */
    registerPriorities(priorities: Generator.Priority[]): void;

    /**
     * Registers stored config prompts and optional option alternatives.
     *
     * @param questions
     * The questions to register.
     */
    registerConfigPrompts<TAnswers extends InquirerAnswers>(
        questions:
            | Generator.QuestionRegistrationOptions<TAnswers>
            | Array<Generator.QuestionRegistrationOptions<TAnswers>>,
    ): void;

    /**
     * Determines the root generator name (the one who's extending this generator).
     */
    rootGeneratorName(): string;

    /**
     * Determines the root generator version (the one who's extending this generator).
     */
    rootGeneratorVersion(): string;

    /**
     * Runs the generator, scheduling prototype methods on a run queue.
     * Method names will determine the order each method is run.
     * Methods without special names will run in default queue.
     *
     * Any method named `constructor` and any methods prefixed by a `_` won't be scheduled.
     */
    run(): Promise<void>;

    /**
     * Runs the generator, scheduling prototype methods on a run queue.
     * Method names will determine the order each method is run.
     * Methods without special names will run in default queue.
     *
     * Any method named `constructor` and any methods prefixed by a `_` won't be scheduled.
     *
     * @param cb The callback.
     * @deprecated
     */
    // tslint:disable-next-line:unified-signatures
    run(cb: Generator.Callback): Promise<void>;

    /**
     * Changes the generator source root directory.
     * This path is used by multiple file system methods.
     *
     * @param rootPath The new source root path.
     */
    sourceRoot(rootPath?: string): string;

    /**
     * Joins a path to the source root.
     *
     * @param path The path parts.
     */
    templatePath(...path: string[]): string;

    /**
     * Starts the generator again.
     *
     * @param The options to assign.
     */
    startOver(options?: T): void;

    // actions/fs mixin
    /**
     * Copy file from destination folder to another destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.copy(this.destinationPath(from), this.destinationPath(to))
     * ```
     */
    copyDestination: Editor['copy'];

    /**
     * Copy file from templates folder to destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.copy(this.templatePath(from), this.destinationPath(to))
     * ```
     */
    copyTemplate: Editor['copy'];

    /**
     * Deletes file from destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.delete(this.destinationPath(filepath))
     * ```
     */
    deleteDestination: Editor['delete'];

    /**
     * Checks whether a file exists in the destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.exists(this.destinationPath(filepath))
     * ```
     */
    existsDestination: Editor['exists'];

    /**
     * Move file from destination folder to another destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.move(this.destinationPath(from), this.destinationPath(to))
     * ```
     */
    moveDestination: Editor['move'];

    /**
     * Read file from destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.read(this.destinationPath(filepath))
     * ```
     */
    readDestination: Editor['read'];

    /**
     * Read JSON file from destination folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.readJSON(this.destinationPath(filepath))
     * ```
     */
    readDestinationJSON: Editor['readJSON'];

    /**
     * Read file from templates folder.
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.read(this.templatePath(filepath))
     * ```
     */
    readTemplate: Editor['read'];

    /**
     * Copies a template from templates folder to the destination.
     *
     * @param source The template file, absolute or relative to {@link Generator.templatePath `templatePath()`}.
     * @param destination The destination, absolute or relative to {@link Generator.destinationPath `destinationPath()`}.
     * @param templateData The `ejs`-data or the name of the storage-key to get the data from.
     * @param templateOptions The `ejs`-options.
     * @param copyOptions The `mem-fs-editor` copy options.
     */
    renderTemplate(
        source: string | string[],
        destination?: string | string[],
        templateData?: TemplateData | string,
        templateOptions?: TemplateOptions | string,
        copyOptions?: CopyOptions,
    ): void;

    /**
     * Copies templates from the `templates` folder to the destination.
     *
     * @param templates The template files to copy.
     * @param templateData The ejs data or the name of the storage-key to get the data from.
     */
    renderTemplates(
        templates: Array<Generator.TemplateRenderOptions<this>>,
        templateData?: TemplateData | string,
    ): void;

    /**
     * Write file to destination folder
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.write(this.destinationPath(filepath))
     * ```
     */
    writeDestination: Editor['write'];

    /**
     * Write json file to destination folder
     * `mem-fs-editor` method's shortcut, for more information see [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor).
     * Shortcut for:
     * ```js
     * this.fs.writeJSON(this.destinationPath(filepath))
     * ```
     */
    writeDestinationJSON: Editor['writeJSON'];

    // actions/help mixin
    /**
     * Generates a help-text for the arguments.
     *
     * @returns A help-text for the arguments.
     */
    argumentsHelp(): string;

    /**
     * Sets a custom {@link description `description`} for the help output.
     *
     * @param description The new description.
     */
    desc(description: string): this;

    /**
     * Tries to get the description from a `USAGE` file one folder above the source root, otherwise uses a default description.
     */
    help(): string;

    /**
     * Gets help text for options.
     */
    optionsHelp(): string;

    /**
     * Gets usage information for this generator, depending on its arguments or options.
     */
    usage(): string;

    // actions/spawn_command mixin
    /**
     * Normalizes a command across OS and spawns it (asynchronously).
     *
     * @param command The program to execute.
     * @param args A list of arguments to pass to the program.
     * @param opt Any cross-spawn options.
     */
    spawnCommand(command: string, args: string[], opt?: SpawnOptions): any;

    /**
     * Normalizes a command across the OS and spawns it (synchronously).
     *
     * @param command The program to execute.
     * @param args A list of arguments to pass to the program
     * @param opt Any cross-spawn options.
     */
    spawnCommandSync(command: string, args: string[], opt?: SpawnSyncOptions): any;

    // actions/install mixin
    /**
     * @deprecated
     * Receives a list of {@link components `components`} and an {@link options `options`} object to install through bower.
     *
     * The installation will automatically run during the run loop `install` phase.
     *
     * @param components Components to install
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass {@link spawn `child_process.spawn`}.
     */
    bowerInstall(components?: string | string[], options?: object, spawnOptions?: SpawnOptions): void;

    /**
     * @deprecated
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
     * @deprecated
     * Receives a list of {@link packages `packages`} and an {@link options `options`} object to install through npm.
     *
     * The installation will automatically run during the run loop `install` phase.
     *
     * @param packages Packages to install
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass {@link spawn `child_process.spawn`}.
     */
    npmInstall(packages?: string | string[], options?: object, spawnOptions?: SpawnOptions): void;

    /**
     * @deprecated
     * Combine package manager cmd line arguments and run the `install` command.
     *
     * During the `install` step, every command will be scheduled to run once, on the
     * run loop.
     *
     * @param installer Which package manager to use
     * @param paths Packages to install. Use an empty string for `npm install`
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass {@link spawn `child_process.spawn`}.
     */
    scheduleInstallTask(
        installer: string,
        paths?: string | string[],
        options?: object,
        spawnOptions?: SpawnOptions,
    ): void;

    /**
     * @deprecated
     * Receives a list of {@link packages `packages`} and an {@link options `options`} object to install through npm.
     *
     * The installation will automatically run during the run loop `install` phase.
     *
     * @param packages Packages to install
     * @param options Options to pass to `dargs` as arguments
     * @param spawnOptions Options to pass {@link spawn `child_process.spawn`}.
     */
    yarnInstall(packages?: string | string[], options?: object, spawnOptions?: SpawnOptions): void;

    // actions/package.json
    /**
     * Adds dependencies to the destination `package.json`.
     *
     * @param dependencies
     * The packages to add.
     *
     * @returns
     * The newly added dependencies.
     */
    addDependencies(dependencies: Record<string, string> | string | string[]): Promise<Record<string, string>>;

    /**
     * Adds development-dependencies to the destination `package.json`.
     *
     * @param devDependencies
     * The packages to add to the development-dependencies.
     *
     * @returns
     * The newly added development-dependencies.
     */
    addDevDependencies(devDependencies: Record<string, string> | string | string[]): Promise<Record<string, string>>;

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
        };
    };
}
export = Generator;
