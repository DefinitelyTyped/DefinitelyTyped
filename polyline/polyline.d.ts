// Type definitions for Polyline 0.1.0
// Project: https://github.com/mapbox/polyline
// Definitions by: Arseniy Maximov <https://github.com/Kern0>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../geojson/geojson.d.ts" />

interface Polyline {
  decode(string: string, precision?: number): number[][];
  encode(coordinate: number[][], precision?: number): string;
  fromGeoJSON(geojson: GeoJSON.LineString | GeoJSON.Feature, precision?: number): string;
}

declare var polyline: Polyline;

declare module "polyline" {
    export = polyline;
}