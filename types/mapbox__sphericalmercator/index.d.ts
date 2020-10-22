// Type definitions for @mapbox/sphericalmercator 1.1
// Project: https://github.com/mapbox/sphericalmercator, https://github.com/mapbox/node-sphericalmercator
// Definitions by: Nicholas Husher <https://github.com/nhusher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace SphericalMercator;

interface XYBounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

export {};

type LatLngPoint = [number, number];
type XYPoint = [number, number];
type BoundingBox = [number, number, number, number];
type Projection = 'WGS84' | '900913';

declare class SphericalMercator {
    constructor(options: { size?: number })
    px(ll: LatLngPoint, zoom: number): XYPoint;
    ll(px: XYPoint, zoom: number): LatLngPoint;
    bbox(x: number, y: number, zoom: number, tms_style?: boolean, srs?: Projection): BoundingBox;
    xyz(bbox: BoundingBox, zoom: number, tms_style?: boolean, srs?: Projection): XYBounds;
    convert(bbox: BoundingBox, to?: Projection): BoundingBox;
    forward(ll: LatLngPoint): XYPoint;
    inverse(xy: XYPoint): LatLngPoint;
}

export = SphericalMercator;
