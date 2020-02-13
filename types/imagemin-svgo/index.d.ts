// Type definitions for imagemin-svgo 7.0
// Project: https://github.com/imagemin/imagemin-svgo#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Plugin } from 'imagemin';
import { Options as SvgoOptions } from 'svgo';

declare function imageminSvgo(options?: imageminSvgo.Options): Plugin;

declare namespace imageminSvgo {
    type Options = SvgoOptions;
}

export = imageminSvgo;
