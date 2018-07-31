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

    type TaskFunction = Undertaker.TaskFunction;

    /**
     * @deprecated - Now use `TaskFunction`.
     */
    type TaskCallback = TaskFunction;

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
         * @globs A path string, an array of path strings, a glob string or an array of glob strings that indicate which files to watch for changes.
         * @opts Options that are passed to chokidar.
         * @fn Once async completion is signalled, if another run is queued, it will be executed.
         */
        watch: WatchMethod;
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
