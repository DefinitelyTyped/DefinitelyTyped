export function linearRingIsClockwise(flatCoordinates: number[], offset: number, end: number, stride: number): boolean;
export function linearRingIsOriented(flatCoordinates: number[], offset: number, ends: number[], stride: number, opt_right?: boolean): boolean;
export function linearRingsAreOriented(flatCoordinates: number[], offset: number, endss: number[][], stride: number, opt_right?: boolean): boolean;
export function orientLinearRings(flatCoordinates: number[], offset: number, ends: number[], stride: number, opt_right?: boolean): number;
export function orientLinearRingsArray(flatCoordinates: number[], offset: number, endss: number[][], stride: number, opt_right?: boolean): number;
