import { Coordinate } from '../../coordinate';

export function forEach<T, S>(flatCoordinates: number[], offset: number, end: number, stride: number, callback: ((this: S, p1: Coordinate, p2: Coordinate) => T), opt_this?: S): T | boolean;
