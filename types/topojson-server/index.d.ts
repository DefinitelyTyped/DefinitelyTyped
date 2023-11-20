import * as GeoJSON from "geojson";
import * as TopoJSON from "topojson-specification";

export function topology(objects: { [k: string]: GeoJSON.GeoJsonObject }, quantization?: number): TopoJSON.Topology;
