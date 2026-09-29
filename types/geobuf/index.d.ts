import { GeoJSON } from "geojson";
import Pbf from "pbf";

export function decode(pbf: Pbf): GeoJSON;
export function encode(obj: GeoJSON, pbf: Pbf): Uint8Array;
