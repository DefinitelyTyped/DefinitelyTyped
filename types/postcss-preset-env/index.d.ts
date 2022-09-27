// Type definitions for postcss-preset-env 7.7
// Project: https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
// Definitions by: Latif Sulistyo <https://github.com/latipun7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { PluginCreator as PostCSSPlugin } from 'postcss';
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
        stage?: number | undefined;

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
        features?: pluginOptions.features | undefined;

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
        browsers?: string | string[] | undefined;

        /**
         * The `insertAfter` keys allow you to insert other PostCSS plugins
         * into the chain. This is only useful if you are also using sugary
         * PostCSS plugins that must execute before or after certain polyfills.
         * `insertAfter` support chaining one or multiple plugins.
         */
        insertAfter?: object | undefined;

        /**
         * The `insertBefore` keys allow you to insert other PostCSS plugins
         * into the chain. This is only useful if you are also using sugary
         * PostCSS plugins that must execute before or after certain polyfills.
         * `insertBefore` support chaining one or multiple plugins.
         */
        insertBefore?: object | undefined;

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
        autoprefixer?: boolean | AutoprefixerOptions | undefined;

        /**
         * The `preserve` option determines whether all plugins should receive
         * a `preserve` option, which may preserve or remove otherwise-polyfilled CSS.
         * By default, this option is not configured.
         */
        preserve?: boolean | undefined;

        /**
         * The `importFrom` option specifies sources where variables like
         * Custom Media, Custom Properties, Custom Selectors, and
         * Environment Variables can be imported from, which might be
         * CSS, JS, and JSON files, functions, and directly passed objects.
         */
        importFrom?: string | any[] | undefined;

        /**
         * The `exportTo` option specifies destinations where variables like
         * Custom Media, Custom Properties, Custom Selectors, and
         * Environment Variables can be exported to, which might be
         * CSS, JS, and JSON files, functions, and directly passed objects.
         */
        exportTo?: string | any[] | undefined;
    }

    namespace pluginOptions {
        interface features {
            'all-property'?: boolean | object | undefined;
            'any-link-pseudo-class'?: boolean | object | undefined;
            'blank-pseudo-class'?: boolean | object | undefined;
            'break-properties'?: boolean | object | undefined;
            'case-insensitive-attributes'?: boolean | object | undefined;
            'color-functional-notation'?: boolean | object | undefined;
            'color-mod-function'?: boolean | object | undefined;
            'custom-media-queries'?: boolean | object | undefined;
            'custom-properties'?: boolean | object | undefined;
            'custom-selectors'?: boolean | object | undefined;
            'dir-pseudo-class'?: boolean | object | undefined;
            'double-position-gradients'?: boolean | object | undefined;
            'environment-variables'?: boolean | object | undefined;
            'focus-visible-pseudo-class'?: boolean | object | undefined;
            'focus-within-pseudo-class'?: boolean | object | undefined;
            'font-variant-property'?: boolean | object | undefined;
            'gap-properties'?: boolean | object | undefined;
            'gray-function'?: boolean | object | undefined;
            'has-pseudo-class'?: boolean | object | undefined;
            'hexadecimal-alpha-notation'?: boolean | object | undefined;
            'image-set-function'?: boolean | object | undefined;
            'lab-function'?: boolean | object | undefined;
            'logical-properties-and-values'?: boolean | object | undefined;
            'matches-pseudo-class'?: boolean | object | undefined;
            'media-query-ranges'?: boolean | object | undefined;
            'nesting-rules'?: boolean | object | undefined;
            'not-pseudo-class'?: boolean | object | undefined;
            'overflow-property'?: boolean | object | undefined;
            'overflow-wrap-property'?: boolean | object | undefined;
            'place-properties'?: boolean | object | undefined;
            'prefers-color-scheme-query'?: boolean | object | undefined;
            'rebeccapurple-color'?: boolean | object | undefined;
            'system-ui-font-family'?: boolean | object | undefined;
        }
    }

    type PostcssPresetEnv = PostCSSPlugin<pluginOptions>;
}

declare const postcssPresetEnv: postcssPresetEnv.PostcssPresetEnv;
export = postcssPresetEnv;
