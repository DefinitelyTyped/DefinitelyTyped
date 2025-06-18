/// <reference types="node" />

export interface Options {
    /** @default 50 */
    black?: number | undefined;
    /** @default N */
    rotate?: "R" | "B" | "L" | "I" | "N" | undefined;
    /** @default true */
    notrim?: boolean | undefined;
}

export interface AcsImage {
    length: number;
    rowlen: number;
    width: number;
    height: number;
    acs: string;
}

export function rgbaToACS(rgba: Buffer, width: number, options?: Options): AcsImage;

export interface ZplImage {
    length: number;
    rowlen: number;
    width: number;
    height: number;
    z64: string;
}

export function rgbaToZ64(rgba: Buffer, width: number, options?: Options): ZplImage;
