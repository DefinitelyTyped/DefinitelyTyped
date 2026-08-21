import { Plugin } from "postcss";

export interface Options {
    /**
     * The modules option specifies a list of allowable PostCSS Plugins.
     * By default, all plugins are disabled in order to prevent malicious usage in browser environments
     * @example
     * use({
     *   // allow plugins starting with autoprefixer, postcss, precss, and cssnano
     *   modules: [
     *     /^autoprefixer/,
     *     /^postcss/,
     *     /^precss/,
     *     /^cssnano/,
     *   ]
     * })
     * @example
     * use({
     *   // allow autoprefixer, postcss-preset-env, and postcss-flexbugs-fixes
     *   modules: [ 'autoprefixer', 'postcss-preset-env', 'postcss-flexbugs-fixes' ]
     * })
     * @see {@link <https://github.com/postcss/postcss-use#modules>}
     */
    modules?: string | RegExp | ReadonlyArray<string | RegExp> | undefined;
    /**
     * The resolveFromFile option specifies whether plugins should be resolved relative to the file that referenced them.
     * This may be used to enable the usage of different versions of the same plugin.
     * By default, it is disabled
     * @default false
     * @example
     * use({ resolveFromFile: true })
     * @see {@link <https://github.com/postcss/postcss-use#resolvefromfile>}
     */
    resolveFromFile?: boolean | undefined;
    /**
     * The `options` option specifies individual options for specific plugins by plugin name
     * @example
     * use({
     *   options: {
     *     'postcss-preset-env': {
     *       stage: 0,
     *       browsers: 'last two versions'
     *     }
     *   }
     * })
     * @see {@link <https://github.com/postcss/postcss-use#options-1>}
     */
    options?: Record<string, any> | undefined;
}

declare const use: Plugin<Options>;

export default use;
