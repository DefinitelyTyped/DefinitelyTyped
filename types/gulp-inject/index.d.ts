// Type definitions for gulp-inject
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
}

export = inject;
