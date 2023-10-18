/// <reference types="node" />

import { Transform } from "stream";

declare function gulpJsonmin(options?: gulpJsonmin.Options): Transform;

declare namespace gulpJsonmin {
    interface Options {
        verbose?: boolean | undefined;
    }
}

export = gulpJsonmin;
