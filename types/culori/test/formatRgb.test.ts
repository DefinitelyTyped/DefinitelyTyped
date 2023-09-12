import { Color, formatRgb, Hsl, Rgb } from "culori/fn";

declare const color: unknown;

formatRgb(color as undefined); // $ExpectType undefined
formatRgb(color as string); // $ExpectType string | undefined
formatRgb(color as Rgb); // $ExpectType string
formatRgb(color as Hsl); // $ExpectType string
formatRgb(color as Color); // $ExpectType string
