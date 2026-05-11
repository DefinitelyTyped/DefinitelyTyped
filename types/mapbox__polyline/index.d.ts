/// <reference types="geojson" />

export function decode(string: string, precision?: number): Array<[number, number]>;
export function encode(coordinates: Array<[number, number]>, precision?: number): string;
export function fromGeoJSON(
    geojson: GeoJSON.LineString | GeoJSON.Feature<GeoJSON.LineString>,
    precision?: number,
): string;
export function toGeoJSON(string: string, precision?: number): GeoJSON.LineString;

export as namespace polyline;
