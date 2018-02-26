// Type definitions for autoprefixer 6.7
// Project: https://github.com/postcss/autoprefixer
// Definitions by: Armando Meziat <https://github.com/odnamrataizem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Transformer as PostcssTransformer } from 'postcss';

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
    }

    interface Transformer extends PostcssTransformer {
        info(): string;
    }

    interface Autoprefixer extends Plugin<Options> {
        (opts?: Options): Transformer;
    }
}

declare const autoprefixer: autoprefixer.Autoprefixer;
export = autoprefixer;
