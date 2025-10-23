import * as GJ from "geojson";
import geojsonvt = require("geojson-vt");

type RawGeometry = number | RawGeometry[];

interface Layers {
    [layerName: string]: ReturnType<typeof geojsonvt>;
}

interface LayerOptions {
    version?: number;
    extent?: number; // 0 - 4096
}

interface FeatureWrapper {
    id: number | undefined;
    type: number;
    rawGeometry: RawGeometry[];
    properties: GJ.GeoJsonProperties;
    extent: number;
    geometry: GJ.Point[][] | undefined;

    loadGeometry(): GJ.Point[][];
    bbox(): [number, number, number, number];
    toGeoJSON(): GJ.GeoJSON;
}

declare function fromVectorTileJs(tile: ReturnType<typeof geojsonvt>): Uint8Array;
declare function fromGeojsonVt(layers: Layers, options?: LayerOptions): Uint8Array;
declare class GeoJSONWrapper {
    options: LayerOptions;
    features: object[]; // geojsonvt.Features;
    length: number;

    constructor(features: object[], options?: LayerOptions); // features = geojsonvt.Features
    feature(i: number): FeatureWrapper;
}

export { fromGeojsonVt, fromVectorTileJs, GeoJSONWrapper };
