// Type definitions for gulp-stylus 2.7
// Project: http://github.com/stevelacy/gulp-stylus
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare function gulpStylus(options?: gulpStylus.Options): NodeJS.ReadWriteStream;

declare namespace gulpStylus {
    interface VariableDefinitions {
        [variableName: string]: any;
    }
    interface Options {
        compress?: boolean;
        linenos?: boolean;
        'include css'?: boolean;
        rawDefine?: VariableDefinitions;
    }
}

export = gulpStylus;
