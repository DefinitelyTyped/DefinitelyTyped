import { Extent } from '../../extent';

export function intersectsLineString(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    extent: Extent,
): boolean;
export function intersectsLineStringArray(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    extent: Extent,
): boolean;
export function intersectsLinearRing(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    extent: Extent,
): boolean;
export function intersectsLinearRingArray(
    flatCoordinates: number[],
    offset: number,
    ends: number[],
    stride: number,
    extent: Extent,
): boolean;
export function intersectsLinearRingMultiArray(
    flatCoordinates: number[],
    offset: number,
    endss: number[][],
    stride: number,
    extent: Extent,
): boolean;
