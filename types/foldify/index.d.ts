export = fold;

/**
 * Fold your folders, any way you like.
 *
 * Import / require folders of any filetypes; evaluate / curry the results.
 *
 * @example
 * import foldify = require("foldify");
 * import express = require('express');
 *
 * const routes = foldify(__dirname + "/lib/routes", { tree: true });
 * const app = express();
 *
 * // routes.errors.500:  (app) => { app.get(...) }
 * // routes.errors.501:  (app) => { app.get(...) }
 * // routes.index:       (app) => { app.get(...) }
 * // routes.user.login:  (app) => { app.get(...) }
 * // routes.user.logout: (app) => { app.get(...) }
 *
 * routes(app, {whitelist: "errors/**"});
 * // just errors are now attached!
 *
 * routes(app);
 * // all routes are now attached!
 */
declare function fold(
    toBeFolded: fold.ToBeFolded,
    options?: fold.Options,
): { (...args: unknown[]): unknown; [key: string]: unknown };
declare function fold(toBeFolded: fold.ToBeFolded, options: fold.Options<"array">): string[];
declare function fold(toBeFolded: fold.ToBeFolded, options: fold.Options<"string">): string;

declare namespace fold {
    type ToBeFolded = string | readonly string[] | { [key: string]: ToBeFolded };
    interface Options<TOutput extends "string" | "array" | "object" = "object"> {
        /**
         * If string or array, all files will be `fs.readFileSync()`'d.
         *
         * @default 'object'
         */
        output?: TOutput;
        /**
         * When generating the property names for the hash, this determines whether to use the full
         * filepath as the property name. This is defaulted to for cases of duplicate property names.
         *
         * A benefit of **fullPath** is more flexibility with minimatch white/black listing at evaluation.
         *
         * @default false
         */
        fullPath?: boolean;
        /**
         * Uses [minimatch](https://github.com/isaacs/minimatch) upon filepaths using supplied whitelist
         * patterns, supplied rules are prefixed with the curried directory. Reference
         * [minimatch](https://github.com/isaacs/minimatch) documentation for matching behavior.
         *
         * @example
         * import foldify = require("foldify");
         * const stylesAndHtml = foldify(__dirname + "/client", { whitelist: ["*.less, *.html"], recursive: true });
         * // will grab all .less and .html files into hash, as strings
         */
        whitelist?: string | readonly string[];
        /**
         * Uses [minimatch](https://github.com/isaacs/minimatch) upon filepaths using supplied blacklist patterns.
         * Supplied rules are prefixed by the curried directory. Reference
         * [minimatch](https://github.com/isaacs/minimatch) documentation for matching behavior.
         *
         * @example
         * import foldify = require("foldify");
         * const templates = foldify(__dirname + "/templates", { blacklist: ".json", recursive: true });
         * // will grab all files EXCEPT .json files
         */
        blacklist?: string | readonly string[];
        /**
         * Change the encoding of files that are readFileSync'ed.
         *
         * @default 'utf-8'
         */
        encoding?: string;
        /**
         * Include subfolders.
         *
         * @default false
         */
        recursive?: boolean;
        /**
         * Include subfolders, and return hierarchical structure based on filepath.
         *
         * @default false
         */
        tree?: boolean;
        /**
         * When generating the property names for the hash, this determines whether to include extensions.
         * Manually setting this option will apply it to all filetypes.
         *
         * @default `false` for .js and .json, `true` for other file types
         */
        includeExt?: boolean;
        /**
         * Import `.js` / `.json` files as strings rather than require them.
         *
         * @default false
         */
        jsToString?: boolean;
        /**
         * Set to false if you only want to curry the hash's functions, not evaluate them.
         *
         * @default true
         *
         * @example
         * // With a folder 'mathFuncs' with files like:
         *
         * module.exports = sum;
         * function sum() {
         *     const sum = [].slice.call(arguments, 0)
         *                   .reduce((prev, current) => (+prev || 0) + (+current || 0));
         *     console.log("sum = " + sum);
         * }
         *
         * // Main app:
         *
         * import foldify = require("foldify");
         * const mathFuncs = foldify(__dirname + "/lib/mathFuncs");
         *
         * // To curry only, set 'evaluate' to false:
         * const curried = mathFuncs(1, {evaluate: false});
         *
         * const curried2 = curried([2, 3], {evaluate: false});
         *
         * curried()
         * // sum = 1
         *
         * curried2()
         * // sum = 6
         */
        evaluate?: boolean;
        /**
         * If a function or property evaluates to undefined, or is blacklisted / outside of whitelist, then remove it.
         *
         * @default false
         */
        trim?: boolean;
        /**
         * @default false
         *
         * Normally, when evaluated function returns undefined (as in the math example above), the function itself
         * will be placed back into the hash but with the supplied arguments curried:
         *
         * @example
         * import foldify = require("foldify");
         * const mathFuncs = foldify(__dirname + "/lib/mathFuncs");
         *
         * // To curry only, set 'evaluate' to false:
         * const curried = mathFuncs(1, {evaluate: false});
         *
         * const curried2 = curried([2, 3], {evaluate: false});
         *
         * curried()
         * // sum = 1
         *
         * curried2()
         * // sum = 6
         *
         * // If **allowUndefined** is `false`:
         *
         * const curried3 = curried2(10);
         * // sum = 16
         *
         * typeof curried3.mathFunc;
         * // function
         *
         * curried3()
         * // sum = 16
         *
         * const curried4 = curried3(20)
         * // sum = 36
         *
         * curried4()
         * // sum = 46
         *
         * // But if **allowUndefined** is `true`, functions may return undefined into the hash instead of a
         * // curried version of itself:
         *
         * const curried5 = curried2(10, {allowUndefined: true});
         * // sum = 16
         *
         * typeof curried5.mathFunc // undefined
         *
         * curried5()
         * // folding further will continue to produce `undefined`
         */
        allowUndefined?: boolean;
    }
}
