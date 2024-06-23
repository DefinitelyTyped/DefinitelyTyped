/// <reference types="node" />

interface GulpPugLinter {
    (options?: GulpPugLinter.Options): NodeJS.ReadWriteStream;
}

declare namespace GulpPugLinter {
    interface Options {
        reporter?: any;
        failAfterError?: boolean | undefined;
    }
}

declare var gulpPugLinter: GulpPugLinter;
export = gulpPugLinter;
