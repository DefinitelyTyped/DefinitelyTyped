/// <reference types="node"/>

import gulpMatch = require("gulp-match");
import minimatch = require("minimatch");

/**
 * gulp-if will pipe data to stream whenever condition is truthy.
 * If condition is falsey and elseStream is passed, data will pipe to elseStream
 * After data is piped to stream or elseStream or neither, data is piped down-stream.
 *
 * @param condition whether input should be piped to stream
 * @param stream the stream to pipe to if condition is true
 * @param elseStream (optional) the stream to pipe to if condition is false
 * @param minimatchOptions (optional) the minimatch options when matching glob conditions
 */
declare function gulpIf(
    condition: gulpMatch.MatchCondition,
    stream: NodeJS.ReadWriteStream,
    elseStream?: NodeJS.ReadWriteStream,
    minimatchOptions?: minimatch.IOptions,
): NodeJS.ReadWriteStream;

export = gulpIf;
