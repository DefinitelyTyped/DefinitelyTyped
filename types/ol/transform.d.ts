import { Coordinate } from './coordinate';
import { Pixel } from './pixel';

export type Transform = number[];
export function apply(transform: Transform, coordinate: Coordinate | Pixel): Coordinate | Pixel;
export function compose(
    transform: Transform,
    dx1: number,
    dy1: number,
    sx: number,
    sy: number,
    angle: number,
    dx2: number,
    dy2: number,
): Transform;
export function create(): Transform;
export function determinant(mat: Transform): number;
export function invert(source: Transform): Transform;
export function makeInverse(target: Transform, source: Transform): Transform;
export function makeScale(target: Transform, x: number, y: number): Transform;
export function multiply(transform1: Transform, transform2: Transform): Transform;
export function reset(transform: Transform): Transform;
export function rotate(transform: Transform, angle: number): Transform;
export function scale(transform: Transform, x: number, y: number): Transform;
export function set(transform: Transform, a: number, b: number, c: number, d: number, e: number, f: number): Transform;
export function setFromArray(transform1: Transform, transform2: Transform): Transform;
export function toString(mat: Transform): string;
export function translate(transform: Transform, dx: number, dy: number): Transform;
