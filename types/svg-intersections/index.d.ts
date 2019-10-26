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

export interface EllipseProps {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
}

export interface PolygonProps {
    points: string;
}

export interface PolylineProps extends PolygonProps {}

export interface PathProps {
    d: string;
}

export type SvgProperties<T extends SvgElements> =
    T extends 'line' ? LineProps :
    T extends 'rect' ? RectProps :
    T extends 'circle' ? CircleProps :
    T extends 'ellipse' ? EllipseProps :
    T extends 'polygon' ? PolygonProps :
    T extends 'polyline' ? PolylineProps :
    T extends 'path' ? PathProps :
    never;


export interface Shape {
    type: string;
    meta: object;
    params: object;
}

export interface Point2D {
    x: number;
    y: number;
}

export class Intersection {
    status: string;
    points: Point2D[];
}

export function shape<T extends SvgElements>(svgElementName: T, svgProps: SvgProperties<typeof svgElementName>): Shape;

export function intersect(shape1: Shape, shape2: Shape, m1?: any, m2?: any): Intersection;