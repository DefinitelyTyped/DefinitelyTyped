/// <reference types="node" />

import HTMLMinifier = require("html-minifier");

declare namespace htmlmin {
}

declare function htmlmin(options?: HTMLMinifier.Options): NodeJS.ReadWriteStream;

export = htmlmin;
