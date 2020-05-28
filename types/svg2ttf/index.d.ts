// Type definitions for svg2ttf 5.0
// Project: https://github.com/fontello/svg2ttf
// Definitions by: Ewan Morrison <https://github.com/ewan-m>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Converts SVG fonts to TTF format
 */
declare function svg2ttf(svgFontString: string, options?: FontOptions): MicroBuffer;

interface FontOptions {
    copyright?: string;
    description?: string;
    ts?: number;
    url?: string;
    version: string;
}

interface MicroBuffer {
    buffer: Uint8Array;
}
