// Type definitions for topojson-simplify 3.0
// Project: https://github.com/topojson/topojson-simplify
// Definitions by: denisname <https://github.com/denisname>
//                 Ricardo Mello <https://github.com/ricmello>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

import * as GeoJSON from "geojson";
import { Objects, OrNull, Topology } from "topojson-specification";

export type Triangle = [[number, number], [number, number], [number, number]];
export type TriangleWeighter = (triangle: Triangle) => number;
export type Ring = Array<[number, number]>;
export type RingWeighter = (triangle: Ring) => number;
export type Filter = (ring: Ring, interior: boolean) => boolean;

export function presimplify<T extends Objects>(topology: Topology<T>, weight?: TriangleWeighter): Topology<T>;

export function simplify<T extends Objects>(topology: Topology<T>, minWeight?: number): Topology<T>;

export function quantile(topology: Topology, p: number): number;

export function filter<K extends Objects>(topology: Topology<K>, filter: Filter): Topology<OrNull<K>>;

export function filterAttached(topology: Topology): Filter;

export function filterAttachedWeight(topology: Topology, minWeight?: number, weight?: RingWeighter): Filter;

export function filterWeight(topology: Topology, minWeight?: number, weight?: RingWeighter): Filter;

export function planarRingArea(ring: Ring): number;

export function planarTriangleArea(triangle: Triangle): number;

export function sphericalRingArea(ring: Ring, interior: boolean): number;

export function sphericalTriangleArea(triangle: Triangle): number;
