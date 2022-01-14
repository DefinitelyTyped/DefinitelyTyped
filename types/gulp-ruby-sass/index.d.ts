// Type definitions for gulp-ruby-sass v1.0.5
// Project: https://github.com/sindresorhus/gulp-ruby-sass
// Definitions by: Agnislav Onufrijchuk <https://github.com/agnislav>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


/**
 * The interface includes all options that available for sass executable.
 * Options are converted from dashed to camelCase
 * @interface SassOptions
 */
interface SassOptions {
    loadPath?: string | string[] | undefined;
    require?: string | undefined;
    compass?: boolean | undefined;
    style?: string | undefined;
    force?: boolean | undefined;
    stopOnError?: boolean | undefined;
    scss?: boolean | undefined;
    defaultEncoding?: string | undefined;
    unixNewlines?: boolean | undefined;
    debugInfo?: boolean | undefined;
    lineNumbers?: boolean | undefined;
    lineComments?: boolean | undefined;
    check?: boolean | undefined;
    precision?: number | undefined;
    cacheLocation?: string | undefined;
    noCache?: boolean | undefined;
    trace?: boolean | undefined;
    quiet?: boolean | undefined;

    // Actually, there should be a string. However due to ts spec, overriding member should be the same type or a subtype.
    // https://stackoverflow.com/questions/19605557/incompatible-static-properties-in-three-d-ts-with-latest-typescript
    // We need Options.soucemap to be boolean, so here 'any' is used instead of string.
    sourcemap?: any;

    // All listed below options are acceptable by the sass executable and potentially may be used from js.
    // However I doubt are there cases when it's meaningful
    watch?: string | undefined;
    update?: string | undefined;
    stdin?: boolean | undefined;
    interactive?: boolean | undefined;
}

/**
 * The interface includes the node-ruby-sass only options.
 * Attention: sourcemap option type differs from the same SassOption's type.
 * @interface Options
 * @extends SassOptions
 */
interface Options extends SassOptions {
    verbose?: boolean | undefined;
    bundleExec?: boolean | undefined;
    sourcemap?: boolean | undefined;
    container?: string | undefined;
}

/**
 * Object to be exported
 * @param {string} source - Filename or directory
 * @param {Options} options - Additional processing rules/options
 */
declare function sass(source: string, options?: Options): NodeJS.ReadableStream;

declare namespace sass { }

export = sass;
