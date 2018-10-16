// Type definitions for autoprefixer 9.1
// Project: https://github.com/postcss/autoprefixer
// Definitions by:  Armando Meziat <https://github.com/odnamrataizem>, murt <https://github.com/murt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from "postcss";

declare namespace autoprefixer {
    interface Options {
        browsers?: string[] | string;
        env?: string;
        cascade?: boolean;
        add?: boolean;
        remove?: boolean;
        supports?: boolean;
        flexbox?: boolean | 'no-2009';
        grid?: boolean;
        stats?: any;
        ignoreUnknownVersions?: boolean;
    }

    type Autoprefixer = Plugin<Options>;
}

declare const autoprefixer: autoprefixer.Autoprefixer;
export = autoprefixer;
