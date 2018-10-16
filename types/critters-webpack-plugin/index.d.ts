// Type definitions for critters-webpack-plugin 1.3
// Project: https://github.com/GoogleChromeLabs/critters
// Definitions by: Juan José González Giraldo <https://github.com/JuanJoseGonGi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

export default Critters;
declare class Critters extends Plugin {
    constructor(options?: Critters.CrittersOptions);
}

declare namespace Critters {
    interface CrittersOptions {
        /**
         * Inline styles from external stylesheets.
         * @default true
         */
        external?: boolean;
        /**
         * The mechanism to use for lazy-loading stylesheets. [JS] indicates that a strategy requires JavaScript (falls back to <noscript>).
         * - default: Move stylesheet links to the end of the document and insert preload meta tags in their place.
         * - "body": Move all external stylesheet links to the end of the document.
         * - "media": Load stylesheets asynchronously by adding media="not x" and removing once loaded. [JS]
         * - "swap": Convert stylesheet links to preloads that swap to rel="stylesheet" once loaded. [JS]
         * - "js": Inject an asynchronous CSS loader similar to LoadCSS and use it to load stylesheets. [JS]
         * - "js-lazy": Like "js", but the stylesheet is disabled until fully loaded.
         */
        preload?: 'body' | 'media' | 'swap' | 'js' | 'js-lazy';
        /**
         * Add <noscript> fallback to JS-based strategies
         */
        noscriptFallback?: boolean;
        /**
         * Inline critical font-face rules.
         * @default false
         */
        inlineFonts?: boolean;
        /**
         * Preloads critical fonts.
         * @default true
         */
        preloadFonts?: boolean;
        /**
         * Shorthand for setting inlineFonts+preloadFonts - Values:
         * - true to inline critical font-face rules and preload the fonts.
         * - false to don"t inline any font-face rules and don"t preload fonts.
         */
        fonts?: boolean;
        /**
         * Controls which keyframes rules are inlined. - Values:
         * - "critical": Inline keyframes rules used by the critical CSS.
         * - "all" Inline all keyframes rules.
         * - "none" Remove all keyframes rules
         * @default "critical"
         */
        keyframes?: 'critical' | 'all' | 'none';
        /**
         * Compress resulting critical CSS.
         * @default true
         */
        compress?: boolean;
    }
}
