/// <reference types="node"/>

interface GulpHtmlPrettifyOptions {
    indent_char?: string | undefined;
    indent_size?: number | undefined;
}

interface GulpHtmlPrettify {
    (options?: GulpHtmlPrettifyOptions): NodeJS.ReadWriteStream;
}

declare var gulpHtmlPrettify: GulpHtmlPrettify;
export = gulpHtmlPrettify;
