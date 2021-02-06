// Type definitions for @mapbox/maki 6.2
// Project: https://github.com/mapbox/maki
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A pixel-aligned point of interest icon set made for cartographers
 */
declare namespace maki {
    type IconName = string;
    type SvgContent = string;
}

declare const maki: {
    /** Object that can be used to organize and display icons in your app or website */
    layouts: {
        all: maki.IconName[];
    };
    svgArray: maki.SvgContent[];
};

export = maki;
