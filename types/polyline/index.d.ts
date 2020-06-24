// Type definitions for Polyline 0.1.0
// Project: https://github.com/mapbox/polyline
// Definitions by: Arseniy Maximov <https://github.com/Kern0>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="geojson" />

interface Polyline {
  decode(string: string, precision?: number): number[][];
  encode(coordinate: number[][], precision?: number): string;
  fromGeoJSON(geojson: GeoJSON.LineString | GeoJSON.Feature<GeoJSON.LineString>, precision?: number): string;
}

declare var polyline: Polyline;

declare module "polyline" {
    export = polyline;
}
