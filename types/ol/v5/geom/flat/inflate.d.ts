import { Coordinate } from '../../coordinate';

export function inflateCoordinates(flatCoordinates: number[], offset: number, end: number, stride: number, opt_coordinates?: Coordinate[]): Coordinate[];
export function inflateCoordinatesArray(flatCoordinates: number[], offset: number, ends: number[], stride: number, opt_coordinatess?: Coordinate[][]): Coordinate[][];
export function inflateMultiCoordinatesArray(flatCoordinates: number[], offset: number, endss: number[][], stride: number, opt_coordinatesss?: Coordinate[][][]): Coordinate[][][];
