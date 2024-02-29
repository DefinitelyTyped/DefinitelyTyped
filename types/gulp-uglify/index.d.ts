/// <reference types="node"/>

import * as UglifyJS from "uglify-js";

declare namespace GulpUglify {
    interface Options {
        /**
         * Pass false to skip mangling names.
         */
        mangle?: UglifyJS.MangleOptions | boolean | undefined;

        /**
         * Pass if you wish to specify additional output options. The defaults are optimized for best compression.
         */
        output?: UglifyJS.OutputOptions | undefined;

        /**
         * Pass an object to specify custom compressor options. Pass false to skip compression completely.
         */
        compress?: UglifyJS.CompressOptions | boolean | undefined;
    }
}

declare function GulpUglify(options?: GulpUglify.Options): NodeJS.ReadWriteStream;

export = GulpUglify;
