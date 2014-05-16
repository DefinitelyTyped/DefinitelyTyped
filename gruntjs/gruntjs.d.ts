// Type definitions for Grunt 0.4.x
// Project: http://gruntjs.com
// Definitions by: Jeff May <https://github.com/jeffmay/>, Basarat Ali Syed <https://github.com/basarat/>
// Definitions: https://github.com/jeffmay/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

/**
 * {@link http://github.com/marak/colors.js/}
 */
interface String {
    yellow: string;
    cyan: string;
    white: string;
    magenta: string;
    green: string;
    red: string;
    grey: string;
    blue: string;
}

declare module node {

    /**
     * {@link http://npmjs.org/doc/json.html}
     */
    interface NodePackage {
        name: string
        version: string
        description?: string
        keywords?: string[]
        homepage?: string
    }
}

/**
 * {@link http://github.com/isaacs/minimatch}
 */
declare module minimatch {

    /**
     * A minimal matching utility options.
     *
     * This is the matching library used internally by npm.
     * Eventually, it will replace the C binding in node-glob.
     * It works by converting glob expressions into JavaScript RegExp objects.
     */
    interface IMinimatchOptions {
        /*
         All options are false by default.
         */

        /**
         * Dump a ton of stuff to stderr.
         */
        debug?: boolean

        /**
         * Do not expand {a,b} and {1..3} brace sets.
         */
        nobrace?: boolean

        /**
         * Disable ** matching against multiple folder names.
         */
        noglobstar?: boolean

        /**
         * Allow patterns to match filenames starting with a period,
         * even if the pattern does not explicitly have a period in that spot.
         */
        // Note that by default, a/**\/b will not match a/.d/b, unless dot is set.
        dot?: boolean

        /**
         * Disable "extglob" style patterns like +(a|b).
         */
        noext?: boolean

        /**
         * Perform a case-insensitive match.
         */
        nocase?: boolean

        /**
         * When a match is not found by minimatch.match, return a list containing the pattern itself.
         * When set, an empty list is returned if there are no matches.
         */
        nonull?: boolean

        /**
         * If set, then patterns without slashes will be matched against the basename of the path if it contains slashes.
         * For example, a?b would match the path /xyz/123/acb, but not /xyz/acb/123.
         */
        matchBase?: boolean

        /**
         * Suppress the behavior of treating # at the start of a pattern as a comment.
         */
        nocomment?: boolean

        /**
         * Suppress the behavior of treating a leading ! character as negation.
         */
        nonegate?: boolean

        /**
         * Returns from negate expressions the same as if they were not negated. (Ie, true on a hit, false on a miss.)
         */
        flipNegate?: boolean
    }
}

/* GRUNT CONFIGURATION
 *********************/

declare module grunt {

    module config {
       
        /**
         * {@link http://gruntjs.com/sample-gruntfile}
         */
        interface IProjectConfig{
            [plugin: string]: any
            pkg: any; // unfortunate. It is actually a string
        }                

        /**
         * {@link http://gruntjs.com/api/grunt.config}
         */
        interface ConfigModule {
            /**
             * Get or set a value from the project's Grunt configuration.
             * This method serves as an alias to other methods;
             * if two arguments are passed, grunt.config.set is called,
             * otherwise grunt.config.get is called.
             */
            (prop: string, value: any): any
            (prop: string): any

            /**
             * Initialize a configuration object for the current project.
             * The specified configObject is used by tasks and can be accessed using the grunt.config method.
             * Nearly every project's Gruntfile will call this method.
             */
            init(config: IProjectConfig): void

            /**
             * Get a value from the project's Grunt configuration.
             * If prop is specified, that property's value is returned, or null if that property is not defined.
             * If prop isn't specified, a copy of the entire config object is returned.
             * Templates strings will be recursively processed using the grunt.config.process method.
             *
             * @note Although this accepts a generic type, you may still get the wrong typed value.
             */
            get<T>(prop: string): T
            get(): ConfigModule

            /**
             * Process a value, recursively expanding <% %> templates (via the grunt.template.process method)
             * in the context of the Grunt config, as they are encountered.
             * this method is called automatically by grunt.config.get but not by grunt.config.getRaw.
             *
             * If any retrieved value is entirely a single '<%= foo %>' or '<%= foo.bar %>' template string,
             * and the specified foo or foo.bar property is a non-string (and not null or undefined) value,
             * it will be expanded to the actual value. That, combined with grunt's task system automatically
             * flattening arrays, can be extremely useful.
             */
            process<T>(value: string): T

            /**
             * Get a raw value from the project's Grunt configuration, without processing <% %> template strings.
             * If prop is specified, that property's value is returned, or null if that property is not defined.
             * If prop isn't specified, a copy of the entire config object is returned.
             */
            getRaw<T>(prop: string): T

            /**
             * Set a value into the project's Grunt configuration.
             * @note any specified <% %> template strings will only be processed when config data is retrieved.
             */
            set<T>(prop: string, value: T): T

            /**
             * Escape '.' dots in the given propString. This should be used for property names that contain dots.
             */
            escape(propString: string): string

            /**
             * Fail the current task if one or more required config properties is missing, null or undefined.
             * One or more string or array config properties may be specified.
             */
            requires(prop: string, ...andProps: string[]): void
            requires(prop: string[], ...andProps: string[][]): void
        }
    }

    module event {
        /**
         * {@link http://github.com/hij1nx/EventEmitter2}
         */
        interface EventModule {

            /**
             * Adds a listener to the end of the listeners array for the specified event.
             */
            addListener(event: string, listener: Function): EventModule
            on(event: string, listener: Function): EventModule

            /**
             * Adds a listener that will be fired when any event is emitted.
             */
            onAny(listener: Function): EventModule

            /**
             * Removes the listener that will be fired when any event is emitted.
             */
            offAny(listener: Function): EventModule

            /**
             * Adds a one time listener for the event.
             * The listener is invoked only the first time the event is fired, after which it is removed.
             */
            once(event: string, listener: Function): EventModule

            /**
             * Adds a listener that will execute n times for the event before being removed.
             * The listener is invoked only the first time the event is fired, after which it is removed.
             */
            many(event: string, timesToListen: number, listener: Function): EventModule

            /**
             * Remove a listener from the listener array for the specified event.
             * Caution: changes array indices in the listener array behind the listener.
             */
            removeListener(event: string, listener: Function): EventModule
            off(event: string, listener: Function): EventModule

            /**
             * Removes all listeners, or those of the specified event.
             */
            removeAllListeners(event: string): EventModule

            /**
             * By default EventEmitters will print a warning if more than 10 listeners are added to it.
             * This is a useful default which helps finding memory leaks. Obviously not all Emitters
             * should be limited to 10. This function allows that to be increased.
             *
             * Set to zero for unlimited.
             */
            setMaxListener(n: number): void

            /**
             * Returns an array of listeners for the specified event.
             * This array can be manipulated, e.g. to remove listeners.
             */
            listeners(event: string): Function[]

            /**
             * Returns an array of listeners that are listening for any event that is specified.
             * This array can be manipulated, e.g. to remove listeners.
             */
            listenersAny(): Function[]

            /**
             * Execute each of the listeners that may be listening for the specified event name
             * in order with the list of arguments.
             */
            emit(event: string, ...args: any[]): any
        }
    }

    module fail {

        enum ErrorCode {
            NoError = 0,
            Fatal = 1,
            MissingGruntfile = 2,
            Task = 3,
            Template = 4,
            Autocomplete = 5,
            Warning = 6,
        }

        interface FailModule {

            /**
             * Display a warning and abort Grunt immediately.
             * Grunt will continue processing tasks if the --force command-line option was specified.
             */
            warn(error: string, errorCode?: ErrorCode): void
            warn(error: Error, errorCode?: ErrorCode): void

            /**
             * Display a warning and abort Grunt immediately.
             */
            fatal(error: string, errorCode?: ErrorCode): void
            fatal(error: Error, errorCode?: ErrorCode): void
        }
    }

    module file {

        /**
         * {@link http://gruntjs.com/api/grunt.file#grunt.file.defaultencoding}
         */
        interface IFileEncodedOption {
            encoding: string
        }

        /**
         * {@link http://gruntjs.com/api/grunt.file#grunt.file.copy}
         *
         * @see IFileWriteBufferOption
         * @see IFileWriteStringOption
         */
        interface IFileWriteOptions {
            /**
             * These optional globbing patterns will be matched against the filepath
             * (not the filename) using grunt.file.isMatch. If any specified globbing
             * pattern matches, the file won't be processed via the `process` function.
             * If `true` is specified, processing will be prevented.
             */
            // noProcess?: string[]
            // noProcess?: boolean
            noProcess?: any
        }

        /**
         * @see IFileWriteOptions
         */
        interface IFileWriteBufferOption extends grunt.file.IFileWriteOptions {
            /**
             * The source file contents and file path are passed into this function,
             * whose return value will be used as the destination file's contents. If
             * this function returns `false`, the file copy will be aborted.
             */
            process?: (buffer: Buffer) => boolean
        }

        /**
         * @see IFileWriteOptions
         */
        interface IFileWriteStringOption extends grunt.file.IFileWriteOptions {
            /**
             * The source file contents and file path are passed into this function,
             * whose return value will be used as the destination file's contents. If
             * this function returns `false`, the file copy will be aborted.
             */
            process?: (file: string) => boolean
        }

        /**
         * {@link http://gruntjs.com/api/grunt.file}
         */
        interface FileModule {

            /**
             * Set this property to change the default encoding used by all grunt.file methods.
             * Defaults to 'utf8'.
             *
             * If you do have to change this value, it's recommended that you change
             * it as early as possible inside your Gruntfile.
             */
            defaultEncoding: string

            /**
             * Read and return a file's contents.
             * Returns a string, unless options.encoding is null in which case it returns a Buffer.
             */
            read(filepath: string): string
            read(filepath: string, options: IFileEncodedOption): Buffer

            /**
             * Read a file's contents, parsing the data as JSON and returning the result.
             * @see FileModule.read for a list of supported options.
             */
            readJSON(filepath: string): any
            readJSON(filepath: string, options: IFileEncodedOption): Buffer

            /**
             * Read a file's contents, parsing the data as YAML and returning the result.
             * @see FileModule.read for a list of supported options.
             */
            readYAML(filepath: string): any
            readYAML(filepath: string, options: IFileEncodedOption): Buffer

            /**
             * Write the specified contents to a file, creating intermediate directories if necessary.
             * Strings will be encoded using the specified character encoding, Buffers will be written to disk as-specified.
             *
             * @param contents If `contents` is a Buffer, encoding is ignored.
             * @param options If an encoding is not specified, default to grunt.file.defaultEncoding.
             */
            write(filepath: string, contents: string, options?: IFileEncodedOption): void
            write(filepath: string, contents: Buffer): void

            /**
             * Copy a source file to a destination path, creating intermediate directories if necessary.
             */
            copy(srcpath: string, destpath: string): void
            copy(srcpath: string, destpath: string, options: IFileWriteStringOption): void
            copy(srcpath: string, destpath: string, options: IFileWriteBufferOption): void

            /**
             * Delete the specified filepath. Will delete files and folders recursively.
             *
             * @return true if the files could be deleted, otherwise false.
             */
            delete(filepath: string, options?: { force?: boolean }): boolean

            /**
             * Works like mkdir -p. Create a directory along with any intermediate directories.
             * If mode isn't specified, it defaults to 0777 & (~process.umask()).
             */
            mkdir(dirpath: string, mode?: string): void

            /**
             * Recurse into a directory, executing callback for each file.
             *
             * Callback args:
             * abspath  - The full path to the current file,
             *            which is nothing more than the rootdir + subdir + filename arguments, joined.
             * rootdir  - The root director, as originally specified.
             * subdir   - The current file's directory, relative to rootdir.
             * filename - The filename of the current file, without any directory parts.
             */
            recurse(
                rootdir: string,
                callback: (abspath: string, rootdir: string, subdir: string, filename: string) => void
            ): void

            /**
             * Return a unique array of all file or directory paths that match the given globbing pattern(s).
             * This method accepts either comma separated globbing patterns or an array of globbing patterns.
             * Paths matching patterns that begin with ! will be excluded from the returned array.
             * Patterns are processed in order, so inclusion and exclusion order is significant.
             *
             * File paths are relative to the Gruntfile unless the current working directory is changed with
             * grunt.file.setBase or the --base command-line option.
             */
            expand(patterns: string[]): string[]
            expand(options: IFilesConfig, patterns: string[]): string[]

            /**
             * Returns an array of src-dest file mapping objects.
             * For each source file matched by a specified pattern, join that file path to the specified dest.
             * This file path may be flattened or renamed, depending on the options specified.
             *
             * @see FileModule.expand method documentation for an explanation of how the patterns
             *      and options arguments may be specified.
             */
            expandMapping(patterns: string[], dest: string, options: IExpandedFilesConfig): Array<IFileMap>

            /**
             * Match one or more globbing patterns against one or more file paths.
             * Returns a uniqued array of all file paths that match any of the specified globbing patterns.
             * Both the patterns and filepaths argument can be a single string or array of strings.
             * Paths matching patterns that begin with ! will be excluded from the returned array.
             * Patterns are processed in order, so inclusion and exclusion order is significant.
             */
            match(pattern: string, filepath: string): string[]
            match(pattern: string, filepaths: string[]): string[]
            match(patterns: string[], filepath: string): string[]
            match(patterns: string[], filepaths: string[]): string[]
            match(options: minimatch.IMinimatchOptions, pattern: string, filepath: string): string[]
            match(options: minimatch.IMinimatchOptions, pattern: string, filepaths: string[]): string[]
            match(options: minimatch.IMinimatchOptions, patterns: string[], filepath: string): string[]
            match(options: minimatch.IMinimatchOptions, patterns: string[], filepaths: string[]): string[]

            /**
             * This method contains the same signature and logic as the grunt.file.match method,
             * but simply returns true if any files were matched, otherwise false.
             *
             * @see FileModule.match
             */
            isMatch(pattern: string, filepath: string): boolean
            isMatch(pattern: string, filepaths: string[]): boolean
            isMatch(patterns: string[], filepath: string): boolean
            isMatch(patterns: string[], filepaths: string[]): boolean
            isMatch(options: minimatch.IMinimatchOptions, pattern: string, filepath: string): boolean
            isMatch(options: minimatch.IMinimatchOptions, pattern: string, filepaths: string[]): boolean
            isMatch(options: minimatch.IMinimatchOptions, patterns: string[], filepath: string): boolean
            isMatch(options: minimatch.IMinimatchOptions, patterns: string[], filepaths: string[]): boolean


            /*
             * Like the Node.js path.join method, the methods below will
             * join all arguments together and normalize the resulting path.
             */

            /**
             * Does the given path exist?
             */
            exists(path: string, ...append: string[]): boolean

            /**
             * Is the given path a symbolic link?
             */
            isLink(path: string, ...append: string[]): boolean

            /**
             * Is the given path a symbolic link?
             */
            isDir(path: string, ...append: string[]): boolean

            /**
             * Is the given path a file?
             */
            isFile(path: string, ...append: string[]): boolean

            /**
             * Is a given file path absolute?
             */
            isPathAbsolute(path: string, ...append: string[]): boolean

            /**
             * Do all the specified paths refer to the same path?
             */
            arePathsEquivalent(path: string, ...append: string[]): boolean

            /**
             * Are all descendant path(s) contained within the specified ancestor path?
             */
            doesPathContain(ancestorPath: string, decendantPaths: string[]): boolean

            /**
             * Is a given file path the current working directory (CWD)?
             */
            isPathCwd(path: string, ...append: string[]): boolean

            /**
             * Change grunt's current working directory (CWD).
             * By default, all file paths are relative to the Gruntfile.
             * This works just like the --base command-line option.
             */
            setBase(path: string, ...append: string[]): void

            // External libraries
            // TODO: Create declarations
            glob: any
            minimatch: any
            findup: any
        }

        /**
         * A convenience type.
         *
         * {@link http://gruntjs.com/configuring-tasks#files}
         */
        interface IFilesArray extends Array<IFilesConfig> {}

        /**
         * {@link http://gruntjs.com/configuring-tasks#files}
         */
        interface IFilesConfig extends minimatch.IMinimatchOptions {

            /**
             * Pattern(s) to match, relative to the {@link IExpandedFilesConfig.cwd}.
             */
            src?: string[]

            /**
             * Destination path prefix.
             */
            dest?: string

            /**
             * Process a dynamic src-dest file mapping,
             * @see {@link http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically for more information.
            */
            expand?: boolean // = false

            /**
             * Either a valid fs.Stats method name:
             * - isFile
             * - isDirectory
             * - isBlockDevice
             * - isCharacterDevice
             * - isSymbolicLink
             * - isFIFO
             * - isSocket
             *
             * or a function that is passed the matched src filepath and returns true or false.
             *
             * string
             * (src: string) => boolean
             */
            // filter?: string
            // filter?: (src: string) => boolean
            filter?: any
        }

        /**
         * These are valid for compact-format
         */
        interface IExpandedFilesConfig extends IFilesConfig {

            /**
             * Enables the following options
             */
            expand?: boolean // = true

            /**
             * All {@link IExpandedFilesConfig.src} matches are relative to (but don't include) this path.
             */
            cwd?: boolean

            /**
             * Replace any existing extension with this value in generated {@link IExpandedFilesConfig.dest} paths.
             */
            ext?: string

            /**
             * Remove all path parts from generated {@link IExpandedFilesConfig.dest} paths.
             */
            flatten?: boolean

            /**
             * This function is called for each matched src file, (after extension renaming and flattening).
             * The {@link IExpandedFilesConfig.dest} and matched {@link IExpandedFilesConfig.src} path are passed in,
             * and this function must return a new dest value.
             * If the same dest is returned more than once, each src which used it will be added to an array of sources for it.
             */
            rename?: Function
        }

        /**
         * @see {@link http://gruntjs.com/configuring-tasks#files-array-format}
         */
        interface IFileMap {
            /**
             * source filenames.
             */
            src: string[]
            /**
             * destination filename.
             */
            dest: string
        }
    }

    module log {

        /**
         * Grunt output should look consistent, and maybe even pretty.
         * As such, there is a plethora of logging methods, and a few useful patterns.
         * All of the methods that actually log something are chainable.
         */
        interface CommonLogging<T> {

            /**
             * Log the specified msg string, with no trailing newline.
             */
            write(msg: string): T

            /**
             * Log the specified msg string, with trailing newline.
             */
            writeln(msg: string): T

            /**
             * If msg string is omitted, logs ERROR in red,
             * otherwise logs >> msg, with trailing newline.
             */
            error(msg: string): T

            /**
             * Log an error with grunt.log.error, wrapping text to 80 columns using grunt.log.wraptext.
             */
            errorlns(msg: string): T

            /**
             * If msg string is omitted, logs OK in green, otherwise logs >> msg, with trailing newline.
             */
            ok(msg: string): T

            /**
             * Log an ok message with grunt.log.ok, wrapping text to 80 columns using grunt.log.wraptext.
             */
            oklns(msg: string): T

            /**
             * Log the specified msg string in bold, with trailing newline.
             */
            subhead(msg: string): T

            /**
             * Log a list of obj properties (good for debugging flags).
             */
            writeflags(obj: any): T
        }

        /**
         * @note all methods available under grunt.verbose work exactly like grunt.log methods,
         *       but only log if the --verbose command-line option was specified.
         */
        interface VerboseLogModule extends CommonLogging<VerboseLogModule> {
            or: NotVerboseLogModule
        }

        /**
         * @note all methods available under grunt.verbose work exactly like grunt.log methods,
         *       but only log if the --verbose command-line option was not specified.
         */
        interface NotVerboseLogModule extends CommonLogging<NotVerboseLogModule> {
            or: VerboseLogModule
        }

        /**
         * {@link http://gruntjs.com/api/grunt.log}
         */
        interface LogModule extends CommonLogging<LogModule> {
            verbose: VerboseLogModule
            notverbose: NotVerboseLogModule
        }
    }

    module option {

        /**
         * {@link http://gruntjs.com/api/grunt.option}
         */
        interface OptionModule {

            /**
             * Gets or sets an option.
             * Boolean options can be negated by prepending no- onto the key. For example:
             *
             * grunt.option('staging', false);
             * var isDev = grunt.option('no-staging');
             * assert(isDev === true)
             */
            <T>(key: string, value: T): void
            <T>(key: string): T

            /**
             * Initialize grunt.option.
             * If initObject is omitted option will be initialized to an empty object
             * otherwise will be set to initObject.
             */
            init(initObject?: any): void

            /**
             * Returns the options as an array of command line parameters.
             */
            flags: grunt.IFlag[]
        }

    }

    module task {

        /**
         * {@link http://gruntjs.com/api/grunt.task}
         */
        interface CommonTaskModule {

            /**
             * If a task list is specified, the new task will be an alias for one or more other tasks.
             * Whenever this "alias task" is run, every specified task in taskList will be run, in the order specified.
             * The taskList argument must be an array of tasks.
             */
            registerTask(taskName: string, taskList: string[]): void

            /**
             * If a description and taskFunction are passed, the specified function will be executed
             * whenever the task is run.
             *
             * In addition, the specified description will be shown when grunt --help is run.
             * Task-specific properties and methods are available inside the task function as properties
             * of the this object. The task function can return false to indicate that the task has failed.
             *
             * @note taskFunction.apply(scope: grunt.task.ITask, args: any[])
             */
            registerTask(taskName: string, description: string, taskFunction: Function): void

            /**
             * Register a "multi task." A multi task is a task that implicitly iterates over all of its
             * named sub-properties (AKA targets) if no target was specified.
             * In addition to the default properties and methods, extra multi task-specific properties
             * are available inside the task function as properties of the this object.
             *
             * @note taskFunction.apply(scope: grunt.task.IMultiTask<any>, args: any[])
             */
            registerMultiTask(taskName: string, taskFunction: Function): void
            registerMultiTask(taskName: string, taskDescription: string, taskFunction: Function): void
        }

        /**
         * {@link http://gruntjs.com/api/grunt.task#queueing-tasks}
         */
        interface TaskModule extends CommonTaskModule {
            /**
             * Enqueue one or more tasks.
             * Every specified task in taskList will be run immediately after the current task completes,
             * in the order specified. The task list can be an array of tasks or individual task arguments.
             */
            run(tasks: string[]): void
            run(task: string, ...thenTasks: string[]): void

            /**
             * Empty the task queue completely. Unless additional tasks are enqueued, no more tasks will be run.
             */
            clearQueue(): void

            /**
             * Normalizes a task target configuration object into an array of src-dest file mappings.
             * This method is used internally by the multi task system this.files / grunt.task.current.files property.
             */
            normalizeMultiTaskFiles(data: grunt.config.IProjectConfig, targetname?: string): Array<grunt.file.IFileMap>

            /**
             * The currently running task or multitask.
             * @see http://gruntjs.com/api/inside-tasks
             */
            current: grunt.task.IMultiTask<any>
        }

        interface AsyncResultCatcher {
            /**
             * Either false or an Error object may be passed to the done function
             * to instruct Grunt that the task has failed.
             */
            (success: boolean): void;
            (error: Error): void;
            (result: any): void;
            (): void;
        }

        /**
         * @link http://gruntjs.com/inside-tasks
         *
         * Grunt version 0.4.x
         */
        interface ITask {

            /**
             * If a task is asynchronous, this method must be invoked to instruct Grunt to wait.
             * It returns a handle to a "done" function that should be called when the task has completed.
             *
             *   // Tell Grunt this task is asynchronous.
             *   var done = this.async();
             *   // Your async code.
             *   setTimeout(function() {
             *     // Let's simulate an error, sometimes.
             *     var success = Math.random() > 0.5;
             *     // All done!
             *     done(success);
             *   }, 1000);
             */
            async(): AsyncResultCatcher

            /**
             * If one task depends on the successful completion of another task (or tasks),
             * this method can be used to force Grunt to abort if the other task didn't run,
             * or if the other task failed.
             *
             * @param tasks an array of task names or individual task names, as arguments.
             * @note that this won't actually run the specified task(s),
             * it will just fail the current task if they haven't already run successfully.
             */
            requires(tasks: string[]): void
            requires(tasks: string, ...otherTasks: string[]): void
            requires(tasks: string[], ...otherTasks: string[][]): void

            /**
             * Fail the current task if one or more required config properties is missing.
             * One or more string or array config properties may be specified.
             * this.requiresConfig(prop [, prop [, ...]])
             */
            requiresConfig(prop: string, ...andProps: string[]): void

            /**
             * The name of the task, as defined in grunt.registerTask.
             * For example, if a "sample" task was run as grunt sample or grunt sample:foo,
             * inside the task function, this.name would be "sample".
             */
            name: string

            /**
             * The name of the task, including any colon-separated arguments or flags specified on the command-line.
             * For example, if a "sample" task was run as grunt sample:foo,
             * inside the task function, this.nameArgs would be "sample:foo".
             */
            nameArgs: string

            /**
             * An array of arguments passed to the task.
             * For example, if a "sample" task was run as grunt sample:foo:bar,
             * inside the task function, this.args would be ["foo", "bar"].
             */
            args: string[]

            /**
             * An object generated from the arguments passed to the task.
             * For example, if a "sample" task was run as grunt sample:foo:bar,
             * inside the task function, this.flags would be {foo: true, bar: true}.
             */
            flags: grunt.IFlag[]

            /**
             * The number of grunt.log.error calls that occurred during this task.
             * This can be used to fail a task if errors were logged during the task.
             */
            errorCount: number

            /**
             * Returns an options object.
             * Properties of the optional defaultsObj argument will be overridden by any task-level options
             * object properties, which will be further overridden in multi tasks by any target-level
             * options object properties.
             */
            options(defaultsObj: any): ITaskOptions
            options<T>(defaultsObj: T): T
        }

        /**
         * {@link http://gruntjs.com/inside-tasks#inside-multi-tasks}
         */
        interface IMultiTask<T> extends ITask {
            /**
             * In a multi task, this property contains the name of the target currently being iterated over.
             * For example, if a "sample" multi task was run as grunt sample:foo with the config data
             * {sample: {foo: "bar"}}, inside the task function, this.target would be "foo".
             */
            target: string

            /**
             * In a multi task, all files specified using any Grunt-supported file formats and options,
             * globbing patterns or dynamic mappings will automatically be normalized into a single format:
             * the Files Array file format.
             *
             * What this means is that tasks don't need to contain a ton of boilerplate for explicitly
             * handling custom file formats, globbing patterns, mapping source files to destination files
             * or filtering out files or directories. A task user can just specify files per the Configuring
             * tasks guide, and Grunt will handle all the details.
             *
             * Your task should iterate over the this.files array, utilizing the src and dest properties of
             * each object in that array. The this.files property will always be an array.
             * The src property will also always be an array, in case your task cares about multiple source
             * files per destination file.
             *
             * @note it's possible that nonexistent files might be included in src values,
             *       so you may want to explicitly test that source files exist before using them.
             */
            files: grunt.file.IFilesArray

            /**
             * In a multi task, all src files files specified via any file format are reduced to a single array.
             * If your task is "read only" and doesn't care about destination filepaths,
             * use this array instead of this.files.
             */
            filesSrc: string[]

            /**
             * In a multi task, this is the actual data stored in the Grunt config object for the given target.
             * For example, if a "sample" multi task was run as grunt sample:foo with the config data
             * {sample: {foo: "bar"}}, inside the task function, this.data would be "bar".
             *
             * @note It is recommended that this.options this.files and this.filesSrc are used instead of this.data,
             *       as their values are normalized.
             */
            data: T
        }

        /**
         * {@link http://gruntjs.com/configuring-tasks}
         *
         * A TaskConfig can be either be a full config or a compacted files config.
         * @see ITaskCompactOptions
         */
        interface ITaskOptions {

            options?: any

            // files?: grunt.file.IFilesArray
            // files?: grunt.file.IFilesMap
            files?: any
        }

        /**
         * @see ITaskOptions
         */
        interface ITaskCompactOptions extends grunt.task.ITaskOptions, grunt.file.IFilesConfig {}
    }

    module template {

        interface TemplateModule {

            /**
             * Process a Lo-Dash template string.
             *
             * The template argument will be processed recursively until there are no more templates to process.
             *
             * The default data object is the entire config object, but if options.data is set, that object will
             * be used instead. The default template delimiters are <% %> but if options.delimiters is set to a
             * custom delimiter name, those template delimiters will be used instead.
             *
             * Inside templates, the grunt object is exposed so that you can do things like:
             *     <%= grunt.template.today('yyyy') %>
             *
             * @note if the data object already has a grunt property, the grunt API will not be accessible in templates.
             */
            process(template: string): (options: any) => string
            process(template: string, options: any): string

            /**
             * Set the Lo-Dash template delimiters to a predefined set in case you grunt.util._.template
             * needs to be called manually.
             *
             * The config delimiters <% %> are included by default.
             */
            setDelimiters(name: string): void

            /**
             * Add a named set of Lo-Dash template delimiters.
             *
             * You probably won't need to use this method, because the built-in delimiters should be sufficient,
             * but you could always add {% %} or [% %] style delimiters.
             */
            addDelimiters(name: string, opener: string, closer: string): void

            /**
             * Format a date using the dateformat library.
             * {@link http://github.com/felixge/node-dateformat}
             *
             * @note if you don't include the mask argument, dateFormat.masks.default is used
             */
            date(date?: Date, format?: string): string
            date(date?: number, format?: string): string
            date(date?: string, format?: string): string

            /**
             * Format today's date using the dateformat library using the current date and time.
             * {@link http://github.com/felixge/node-dateformat}
             *
             * @note if you don't include the mask argument, dateFormat.masks.default is used
             */
            today(format?: string): string
        }
    }

    module util {

        /**
         * {@link http://gruntjs.com/api/grunt.util}
         */
        interface UtilModule {

            /**
             * Return the "kind" of a value. Like typeof but returns the internal [Class](Class/) value.
             * Possible results are "number", "string", "boolean", "function", "regexp", "array", "date",
             * "error", "null", "undefined" and the catch-all "object".
             */
            kindOf(value: any): string

            /**
             * Return a new Error instance (that can be thrown) with the appropriate message.
             * If an Error object is specified instead of message that object will be returned.
             * Also, if an Error object is specified for origError and Grunt was run with the --debug 9 option,
             * the original Error stack will be dumped.
             */
            error(message: string, origError?: Error): Error
            error(error: Error, origError?: Error): Error
            error(error: any, origError?: Error): Error

            /**
             * The linefeed character, normalized for the current operating system.
             * (\r\n on Windows, \n otherwise)
             */
            linefeed: string

            /**
             * Given a string, return a new string with all the linefeeds normalized for the current operating system.
             * (\r\n on Windows, \n otherwise)
             */
            normalizelf(str: string): string

            /**
             * Recurse through nested objects and arrays, executing callbackFunction for each non-object value.
             * If continueFunction returns false, a given object or value will be skipped.
             */
            recurse(object: any, callbackFunction: (value: any) => void, continueFunction: (objOrValue: any) => boolean): void

            /**
             * Return string str repeated n times.
             */
            repeat(n: number, str: string): string

            /**
             * Given str of "a/b", If n is 1, return "a" otherwise "b".
             * You can specify a custom separator if '/' doesn't work for you.
             */
            pluralize(n: number, str: string, separator?: string): string

            /**
             * Spawn a child process, keeping track of its stdout, stderr and exit code.
             * The method returns a reference to the spawned child.
             * When the child exits, the done function is called.
             *
             * @param done a function with arguments:
             *        error  - If the exit code was non-zero and a fallback wasn't specified,
             *                 an Error object, otherwise null.
             *        result - The result object is an
             *        code   - The numeric exit code.
             */
            spawn(options: ISpawnOptions, done: (error: Error, result: ISpawnResult, code: number) => void): ISpawnedChild

            /**
             * Given an array or array-like object, return an array.
             * Great for converting arguments objects into arrays.
             */
            toArray<T>(arrayLikeObject: any): T[]

            /**
             * Normalizes both "returns a value" and "passes result to a callback" functions to always
             * pass a result to the specified callback. If the original function returns a value,
             * that value will now be passed to the callback, which is specified as the last argument,
             * after all other predefined arguments. If the original function passed a value to a callback,
             * it will continue to do so.
             */
            callbackify<R>(syncOrAsyncFunction: () => R):
                (callback: (result: R) => void) => void
            callbackify<A, R>(syncOrAsyncFunction: (a: A) => R):
                (a: A, callback: (result: R) => void) => void
            callbackify<A, B, R>(syncOrAsyncFunction: (a: A, b: B) => R):
                (a: A, b: B, callback: (result: R) => void) => void
            callbackify<A, B, C, R>(syncOrAsyncFunction: (a: A, b: B, c: C) => R):
                (a: A, b: B, c: C, callback: (result: R) => void) => void
            callbackify<A, B, C, D, R>(syncOrAsyncFunction: (a: A, b: B, c: C, d: D) => R):
                (a: A, b: B, c: C, d: D, callback: (result: R) => void) => void

            // Internal libraries
            namespace: any
            task: any
        }

        /**
         * {@link http://gruntjs.com/api/grunt.util#grunt.util.spawn}
         */
        interface ISpawnOptions {

            /**
             * The command to execute. It should be in the system path.
             */
            cmd: string

            /**
             * If specified, the same grunt bin that is currently running will be
             * spawned as the child command, instead of the "cmd" option.
             * Defaults to false.
             */
            grunt?: boolean

            /**
             * An array of arguments to pass to the command.
             */
            args?: string[]

            /**
             * Additional options for the Node.js child_process spawn method.
             */
            opts?: {
                cwd?: string
                stdio?: any
                custom?: any
                env?: any
                detached?: boolean
            }

            /**
             * If this value is set and an error occurs, it will be used as the value
             * and null will be passed as the error value.
             */
            fallback?: any
        }

        /**
         * @note When result is coerced to a string, the value is stdout if the exit code
         *       was zero, the fallback if the exit code was non-zero and a fallback was
         *       specified, or stderr if the exit code was non-zero and a fallback was
         *       not specified.
         */
        interface ISpawnResult {
            stdout: string
            stderr: string
            code: number
        }

        /**
         * {@link http://github.com/snbartell/node-spawn}
         */
        interface ISpawnedChild {
            /**
             * Start the cmd with the options provided.
             */
            start(): void

            /**
             * Convenience function. Overrides options. restarts to 0.
             * Runs command exactly once no matter the options passed into the constructor.
             */
            once(): void

            /**
             * Convenience function. Overrides options.restarts to -1.
             * Runs command indefinitely no matter the options passed into the constructor.
             */
            forever(): void

            /**
             * Shut down the child and don't let it restart.
             */
            kill(): void
        }
    }

    /*
     * Common interfaces
     */

    interface IFlag {
        [flag: string]: boolean
    }

    /*
     * Grunt module mixins.
     */

    interface IConfigComponents extends grunt.config.ConfigModule {
        /**
         * An alias
         * @see grunt.config.ConfigModule.init
         */
        initConfig(config: grunt.config.IProjectConfig): void
    }

    interface ITaskComponents extends grunt.task.CommonTaskModule {
        /**
         * Load task-related files from the specified directory, relative to the Gruntfile.
         * This method can be used to load task-related files from a local Grunt plugin by
         * specifying the path to that plugin's "tasks" subdirectory.
         */
        loadTasks(tasksPath: string): void

        /**
         * Load tasks from the specified Grunt plugin.
         * This plugin must be installed locally via npm, and must be relative to the Gruntfile.
         * Grunt plugins can be created by using the grunt-init gruntplugin template: grunt init:gruntplugin.
         */
        loadNpmTasks(pluginName: string): void
    }
}

/* GRUNT MODULE
 **************/

/**
 * The main Grunt module.
 *
 * {@link http://gruntjs.com/api/grunt}
 */
interface IGrunt extends grunt.IConfigComponents, grunt.fail.FailModule, grunt.ITaskComponents {

    config: grunt.config.ConfigModule

    event: grunt.event.EventModule

    fail: grunt.fail.FailModule

    file: grunt.file.FileModule

    log: grunt.log.LogModule

    option: grunt.option.OptionModule

    task: grunt.task.TaskModule

    template: grunt.template.TemplateModule

    util: grunt.util.UtilModule

    /**
     * The current Grunt package.json metadata, as an object.
     */
    package: node.NodePackage

    /**
     * The current Grunt version, as a string. This is just a shortcut to the grunt.package.version property.
     */
    version: string
}

// NodeJS Support
declare module 'grunt' {
    var grunt: IGrunt;
    export = grunt;
}
