/// <reference types="node" />

import * as CleanCSS from "clean-css";

declare function minifyCSS(options?: CleanCSS.Options): NodeJS.ReadWriteStream;

declare namespace minifyCSS {}

export = minifyCSS;
