// Type definitions for @webpack-blocks/typescript 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/sass
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Block } from 'webpack-blocks';

declare namespace typescript {
    interface Options {
        silent?: boolean;
        // silent (boolean) (default=false)
        // No logging from the checker. Please note that this option disables async error reporting because this option bans console.log() usage.
        //
        // compiler (string) (default='typescript')
        // Allows use of TypeScript compilers other than the official one. Must be set to the NPM name of the compiler, e.g. ntypescript or the path to a package folder. Note that the compiler must be installed in your project. You can also use nightly versions.
        //
        // useTranspileModule (boolean) (default=false)*
        // Use fast transpileModule emit mode. Disables automatically when you set compilerOption declaration: true (reference).
        //
        // instance (string) (default='at-loader')
        // Allows the use of several TypeScript compilers with different settings in one app. Override instance to initialize another instance.
        //
        // configFileName (string) (default='tsconfig.json')
        // Specifies the path to a TS config file. This is useful when you have multiple config files. This setting is useless inside a TS config file.
        //
        // transpileOnly (boolean)
        // Use this setting to disable type checking, enabling this will nullify the CheckerPlugin usage in your webpack configuration.
        //
        // errorsAsWarnings (boolean)
        // Emit all typescript errors as warnings.
        //
        // forceIsolatedModules (boolean)
        // Use this setting to disable dependent module recompilation.
        //
        // ignoreDiagnostics (number[]) (default=[])
        // You can squelch certain TypeScript errors by specifying an array of diagnostic codes to ignore. For example, you can transpile stage 1 properties from *.js using "ignoreDiagnostics": [8014].
        //
        // useBabel (boolean) (default=false)
        // Invoke Babel to transpile files. Useful with ES6 target. Please see useCache option which can improve warm-up time.
        //
        // If you're using babelOptions, anything in .babelrc will take precedence. This breaks expected usage for scenarios where you need two sets of Babel configs (example: one for Webpack, one for your build tools).
        //
        // You may want to "babelrc": false to disable .babelrc if you don't want it:
        //
        // {
        //     "useBabel": true,
        //     "babelOptions": {
        //         "babelrc": false, /* Important line */
        //         "presets": [
        //             ["@babel/preset-env", { "targets": "last 2 versions, ie 11", "modules": false }]
        //         ]
        //     },
        //     "babelCore": "@babel/core", // needed for Babel v7
        // }
        // babelCore (string) (default=undefined)
        // Override the path used to find babel-core. Useful if node_modules is installed in a non-standard place or webpack is being invoked from a directory not at the root of the project.
        //
        // For Babel 7, this should be set to "@babel/core".
        //
        // babelOptions (object) (default=null)
        // Use this option to pass some options to Babel (e.g. presets). Please note that .babelrc file is more universal way to do this.
        //
        // useCache (boolean) (default=false)
        // Use internal file cache. This is useful with Babel, when processing takes a long time to complete. Improves warm-up time.
        //
        // usePrecompiledFiles (boolean) (default=false)
        // Use pre-compiled files if any. Files must be named as {filename}.js and {filename}.map.
        //
        // cacheDirectory (string) (default='.awcache')
        // Directory where cache is stored.
        //
        // reportFiles (string[])
        // Specify globs to report file diagnostics. ALL OTHER ERRORS WILL NOT BE REPORTED. Example:
        //
        // reportFiles: [
        //     "src/**/*.{ts,tsx}"
        // ]
        // getCustomTransformers (string | ((program: ts.Program) => ts.CustomTransformers | undefined)) (default=undefined)
    }
}

declare function typescript(options?: typescript.Options): Block;

export = typescript;
