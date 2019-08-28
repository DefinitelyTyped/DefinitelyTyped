// Type definitions for autoprefixer 9.6
// Project: https://github.com/postcss/autoprefixer
// Definitions by: Armando Meziat <https://github.com/odnamrataizem>
//                 murt <https://github.com/murt>
//                 Slava Fomin II <https://github.com/slavafomin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Plugin } from 'postcss';
import { Stats } from 'browserslist';

declare namespace autoprefixer {
    type BrowserslistTarget = (string | string[] | { [key: string]: string[]; });

    interface Options {
        env?: string;
        cascade?: boolean;
        add?: boolean;
        remove?: boolean;
        supports?: boolean;
        flexbox?: boolean | 'no-2009';
        grid?: false | 'autoplace' | 'no-autoplace';
        stats?: Stats;
        browsers?: string[] | string;
        overrideBrowserslist?: BrowserslistTarget;
        ignoreUnknownVersions?: boolean;
    }

    type Autoprefixer = Plugin<Options>;
}

declare const autoprefixer: autoprefixer.Autoprefixer;
export = autoprefixer;
