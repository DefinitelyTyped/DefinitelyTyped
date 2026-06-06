import { clampChroma, clampGamut, clampRgb, displayable, inGamut, Lch, toGamut } from "culori/fn";

const lch1 = "lch(50% 50 90)";
const lch2: Lch = { mode: "lch", l: 50, c: 50, h: 90, alpha: 1 };
const mode = "lch";
const gamutMode = "p3";

clampRgb(lch1); // $ExpectType Color | undefined
clampRgb(lch2); // $ExpectType Lch

clampChroma(lch1); // $ExpectType Color | undefined
clampChroma(lch2); // $ExpectType Lch
clampChroma(lch1, mode); // $ExpectType Color | undefined
clampChroma(lch2, mode); // $ExpectType Lch
clampChroma(lch1, mode, gamutMode); // $ExpectType Color | undefined
clampChroma(lch2, mode, gamutMode); // $ExpectType Lch

clampGamut()(lch2); // $ExpectType Rgb | undefined
clampGamut(mode)(lch1); // $ExpectType Lch | undefined
clampGamut(mode)(lch2); // $ExpectType Lch | undefined

displayable(lch1); // $ExpectType boolean
displayable(lch2); // $ExpectType boolean

inGamut(mode)(lch1); // $ExpectType boolean
inGamut(mode)(lch2); // $ExpectType boolean

toGamut("p3", mode)(lch1); // $ExpectType P3
toGamut("p3", mode)(lch2); // $ExpectType P3
toGamut("rgb", mode)(lch2); // $ExpectType Rgb
toGamut("lch", mode)(lch2); // $ExpectType Lch
toGamut("p3", mode, 0)(lch1); // $ExpectType P3
toGamut("p3", mode, 0)(lch2); // $ExpectType P3
toGamut("p3", mode, null)(lch2); // $ExpectType P3
toGamut("p3", mode, 0, 0.02)(lch1); // $ExpectType P3
toGamut("p3", mode, 0, 0.02)(lch2); // $ExpectType P3
