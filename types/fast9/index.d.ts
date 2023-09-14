// Type definitions for fast9 0.0
// Project: https://github.com/m320ng/fast9#readme
// Definitions by: Juan José González Giraldo <https://github.com/JuanJoseGonGi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function detect(im: Uint8Array, width: number, height: number, threshold: number, nonmax: boolean): Corner[];
export function fast9_detect(im: Uint8Array, xsize: number, ysize: number, b: number): Corner[];
export function fast9_score(im: Uint8Array, xsize: number, ysize: number, corners: Corner[], b: number): number[];
export function nonmax_suppression(corners: Corner[], scores: number[]): Corner[];

export interface Corner {
    x: number;
    y: number;
    score: number;
}
