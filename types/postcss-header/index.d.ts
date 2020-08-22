// Type definitions for postcss-header 2.0
// Project: https://github.com/fengyuanchen/postcss-header
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Plugin } from 'postcss';

declare namespace header {
    interface Options {
        /**
         * The string which will be put at the beginning of the css file.
         * @default ''
         */
        header?: string;
        /**
         * The string which will be put at the beginning of the css file.
         */
        banner?: string;
    }
    type Header = Plugin<Options>;
}

declare const header: header.Header;

export = header;
