// Type definitions for linear-gradient-parser 1.1
// Project: https://github.com/odedglas/linear-gradient-parser
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Transform a given linear gradient ( String or json ) into css background image property
 * @param linearGradient - The linear gradient
 */
export function getBackground(linearGradient: string | LinearGradient): BackgroundResult;

/**
 * Builds a linear gradient position attributes for a given angle.
 */
export function getGradientCords(angle: number): GradientCoords;

export interface Stop {
    color: string;
    opacity?: number;
    offset: string | number;
    style?: object;
}

export interface GradientCoords {
    x1: string;
    x2: string;
    y1?: string;
    y2?: string;
}

export interface LinearGradient extends GradientCoords {
    stops: Stop[];
    children?: Stop[];
}

export interface BackgroundResult {
    background: string;
    angle: number;
}
