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
        crop?: boolean;
        format?: string;
        gravity?: gm.GravityDirection;
        overwrite?: boolean;
        quality?: number;
        rename?: Rename;
        percentage?: number;
        sharpen?: boolean;
        upscale?: boolean;
        filter?: gm.FilterType;
        height?: number;
        width?: number;
        samplingFactor?: SamplingFactor;
        suffix?: string;
    }

    interface Matchers {
        [index: string]: ReadonlyArray<Settings>;
    }
}
