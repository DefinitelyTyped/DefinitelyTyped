/// <reference types="cheerio" />
/// <reference types="node" />
/// <reference types="vinyl" />

import Vinyl = require("vinyl");
import cheerio = require("cheerio");

declare namespace gulpCheerio {
    interface GulpCheerio {
        (callback: Callback): NodeJS.ReadWriteStream;
        (option: Option): NodeJS.ReadWriteStream;
    }

    interface Callback {
        ($: cheerio.Root, file: Vinyl, done?: Function): any;
    }

    interface Option {
        run?: Callback | undefined;
        parserOptions?: cheerio.CheerioParserOptions | undefined;
        cheerio?: cheerio.Root | undefined;
    }
}

declare var gulpCheerio: gulpCheerio.GulpCheerio;

export = gulpCheerio;
