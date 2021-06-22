/*
 * @format
 */

import { Format, Dp } from '.';

type Precision = 1 | 2 | 3;

// tslint:disable-next-line no-unnecessary-class
declare class Dms {
    static get separator(): string;
    static set separator(char: string);
    static parse(dms: string | number): number;
    static toDms(deg: number, format?: Format, dp?: Dp): string;
    static toLat(deg: number, format?: Format, dp?: Dp): string;
    static toLon(deg: number, format?: Format, dp?: Dp): string;
    static toBrng(deg: number, format?: Format, dp?: Dp): string;
    static fromLocale(str: string): string;
    static toLocale(str: string): string;
    static compassPoint(bearing: number, precision?: Precision): string;
    static wrap360(degrees: number): string;
    static wrap90(degrees: number): string;
}

export default Dms;
