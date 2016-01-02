// Type definitions for gulp-inject
// Project: https://github.com/klei/gulp-inject
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../vinyl/vinyl.d.ts" />

declare module "gulp-inject" {

    import File = require("vinyl");

    interface ITagFunction {
        (targetExt: string, sourceExt: string): string;
    }

    interface ITransformFunction {
        (filepath: string, file?: File, index?: number, length?: number, targetFile?: File): string;
    }

    interface IOptions {
        ignorePath?: string | string[];
        relative?: boolean;
        addPrefix?: string;
        addSuffix?: string;
        addRootSlash?: boolean;
        name?: string;
        removeTags?: boolean;
        empty?: boolean;
        starttag?: string | ITagFunction;
        endtag?: string | ITagFunction;
        transform?: ITransformFunction;
        selfClosingTag?: boolean;
    }

    function inject(sources: NodeJS.ReadableStream, options?: IOptions): NodeJS.ReadWriteStream;

    export = inject;
}
