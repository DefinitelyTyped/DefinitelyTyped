import { Coordinate } from '../../coordinate';

export function forEach<T, S>(flatCoordinates: number[], offset: number, end: number, stride: number, callback: ((this: S, param1: Coordinate, param2: Coordinate) => T), opt_this?: S): T | boolean;
