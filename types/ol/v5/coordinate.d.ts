import Circle from './geom/Circle';

export type Coordinate = number[];
export type CoordinateFormat = (p0: Coordinate | undefined) => string;
export function add(coordinate: Coordinate, delta: Coordinate): Coordinate;
export function closestOnCircle(coordinate: Coordinate, circle: Circle): Coordinate;
export function closestOnSegment(coordinate: Coordinate, segment: Coordinate[]): Coordinate;
export function createStringXY(opt_fractionDigits?: number): CoordinateFormat;
export function degreesToStringHDMS(hemispheres: string, degrees: number, opt_fractionDigits?: number): string;
export function distance(coord1: Coordinate, coord2: Coordinate): number;
export function equals(coordinate1: Coordinate, coordinate2: Coordinate): boolean;
export function format(coordinate: Coordinate, template: string, opt_fractionDigits?: number): string;
export function rotate(coordinate: Coordinate, angle: number): Coordinate;
export function scale(coordinate: Coordinate, scale: number): Coordinate;
export function squaredDistance(coord1: Coordinate, coord2: Coordinate): number;
export function squaredDistanceToSegment(coordinate: Coordinate, segment: Coordinate[]): number;
export function toStringHDMS(coordinate: Coordinate, opt_fractionDigits?: number): string;
export function toStringXY(coordinate: Coordinate, opt_fractionDigits?: number): string;
