/// <reference types="node" />

import File = require("vinyl");
import * as Minimatch from "minimatch";

declare namespace filter {
    interface FileFunction {
        (file: File): boolean;
    }

    interface Options extends Minimatch.IOptions {
        restore?: boolean | undefined;
        passthrough?: boolean | undefined;
    }

    // A transform stream with a .restore object
    interface Filter extends NodeJS.ReadWriteStream {
        restore: NodeJS.ReadWriteStream;
    }
}

declare function filter(pattern: string | string[] | filter.FileFunction, options?: filter.Options): filter.Filter;

export = filter;
