export interface Arc {
    px: number;
    py: number;
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    xAxisRotation: number;
    largeArcFlag: 0 | 1;
    sweepFlag: 0 | 1;
}

export interface CubicBezierCurve {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x: number;
    y: number;
}

export default function arcToBezier(x: Arc): CubicBezierCurve[];
