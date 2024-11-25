import Pbf from "pbf";
import { Feature } from "geojson";
import Point from "@mapbox/point-geometry";

export class VectorTile {
    constructor(pbf: Pbf);
    layers: { [_: string]: VectorTileLayer };
}

export class VectorTileFeature {
    static types: ["Unknown", "Point", "LineString", "Polygon"];
    extent: number;
    type: 0 | 1 | 2 | 3;
    id: number;
    properties: { [_: string]: string | number | boolean };
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
