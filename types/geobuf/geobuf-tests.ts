import * as geobuf from 'geobuf';
import { GeoJSON } from 'geojson';
import Pbf = require('pbf');

geobuf.decode(new Pbf(Uint8Array.from([]))); // $ExpectType GeoJSON
const geojson: GeoJSON = {
    type: 'Feature',
    properties: {},
    geometry: {
        type: 'Point',
        coordinates: [-127, 19]
    }
};
geobuf.encode(geojson, new Pbf()); // $ExpectType Uint8Array
