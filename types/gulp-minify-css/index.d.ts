/// <reference types="node" />

import CleanCSS = require("clean-css");

declare function minifyCSS(options?: CleanCSS.Options): NodeJS.ReadWriteStream;

declare namespace minifyCSS {}

export = minifyCSS;
