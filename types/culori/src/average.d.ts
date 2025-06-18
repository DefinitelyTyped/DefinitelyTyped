import { Color, FindColorByMode, Mode, NonEmptyArray, OverridesFunction, OverridesObject } from "./common.js";
import { Rgb } from "./rgb/types.js";

declare function averageAngle(val: number[]): number;

declare function averageNumber(val: number[]): number;

declare function average(
    colors: NonEmptyArray<Color | string>,
    mode?: undefined,
    overrides?: OverridesFunction | OverridesObject<"rgb">,
): Rgb;
declare function average<M extends Mode>(
    colors: NonEmptyArray<Color | string>,
    mode: M,
    overrides?: OverridesFunction | OverridesObject<M>,
): FindColorByMode<M>;

export { average, averageAngle, averageNumber };
