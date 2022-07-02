// Type definitions for vite-plugin-react-svg 0.2
// Project: https://github.com/visualfanatic/vite-svg
// Definitions by: Priyanshu Rav <https://github.com/priyanshurav>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

import { Plugin } from 'vite';
import { OptimizeOptions } from 'svgo';
import * as React from 'react';

interface Options {
    /**
     * Default behavior when importing `.svg` files, possible options are: `url` and `component`.
     *
     * Default value: `url`
     */
    defaultExport?: 'url' | 'component';
    /** Boolean flag to enable/disable SVGO */
    svgo?: boolean;
    /** Specify SVGO config */
    svgoConfig?: OptimizeOptions;
    /** Props to be forwarded on SVG tag, possible options: `start`, `end` or `false` */
    expandProps?: 'start' | 'end' | false;
    /** Setting this to `true` will forward ref to the root SVG tag */
    ref?: boolean;
    /** Setting this to `true` will wrap the exported component in `React.memo` */
    memo?: boolean;
    /**
     * Replace an attribute value by another.
     * The main usage of this option is to change an icon color to `currentColor` in order to inherit from text color.
     */
    replaceAttrValues?: Record<string, unknown>;
    /** Add props to the root SVG tag */
    svgProps?: React.SVGAttributes<SVGSVGElement>;
    /** Add title tag via `title` property */
    titleProp?: boolean;
}

declare function reactSvgPlugin(options?: Options): Plugin;

export = reactSvgPlugin;
