// Type definitions for svgicons2svgfont 9.2
// Project: https://github.com/nfroidure/svgicons2svgfont
// Definitions by: Kaspar Vollenweider <https://github.com/casaper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from 'stream';

declare class SVGIcons2SVGFont extends Stream.Transform {
    constructor(options?: SVGIcons2SVGFont.SvgIcons2FontOptions);
}

declare namespace SVGIcons2SVGFont {
    interface SvgIcons2FontOptions {
        /**
         * The font family name you want
         *
         * @default 'iconfont'
         */
        fontName?: string;
        /**
         * The font id you want (Default value: the options.fontName)
         *
         * @default the options.fontName value
         */
        fontId?: string;
        /**
         * The font style you want.
         */
        fontStyle?: string;
        /**
         * The font weight
         */
        fontWeight?: string;
        /**
         * Creates a monospace font of the width of the largest input icon.
         */
        fixedWidth?: boolean;
        /**
         * Calculate the bounds of a glyph and center it horizontally.
         */
        centerHorizontally?: boolean;
        /**
         * Centers the glyphs vertically in the generated font.
         * @default false
         */
        centerVertically?: boolean;
        /**
         * Normalize icons by scaling them to the height of the highest icon.
         */
        normalize?: boolean;
        /**
         * The outputted font height (defaults to the height of the highest input icon).
         */
        fontHeight?: number;
        /**
         * Setup SVG path rounding.
         *
         * @default 10e12
         */
        round?: number;
        /**
         * The font descent. It is usefull to fix the font baseline yourself.
         *
         * Warning: The descent is a positive value!
         */
        descent?: number;
        /**
         * The font ascent.
         *
         * Default value: fontHeight - descent
         *
         * Use this options only if you know what you're doing.
         * A suitable value for this is computed for you.
         */
        ascent?: number;
        /**
         * The font [metadata](http://www.w3.org/TR/SVG/metadata.html).
         *
         * You can set any character data in but it is the be suited place for a copyright mention.
         */
        metadata?: string;
        /**
         * Allows you to provide your own logging function.
         *
         * Set to function(){} to disable logging.
         *
         * @default console.log()
         */
        log?: (message?: any) => void;
    }
}

export = SVGIcons2SVGFont;
