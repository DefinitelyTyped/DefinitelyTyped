// Type definitions for sharpie 4.5
// Project: https://github.com/kapouer/sharpie#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { RequestHandler } from 'express-serve-static-core';
import sharpModule = require('sharp');

/**
 * A simple express middleware for resizing images using sharp and pipes.
 */
declare function sharpie(defaults: sharpie.SharpieOptions): RequestHandler;

declare namespace sharpie {
    interface SharpieOptions {
        format?: string;
        /** @default 'url' */
        param?: string;
        /** @default 90 */
        q?: number;
        /** @default 'w:2048,h:2048,max' */
        rs?: string;
        /** @default false */
        bg?: string | boolean;
        /** @default false */
        fg?: string | boolean;
        /** @default 'center' */
        crop?: string;
        /** @default false */
        flatten?: boolean;
        /** @default false */
        style?: boolean;
        /** @default 'xMinYMin' */
        ratio?: string;
        /** @default undefined */
        mean?: string;
        /**
         * whitelist hostnames that sharpie can proxy
         * @default false
         */
        hostnames?:
            | false
            | string[]
            | {
                  [hostname: string]: boolean;
              }
            | ((hostname: string) => boolean);
        /**
         * Since version 3.4 it is possible to use imagemagick to convert to ico file format
         */
        im?: string;
        /**
         * the sizes of the favicon in ico format, separated by a comma
         * @defautl '64,32,16'
         */
        sizes?: string;
        signs?: {
            /**  use ~ for better uri-encoding */
            assignment?: string;
            /** use ! for better uri-encoding */
            separator?: string;
        };
    }

    interface SharpieFormats {
        src: { [format: string]: true };
        dst: { [format: string]: true };
    }

    const formats: SharpieFormats;
    const sharp: typeof sharpModule;
}

export = sharpie;
