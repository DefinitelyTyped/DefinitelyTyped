// Type definitions for imagemin-svgo 10.0
// Project: https://github.com/imagemin/imagemin-svgo#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';
import { OptimizeOptions as SvgoOptions } from 'svgo';

/**
 * SVGO imagemin plugin
 */
declare function imageminSvgo(options?: Options): Plugin;

export type Options = SvgoOptions & {
    /**
     * Pass over SVGs multiple times to ensure all optimizations are applied
     * @default true
     */
    multipass?: boolean | undefined;
};

export default imageminSvgo;
