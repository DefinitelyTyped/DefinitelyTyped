import * as GeoJSON from "geojson";

export const MercatorCRS: { type: string; properties: { href: string; type: string } };
export const GeographicCRS: { type: string; properties: { href: string; type: string } };
export function calculateBounds(geojson: GeoJSON.GeoJSON): GeoJSON.BBox;
export function calculateEnvelope(geojson: GeoJSON.GeoJSON): { x: number; y: number; w: number; h: number };
export function positionToGeographic(position: GeoJSON.Position): GeoJSON.Position;
export function positionToMercator(position: GeoJSON.Position): GeoJSON.Position;
export function toGeographic<T extends GeoJSON.GeoJSON>(geojson: T): T;
export function toMercator<T extends GeoJSON.GeoJSON>(geojson: T): T;
export function convexHull(geojson: GeoJSON.GeoJSON): GeoJSON.Polygon;
export function isConvex(geojson: GeoJSON.GeoJSON): boolean;
export function polygonContainsPoint(polygon: GeoJSON.Position[][], point: GeoJSON.Position): boolean;
export function within(geojson: GeoJSON.GeoJSON, comparisonGeojson: GeoJSON.GeoJSON): boolean;
export function contains(geojson: GeoJSON.GeoJSON, comparisonGeojson: GeoJSON.GeoJSON): boolean;
export function intersects(geojson: GeoJSON.GeoJSON, comparisonGeojson: GeoJSON.GeoJSON): boolean;
export function toCircle(
    center: GeoJSON.Position,
    radius: number,
    interpolate?: number,
): GeoJSON.Feature<GeoJSON.Polygon>;
