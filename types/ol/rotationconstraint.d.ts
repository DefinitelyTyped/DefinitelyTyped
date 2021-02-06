export type Type = (p0: number | undefined, p1?: boolean) => number | undefined;
export function createSnapToN(n: number): Type;
export function createSnapToZero(opt_tolerance?: number): Type;
export function disable(rotation: number | undefined): number | undefined;
export function none(rotation: number | undefined): number | undefined;
