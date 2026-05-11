import type { LineString, Point } from "geojson";
import parse from "geojson-precision";

const point: Point = { type: "Point", coordinates: [12.45, 56.78] };
let line: LineString = { type: "LineString", coordinates: [] };

let trimmed = parse(point, 3);
// $ExpectType Point
trimmed;

line = parse(line, 4);
line = parse.parse(line, 4);

parse.parse.parse.parse.parse; // this is silly, but technically possible
