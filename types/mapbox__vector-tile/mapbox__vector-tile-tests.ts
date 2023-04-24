import { VectorTile, VectorTileFeature, VectorTileLayer } from '@mapbox/vector-tile';
import Pbf = require('pbf');

const pbf = new Pbf(new ArrayBuffer(8));

const vt = new VectorTile(pbf);

// $ExpectType VectorTileLayer
vt.layers["main"];

const vtf = new VectorTileFeature();

// $ExpectType number
vtf.extent;

// $ExpectType 1 | 2 | 3 || 2 | 1 | 3
vtf.type;

// $ExpectType number
vtf.id;

// $ExpectType Point[][]
vtf.loadGeometry();

// $ExpectType Feature<Geometry, GeoJsonProperties>
vtf.toGeoJSON(1, 2, 3);

if (vtf.bbox) {
    // $ExpectType [number, number, number, number]
    vtf.bbox();
}

const vtl = new VectorTileLayer(pbf);

// $ExpectType number | undefined
vtl.version;

// $ExpectType string
vtl.name;

// $ExpectType number
vtl.extent;

// $ExpectType number
vtl.length;

// $ExpectType VectorTileFeature
vtl.feature(2);
