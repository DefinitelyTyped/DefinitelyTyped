import * as chokidar from "chokidar";
import * as fs from "fs";
import { Duplex } from "stream";
import * as Undertaker from "undertaker";
import * as vfs from "vinyl-fs";

declare namespace GulpClient {
    type Globs = string | string[];

    type TaskFunction = Undertaker.TaskFunction;

    /**
     * @deprecated - Now use `TaskFunction`.
     */
    type TaskCallback = TaskFunction;

    type TaskFunctionCallback = Undertaker.TaskCallback;

    interface Gulp extends Undertaker {
        /**
         * Emits files matching provided glob or array of globs. Returns a stream of Vinyl files that can be piped to plugins.
         * @param globs Glob or array of globs to read.
         * @param options Options to pass to node-glob through glob-stream.
         */
        src: SrcMethod;

        /**
         * Can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders.
         * Folders that don't exist will be created.
         * @param path The path (output folder) to write files to. Or a function that returns it, the function will be provided a vinyl File instance.
         */
        dest: DestMethod;

        /**
         * Functions exactly like gulp.dest, but will create symlinks instead of copying a directory.
         * @param folder A folder path or a function that receives in a file and returns a folder path.
         */
        symlink: typeof vfs.symlink;

        /**
         * Takes a path string, an array of path strings, a glob string or an array of glob strings as globs to watch on the filesystem.
         * Also optionally takes options to configure the watcher and a fn to execute when a file changes.
         * @param globs A path string, an array of path strings, a glob string or an array of glob strings that indicate which files to watch for changes.
         * @param opts Options that are passed to chokidar.
         * @param fn Once async completion is signalled, if another run is queued, it will be executed.
         */
        watch: WatchMethod;
    }

    interface WatchOptions extends chokidar.WatchOptions {
        /**
         * The delay to wait before triggering the fn.
         * Useful for waiting on many changes before doing the work on changed files, e.g. find-and-replace on many files.
         * @default 200
         */
        delay?: number | undefined;
        /**
         * Whether or not a file change should queue the fn execution if the fn is already running. Useful for a long running fn.
         * @default true
         */
        queue?: boolean | undefined;
        /**
         * An event name or array of event names to listen for. Useful if you only need to watch specific events.
         * @example
         *   gulp.watch is imported from glob-watcher (see https://github.com/gulpjs/gulp/blob/v4.0.2/index.js lines 6, 28 and 48)
         *   gulp use glob-watcher@^5.0.3 (see https://github.com/gulpjs/gulp/blob/v4.0.2/package.json#L33)
         *   glob-watcher declare publicly options.events (see https://github.com/gulpjs/glob-watcher/blob/v5.0.3/README.md?plain=1#L101)
         * @default ['add','change','unlink']
         */
        events?: string | string[];
    }

    interface WatchMethod {
        (globs: Globs, fn?: Undertaker.TaskFunction): fs.FSWatcher;
        (globs: Globs, opts?: WatchOptions, fn?: Undertaker.TaskFunction): fs.FSWatcher;
    }

    type SrcMethod = typeof vfs.src;

    type DestMethod = typeof vfs.dest;
}

declare const GulpClient: GulpClient.Gulp;
export = GulpClient;
