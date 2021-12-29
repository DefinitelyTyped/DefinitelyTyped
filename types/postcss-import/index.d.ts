// Type definitions for postcss-import 14.0
// Project: https://github.com/postcss/postcss-import#readme
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AcceptedPlugin, Transformer } from 'postcss';

export = atImport;

/**
 * This plugin can consume local files, node modules or web_modules. To resolve path of an `@import` rule, it can look into root directory (by default `process.cwd()`), `web_modules`, `node_modules`
 * or local modules. _When importing a module, it will look for `index.css` or file referenced in `package.json` in the `style` or `main` fields._ You can also provide manually multiples paths where
 * to look at.
 *
 * **Notes:**
 *
 * - **This plugin should probably be used as the first plugin of your list. This way, other plugins will work on the AST as if there were only a single file to process, and will probably work as you
 *   can expect**.
 * - This plugin works great with [postcss-url](https://github.com/postcss/postcss-url) plugin, which will allow you to adjust assets `url()` (or even inline them) after inlining imported files.
 * - In order to optimize output, **this plugin will only import a file once** on a given scope (root, media query…). Tests are made from the path & the content of imported files (using a hash table).
 *   If this behavior is not what you want, look at `skipDuplicates` option
 * - **If you are looking for glob, or sass like imports (prefixed partials)**, please look at [postcss-easy-import](https://github.com/trysound/postcss-easy-import) (which use this plugin under the
 *   hood).
 * - Imports which are not modified (by `options.filter` or because they are remote imports) are moved to the top of the output.
 * - **This plugin attempts to follow the CSS `@import` spec**; `@import` statements must precede all other statements (besides `@charset`).
 */
declare function atImport(options?: atImport.AtImportOptions): Transformer;

declare namespace atImport {
    interface AtImportOptions {
        /**
         * Only transform imports for which the test function returns `true`. Imports for which the test function returns `false` will be left as is. The function gets the path to import as an
         * argument and should return a boolean.
         *
         * @default () => true
         */
        filter?: (path: string) => boolean;

        /**
         * Define the root where to resolve path (eg: place where `node_modules` are). Should not be used that much.
         *
         * _Note: nested @import will additionally benefit of the relative dirname of imported files._
         *
         * Default: `process.cwd()` or dirname of [the postcss from](https://github.com/postcss/postcss#node-source)
         */
        root?: string | undefined;

        /**
         * A string or an array of paths in where to look for files.
         */
        path?: string | string[] | undefined;

        /**
         * An array of plugins to be applied on each imported files.
         */
        plugins?: AcceptedPlugin[] | undefined;

        /**
         * You can provide a custom path resolver with this option. This function gets `(id, basedir, importOptions)` arguments and should return a path, an array of paths or a promise resolving to
         * the path(s). If you do not return an absolute path, your path will be resolved to an absolute path using the default resolver. You can use
         * [resolve](https://github.com/substack/node-resolve) for this.
         */
        resolve?:
            | ((
                  id: string,
                  basedir: string,
                  importOptions: AtImportOptions,
              ) => string | string[] | PromiseLike<string | string[]>)
            | undefined;

        /**
         * You can overwrite the default loading way by setting this option. This function gets `(filename, importOptions)` arguments and returns content or promised content.
         */
        load?: ((filename: string, importOptions: AtImportOptions) => string | Promise<string>) | undefined;

        /**
         * By default, similar files (based on the same content) are being skipped. It's to optimize output and skip similar files like `normalize.css` for example. If this behavior is not what you
         * want, just set this option to false to disable it.
         *
         * @default true
         */
        skipDuplicates?: boolean | undefined;

        /**
         * An array of folder names to add to Node's resolver. Values will be appended to the default resolve directories: `["node_modules", "web_modules"]`.
         *
         * This option is only for adding additional directories to default resolver. If you provide your own resolver via the `resolve` configuration option above, then this value will be ignored.
         */
        addModulesDirectories?: string[] | undefined;
    }
}
