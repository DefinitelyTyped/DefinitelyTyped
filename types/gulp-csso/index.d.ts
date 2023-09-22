// Type definitions for gulp-csso v4.0.0
// Project: https://github.com/ben-eb/gulp-csso
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function csso(options?: boolean | csso.Options): NodeJS.ReadWriteStream;

declare namespace csso {
    interface Options {
        sourceMap?: boolean | undefined;
        restructure?: boolean | undefined;
        debug?: boolean | undefined;
    }
}

export = csso;
