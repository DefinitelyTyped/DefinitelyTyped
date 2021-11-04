import { Coordinate } from '../../coordinate';

export function deflateCoordinate(
    flatCoordinates: number[],
    offset: number,
    coordinate: Coordinate,
    stride: number,
): number;
export function deflateCoordinates(
    flatCoordinates: number[],
    offset: number,
    coordinates: Coordinate[],
    stride: number,
): number;
export function deflateCoordinatesArray(
    flatCoordinates: number[],
    offset: number,
    coordinatess: Coordinate[][],
    stride: number,
    opt_ends?: number[],
): number[];
export function deflateMultiCoordinatesArray(
    flatCoordinates: number[],
    offset: number,
    coordinatesss: Coordinate[][][],
    stride: number,
    opt_endss?: number[][],
): number[][];
