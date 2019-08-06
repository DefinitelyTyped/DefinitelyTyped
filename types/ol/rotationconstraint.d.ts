export type Type = ((p0: number, p1: number) => number);
export function createSnapToN(n: number): Type;
export function createSnapToZero(opt_tolerance?: number): Type;
export function disable(rotation: number, delta: number): number;
export function none(rotation: number, delta: number): number;
