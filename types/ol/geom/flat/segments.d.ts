import { Coordinate } from '../../coordinate';

export function forEach<T>(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    callback: (p0: Coordinate, p1: Coordinate) => T,
): T | boolean;
