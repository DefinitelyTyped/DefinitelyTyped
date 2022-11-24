// Type definitions for unbzip2-stream 1.4
// Project: https://github.com/regular/unbzip2-stream
// Definitions by: Andrew Plummer <https://github.com/plumdog>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import through = require('through');

declare function bz2(): through.ThroughStream;

export = bz2;
