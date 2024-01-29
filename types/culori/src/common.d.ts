import { A98 } from "./a98/types";
import { Cubehelix } from "./cubehelix/types";
import { Dlab } from "./dlab/types";
import { Dlch } from "./dlch/types";
import { Hsi } from "./hsi/types";
import { Hsl } from "./hsl/types";
import { Hsv } from "./hsv/types";
import { Hwb } from "./hwb/types";
import { Jab } from "./jab/types";
import { Jch } from "./jch/types";
import { Lab } from "./lab/types";
import { Lab65 } from "./lab65/types";
import { Lch } from "./lch/types";
import { Lch65 } from "./lch65/types";
import { Lchuv } from "./lchuv/types";
import { Lrgb } from "./lrgb/types";
import { Luv } from "./luv/types";
import { Okhsl } from "./okhsl/types";
import { Okhsv } from "./okhsv/types";
import { Oklab } from "./oklab/types";
import { Oklch } from "./oklch/types";
import { P3 } from "./p3/types";
import { Prophoto } from "./prophoto/types";
import { Rec2020 } from "./rec2020/types";
import { Rgb } from "./rgb/types";
import { Xyz50 } from "./xyz50/types";
import { Xyz65 } from "./xyz65/types";
import { Yiq } from "./yiq/types";

export type Color =
    | A98
    | Cubehelix
    | Dlab
    | Dlch
    | Hsi
    | Hsl
    | Hsv
    | Hwb
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
    | Xyz50
    | Xyz65
    | Yiq;

export type NonEmptyArray<T> = [T, ...T[]];

export type Mode = Color["mode"];

export type FindColorByMode<M extends Mode, C extends Color = Color> = C extends { mode: M } ? C : never;

export type TakeColorChannels<M extends Mode> = Omit<FindColorByMode<M>, "mode">;

export type OverridesFunction = (values: number[], channel: string) => number;

export type OverridesObject<M extends Mode> = Partial<
    {
        [P in keyof TakeColorChannels<M>]: OverridesFunction;
    }
>;
