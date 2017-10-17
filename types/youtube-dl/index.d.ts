// Type definitions for youtube-dl 1.12
// Project: https://www.npmjs.com/package/youtube-dl
// Definitions by: Bogdan Surai <https://github.com/bsurai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />
import * as fs from "fs";

interface Info {
    _filename: string;
    filename: string;
    size: number;
}

interface Youtubedl {
    (url: string, arg: string[], opt: {[key: string]: string}): this;
    on(event: string, func: (info: Info) => void): this;
    pipe(stream: fs.WriteStream): this;
}

declare var youtubedl: Youtubedl;
export = youtubedl;
