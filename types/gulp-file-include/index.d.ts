// Type definitions for gulp-file-include 0.14.0
// Project: https://github.com/coderhaoxin/gulp-file-include
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function fileinclude(prefix: string): NodeJS.ReadWriteStream;
declare function fileinclude(opts: fileinclude.Options): NodeJS.ReadWriteStream;
declare namespace fileinclude {
    export interface Options {
        /** default: "@@" */
        prefix?: string;
        /** default: "" */
        suffix?: string;
        /**
         * Can be "@file" or "@root" or some base path.
         * default: "@file"
         */
        basepath?: "@file" | "@root" | string;
        /**
         * Filters basically look like functions that get passed into '@@include'.
         * When one of these functions is called, something of that name is looked
         * up in this object and called to get the contents of that include.
         */
        filters?: { [filter: string]: (arg: any) => string };
        /**
         * Effectively a context for variables used in 'if' statements.
         */
        context?: { [contextVarName: string]: any };
        /**
         * default: false
         */
        indent?: boolean;
    }
}

export = fileinclude;
