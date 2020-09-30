// Type definitions for imagemin-svgo 8.0
// Project: https://github.com/imagemin/imagemin-svgo#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';
import { Options as SvgoOptions } from 'svgo';

/**
 * SVGO imagemin plugin
 */
declare function imageminSvgo(options?: imageminSvgo.Options): Plugin;

declare namespace imageminSvgo {
    type Options = SvgoOptions;
}

export = imageminSvgo;
