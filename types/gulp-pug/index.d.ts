// Type definitions for gulp-pug 3.3
// Project: https://github.com/pugjs/gulp-pug#readme
// Definitions by: remisery <https://github.com/remisery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function GulpPug(params?: GulpPug.Params): any;

declare namespace GulpPug {
    interface Params {
        filename?: string;
        basedir?: string;
        doctype?: string;
        pretty?: boolean | string;
        filters?: any;
        self?: boolean;
        debug?: boolean;
        compileDebug?: boolean;
        globals?: string[];
        cache?: boolean;
        inlineRuntimeFunctions?: boolean;
        name?: string;

        locals?: any;
        data?: any;
        client?: boolean;
        pug?: any;
        verbose?: boolean;
    }
}

export = GulpPug;
