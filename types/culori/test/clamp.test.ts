import { clampChroma, clampRgb, Lch } from "culori/fn";

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
