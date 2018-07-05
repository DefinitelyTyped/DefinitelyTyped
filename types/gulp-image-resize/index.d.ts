// Type definitions for gulp-image-resize 0.13
// Project: https://github.com/scalableminds/gulp-image-resize
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import * as stream from "stream";
import * as gm from "gm";

export = GulpImageResize;

declare function GulpImageResize(options?: GulpImageResize.Options): stream.Transform;

declare namespace GulpImageResize {
    type SamplingFactor = [number, number];

    interface Options {
        width?: number;
        height?: number;
        upscale?: boolean;
        crop?: boolean;
        gravity?: gm.GravityDirection;
        quality?: number;
        format?: string;
        filter?: gm.FilterType;
        sharpen?: boolean | string;
        samplingFactor?: SamplingFactor;
        noProfile?: boolean;
        interlace?: boolean;
        imageMagick?: boolean;
        background?: string;
        flatten?: boolean;
        percentage?: number;
        cover?: boolean;
    }
}
