/// <reference types="node" />

import { Options as PugOptions } from "pug";
import { Transform } from "stream";

declare function gulpPugI18n(options: gulpPugI18n.Options): Transform;

declare namespace gulpPugI18n {
    interface Options extends PugOptions {
        data?: any;
        i18n: {
            default?: string | undefined;
            filename?: string | undefined;
            locales: string | ReadonlyArray<string>;
            namespace?: string | null | undefined;
        };
    }
}

export = gulpPugI18n;
