// Type definitions for intersects 2.5
// Project: https://github.com/davidfig/intersects#readme
// Definitions by: Voxylu <https://github.com/voxylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function boxBox(
    x1: number,
    y1: number,
    w1: number,
    h1: number,
    x2: number,
    y2: number,
    w2: number,
    h2: number
): boolean;

export function boxCircle(
    xb: number,
    yb: number,
    wb: number,
    hb: number,
    xc: number,
    yc: number,
    rc: number
): boolean;

export function boxEllipse(
    xb: number,
    yb: number,
    wb: number,
    hb: number,
    xe: number,
    ye: number,
    rex: number,
    rey: number
): boolean;

export function boxLine(
    xb: number,
    yb: number,
    wb: number,
    hb: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): boolean;

export function boxPoint(
    x1: number,
    y1: number,
    w1: number,
    h1: number,
    x2: number,
    y2: number
): boolean;

export function boxPolygon(
    xb: number,
    yb: number,
    wb: number,
    hb: number,
    points: number[]
): boolean;

export function circleBox(
    xc: number,
    yc: number,
    rc: number,
    xb: number,
    yb: number,
    wb: number,
    hb: number
): boolean;

export function circleCircle(
    x1: number,
    y1: number,
    r1: number,
    x2: number,
    y2: number,
    r2: number
): boolean;

export function circleEllipse(
    xc: number,
    yc: number,
    rc: number,
    xe: number,
    ye: number,
    rex: number,
    rey: number
): boolean;

export function circleLine(
    xc: number,
    yc: number,
    rc: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): boolean;

export function circlePoint(
    x1: number,
    y1: number,
    r1: number,
    x2: number,
    y2: number
): boolean;

export function circlePolygon(
    xc: number,
    yc: number,
    rc: number,
    points: number[]
): boolean;

export function ellipseBox(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    xb: number,
    yb: number,
    wb: number,
    hb: number
): boolean;

export function ellipseCircle(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    xc: number,
    yc: number,
    rc: number
): boolean;

export function ellipseEllipse(
    x1: number,
    y1: number,
    r1x: number,
    r1y: number,
    x2: number,
    y2: number,
    r2x: number,
    r2y: number
): boolean;

export function ellipseLine(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): boolean;

export function ellipsePoint(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    x1: number,
    y1: number
): boolean;

export function ellipsePolygon(
    xe: number,
    ye: number,
    rex: number,
    rey: number,
    points: number[]
): boolean;

export function lineBox(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xb: number,
    yb: number,
    wb: number,
    hb: number
): boolean;

export function lineCircle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xc: number,
    yc: number,
    rc: number
): boolean;

export function lineEllipse(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xe: number,
    ye: number,
    rex: number,
    rey: number
): boolean;

export function lineLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
): boolean;

export function linePoint(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    xp: number,
    yp: number,
    tolerance: number
): boolean;

export function linePolygon(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    points: number[],
    tolerance: number
): boolean;

export function pointBox(
    x1: number,
    y1: number,
    xb: number,
    yb: number,
    wb: number,
    hb: number
): boolean;

export function pointCircle(
    x1: number,
    y1: number,
    xc: number,
    yc: number,
    rc: number
): boolean;

export function pointEllipse(
    x1: number,
    y1: number,
    xe: number,
    ye: number,
    rex: number,
    rey: number
): boolean;

export function pointLine(
    xp: number,
    yp: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): boolean;

export function pointPolygon(
    x1: number,
    y1: number,
    points: number[],
    tolerance: number
): boolean;

export function polygonBox(
    points: number[],
    x: number,
    y: number,
    w: number,
    h: number
): boolean;

export function polygonCircle(
    points: number[],
    xc: number,
    yc: number,
    rc: number
): boolean;

export function polygonEllipse(
    points: number[],
    xe: number,
    ye: number,
    rex: number,
    rey: number
): boolean;

export function polygonLine(
    points: number[],
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    tolerance: number
): boolean;

export function polygonPoint(
    points: number[],
    x: number,
    y: number,
    tolerance: number
): boolean;

export function polygonPolygon(points1: number[], points2: number[]): boolean;
