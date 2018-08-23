// Type definitions for gulp-pug-i18n 1.0
// Project: https://github.com/dogancelik/gulp-pug-i18n
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Options as PugOptions } from 'pug';
import { Transform } from 'stream';

declare function GulpPugI18n(options: GulpPugI18n.Options): Transform;

declare namespace GulpPugI18n {
    interface Options extends PugOptions {
        data?: any;
        i18n: {
            default?: string;
            filename?: string;
            locales: string | string[];
            namespace?: string | null;
        };
    }
}

export = GulpPugI18n;
