// Type definitions for vinyl-named 1.1
// Project: https://github.com/shama/vinyl-named
// Definitions by: Maiko Tan <https://github.com/MaikoTant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import File = require('vinyl');
import Through = require('through');

declare module "vinyl" {
    interface File {
        named?: string;
    }
}

type Callback = (
    this: Through.ThroughStream,
    /** A vinyl file object */
    file: File
) => string | null | undefined | void;

/**
 * Give vinyl files arbitrary chunk names.
 *
 * @param opt A callback that returns a name of the given file
 */
declare function named(opt?: Callback): Through.ThroughStream;

export = named;
