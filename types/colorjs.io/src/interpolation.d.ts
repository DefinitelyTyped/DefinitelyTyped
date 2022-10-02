import Color, { ColorTypes } from './color';
import ColorSpace from './space';

export type Range = ((percentage: number) => number) & {
    rangeArgs: { colors: [Color, Color]; options: Record<string, any> };
};

export function isRange(val: any): val is Range;

export interface RangeOptions {
    space?: string | ColorSpace | undefined;
    outputSpace?: string | ColorSpace | undefined;
    progression?: ((percentage: number) => number) | undefined;
    premultiplied?: boolean | undefined;
}

export function range(range: Range, options?: RangeOptions): Range;
export function range(color1: ColorTypes, color2: ColorTypes, options?: RangeOptions & Record<string, any>): Range;

export interface MixOptions {
    space?: string | ColorSpace | undefined;
    outputSpace?: string | ColorSpace | undefined;
}

export function mix(color1: ColorTypes, color2: ColorTypes, options?: MixOptions): number;
export function mix(color1: ColorTypes, color2: ColorTypes, p: number, options?: MixOptions): number;

export function steps(color1: ColorTypes | Range, color2: ColorTypes): Color[];

export function register(color: typeof Color): void;
