// Type definitions for GeoPattern 1.2
// Project: https://github.com/btmills/geopattern, http://btmills.github.io/geopattern/geopattern.html
// Definitions by: Gaelan <https://github.com/Gaelan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <references types="jquery" />

export as namespace GeoPattern;

/**
 * Returns a newly-generated, tiling SVG Pattern.
 *
 * @param string Will be hashed using the SHA1 algorithm, and the resulting hash
 * will be used as the seed for generation.
 */
export function generate(string?: string, options?: PatternOptions): Pattern;

export interface PatternOptions {
    /**
     * Specify an exact background color. This is a CSS hexadecimal color
     * value.
     */
    color?: string;

    /**
     * Controls the relative background color of the generated image. The color
     * is not identical to that used in the pattern because the hue is rotated
     * by the generator. This is a CSS hexadecimal color value, which defaults
     * to #933c3c.
     */
    baseColor?: string;

    /**
     * Determines the pattern. All of the original patterns from the Ruby
     * version at jasonlong/geo_pattern are available in this port, and their
     * names are camelCased.
     */
    generator?: GeneratorType;
}

export type GeneratorType = 'chevrons' | 'octagons' | 'overlappingCircles' |
    'plusSigns' | 'xes' | 'sineWaves' | 'hexagons' | 'overlappingRings' |
    'plaid' |'triangles' | 'squares' | 'nestedSquares' | 'mosaicSquares' |
    'concentricCircles' | 'diamonds' | 'tessellation';

export interface Pattern {
    /** Gets the pattern's background color as a hexadecimal string. */
    color: string;

    /** Gets the SVG string representing the pattern. */
    toString(): string;

    /** Gets the SVG string representing the pattern. */
    toSvg(): string;

    /** Gets the SVG as a Base64-encoded string. */
    toBase64(): string;

    /**
     * Gets the pattern as a data URI,
     * i.e. data:image/svg+xml;base64,PHN2ZyB...
     */
    toDataUri(): string;

    /**
     * Gets the pattern as a data URL suitable for use as a CSS
     * background-image, i.e. url("data:image/svg+xml;base64,PHN2ZyB...").
     */
    toDataUrl(): string;
}

declare global {
    interface JQuery {
        geopattern(string: string, options?: PatternOptions): JQuery;
    }
}
