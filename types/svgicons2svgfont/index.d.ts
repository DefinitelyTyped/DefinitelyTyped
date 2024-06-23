/// <reference types="node" />

import { Stream } from "stream";

declare class SVGIcons2SVGFontStream extends Stream.Transform {
    constructor(options?: SVGIcons2SVGFontStream.SvgIcons2FontOptions);
}

declare namespace SVGIcons2SVGFontStream {
    interface SvgIcons2FontOptions {
        /**
         * The font family name you want
         *
         * @default 'iconfont'
         */
        fontName?: string | undefined;
        /**
         * The font id you want (Default value: the options.fontName)
         *
         * @default the options.fontName value
         */
        fontId?: string | undefined;
        /**
         * The font style you want.
         */
        fontStyle?: string | undefined;
        /**
         * The font weight
         */
        fontWeight?: string | undefined;
        /**
         * Creates a monospace font of the width of the largest input icon.
         */
        fixedWidth?: boolean | undefined;
        /**
         * Calculate the bounds of a glyph and center it horizontally.
         */
        centerHorizontally?: boolean | undefined;
        /**
         * Centers the glyphs vertically in the generated font.
         * @default false
         */
        centerVertically?: boolean | undefined;
        /**
         * Normalize icons by scaling them to the height of the highest icon.
         */
        normalize?: boolean | undefined;
        /**
         * The outputted font height (defaults to the height of the highest input icon).
         */
        fontHeight?: number | undefined;
        /**
         * Setup SVG path rounding.
         *
         * @default 10e12
         */
        round?: number | undefined;
        /**
         * The font descent. It is usefull to fix the font baseline yourself.
         *
         * Warning: The descent is a positive value!
         */
        descent?: number | undefined;
        /**
         * The font ascent.
         *
         * Default value: fontHeight - descent
         *
         * Use this options only if you know what you're doing.
         * A suitable value for this is computed for you.
         */
        ascent?: number | undefined;
        /**
         * The font [metadata](http://www.w3.org/TR/SVG/metadata.html).
         *
         * You can set any character data in but it is the be suited place for a copyright mention.
         */
        metadata?: string | undefined;
        /**
         * A function which determines the metadata for an icon.
         * It takes a parameter file with an icon svg and should return icon metadata (asynchronously) via the callback function.
         * You can use this function to provide custom logic for svg to codepoint mapping.
         */
        metadataProvider?: MetadataProvider | undefined;
        /**
         * Allows you to provide your own logging function.
         *
         * Set to function(){} to disable logging.
         *
         * @default console.log()
         */
        log?: ((message?: any) => void) | undefined;
    }

    interface Metadata {
        path: string;
        name: string;
        unicode: string[];
        renamed: boolean;
    }

    interface MetadataOptions {
        prependUnicode?: boolean | undefined;
        startUnicode?: number | undefined;
        log?: typeof console["log"] | undefined;
        err?: typeof console["error"] | undefined;
    }

    interface MetadataProvider {
        (file: string, cb: (err: any, metadata: Metadata) => void): void;
    }
}

export = SVGIcons2SVGFontStream;
