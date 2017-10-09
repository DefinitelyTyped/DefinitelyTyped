// Type definitions for youtube-dl 1.12
// Project: https://www.npmjs.com/package/youtube-dl
// Definitions by: Bogdan Surai <https://github.com/bsurai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as fs from "fs";

type callback = (info: object) => void;
type onMethod = (event: string, func: callback) => Youtubedl;
type pipeMethod = (stream: fs.WriteStream) => Youtubedl;

interface Youtubedl {
    (url: string, arg: Array<string>, opt: {[key: string]: string}): this;
    on: onMethod;
    pipe: pipeMethod;
}

export = {} as Youtubedl;
