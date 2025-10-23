import GeoJSON = require("geojson");
import TopoJSON = require("topojson-specification");

export function topology(objects: { [k: string]: GeoJSON.GeoJsonObject }, quantization?: number): TopoJSON.Topology;
