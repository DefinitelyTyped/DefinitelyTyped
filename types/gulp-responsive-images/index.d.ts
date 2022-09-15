// Type definitions for gulp-responsive-images 0.0
// Project: https://github.com/dcgauld/gulp-responsive-images#readme
// Definitions by: Aankhen <https://github.com/aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";
import * as gm from "gm";
import { ParsedPath, Options as RenameOptions } from "gulp-rename";

export = GulpResponsiveImage;

declare function GulpResponsiveImage(configs: GulpResponsiveImage.Matchers): stream.Transform;

declare namespace GulpResponsiveImage {
    type SamplingFactor = [number, number];

    type Rename = string
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
