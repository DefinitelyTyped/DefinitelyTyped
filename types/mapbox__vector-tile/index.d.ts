// Type definitions for @mapbox/vector-tile 1.3
// Project: https://github.com/mapbox/vector-tile-js
// Definitions by: Mathieu Maes <https://github.com/webberig>
//                 Harel Mazor <https://github.com/HarelM>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Pbf =  require('pbf');
import { Feature } from 'geojson';
import Point = require('@mapbox/point-geometry');

export class VectorTile {
    constructor(pbf: Pbf);
    layers: {[_: string]: VectorTileLayer};
}

export class VectorTileFeature {
    static types: ['Unknown', 'Point', 'LineString', 'Polygon'];
    extent: number;
    type: 1 | 2 | 3;
    id: number;
    properties: {[_: string]: string | number | boolean};
    loadGeometry(): Point[][];
    toGeoJSON(x: number, y: number, z: number): Feature;
    bbox?(): [number, number, number, number];
}

export class VectorTileLayer {
    constructor(pbf: Pbf);
    version?: number;
    name: string;
    extent: number;
    length: number;
    feature(featureIndex: number): VectorTileFeature;
}
