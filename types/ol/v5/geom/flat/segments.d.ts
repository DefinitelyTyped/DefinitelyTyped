import { Coordinate } from '../../coordinate';

export function forEach<T, S>(flatCoordinates: number[], offset: number, end: number, stride: number, callback: (this: S, p0: Coordinate, p1: Coordinate) => T, opt_this?: S): T | boolean;
