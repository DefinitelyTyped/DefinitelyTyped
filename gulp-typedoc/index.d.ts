// Type definitions for gulp-typedoc
// Project: https://github.com/rogierschouten/gulp-typedoc
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


interface Options {
    out: string;
    mode?: string;
    json?: string;
    exclude?: string;
    includeDeclarations?: boolean;
    externalPattern?: string;
    excludeExternals?: boolean;
    module?: string;
    target?: string;
    theme?: string;
    name?: string;
    readme?: string;
    hideGenerator?: boolean;
    gaID?: string;
    gaSite?: string;
    verbose?: boolean;
}

declare function typedoc(opts: Options): NodeJS.ReadWriteStream;
export = typedoc;
