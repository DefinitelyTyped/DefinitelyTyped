export function detect(im: Uint8Array, width: number, height: number, threshold: number, nonmax: boolean): Corner[];
export function fast9_detect(im: Uint8Array, xsize: number, ysize: number, b: number): Corner[];
export function fast9_score(im: Uint8Array, xsize: number, ysize: number, corners: Corner[], b: number): number[];
export function nonmax_suppression(corners: Corner[], scores: number[]): Corner[];

export interface Corner {
    x: number;
    y: number;
    score: number;
}
