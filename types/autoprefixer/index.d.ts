// Type definitions for autoprefixer 9.7
// Project: https://github.com/postcss/autoprefixer
// Definitions by: Armando Meziat <https://github.com/odnamrataizem>
//                 murt <https://github.com/murt>
//                 Slava Fomin II <https://github.com/slavafomin>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Plugin } from 'postcss';
import { Stats } from 'browserslist';

declare namespace autoprefixer {
    type BrowserslistTarget = string | string[] | { [key: string]: string[] };

    interface Options {
        /** environment for `Browserslist` */
        env?: string;
        /** should Autoprefixer use Visual Cascade, if CSS is uncompressed */
        cascade?: boolean;
        /** should Autoprefixer add prefixes. */
        add?: boolean;
        /** should Autoprefixer [remove outdated] prefixes */
        remove?: boolean;
        /** should Autoprefixer add prefixes for @supports parameters. */
        supports?: boolean;
        /** should Autoprefixer add prefixes for flexbox properties */
        flexbox?: boolean | 'no-2009';
        /** should Autoprefixer add IE 10-11 prefixes for Grid Layout properties */
        grid?: false | 'autoplace' | 'no-autoplace';
        /** custom usage statistics for > 10% in my stats browsers query */
        stats?: Stats;
        /** @deprecated Replace Autoprefixer `browsers` option to `Browserslist` config */
        browsers?: string[] | string;
        /** list of queries for target browsers */
        overrideBrowserslist?: BrowserslistTarget;
        /** do not raise error on unknown browser version in `Browserslist` config. */
        ignoreUnknownVersions?: boolean;
    }

    interface ExportedAPI {
        /** Autoprefixer data */
        data: {
            browsers: any;
            prefixes: any;
        };
        /** Autoprefixer default browsers */
        defaults: any;
        /** Inspect with default Autoprefixer */
        info(): void;
    }

    type Autoprefixer = Plugin<Options> & ExportedAPI;
}

declare const autoprefixer: autoprefixer.Autoprefixer;
export = autoprefixer;
