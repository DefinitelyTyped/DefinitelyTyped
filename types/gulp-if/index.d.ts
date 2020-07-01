// Type definitions for gulp-if
// Project: https://github.com/robrich/gulp-if
// Definitions by: Asana <https://asana.com>, Joe Skeen <https://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
/// <reference types="vinyl" />

import fs = require('fs');
import vinyl = require('vinyl');

interface GulpIf {
    /** 
     * gulp-if will pipe data to stream whenever condition is truthy.
     * If condition is falsey and elseStream is passed, data will pipe to elseStream
     * After data is piped to stream or elseStream or neither, data is piped down-stream.
     * 
     * @param condition whether input should be piped to stream
     * @param stream the stream to pipe to if condition is true
     * @param elseStream (optional) the stream to pipe to if condition is false 
     */
    (condition: boolean, stream: NodeJS.ReadWriteStream, elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream;
    /** 
     * gulp-if will pipe data to stream whenever condition is truthy.
     * If condition is falsey and elseStream is passed, data will pipe to elseStream
     * After data is piped to stream or elseStream or neither, data is piped down-stream.
     * 
     * @param condition a Node Stat filter condition to be executed on the vinyl file's Stats object
     * @param stream the stream to pipe to if condition is true
     * @param elseStream (optional) the stream to pipe to if condition is false 
     */
    (condition: StatFilterCondition, stream: NodeJS.ReadWriteStream, elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream;
    /** 
     * gulp-if will pipe data to stream whenever condition is truthy.
     * If condition is falsey and elseStream is passed, data will pipe to elseStream
     * After data is piped to stream or elseStream or neither, data is piped down-stream.
     * 
     * @param condition a function taking a vinyl file and returning a boolean
     * @param stream the stream to pipe to if condition is true
     * @param elseStream (optional) the stream to pipe to if condition is false 
     */
    (condition: (fs: vinyl) => boolean, stream: NodeJS.ReadWriteStream, elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream;
    /** 
     * gulp-if will pipe data to stream whenever condition is truthy.
     * If condition is falsey and elseStream is passed, data will pipe to elseStream
     * After data is piped to stream or elseStream or neither, data is piped down-stream.
     * 
     * @param condition a RegularExpression that works on the file.path
     * @param stream the stream to pipe to if condition is true
     * @param elseStream (optional) the stream to pipe to if condition is false 
     */
    (condition: RegExp, stream: NodeJS.ReadWriteStream, elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream;
}

interface StatFilterCondition {
    isDirectory?: boolean;
    isFile?: boolean;
}

declare var gulpIf: GulpIf;

export = gulpIf;
