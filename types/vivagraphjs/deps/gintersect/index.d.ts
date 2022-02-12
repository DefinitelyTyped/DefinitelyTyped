export = intersect;
/**
 * Original authors: Mukesh Prasad, Appeared in Graphics Gem II book
 * http://www.opensource.apple.com/source/graphviz/graphviz-498/graphviz/dynagraph/common/xlines.c
 * and adopted to javascript version by Andrei Kashcha.
 *
 * This function computes whether two line segments,
 * respectively joining the input points (x1,y1) -- (x2,y2)
 * and the input points (x3,y3) -- (x4,y4) intersect.
 * If the lines intersect, the output variables x, y are
 * set to coordinates of the point of intersection.
 *
 * {Number} x1 First line segment coordinates
 * {Number} y1 First line segment coordinates
 * {Number} x2 First line segment coordinates
 * {Number} x2 First line segment coordinates
 *
 * {Number} x3 Second line segment coordinates
 * {Number} y3 Second line segment coordinates
 * {Number} x4 Second line segment coordinates
 * {Number} x4 Second line segment coordinates
 *
 * return {object} x, y coordinates of intersection point or falsy value if no
 * intersection found..
 */
declare function intersect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number,
): { x: number; y: number; };
