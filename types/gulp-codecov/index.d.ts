// Type definitions for gulp-codecov 3.0
// Project: https://github.com/eddiemoore/gulp-codecov
// Definitions by: Rodolfo Aguirre <https://github.com/roddolf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as stream from "stream";

declare namespace gulpCodecov {
    interface CodecovOptions {
        branch?: string | undefined;
        build?: string | undefined;
        clear?: boolean | undefined;
        commit?: string | undefined;
        disable?: string | undefined;
        dump?: boolean | undefined;
        env?: string | undefined;
        file?: string | undefined;
        flags?: string | undefined;
        "gcov-args"?: string | undefined;
        "gcov-exec"?: string | undefined;
        "gcov-glob"?: string | undefined;
        "gcov-root"?: string | undefined;
        pipe?: boolean | undefined;
        root?: string | undefined;
        slug?: string | undefined;
        token?: string | undefined;
        url?: string | undefined;
        yml?: string | undefined;
    }
}

declare function gulpCodecov(options?: gulpCodecov.CodecovOptions): stream.Transform;

export = gulpCodecov;
