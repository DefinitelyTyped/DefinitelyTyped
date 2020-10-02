// Type definitions for svg2ttf 5.0
// Project: https://github.com/fontello/svg2ttf
// Definitions by: Ewan Morrison <https://github.com/ewan-m>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Converts SVG fonts to TTF format */
declare function svg2ttf(svgFontString: string, options?: svg2ttf.FontOptions): svg2ttf.MicroBuffer;

declare namespace svg2ttf {
    interface FontOptions {
        copyright?: string;
        description?: string;
        /**
         * Unix timestamp (in seconds) to override creation time
         */
        ts?: number;
        /**
         * manufacturer url
         */
        url?: string;
        /**
         * font version string, can be Version x.y or x.y
         * @default 'Version 1.0'
         */
        version?: string;
    }

    interface MicroBuffer {
        buffer: Uint8Array;
    }
}

export = svg2ttf;
