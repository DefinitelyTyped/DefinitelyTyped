import { clampChroma, clampRgb, Color, GamutMode, Mode } from "culori/fn";

declare const color: unknown;
declare const mode: unknown;
declare const rgbGamut: unknown;

clampRgb(color as string); // $ExpectType Color | undefined
clampRgb(color as Color); // $ExpectType Color

clampChroma(color as string); // $ExpectType Color | undefined
clampChroma(color as Color); // $ExpectType Color
clampChroma(color as Color, mode as Mode); // $ExpectType Color
clampChroma(color as Color, mode as Mode, rgbGamut as GamutMode); // $ExpectType Color
