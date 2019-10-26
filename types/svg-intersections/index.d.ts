// Type definitions for svg-intersections 0.4
// Project: https://github.com/effektif/svg-intersections#readme
// Definitions by: xWiiLLz <https://github.com/xWiiLLz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export type SvgElements = 'line' | 'rect' | 'circle' | 'ellipse' | 'polygon' | 'polyline' | 'path';

// Svg element properties
export interface LineProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

export interface RectProps {
    rx: number;
    ry: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface CircleProps {
    cx: number;
    cy: number;
    r: number;
}

export type SvgProperties<T extends SvgElements> =
    T extends 'line' ? LineProps :
    T extends 'rect' ? RectProps :
    T extends 'circle' ? CircleProps :
    never;


export function shape<T extends SvgElements>(svgElementName: T, svgProps: SvgProperties<typeof svgElementName>): any;

