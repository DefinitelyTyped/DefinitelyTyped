// Type definitions for gulp-cheerio
// Project: https://github.com/KenPowers/gulp-cheerio
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../cheerio/cheerio.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../vinyl/vinyl.d.ts"/>

declare module "gulp-cheerio" {
    import Vinyl = require('vinyl');

    namespace cheerio {
        interface Cheerio {
            (callback: Callback): NodeJS.ReadWriteStream;
            (option: Option): NodeJS.ReadWriteStream;
        }

        interface Callback {
            ($: CheerioStatic, file: Vinyl, done?: Function): any;
        }

        interface Option {
            run?: Callback;
            parserOptions?: CheerioOptionsInterface;
            cheerio?: CheerioStatic;
        }
    }

    var cheerio: cheerio.Cheerio;

    export = cheerio;
}

