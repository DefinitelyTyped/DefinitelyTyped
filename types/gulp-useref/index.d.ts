// Type definitions for gulp-useref v3.0.0
// Project: https://github.com/jonkemp/gulp-useref
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

interface Options {
    searchPath?: string | string[] | undefined;
    base?: string | undefined;
    noAssets?: boolean | undefined;
    noconcat?: boolean | undefined;
    additionalStreams?: Array<NodeJS.ReadWriteStream> | undefined;
    transformPath?: ((filePath: string) => void) | undefined;
}

interface Useref {
    (options?: Options, ...transformStreams: NodeJS.ReadWriteStream[]): NodeJS.ReadWriteStream;
}

declare var useref: Useref;
export = useref;
