import { Bounds, Coords, Point, Size } from '.';

interface Tile extends Point {
    zoom: number;
}

export function convertNeSwToNwSe(boundCorder: { ne: Coords; sw: Coords }): { nw: Coords; se: Coords };

export function convertNwSeToNeSw(boundCorder: { nw: Coords; se: Coords }): { ne: Coords; sw: Coords };

export function fitBounds(
    bounds: Bounds,
    size: Size,
): { center: { metersPerLatDegree: number; metersPerLngDegree: number }; zoom: number; newBounds: Bounds };

export function meters2ScreenPixels(meters: number, coords: Coords, zoom: number): { w: number; h: number };

export function tile2LatLng(point: Point, zoom: number): { coords: Coords };

export function latLng2Tile(coords: Coords, zoom: number): { point: Point };

export function getTilesIds(start: { from: number; to: number }, zoom: number): Tile[];
