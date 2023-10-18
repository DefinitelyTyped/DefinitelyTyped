import { RequestHandler } from "express-serve-static-core";
import sharpModule = require("sharp");

/**
 * A simple express middleware for resizing images using sharp and pipes.
 */
declare function sharpie(defaults: sharpie.SharpieOptions): RequestHandler;

declare namespace sharpie {
    interface SharpieOptions {
        format?: string | undefined;
        /** @default 'url' */
        param?: string | undefined;
        /** @default 90 */
        q?: number | undefined;
        /** @default 'w:2048,h:2048,max' */
        rs?: string | undefined;
        /** @default false */
        bg?: string | boolean | undefined;
        /** @default false */
        fg?: string | boolean | undefined;
        /** @default 'center' */
        crop?: string | undefined;
        /** @default false */
        flatten?: boolean | undefined;
        /** @default false */
        style?: boolean | undefined;
        /** @default 'xMinYMin' */
        ratio?: string | undefined;
        /** @default undefined */
        mean?: string | undefined;
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
            | ((hostname: string) => boolean)
            | undefined;
        /**
         * Since version 3.4 it is possible to use imagemagick to convert to ico file format
         */
        im?: string | undefined;
        /**
         * the sizes of the favicon in ico format, separated by a comma
         * @default '64,32,16'
         */
        sizes?: string | undefined;
        signs?: {
            /**  use ~ for better uri-encoding */
            assignment?: string | undefined;
            /** use ! for better uri-encoding */
            separator?: string | undefined;
        } | undefined;
    }

    interface SharpieFormats {
        src: { [format: string]: true };
        dst: { [format: string]: true };
    }

    const formats: SharpieFormats;
    const sharp: typeof sharpModule;
}

export = sharpie;
