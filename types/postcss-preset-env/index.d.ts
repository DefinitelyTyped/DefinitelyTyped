// Type definitions for postcss-preset-env 6.7
// Project: https://github.com/csstools/postcss-preset-env
// Definitions by: Latif Sulistyo <https://github.com/latipun7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { Plugin as PostCSSPlugin } from 'postcss';
import { Options as AutoprefixerOptions } from 'autoprefixer';

declare namespace postcssPresetEnv {
    interface pluginOptions {
        /**
         * The stage option determines which CSS features to polyfill,
         * based upon their stability in the process of becoming
         * implemented web standards.
         *
         * `postcssPresetEnv({ stage: 0 })`
         *
         * The `stage` can be `0` (experimental) through `4` (stable), or false.
         * Setting stage to false will disable every polyfill. Doing this would only
         * be useful if you intended to exclusively use the `features` option.
         *
         * Without any configuration options, PostCSS Preset Env enables
         * **Stage 2** features.
         */
        stage?: number;

        /**
         * The features option enables or disables specific polyfills by ID.
         * Passing true to a specific feature ID will enable its polyfill,
         * while passing false will disable it.
         *
         * Passing an object to a specific feature ID will both enable and
         * configure it.
         *
         * Any polyfills not explicitly enabled or disabled through `features`
         * are determined by the `stage` option.
         */
        features?: pluginOptions.features;

        /**
         * The browsers option determines which polyfills are required based upon
         * the browsers you are supporting.
         *
         * PostCSS Preset Env supports any standard browserslist configuration,
         * which can be a `.browserslistrc` file, a `browserslist` key in
         * `package.json`, or `browserslist` environment variables.
         *
         * The `browsers` option should only be used when a standard browserslist
         * configuration is not available.
         *
         * @default default
         */
        browsers?: string;

        /**
         * The `insertAfter` keys allow you to insert other PostCSS plugins
         * into the chain. This is only useful if you are also using sugary
         * PostCSS plugins that must execute before or after certain polyfills.
         * `insertAfter` support chaining one or multiple plugins.
         */
        insertAfter?: object;

        /**
         * The `insertBefore` keys allow you to insert other PostCSS plugins
         * into the chain. This is only useful if you are also using sugary
         * PostCSS plugins that must execute before or after certain polyfills.
         * `insertBefore` support chaining one or multiple plugins.
         */
        insertBefore?: object;

        /**
         * PostCSS Preset Env includes
         * [autoprefixer](https://github.com/postcss/autoprefixer)
         * and `browsers` option will be passed to it automatically.
         *
         * Specifying the `autoprefixer` option enables passing
         * [additional options](https://github.com/postcss/autoprefixer#options)
         * into autoprefixer.
         *
         * Passing `autoprefixer: false` disables autoprefixer.
         */
        autoprefixer?: boolean | AutoprefixerOptions;

        /**
         * The `preserve` option determines whether all plugins should receive
         * a `preserve` option, which may preserve or remove otherwise-polyfilled CSS.
         * By default, this option is not configured.
         */
        preserve?: boolean;

        /**
         * The `importFrom` option specifies sources where variables like
         * Custom Media, Custom Properties, Custom Selectors, and
         * Environment Variables can be imported from, which might be
         * CSS, JS, and JSON files, functions, and directly passed objects.
         */
        importFrom?: string | any[];

        /**
         * The `exportTo` option specifies destinations where variables like
         * Custom Media, Custom Properties, Custom Selectors, and
         * Environment Variables can be exported to, which might be
         * CSS, JS, and JSON files, functions, and directly passed objects.
         */
        exportTo?: string | any[];
    }

    namespace pluginOptions {
        interface features {
            'all-property'?: boolean | object;
            'any-link-pseudo-class'?: boolean | object;
            'blank-pseudo-class'?: boolean | object;
            'break-properties'?: boolean | object;
            'case-insensitive-attributes'?: boolean | object;
            'color-functional-notation'?: boolean | object;
            'color-mod-function'?: boolean | object;
            'custom-media-queries'?: boolean | object;
            'custom-properties'?: boolean | object;
            'custom-selectors'?: boolean | object;
            'dir-pseudo-class'?: boolean | object;
            'double-position-gradients'?: boolean | object;
            'environment-variables'?: boolean | object;
            'focus-visible-pseudo-class'?: boolean | object;
            'focus-within-pseudo-class'?: boolean | object;
            'font-variant-property'?: boolean | object;
            'gap-properties'?: boolean | object;
            'gray-function'?: boolean | object;
            'has-pseudo-class'?: boolean | object;
            'hexadecimal-alpha-notation'?: boolean | object;
            'image-set-function'?: boolean | object;
            'lab-function'?: boolean | object;
            'logical-properties-and-values'?: boolean | object;
            'matches-pseudo-class'?: boolean | object;
            'media-query-ranges'?: boolean | object;
            'nesting-rules'?: boolean | object;
            'not-pseudo-class'?: boolean | object;
            'overflow-property'?: boolean | object;
            'overflow-wrap-property'?: boolean | object;
            'place-properties'?: boolean | object;
            'prefers-color-scheme-query'?: boolean | object;
            'rebeccapurple-color'?: boolean | object;
            'system-ui-font-family'?: boolean | object;
        }
    }

    type PostcssPresetEnv = PostCSSPlugin<pluginOptions>;
}

declare const postcssPresetEnv: postcssPresetEnv.PostcssPresetEnv;
export = postcssPresetEnv;
