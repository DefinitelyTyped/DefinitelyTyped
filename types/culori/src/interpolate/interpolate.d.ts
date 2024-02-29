import { Color, FindColorByMode, Mode, OverridesObject, TakeColorChannels } from "../common";
import { MapFn } from "../map";

type ColorPosition = [Color | string, number];
type Position = number;
type PositionFn = (P: number) => number;
type ColorsParameter = Array<Color | string | Position | ColorPosition | PositionFn>;

type Interpolator<M extends Mode> = (t: number) => FindColorByMode<M>;

type OverridesWithFixupFnsForChannels<M extends Mode> = {
    [P in keyof TakeColorChannels<M>]: {
        fixup?: (arr: number[]) => number[];
    };
};

type OverridesWithUseFnsForChannels<M extends Mode> = {
    [P in keyof TakeColorChannels<M>]: {
        use?: Interpolator<M>;
    };
};

type OverridesFunction = (values: number[]) => number;

type OverridesParameter<M extends Mode> =
    | OverridesWithFixupFnsForChannels<M>
    | OverridesFunction
    | OverridesObject<M>
    | OverridesWithUseFnsForChannels<M>;

declare function interpolate<M extends Mode = "rgb">(
    colors: ColorsParameter,
    mode?: M,
    overrides?: OverridesParameter<M>,
): Interpolator<M>;

declare function interpolateWith<M extends Mode>(
    premap: MapFn<M>,
    postmap: MapFn<M>,
): (colors: ColorsParameter, mode?: M, overrides?: OverridesParameter<M>) => Interpolator<M>;

declare function interpolateWithPremultipliedAlpha<M extends Mode>(
    colors: ColorsParameter,
    mode?: M,
    overrides?: OverridesParameter<M>,
): Interpolator<M>;

export { interpolate, interpolateWith, interpolateWithPremultipliedAlpha };
