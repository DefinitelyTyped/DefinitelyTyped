// Type definitions for gulp-imagemin 4.1
// Project: https://github.com/sindresorhus/gulp-imagemin#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from 'stream';

declare function imagemin(pluginsOrOptions?: imagemin.Plugin[] | imagemin.Options): Transform;
declare function imagemin(plugins?: imagemin.Plugin[], options?: imagemin.Options): Transform;

declare namespace imagemin {
    interface Options {
        verbose?: boolean;
    }

    type Plugin = (input: any) => Promise<any>;
    type PluginFactory = (options?: any) => Plugin;

    const gifsicle: PluginFactory;
    const jpegtran: PluginFactory;
    const optipng: PluginFactory;
    const svgo: PluginFactory;
}

export = imagemin;
