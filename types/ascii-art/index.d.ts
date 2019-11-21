// Type definitions for ascii-art 1.4
// Project: https://github.com/khrome/ascii-art
// Definitions by: Lukas Elmer <https://github.com/lukaselmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type StyleType = (text: string, style?: string, close?: boolean) => Art;
export type FontType = ((text: string, font?: string, styleOrCallback?: string | Cb, callback?: Cb) => Art);
export type ImageType = (options: object, callback?: Cb) => Art;
export type TableType = (options: object, callback?: Cb) => Art;
export type ArtworkType = (options: object, callback?: Cb) => Art;
export type LinesType = (...options: any[]) => Art;
export type OverlayType = (...options: any[]) => Art;
export type JoinType = (...options: any[]) => Art;
export type StringsType = (...options: any[]) => Art;

export const style: StyleType;
export const font: FontType;
export const image: ImageType;
export const table: TableType;
export const artwork: ArtworkType;
export const lines: LinesType;
export const overlay: OverlayType;
export const join: JoinType;
export const strings: StringsType;
export const Figlet: any;
export const Image: any;

export interface Art {
    style: StyleType;
    font: FontType;
    image: ImageType;
    table: TableType;
    artwork: ArtworkType;
    lines: LinesType;
    overlay: OverlayType;
    join: JoinType;
    working: boolean;

    toPromise: (() => Promise<string>);
}

export type Cb = (result: string) => void;
