// Type definitions for gulp-uglify 3.0
// Project: https://github.com/terinjokes/gulp-uglify
// Definitions by: Christopher Haws <https://github.com/ChristopherHaws>
//                 Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>

import * as UglifyJS from 'uglify-js';

declare namespace GulpUglify {
    interface Options {
        /**
         * Pass false to skip mangling names.
         */
        mangle?: UglifyJS.MangleOptions | boolean;

        /**
         * Pass if you wish to specify additional output options. The defaults are optimized for best compression.
         */
        output?: UglifyJS.OutputOptions;

        /**
         * Pass an object to specify custom compressor options. Pass false to skip compression completely.
         */
        compress?: UglifyJS.CompressOptions | boolean;
    }
}

declare function GulpUglify(options?: GulpUglify.Options): NodeJS.ReadWriteStream;

export = GulpUglify;
