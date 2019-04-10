import { Point, robustPointInPolygon } from 'robust-point-in-polygon';

const polygon: Point[] = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
robustPointInPolygon(polygon, [ 1.5, 1.5 ]);
