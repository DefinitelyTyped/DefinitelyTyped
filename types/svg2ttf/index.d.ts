// Type definitions for svg2ttf 5.0
// Project: https://github.com/fontello/svg2ttf
// Definitions by: Ewan Morrison <https://github.com/ewan-m>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Converts SVG fonts to TTF format */
declare function svg2ttf(svgFontString: string, options?: FontOptions): MicroBuffer;

interface FontOptions {
    copyright?: string;
    description?: string;
    /**
     * @summary Unix timestamp (in seconds) to override creation time
     */
    ts?: number;
    /**
     * @summary manufacturer url
     */
    url?: string;
    // tslint:disable:no-redundant-jsdoc-2
    /**
     * @summary font version string, can be Version x.y or x.y
     * @default 'Version 1.0'
     */
    version?: string;
}

interface MicroBuffer {
    buffer: Uint8Array;
}

export = svg2ttf;
