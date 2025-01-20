import { loader } from "webpack";

declare namespace FileLoader {
    interface Options {
        /**
         * Specifies a custom filename template for the target file(s) using the query parameter name.
         *
         * By default the path and name you specify will output the file in that same directory,
         * and will also use the same URI path to access the file.
         *
         * For example, to emit a file from your context directory into the output directory retaining the full
         * directory structure, you might use:
         *
         * @example
         * module.exports = {
         *   module: {
         *     rules: [
         *       {
         *         test: /\.(png|jpe?g|gif)$/i,
         *         loader: 'file-loader',
         *         options: {
         *           name: '[path][name].[ext]',
         *         },
         *       },
         *     ],
         *   },
         * };
         *
         * @example
         * module.exports = {
         *  module: {
         *    rules: [
         *      {
         *        test: /\.(png|jpe?g|gif)$/i,
         *        loader: 'file-loader',
         *        options: {
         *          name(file) {
         *            if (process.env.NODE_ENV === 'development') {
         *              return '[path][name].[ext]';
         *            }
         *
         *            return '[contenthash].[ext]';
         *          },
         *        },
         *      },
         *    ],
         *  },
         * };
         *
         * @default '[contenthash].[ext]'
         */
        name?: string | ((file: string) => string) | undefined;
        /**
         * Specify a filesystem path where the target file(s) will be placed.
         *
         * Function gets passes the original absolute path to the asset,
         * as well as the directory where assets are stored.
         *
         * @example
         * module.exports = {
         *   module: {
         *     rules: [
         *       {
         *         test: /\.(png|jpe?g|gif)$/i,
         *         loader: 'file-loader',
         *         options: {
         *           outputPath: (url, resourcePath, context) => {
         *             if (/my-custom-image\.png/.test(resourcePath)) {
         *               return `other_output_path/${url}`;
         *             }
         *
         *             if (/images/.test(context)) {
         *               return `image_output_path/${url}`;
         *             }
         *
         *             return `output_path/${url}`;
         *           },
         *         },
         *       },
         *     ],
         *   },
         * };
         *
         * @default undefined
         */
        outputPath?: string | BuildResourcePathFn | undefined;
        /**
         * Specifies a custom public path for the target file(s).
         *
         * Function gets passes the original absolute path to the asset,
         * as well as the directory where assets are stored.
         *
         * @example
         * module.exports = {
         *  module: {
         *    rules: [
         *      {
         *        test: /\.(png|jpe?g|gif)$/i,
         *        loader: 'file-loader',
         *        options: {
         *          publicPath: (url, resourcePath, context) => {
         *            if (/my-custom-image\.png/.test(resourcePath)) {
         *              return `other_public_path/${url}`;
         *            }
         *
         *            if (/images/.test(context)) {
         *              return `image_output_path/${url}`;
         *            }
         *
         *            return `public_path/${url}`;
         *          },
         *        },
         *      },
         *    ],
         *  },
         * };
         *
         * @default {@link https://webpack.js.org/api/module-variables/#__webpack_public_path__-webpack-specific __webpack_public_path__}
         */
        publicPath?: string | BuildResourcePathFn | undefined;
        /**
         * Specifies a custom function to post-process the generated public path.
         *
         * This can be used to prepend or append dynamic global variables that are only available at runtime, like
         * `__webpack_public_path__`. This would not be possible with just publicPath, since it stringifies the values.
         *
         * @example
         * module.exports = {
         *   module: {
         *     rules: [
         *       {
         *         test: /\.(png|jpg|gif)$/i,
         *         loader: 'file-loader',
         *         options: {
         *           publicPath: '/some/path/',
         *           postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
         *         },
         *       },
         *     ],
         *   },
         * };
         *
         * @default undefined
         */
        postTransformPublicPath?: ((p: string) => string) | undefined;
        /**
         * Specifies a custom file context.
         *
         * @example
         * module.exports = {
         *   module: {
         *     rules: [
         *       {
         *         test: /\.(png|jpe?g|gif)$/i,
         *         use: [
         *           {
         *             loader: 'file-loader',
         *             options: {
         *               context: 'project',
         *             },
         *           },
         *         ],
         *       },
         *     ],
         *   },
         * };
         *
         * @default {@link https://webpack.js.org/configuration/entry-context/#context context}
         */
        context?: string | undefined;
        /**
         * If `true`, emits a file (writes a file to the filesystem); otherwise, the loader will return a public URI
         * but will not emit the file. It is often useful to disable this option for server-side packages.
         *
         * @default true
         */
        emitFile?: boolean | undefined;
        /**
         * Specifies a Regular Expression to one or many parts of the target file path.
         * The capture groups can be reused in the name property using [N]
         * {@link https://github.com/webpack-contrib/file-loader#placeholders placeholder}.
         *
         * If [0] is used, it will be replaced by the entire tested string,
         * whereas [1] will contain the first capturing parenthesis of your regex and so on...
         *
         * @example
         * // file.js
         * import img from './customer01/file.png';
         *
         * // webpack.config.js
         * module.exports = {
         *   module: {
         *     rules: [
         *       {
         *         test: /\.(png|jpe?g|gif)$/i,
         *         use: [
         *           {
         *             loader: 'file-loader',
         *             options: {
         *               regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
         *               name: '[1]-[name].[ext]',
         *             },
         *           },
         *         ],
         *       },
         *     ],
         *   },
         * };
         *
         * @default undefined
         */
        regExp?: RegExp | undefined;

        /**
         * By default, file-loader generates JS modules that use the ES modules syntax.
         * There are some cases in which using ES modules is beneficial, like in the case of module concatenation and tree shaking.
         * @default true
         */
        esModule?: boolean | undefined;
    }

    /**
     * @param url
     * @param resourcePath original absolute path to the asset
     * @param context directory where assets are stored (`rootContext`), or the value of the `context` option if set.
     *
     * @return the path to use for the asset
     */
    type BuildResourcePathFn = (url: string, resourcePath: string, context: string) => string;
}

declare const FileLoader: loader.Loader;
export = FileLoader;
