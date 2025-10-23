/// <reference types="node" />

import * as gm from "gm";
import * as stream from "stream";

export = GulpImageResize;

declare function GulpImageResize(options?: GulpImageResize.Options): stream.Transform;

declare namespace GulpImageResize {
    type SamplingFactor = [number, number];

    interface Options {
        width?: number | undefined;
        height?: number | undefined;
        upscale?: boolean | undefined;
        crop?: boolean | undefined;
        gravity?: gm.GravityDirection | undefined;
        quality?: number | undefined;
        format?: string | undefined;
        filter?: gm.FilterType | undefined;
        sharpen?: boolean | string | undefined;
        samplingFactor?: SamplingFactor | undefined;
        noProfile?: boolean | undefined;
        interlace?: boolean | undefined;
        imageMagick?: boolean | undefined;
        background?: string | undefined;
        flatten?: boolean | undefined;
        percentage?: number | undefined;
        cover?: boolean | undefined;
    }
}
