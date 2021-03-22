import { Extent } from '../../extent';

export function linearRingContainsExtent(flatCoordinates: number[], offset: number, end: number, stride: number, extent: Extent): boolean;
export function linearRingContainsXY(flatCoordinates: number[], offset: number, end: number, stride: number, x: number, y: number): boolean;
export function linearRingsContainsXY(flatCoordinates: number[], offset: number, ends: number[], stride: number, x: number, y: number): boolean;
export function linearRingssContainsXY(flatCoordinates: number[], offset: number, endss: number[][], stride: number, x: number, y: number): boolean;
