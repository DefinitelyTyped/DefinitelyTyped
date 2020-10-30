// Type definitions for geobuf 3.0
// Project: https://github.com/mapbox/geobuf
// Definitions by: Chad Burt <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import Pbf = require('pbf');
import { GeoJSON } from 'geojson';

export function decode(pbf: Pbf): GeoJSON;
export function encode(obj: GeoJSON, pbf: Pbf): Uint8Array;
