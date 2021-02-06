// Type definitions for lerna-alias 3.0
// Project: https://github.com/Andarist/lerna-alias#readme
// Definitions by: Elizabeth Craig <https://github.com/ecraig12345>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Aliases {
    /**
     * Key is the package name or an appropriate mapping for the tool.
     * Value is a local directory path to the package resolved using
     * `sourceDirectory` and `mainFields` options.
     */
    [packageName: string]: string;
}

export interface Options {
    /**
     * From which directory the lerna monorepo should be searched for
     * @default `process.cwd()`
     */
    directory?: string;
    /**
     * Optional array of `mainFields` that should be used to resolve package's entry point,
     * similar to https://webpack.js.org/configuration/resolve/#resolve-mainfields .
     * Using this takes precedence over default `sourceDirectory` option.
     */
    mainFields?: ReadonlyArray<string>;
    /**
     * Which directory should be considered as containing source files of a package.
     * If specified as false it will use package's root.
     * @default 'src'
     */
    sourceDirectory?: string | false;
}

/**
 * Returns Jest-style aliases to the source of a package: a map from `'^package-name$'`
 * to package source root, for example `'/path/to/package-name/src/index'`
 * (the exact form of the path may vary depending on options).
 */
export function jest(options?: Options): Aliases;

/**
 * Returns Rollup-style aliases to the source of a package: a map from `'package-name'`
 * to package source root, for example `'/path/to/package-name/src/index'`
 * (the exact form of the path may vary depending on options).
 */
export function rollup(options?: Options): Aliases;

/**
 * Returns Webpack-style aliases to the source of a package: a map from `'package-name$'`
 * to package source root, for example `'/path/to/package-name/src/index'`
 * (the exact form of the path may vary depending on options).
 */
export function webpack(options?: Options): Aliases;
