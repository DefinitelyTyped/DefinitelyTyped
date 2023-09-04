import { Color, FindColorByMode, Mode, NonEmptyArray } from "./common";
import { Rgb } from "./rgb/types";

type BlendTypes =
    | "normal"
    | "multiply"
    | "screen"
    | "hard-light"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "soft-light"
    | "difference"
    | "exclusion";

type BlendingFunction = (backdrop: number, source: number) => number;

declare function blend(colors: NonEmptyArray<Color | string>, type?: BlendTypes | BlendingFunction): Rgb;
declare function blend<M extends Mode>(
    colors: Array<Color | string>,
    type: BlendTypes | BlendingFunction,
    mode: M,
): FindColorByMode<M>;

export default blend;
