/// <reference types="node" />

import * as gm from "gm";
import { Options as RenameOptions, ParsedPath } from "gulp-rename";
import * as stream from "stream";

export = GulpResponsiveImage;

declare function GulpResponsiveImage(configs: GulpResponsiveImage.Matchers): stream.Transform;

declare namespace GulpResponsiveImage {
    type SamplingFactor = [number, number];

    type Rename =
        | string
        | ((path: ParsedPath) => any)
        | RenameOptions;

    interface Settings {
        crop?: boolean | undefined;
        format?: string | undefined;
        gravity?: gm.GravityDirection | undefined;
        overwrite?: boolean | undefined;
        quality?: number | undefined;
        rename?: Rename | undefined;
        percentage?: number | undefined;
        sharpen?: boolean | undefined;
        upscale?: boolean | undefined;
        filter?: gm.FilterType | undefined;
        height?: number | undefined;
        width?: number | undefined;
        samplingFactor?: SamplingFactor | undefined;
        suffix?: string | undefined;
    }

    interface Matchers {
        [index: string]: ReadonlyArray<Settings>;
    }
}
