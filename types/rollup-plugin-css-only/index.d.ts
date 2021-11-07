// Type definitions for rollup-plugin-css-only 3.1
// Project: https://github.com/thgh/rollup-plugin-css-only (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Mateusz Szewc <https://github.com/SitamMatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Plugin, OutputBundle } from 'rollup';
import { FilterPattern } from '@rollup/pluginutils';

declare namespace css {
    interface Options {
        /**
         *  All CSS files will be parsed by default, but you can also specifically include/exclude files
         */
        include?: FilterPattern;
        exclude?: FilterPattern;
        /**
         * Callback that will be called ongenerate
         */
        output?:
            | boolean
            | string
            | ((styles: string, styleNodes: Record<string, string>, bundle: OutputBundle) => void);
    }
}

declare function css(options?: css.Options): Plugin;
export = css;
