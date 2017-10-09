// Type definitions for youtube-dl 1.12
// Project: https://www.npmjs.com/package/youtube-dl
// Definitions by: Bogdan Surai <https://github.com/bsurai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import 'node';
import * as fs from "fs";

type callback = (info: object) => void;

interface Youtubedl {
    (url: string, arg: string[], opt: {[key: string]: string}): this;
    on(event: string, func: callback): this;
    pipe(stream: fs.WriteStream): this;
}

export = Youtubedl;
