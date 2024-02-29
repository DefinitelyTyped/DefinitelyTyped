import { Plugin } from "imagemin";

declare function imageminJpegtran(options?: imageminJpegtran.Options): Plugin;

declare namespace imageminJpegtran {
    interface Options {
        arithmetic?: boolean | undefined;
        progressive?: boolean | undefined;
    }
}

export = imageminJpegtran;
