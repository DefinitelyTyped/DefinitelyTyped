// Type definitions for @mapbox/polyline 1.0
// Project: https://github.com/mapbox/polyline
// Definitions by: Arseniy Maximov <https://github.com/Kern0>
//                 Marko Klopets <https://github.com/mklopets>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="geojson" />

export function decode(string: string, precision?: number): number[][];
export function encode(coordinates: number[][], precision?: number): string;
export function fromGeoJSON(geojson: GeoJSON.LineString | GeoJSON.Feature<GeoJSON.LineString>, precision?: number): string;
export function toGeoJSON(string: string, precision?: number): GeoJSON.LineString;

export as namespace polyline;
