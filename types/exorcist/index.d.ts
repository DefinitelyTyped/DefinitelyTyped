// Type definitions for exorcist 2.0
// Project: https://github.com/thlorenz/exorcist
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Writable } from "stream";
import { ThroughStream } from "through";

export = exorcist;

/**
 * Externalizes the source map of the file streamed in.
 *
 * The source map is written as JSON to `input`, and the original file is streamed out with its
 * `sourceMappingURL` set to the path of `input` (or to the value of `url`).
 *
 * @param input file path or writable stream where the source map will be written
 * @param url full URL to the map file, set as `sourceMappingURL` in the streaming output (default: `input`)
 * @param root root URL for loading relative source paths, set as `sourceRoot` in the source map (default: "")
 * @param base base path for calculating relative source paths (default: use absolute paths)
 * @param errorOnMissing when truthy, causes `"error"` to be emitted instead of `"missing-map"` if no map was found in the stream (default: falsy)
 * @returns transform stream into which to pipe the code containing the source map
 *
 * @example
 * import browserify = require("browserify");
 * import * as path from "path";
 * import * as fs from "fs";
 * import exorcist = require("exorcist");
 *
 * const mapfile = path.join(__dirname, "bundle.js.map");
 *
 * // from a file, to a file, and send source map to its own file
 * browserify({ debug: true })
 *     .require(require.resolve("./main"), { entry: true })
 *     .bundle()
 *     .pipe(exorcist(mapfile))
 *     .pipe(fs.createWriteStream(path.join(__dirname, "bundle.js"), "utf8"));
 *
 * // from a stream, to a stream, and send source map to a stream
 * browserify([readableSourceStream], browserifyOptions)
 *     .bundle()
 *     .pipe(exorcist(targetSourceMapStream, "/url/path/to/replace/source/comment/with/bundle.js"))
 *     .pipe(writableTargetStream);
 */
declare function exorcist(
    input: string,
    url?: string | null,
    root?: string | null,
    base?: string | null,
    errorOnMissing?: boolean | null,
): exorcist.Stream;
declare function exorcist(
    input: Writable,
    url: string,
    root?: string | null,
    base?: string | null,
    errorOnMissing?: boolean | null,
): exorcist.Stream;

declare namespace exorcist {
    type Stream = ThroughStream & {
        /**
         * `missing-map` emitted if no map was found in the stream and `errorOnMissing` is falsy
         * (the src is still piped through in this case, but no map file is written).
         */
        addListener(event: "missing-map", listener: (missingMapMessage: string) => void): Stream;
        /**
         * `missing-map` emitted if no map was found in the stream and `errorOnMissing` is falsy
         * (the src is still piped through in this case, but no map file is written).
         */
        on(event: "missing-map", listener: (missingMapMessage: string) => void): Stream;
        /**
         * `missing-map` emitted if no map was found in the stream and `errorOnMissing` is falsy
         * (the src is still piped through in this case, but no map file is written).
         */
        once(event: "missing-map", listener: (missingMapMessage: string) => void): Stream;
        removeListener(event: "missing-map", listener: (missingMapMessage: string) => void): Stream;
        off(event: "missing-map", listener: (missingMapMessage: string) => void): Stream;
        listeners(event: "missing-map"): Array<(missingMapMessage: string) => void>;
        rawListeners(event: "missing-map"): Array<(missingMapMessage: string) => void>;
        emit(event: "missing-map", missingMapMessage: string): boolean;
        prependListener(event: "missing-map", listener: (missingMapMessage: string) => void): Stream;
        prependOnceListener(event: "missing-map", listener: (missingMapMessage: string) => void): Stream;
    };
}
