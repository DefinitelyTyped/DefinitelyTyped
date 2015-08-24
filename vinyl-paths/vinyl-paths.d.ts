// Type definitions for vinyl-paths
// Project: https://github.com/sindresorhus/vinyl-paths
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "vinyl-paths" {

    namespace paths {
        interface Paths extends NodeJS.ReadWriteStream {
            paths: string[];
        }

        interface PathsStatic {
            /**
             * Use the file paths from a gulp pipeline in vanilla node module
             * @param callback The optionally supplied callback will get a file path for every file and is expected
             * to call the callback when done. An array of the file paths so far is available as a paths property
             * on the stream.
             */
            (callback?: Callback): Paths;
        }

        interface Callback {
            //TODO: Function is gulp.ITaskCallback, which is currently invisible
            (path: string, callback: Function): any;
        }
    }

    var paths: paths.PathsStatic;
    export = paths;
}

