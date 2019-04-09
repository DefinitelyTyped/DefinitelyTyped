// Type definitions for gulp-stylus 2.7
// Project: http://github.com/stevelacy/gulp-stylus
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

interface GulpStylus {
    (options?: GulpStylus.Options): NodeJS.ReadWriteStream;
}

declare namespace GulpStylus {
    interface Options {
        compress?: boolean;
        linenos?: boolean;
        'include css'?: boolean;
        rawDefine?: {
            data: any
        };
    }
}

declare var gulpStylus: GulpStylus;
export = gulpStylus;
