// Type definitions for gulp-codecov 3.0
// Project: https://github.com/eddiemoore/gulp-codecov
// Definitions by: Rodolfo Aguirre <https://github.com/roddolf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as stream from "stream";

declare namespace gulpCodecov {
    interface CodecovOptions {
        branch?: string;
        build?: string;
        clear?: boolean;
        commit?: string;
        disable?: string;
        dump?: boolean;
        env?: string;
        file?: string;
        flags?: string;
        'gcov-args'?: string;
        'gcov-exec'?: string;
        'gcov-glob'?: string;
        'gcov-root'?: string;
        pipe?: boolean;
        root?: string;
        slug?: string;
        token?: string;
        url?: string;
        yml?: string;
    }
}

declare function gulpCodecov(options?: gulpCodecov.CodecovOptions): stream.Transform;

export = gulpCodecov;
