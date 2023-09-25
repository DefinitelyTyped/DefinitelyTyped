import arcToBezier, { Arc, CubicBezierCurve } from "svg-arc-to-cubic-bezier";

const arc: Arc = {
    px: 100,
    py: 100,
    cx: 100,
    cy: 100,
    rx: 10,
    ry: 10,
    xAxisRotation: 10,
    largeArcFlag: 1,
    sweepFlag: 1,
};

// Allowed values are 0 and 1
arc.largeArcFlag = 0;
arc.sweepFlag = 0;

// $ExpectType CubicBezierCurve[]
const curves: CubicBezierCurve[] = arcToBezier(arc);
