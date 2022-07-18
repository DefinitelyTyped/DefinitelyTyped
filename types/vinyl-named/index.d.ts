// Type definitions for vinyl-named 1.1
// Project: https://github.com/shama/vinyl-named
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import File = require('vinyl');
import Through = require('through');

type Callback = (
    this: Through.ThroughStream,
    /** A vinyl file object */
    file: File & { named: string }
) => string | null | undefined | void;

/**
 * Give vinyl files arbitrary chunk names.
 *
 * @param opt A callback that returns a name of the given file
 */
declare function named(opt?: Callback): Through.ThroughStream;

export = named;
