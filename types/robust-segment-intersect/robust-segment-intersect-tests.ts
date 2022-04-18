import crosses = require('robust-segment-intersect');
type Coordinate = [number, number];
function robustsegmentintersect(
    a0: Coordinate,
    a1: Coordinate,
    b0: Coordinate,
    b1: Coordinate
): boolean {
    return crosses(a0, a1, b0, b1);
}
