// Type definitions for findup-sync v0.3.0
// Project: https://github.com/cowboy/node-findup-sync
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Nathan Brown <https://github.com/ngbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import minimatch = require('minimatch');

interface IOptions extends minimatch.IOptions {
    cwd?: string;
}

declare function mod(pattern: string[] | string, opts?: IOptions): string;

export = mod;
