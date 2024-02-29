/// <reference types="node" />

import { Plugin } from "imagemin";
import { Options as GifsicleOptions } from "imagemin-gifsicle";
import { Options as MozjpegOptions } from "imagemin-mozjpeg";
import { Options as OptipngOptions } from "imagemin-optipng";
import { Options as SvgoOptions } from "imagemin-svgo";
import { Transform } from "stream";

declare function imagemin(pluginsOrOptions?: readonly Plugin[] | imagemin.Options): Transform;
declare function imagemin(plugins?: readonly Plugin[], options?: imagemin.Options): Transform;

declare namespace imagemin {
    interface Options {
        silent?: boolean | undefined;
        verbose?: boolean | undefined;
    }

    type PluginFactory<T> = (options?: T) => Plugin;

    const gifsicle: PluginFactory<GifsicleOptions>;
    const mozjpeg: PluginFactory<MozjpegOptions>;
    const optipng: PluginFactory<OptipngOptions>;
    const svgo: PluginFactory<SvgoOptions>;
}

export = imagemin;
