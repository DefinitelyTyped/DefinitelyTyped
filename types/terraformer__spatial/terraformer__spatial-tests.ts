import * as GeoJSON from "geojson";
import {
    MercatorCRS,
    GeographicCRS,
    calculateBounds,
    calculateEnvelope,
    positionToGeographic,
    positionToMercator,
    toGeographic,
    toMercator,
    convexHull,
    isConvex,
    polygonContainsPoint,
    within,
    contains,
    intersects,
    toCircle
} from "@terraformer/spatial";

// $ExpectType { type: string; properties: { href: string; type: string; }; }
MercatorCRS;

// $ExpectType { type: string; properties: { href: string; type: string; }; }
GeographicCRS;

// $ExpectType BBox
calculateBounds(
    { type: "Point", coordinates: [ 45, 60 ] }
);

// $ExpectType { x: number; y: number; w: number; h: number; }
calculateEnvelope(
    { type: "Point", coordinates: [ 100, 100 ] }
);

// $ExpectType Position
positionToGeographic([ -13580978, 5621521 ]);

// $ExpectType Position
positionToMercator([ 45, 60 ]);

const point1: GeoJSON.Point = { type: "Point", coordinates: [ -13580978, 5621521 ] };
// $ExpectType Point
toGeographic(point1);

const point2: GeoJSON.Point = { type: "Point", coordinates: [ 45, 60 ] };
// $ExpectType Point
toMercator(point2);

// $ExpectType Polygon
convexHull(
    { type: "LineString", coordinates: [ [100, 0], [-45, 122], [80, -60] ] }
);

// $ExpectType boolean
isConvex(
    { type: "Polygon", coordinates: [ [ [ 100, 0 ], [ -45, 122 ], [ 80, -60 ], [ 100, 0 ] ] ] }
);

// $ExpectType boolean
polygonContainsPoint(
    [ [ [1, 2], [2, 2], [2, 1], [1, 1], [1, 2] ] ],
    [ 10, 10 ]
);

// $ExpectType boolean
within(
    { type: "Point", coordinates: [ 10, 10 ] },
    { type: "Polygon", coordinates: [ [ [ 5, 5 ], [ 5, 15 ], [ 15, 15 ], [ 15, 5 ], [ 5, 5 ] ] ] }
);

// $ExpectType boolean
contains(
    { type: "Polygon", coordinates: [ [ [ 5, 5 ], [ 5, 15 ], [ 15, 15 ], [ 15, 5 ], [ 5, 5 ] ] ] },
    { type: "Point", coordinates: [ 10, 10 ] }
);

// $ExpectType boolean
intersects(
    { type: "Point", coordinates: [ 10, 10 ] },
    { type: "Polygon", coordinates: [ [ [ 5, 5 ], [ 5, 15 ], [ 15, 15 ], [ 15, 5 ], [ 5, 5 ] ] ] }
);

// $ExpectType Feature<Polygon, GeoJsonProperties>
toCircle([ -118, 34 ], 500);

// $ExpectType Feature<Polygon, GeoJsonProperties>
toCircle([ -118, 34 ], 500, 10);
