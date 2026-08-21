import { Color, FindColorByMode, Mode, OverridesObject, TakeColorChannels } from "../common.js";
import { MapFn } from "../map.js";

type ColorPosition = [Color | string, number];
type Position = number;
type PositionFn = (P: number) => number;
type ColorsParameter = Array<Color | string | Position | ColorPosition | PositionFn>;

type Interpolator<M extends Mode> = (t: number) => FindColorByMode<M>;

type InterpolateOverridesWithFixupFnsForChannels<M extends Mode> = {
    [P in keyof TakeColorChannels<M>]: {
        fixup?: (arr: number[]) => number[];
    };
};

type InterpolateOverridesWithUseFnsForChannels<M extends Mode> = {
    [P in keyof TakeColorChannels<M>]: {
        use?: Interpolator<M>;
    };
};

type InterpolateOverridesFunction = (values: number[]) => number;

type InterpolateOverridesParameter<M extends Mode> =
    | InterpolateOverridesWithFixupFnsForChannels<M>
    | InterpolateOverridesFunction
    | OverridesObject<M>
    | InterpolateOverridesWithUseFnsForChannels<M>;

declare function interpolate<M extends Mode = "rgb">(
    colors: ColorsParameter,
    mode?: M,
    overrides?: InterpolateOverridesParameter<M>,
): Interpolator<M>;

declare function interpolateWith<M extends Mode>(
    premap: MapFn<M>,
    postmap?: MapFn<M>,
): (colors: ColorsParameter, mode?: M, overrides?: InterpolateOverridesParameter<M>) => Interpolator<M>;

declare function interpolateWithPremultipliedAlpha<M extends Mode>(
    colors: ColorsParameter,
    mode?: M,
    overrides?: InterpolateOverridesParameter<M>,
): Interpolator<M>;

export { interpolate, interpolateWith, interpolateWithPremultipliedAlpha };
