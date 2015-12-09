// Type definitions for gulp-typedoc
// Project: https://github.com/rogierschouten/gulp-typedoc
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-typedoc" {
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

    function typedoc(opts: Options): NodeJS.ReadWriteStream;
    export = typedoc;
}