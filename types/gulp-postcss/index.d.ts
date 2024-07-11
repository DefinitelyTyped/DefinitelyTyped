/// <reference types="node"/>
import Vinyl = require("vinyl");

declare function GulpPostCss(plugins?: any[], options?: GulpPostCss.Options): NodeJS.ReadWriteStream;
declare function GulpPostCss(
    callback?: (file: Vinyl) => { plugins?: any[] | undefined; options?: GulpPostCss.Options | undefined },
): NodeJS.ReadWriteStream;

declare namespace GulpPostCss {
    interface Options {
        parser?: any;
    }
}

export = GulpPostCss;
