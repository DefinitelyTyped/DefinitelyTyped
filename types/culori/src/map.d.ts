import { Color, FindColorByMode, Mode } from "./common";
import { Rgb } from "./rgb/types";

type Channel = string;

export type MapFn<M extends Mode> = (
    v: number,
    ch: string,
    conv_color: M extends Mode ? FindColorByMode<M> : Color,
    mode: M,
) => number;

interface ColorToRgbMapper {
    (color: Color): Rgb;
    (color: string): Rgb | undefined;
}

export interface ColorToSameColorMapper {
    <M extends Mode>(color: FindColorByMode<M>): FindColorByMode<M>;
    (color: string): Color | undefined;
}

interface ColorToPredefinedColorMapper<M extends Mode> {
    (color: Color): FindColorByMode<M>;
    (color: string): FindColorByMode<M> | undefined;
}

declare function mapper(fn: MapFn<"rgb">, mode?: undefined, preserve_mode?: false): ColorToRgbMapper;
declare function mapper(fn: MapFn<"rgb">, mode: undefined, preserve_mode: true): ColorToSameColorMapper;
declare function mapper<M extends Mode>(fn: MapFn<M>, mode: M, preserve_mode?: false): ColorToPredefinedColorMapper<M>;
declare function mapper<M extends Mode>(fn: MapFn<M>, mode: M, preserve_mode: true): ColorToSameColorMapper;

declare function mapAlphaMultiply(v: number, ch: Channel, c: Color): number;

declare function mapAlphaDivide(v: number, ch: Channel, c: Color): number;

declare function mapTransferLinear(slope?: number, intercept?: number): (v: number, ch: Channel) => number;

declare function mapTransferGamma(
    amplitude?: number,
    exponent?: number,
    offset?: number,
): (v: number, ch: Channel) => number;

export { mapAlphaDivide, mapAlphaMultiply, mapper, mapTransferGamma, mapTransferLinear };
