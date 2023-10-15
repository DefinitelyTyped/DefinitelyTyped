// Type definitions for gulp-rev-replace v0.2.1
// Project: https://github.com/jamesknelson/gulp-rev-replace
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

declare namespace revReplace {
    interface Options {
        canonicalUris?: boolean | undefined;
        replaceInExtensions?: Array<string> | undefined;
        prefix?: string | undefined;
        manifest?: NodeJS.ReadWriteStream | undefined;
        modifyUnreved?: Function | undefined;
        modifyReved?: Function | undefined;
    }
}

declare function revReplace(options?: revReplace.Options): NodeJS.ReadWriteStream;

export = revReplace;
