// Tests for: https://github.com/topojson/topojson-server

import * as topojson from "topojson-server";

let topo: TopoJSON.Topology;

const aPoint: GeoJSON.Point = { type: "Point", coordinates: [30, 10] };
const aPolygon: GeoJSON.Polygon = {
    type: "Polygon",
    coordinates: [[[30, 10], [40, 40], [20, 40], [30, 10]]]
};

const objects = {
    aPoint,
    aPolygon
};

topo = topojson.topology(objects);
topo = topojson.topology(objects, 1e4);
