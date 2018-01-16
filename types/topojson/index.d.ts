// Type definitions for topojson 3.0
// Project: https://github.com/topojson/topojson
// Definitions by: Ricardo Mello <https://github.com/ricardo-mello>
//                 Zhutian Chen  <https://github.com/chenzhutian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function bbox(topology: any): any;

export function feature(topology: any, o: any): { features: any[]; type: string };

export function filter(topology: any, filter: any): any;

export function filterAttached(topology: any): any;

export function filterAttachedWeight(topology: any, minWeight: any, weight: any): any;

export function filterWeight(topology: any, minWeight: any, weight: any): any;

export function merge(topology: any, ...args: any[]): { type: any, coordinates: any[] };

export function mergeArcs(topology: any, objects: any): any;

export function mesh(topology: any, ...args: any[]): { type: any; coordinates: any[]; };

export function meshArcs(topology: any, object$$1: any, filter: any, ...args: any[]): { type: any; coordinates: any[]; };

export function neighbors(objects: any): any[];

export function planarRingArea(ring: any): any;

export function planarTriangleArea(triangle: any): any;

export function presimplify(topology: any, weight: any): any[];

export function quantile(topology: any, p: any): any;

export function quantize(topology: any, transform: any): any;

export function simplify(topology: any, minWeight: any): any;

export function sphericalRingArea(ring: any, interior: any): any;

export function sphericalTriangleArea(t: any): any;

export function topology(objects: any, quantization: any): any;

export function transform(transform: any): any;

export function untransform(transform: any): any;
