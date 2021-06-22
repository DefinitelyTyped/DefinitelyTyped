// Type definitions for gulp-cheerio
// Project: https://github.com/KenPowers/gulp-cheerio
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="cheerio" />
/// <reference types="node" />
/// <reference types="vinyl" />

import Vinyl = require('vinyl');
import cheerio = require('cheerio');

declare namespace gulpCheerio {
    interface GulpCheerio {
        (callback: Callback): NodeJS.ReadWriteStream;
        (option: Option): NodeJS.ReadWriteStream;
    }

    interface Callback {
        ($: cheerio.Root, file: Vinyl, done?: Function): any;
    }

    interface Option {
        run?: Callback;
        parserOptions?: cheerio.CheerioParserOptions;
        cheerio?: cheerio.Root;
    }
}

declare var gulpCheerio: gulpCheerio.GulpCheerio;

export = gulpCheerio;
