// Type definitions for unzip 0.1
// Project: https://github.com/EvanOxfeld/node-unzip
// Definitions by: Ravi L. <https://github.com/coding2012>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import stream = require('stream');

export function Extract(options: { path: string }): NodeJS.WritableStream;
export function Parse(): NodeJS.WritableStream;

/**
 * Code example from https://www.npmjs.com/package/unzip with type unzip.Entry added
 * ```
 * fs.createReadStream('path/to/archive.zip')
 *  .pipe(unzip.Parse())
 *  .on('entry', function (entry: unzip.Entry) {
 *    var fileName = entry.path;
 *    var type = entry.type; // 'Directory' or 'File'
 *    var size = entry.size;
 *    if (fileName === "this IS the file I'm looking for") {
 *      entry.pipe(fs.createWriteStream('output/path'));
 *    } else {
 *      entry.autodrain();
 *    }
 *  });
 * ```
 */
export interface Entry extends stream.PassThrough {
    path: string;
    type: 'Directory' | 'File';
    size: number;
    autodrain: () => void;
}
