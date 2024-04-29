/// <reference types="node" />

import * as HTMLMinifier from "html-minifier";

declare namespace htmlmin {
}

declare function htmlmin(options?: HTMLMinifier.Options): NodeJS.ReadWriteStream;

export = htmlmin;
