declare module 'ol/rotationconstraint' {

  export function createSnapToN(n: number): Type;

  export function createSnapToZero(opt_tolerance?: number): Type;

  export function disable(rotation: number, delta: number): number;

  export function none(rotation: number, delta: number): number;

  export type Type = ((param0: number, param1: number) => number);

}
