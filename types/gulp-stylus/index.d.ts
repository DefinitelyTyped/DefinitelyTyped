// Type definitions for gulp-stylus 2.7
// Project: https://github.com/stevelacy/gulp-stylus
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare function gulpStylus(options?: gulpStylus.Options): NodeJS.ReadWriteStream;

declare namespace gulpStylus {
    interface VariableDefinitions {
        [variableName: string]: any;
    }
    interface Options {
        compress?: boolean | undefined;
        linenos?: boolean | undefined;
        'include css'?: boolean | undefined;
        rawDefine?: VariableDefinitions | undefined;
    }
}

export = gulpStylus;
