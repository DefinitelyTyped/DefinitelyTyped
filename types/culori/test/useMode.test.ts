import { Color, modeP3, useMode } from "culori/fn";

declare const color: unknown;

const p3 = useMode(modeP3);
p3(color as string); // $ExpectType P3 | undefined
p3(color as Color); // $ExpectType P3
