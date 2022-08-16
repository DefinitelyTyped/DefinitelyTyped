// Type definitions for @mapbox/maki 7.2
// Project: https://github.com/mapbox/maki
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Michael Bullington <https://github.com/mbullington>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A pixel-aligned point of interest icon set made for cartographers
 */
export type IconName = string;
export type SvgContent = string;

/** Object that can be used to organize and display icons in your app or website */
export const layouts: IconName[];
export const svgArray: SvgContent[];
