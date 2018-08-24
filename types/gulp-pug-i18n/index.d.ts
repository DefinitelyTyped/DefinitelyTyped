// Type definitions for gulp-pug-i18n 1.0
// Project: https://github.com/dogancelik/gulp-pug-i18n
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Options as PugOptions } from 'pug';
import { Transform } from 'stream';

declare function gulpPugI18n(options: gulpPugI18n.Options): Transform;

declare namespace gulpPugI18n {
    interface Options extends PugOptions {
        data?: any;
        i18n: {
            default?: string;
            filename?: string;
            locales: string | ReadonlyArray<string>;
            namespace?: string | null;
        };
    }
}

export = gulpPugI18n;
