export type Type = ((p0: number, p1: number, p2: number) => number);
export function createSnapToPower(power: number, maxResolution: number, opt_maxLevel?: number): Type;
export function createSnapToResolutions(resolutions: number[]): Type;
