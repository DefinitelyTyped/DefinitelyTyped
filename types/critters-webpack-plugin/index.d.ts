import { Plugin } from "webpack";

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
        external?: boolean | undefined;
        /**
         * Inline external stylesheets smaller than a given size.
         * @default 0
         */
        inlineThreshold?: number | undefined;
        /**
         * If the non-critical external stylesheet would be below this size, just inline it.
         * @default 0
         */
        minimumExternalSize?: number | undefined;
        /**
         * Remove inlined rules from the external stylesheet.
         * @default true
         */
        pruneSource?: boolean | undefined;
        /**
         * Merged inlined stylesheets into a single <style> tag.
         * @default true
         */
        mergeStylesheets?: boolean | undefined;
        /**
         * Glob for matching other stylesheets to be used while looking for critical CSS
         */
        additionalStylesheets?: string[] | undefined;
        /**
         * The mechanism to use for lazy-loading stylesheets.
         */
        preload?: "body" | "media" | "swap" | "js" | "js-lazy" | undefined;
        /**
         * Add <noscript> fallback to JS-based strategies
         */
        noscriptFallback?: boolean | undefined;
        /**
         * Inline critical font-face rules.
         * @default false
         */
        inlineFonts?: boolean | undefined;
        /**
         * Preloads critical fonts.
         * @default true
         */
        preloadFonts?: boolean | undefined;
        /**
         * Shorthand for setting inlineFonts+preloadFonts - Values:
         * - true to inline critical font-face rules and preload the fonts.
         * - false to don"t inline any font-face rules and don"t preload fonts.
         */
        fonts?: boolean | undefined;
        /**
         * Controls which keyframes rules are inlined.
         * See {@link KeyFrameStrategy keyframe strategy}
         * @default "critical"
         */
        keyframes?: KeyframeStrategy | undefined;
        /**
         * Compress resulting critical CSS.
         * @default true
         */
        compress?: boolean | undefined;
        /**
         * Controls {@link LogLevel log level} of the plugin
         * @default 'info'
         */
        logLevel?: LogLevel | undefined;
    }

    /**
     * The mechanism to use for lazy-loading stylesheets.
     * indicates that a strategy requires JavaScript (falls back to `<noscript>`).
     * - **default:** Move stylesheet links to the end of the document and insert preload meta tags in their place.
     * - **"body":** Move all external stylesheet links to the end of the document.
     * - **"media":** Load stylesheets asynchronously by adding `media="not x"` and removing once loaded. _[JS]_
     * - **"swap":** Convert stylesheet links to preloads that swap to `rel="stylesheet"` once loaded. _[JS]_
     * - **"js":** Inject an asynchronous CSS loader similar to [LoadCSS](https://github.com/filamentgroup/loadCSS) and use it to load stylesheets. _[JS]_
     * - **"js-lazy":** Like `"js"`, but the stylesheet is disabled until fully loaded.
     */
    type PreloadStrategy = "body" | "media" | "swap" | "js" | "js-lazy";

    /**
     * Controls which keyframes rules are inlined
     * - "critical": Inline keyframes rules used by the critical CSS.
     * - "all" Inline all keyframes rules.
     * - "none" Remove all keyframes rules
     */
    type KeyframeStrategy = "critical" | "all" | "none";

    /**
     * Controls log level of the plugin.
     * Specifies the level the logger should use. A logger will
     * not produce output for any log level beneath the specified level.
     * Available levels and order are:
     * - **"info"** _(default)_
     * - **"warn"**
     * - **"error"**
     * - **"trace"**
     * - **"debug"**
     * - **"silent"**
     */
    type LogLevel = "info" | "warn" | "error" | "trace" | "debug" | "silent";
}
