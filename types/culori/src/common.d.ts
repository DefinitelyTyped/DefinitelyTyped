import { A98 } from "./a98/types.js";
import { Cubehelix } from "./cubehelix/types.js";
import { Dlab } from "./dlab/types.js";
import { Dlch } from "./dlch/types.js";
import { Hsi } from "./hsi/types.js";
import { Hsl } from "./hsl/types.js";
import { Hsv } from "./hsv/types.js";
import { Hwb } from "./hwb/types.js";
import { Itp } from "./itp/types.js";
import { Jab } from "./jab/types.js";
import { Jch } from "./jch/types.js";
import { Lab } from "./lab/types.js";
import { Lab65 } from "./lab65/types.js";
import { Lch } from "./lch/types.js";
import { Lch65 } from "./lch65/types.js";
import { Lchuv } from "./lchuv/types.js";
import { Lrgb } from "./lrgb/types.js";
import { Luv } from "./luv/types.js";
import { Okhsl } from "./okhsl/types.js";
import { Okhsv } from "./okhsv/types.js";
import { Oklab } from "./oklab/types.js";
import { Oklch } from "./oklch/types.js";
import { P3 } from "./p3/types.js";
import { Prophoto } from "./prophoto/types.js";
import { Rec2020 } from "./rec2020/types.js";
import { Rgb } from "./rgb/types.js";
import { Xyb } from "./xyb/types.js";
import { Xyz50 } from "./xyz50/types.js";
import { Xyz65 } from "./xyz65/types.js";
import { Yiq } from "./yiq/types.js";

export type Color =
    | A98
    | Cubehelix
    | Dlab
    | Dlch
    | Hsi
    | Hsl
    | Hsv
    | Hwb
    | Itp
    | Jab
    | Jch
    | Lab
    | Lab65
    | Lch
    | Lch65
    | Lchuv
    | Lrgb
    | Luv
    | Okhsl
    | Okhsv
    | Oklab
    | Oklch
    | P3
    | Prophoto
    | Rec2020
    | Rgb
    | Xyb
    | Xyz50
    | Xyz65
    | Yiq;

export type Gamut =
    | P3
    | Rec2020
    | Rgb;

export type NonEmptyArray<T> = [T, ...T[]];

export type Mode = Color["mode"];

export type GamutMode = Gamut["mode"];

export type FindColorByMode<M extends Mode, C extends Color = Color> = C extends { mode: M } ? C : never;

export type TakeColorChannels<M extends Mode> = Omit<FindColorByMode<M>, "mode">;

export type OverridesFunction = (values: number[], channel: string) => number;

export type OverridesObject<M extends Mode> = Partial<
    {
        [P in keyof TakeColorChannels<M>]: OverridesFunction;
    }
>;
