// Type definitions for imagemin-pngquant 7.0
// Project: https://github.com/imagemin/imagemin-pngquant
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Plugin } from 'imagemin';
import { Stream } from 'stream';

declare function imageminPngquant(options?: ImageminPngquant.Options): Plugin;

declare namespace ImageminPngquant {
    interface Options {
        speed?: number;
        strip?: boolean;
        quality?: [number, number];
        dithering?: number | boolean;
        posterize?: number;
        verbose?: boolean;
        input?: Buffer | Stream;
    }
}

export = imageminPngquant;
