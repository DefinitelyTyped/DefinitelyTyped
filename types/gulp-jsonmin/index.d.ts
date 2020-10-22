// Type definitions for gulp-jsonmin 1.1
// Project: https://github.com/englercj/gulp-jsonmin
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from 'stream';

declare function gulpJsonmin(options?: gulpJsonmin.Options): Transform;

declare namespace gulpJsonmin {
    interface Options {
        verbose?: boolean;
    }
}

export = gulpJsonmin;
