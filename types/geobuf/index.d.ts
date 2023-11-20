import Pbf = require("pbf");
import { GeoJSON } from "geojson";

export function decode(pbf: Pbf): GeoJSON;
export function encode(obj: GeoJSON, pbf: Pbf): Uint8Array;
