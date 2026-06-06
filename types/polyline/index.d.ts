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
