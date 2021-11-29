// Type definitions for gulp-ttf2woff2 4.0
// Project: https://github.com/nfroidure/gulp-ttf2woff2
// Definitions by: Anatoly Pitikin <https://github.com/xapdkop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import PluginError = require('plugin-error');

declare namespace ttf2woff2 {
    interface Options {
        /**
         * Also convert files that doesn't have the .ttf extension.
         */
        ignoreExt?: boolean;

        /**
         * Clone the file before converting him so that it will output the original file too.
         */
        clone?: boolean;
    }

    /**
     * Callback function handling the buffered content
     */
    type FileTransformCallback = <TResult, TError>(
        err: TError | null,
        buf: Buffer | undefined,
        cb: (err: PluginError<TError> | PluginError<Error> | null, buf: Buffer | undefined) => TResult,
    ) => TResult;

    /**
     * File level transform function (for use by other plugins)
     */
    function fileTransform(): FileTransformCallback;
}

/**
 * Create a WOFF2 font from a TTF font with Gulp
 *
 * @example
 * const ttf2woff2 = require('gulp-ttf2woff2');
 *
 * gulp.task('ttf2woff2', function(){
 *   gulp.src(['fonts/*.ttf'])
 *     .pipe(ttf2woff2())
 *     .pipe(gulp.dest('fonts/'));
 * });
 */
declare function ttf2woff2(options?: ttf2woff2.Options): NodeJS.ReadWriteStream;

export = ttf2woff2;
