// Type definitions for mkdirp-promise 5.0
// Project: https://github.com/ahmadnassri/mkdirp-promise
// Definitions by: Alan Plum <https://github.com/pluma>
//                 Niels Dequeker <https://github.com/voles>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import mkdirp = require("mkdirp");

declare function mkdirpPromise(
    path: string,
    opts?: mkdirp.Mode | mkdirp.Options
): Promise<mkdirp.Made>;

declare namespace mkdirpPromise {}

export = mkdirpPromise;
