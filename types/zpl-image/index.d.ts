// Type definitions for zpl-image 0.2
// Project: https://github.com/metafloor/zpl-image
// Definitions by: James Lismore <https://github.com/jlismore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Options {
    /** @default 50 */
    black?: number;
    /** @default N */
    rotate?: 'R' | 'B' | 'L' | 'I' | 'N';
    /** @default true */
    notrim?: boolean;
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
