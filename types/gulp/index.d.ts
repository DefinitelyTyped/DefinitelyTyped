// Type definitions for Gulp 4.0
// Project: http://gulpjs.com
// Definitions by: Drew Noakes <https://drewnoakes.com>
//                 Juan Arroyave <http://jarroyave.co>
//                 Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as vfs from "vinyl-fs";
import * as chokidar from "chokidar";
import * as Undertaker from "undertaker";
import * as fs from "fs";
import { Duplex } from "stream";

declare namespace GulpClient {
    type Globs = string | string[];

    type TasksArray<T> = Array<string | TaskFunction | T>;
    type Task = TasksArray<TasksArray<any>> | string | TaskFunction;

    interface Options extends vfs.SrcOptions {
        /**
         * When true, will allow singular globs to fail to match. Otherwise, globs which are only supposed to match one
         * file (such as ./foo/bar.js) will cause an error to be thrown if they don't match.
         * @default false
         */
        allowEmpty?: boolean;
    }

    interface DestOptions {
        /**
         * cwd for the output folder, only has an effect if provided output folder is relative.
         * @default process.cwd()
         */
        cwd: string;

        /**
         * Octal permission specifying the mode the files should be created with: e.g. "0744", 0744 or 484 (0744 in base 10).
         * @default The mode of the input file (file.stat.mode) or the process mode if the input file has no mode property.
         */
        mode: string | number;

        /**
         * Octal permission specifying the mode the directory should be created with: e.g. "0755", 0755 or 493 (0755 in base 10).
         * Default is the process mode.
         */
        dirMode: string | number;

        /**
         * Specify if existing files with the same path should be overwritten or not.
         * @default true
         */
        overwrite: boolean;
    }

    interface SymlinkOptions {
        /**
         * cwd for the output folder, only has an effect if provided output folder is relative.
         * process.cwd()
         */
        cwd: string;

        /**
         * Octal permission specifying the mode the directory should be created with: e.g. "0755", 0755 or 493 (0755 in base 10).
         * @default Default is the process mode.
         */
        dirMode: string;
    }

    interface TaskFunctionParams {
        name?: string;
        displayName?: string;
        description?: string;
    }

    interface TaskFunction extends TaskFunctionParams {
        (done?: () => void): void | Duplex | NodeJS.Process | any;
    }

    interface Gulp {
        /**
         * Emits files matching provided glob or array of globs. Returns a stream of Vinyl files that can be piped to plugins.
         * @param globs Glob or array of globs to read.
         * @param options Options to pass to node-glob through glob-stream.
         */
        src(globs: Globs, options?: Options): Duplex;

        /**
         * Can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders.
         * Folders that don't exist will be created.
         * @param path The path (output folder) to write files to. Or a function that returns it, the function will be provided a vinyl File instance.
         * @param options
         */
        dest(path: string, options?: DestOptions): Duplex;

        /**
         * Functions exactly like gulp.dest, but will create symlinks instead of copying a directory.
         * @param folder A folder path or a function that receives in a file and returns a folder path.
         * @param options
         */
        symlink(folder: string | (() => string), options?: SymlinkOptions): Duplex;

        /**
         * Define a task exposed to gulp-cli, gulp.series, gulp.parallel and gulp.lastRun; inherited from undertaker.
         * @param name The name argument is required if the name and displayName properties of fn are empty.
         * @param dependencies The gulp tasks to run before starting this one.
         * @param fn The function that performs the task's operations.
         */
        task(fn: TaskFunction): TaskFunction;
        task(name: string): TaskFunction;
        task(name: string, tasks: string[]): TaskFunction;
        task(name: string, fn: TaskFunction): TaskFunction;
        task(name: string, dependencies: string[], fn: TaskFunction): TaskFunction;

        /**
         * Returns the timestamp of the last time the task ran successfully. The time will be the time the task started.
         * Returns undefined if the task has not run yet.
         * @param taskName The name of the registered task or of a function
         * @param timeResolution Set the time resolution of the returned timestamps.
         */
        lastRun(taskName: string, timeResolution?: number): number;

        /**
         * Takes a number of task names or functions and returns a function of the composed tasks or functions.
         * When using task names, the task should already be registered.
         * When the returned function is executed, the tasks or functions will be executed in parallel, all being executed at the same
         * time. If an error occurs, all execution will complete.
         */
        parallel(task: Task): TaskFunction;
        parallel(...tasks: Task[]): TaskFunction;
        parallel(tasks: Task[]): TaskFunction;

        /**
         * Takes a number of task names or functions and returns a function of the composed tasks or functions.
         * When using task names, the task should already be registered.
         * When the returned function is executed, the tasks or functions will be executed in series, each waiting for the prior to finish.
         * If an error occurs, execution will stop.
         */
        series(task: Task): TaskFunction;
        series(...tasks: Task[]): TaskFunction;
        series(tasks: Task[]): TaskFunction;

        /**
         * akes a path string, an array of path strings, a glob string or an array of glob strings as globs to watch on the filesystem.
         * Also optionally takes options to configure the watcher and a fn to execute when a file changes.
         * @globs A path string, an array of path strings, a glob string or an array of glob strings that indicate which files to watch for changes.
         * @opts Options that are passed to chokidar.
         * @fn Once async completion is signalled, if another run is queued, it will be executed.
         */
        watch(globs: Globs): fs.FSWatcher;
        watch(globs: Globs, fn: TaskFunction): fs.FSWatcher;
        watch(globs: Globs, opts: WatchOptions): fs.FSWatcher;
        watch(globs: Globs, opts: WatchOptions, fn: TaskFunction): fs.FSWatcher;

        /**
         * Returns the tree of tasks. Inherited from undertaker. See the undertaker docs for this function.
         * @param options Options to pass to undertaker.
         */
        tree(options?: TreeOptions): any;

        registry(registry?: Undertaker.Registry): Undertaker.Registry;
    }

    interface TreeOptions {
        /**
         * If set to true whole tree should be returned.
         * @default false
         */
        deep?: boolean;
    }

    interface WatchOptions extends chokidar.WatchOptions {
        /**
         * The delay to wait before triggering the fn.
         * Useful for waiting on many changes before doing the work on changed files, e.g. find-and-replace on many files.
         * @default 200
         */
        delay?: number;
        /**
         * Whether or not a file change should queue the fn execution if the fn is already running. Useful for a long running fn.
         * @default true
         */
        queue?: boolean;

        /**
         * If set to false the fn is called during chokidar instantiation as it discovers the file paths.
         * Useful if it is desirable to trigger the fn during startup. Passed through to chokidar, but defaulted to true instead of false.
         * @default true
         */
        ignoreInitial?: boolean;

        /**
         * Defines files/paths to be excluded from being watched.
         */
        ignored?: any;

        /**
         * The base directory from which watch paths are to be derived. Paths emitted with events will be relative to this.
         */
        cwd?: string;

        /**
         * If relying upon the fs.Stats object that may get passed as a second argument with add, addDir, and change events when available,
         * set this to true to ensure it is provided with every event. May have a slight performance penalty.
         * @default false
         */
        alwaysStat?: boolean;
    }
}

declare var GulpClient: GulpClient.Gulp;
export = GulpClient;
