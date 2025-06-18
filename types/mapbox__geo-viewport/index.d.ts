export interface GeoViewport {
    center: [number, number];
    zoom: number;
}

export type BoundingBox = [number, number, number, number];

export function viewport(
    bounds: BoundingBox,
    dimensions: [number, number],
    minzoom?: number,
    maxzoom?: number,
    tileSize?: number,
    allowFloat?: boolean,
    allowAntiMeridian?: boolean,
): GeoViewport;

export function bounds(
    viewport: { lon: number; lat: number } | [number, number],
    zoom: number,
    dimensions: [number, number],
    tileSize?: number,
): BoundingBox;
