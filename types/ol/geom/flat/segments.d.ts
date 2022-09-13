import { Coordinate } from '../../coordinate';

/**
 * This function calls callback for each segment of the flat coordinates
 * array. If the callback returns a truthy value the function returns that
 * value immediately. Otherwise the function returns false.
 */
export function forEach<T>(
    flatCoordinates: number[],
    offset: number,
    end: number,
    stride: number,
    callback: (p0: Coordinate, p1: Coordinate) => T,
): T | boolean;
