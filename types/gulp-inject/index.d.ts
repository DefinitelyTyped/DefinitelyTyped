// Type definitions for gulp-inject 5.0
// Project: https://github.com/klei/gulp-inject
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="vinyl" />

import File = require("vinyl");

declare function inject(sources: NodeJS.ReadableStream, options?: inject.IOptions): NodeJS.ReadWriteStream;

declare namespace inject {
    interface ITagFunction {
        (targetExt: string, sourceExt: string): string;
    }

    interface ITransformFunction {
        (filepath: string, file?: File, index?: number, length?: number, targetFile?: File): string;
    }

    interface IOptions {
        ignorePath?: string | string[] | undefined;
        relative?: boolean | undefined;
        addPrefix?: string | undefined;
        addSuffix?: string | undefined;
        addRootSlash?: boolean | undefined;
        name?: string | undefined;
        removeTags?: boolean | undefined;
        empty?: boolean | undefined;
        starttag?: string | ITagFunction | undefined;
        endtag?: string | ITagFunction | undefined;
        transform?: ITransformFunction | undefined;
        selfClosingTag?: boolean | undefined;
        quiet?: boolean | undefined;
    }
}

export = inject;
